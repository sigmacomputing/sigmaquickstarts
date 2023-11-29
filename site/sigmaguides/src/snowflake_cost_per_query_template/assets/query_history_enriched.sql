/*************************************************************************************
*  
*   Name: query_history_enriched.sql
*   Dev:  Oscar Bashaw (setup and incremental materialization), Select.dev (wrote the query_history_enriched calculation)
*   Date: Nov 22 2023
*   Summary: create query_history_enriched table and set up incremental materialization (inserts)
*   Desc: This series of commands will do the following:
*           1. Set session variables
*           2. Create 2 helper UDFs 
*           3. Create the query_history_enriched table that includes all queries started on or before yesterday
*           4. Grant the role used in your Sigma connection access to the query_history_enriched table
*           5. Create a stored procedure that enriches queries not yet in the query_history_enriched table (and 
*              that were run on or before the most recently completed day) and insert them into query_history_enriched
*           6. Create and start a task to call that stored procedure using the specified CRON string (Once per day Mon-Fri at 3am PT)
*          
*           
*   Prereqs: To run this script the following is required:
*           - a role with access to the database called SNOWFLAKE (usage data)
*           - the ability to create a table, function, stored procedure and task on the specified database and schema
*************************************************************************************/


---------------------------------------------------------------------------------------------------------
-- 1. Set session variables
---------------------------------------------------------------------------------------------------------
set materialization_role_name = 'name of role used while running this script';
set database_name =  'name of database where query_history_enriched will live';
set schema_name =  'name of schema where query_history_enriched will live';
set sigma_role_name = 'name of role used in Sigma connection that you will use to access this table';

-- recommend a Medium warehouse, unless your query_history table is small and daily query volumes are low.
set materialization_warehouse_name = 'name of the warehouse you want to use';

-- dont move earlier than 3 am on a given day; there is some latency for Snowflake usage data
set task_call_usp_materialize_query_history_enriched_CRON = 'USING CRON 0 3 * * Mon-Fri America/Los_Angeles';

/*************************************************************************************
*
*   DO NOT MODIFY BELOW THIS SECTION
*
*************************************************************************************/
use role identifier($materialization_role_name);
use warehouse identifier($materialization_warehouse_name);
use database identifier($database_name);
use schema identifier($schema_name);


---------------------------------------------------------------------------------------------------------
-- 2. Create 2 helper UDFs
---------------------------------------------------------------------------------------------------------
create or replace function dbt_snowflake_monitoring_regexp_replace(subject text, pattern text, replacement text)
returns string
language javascript
comment = 'Created by dbt-snowflake-monitoring dbt package.'
as
$$
    const p = SUBJECT;
    let regex = new RegExp(PATTERN, 'g')
    return p.replace(regex, REPLACEMENT);
$$
;

create or replace function merge_objects(obj1 variant, obj2 variant)
returns variant
language javascript
comment = 'Created by dbt-snowflake-monitoring dbt package.'
as
$$
    return x = Object.assign(OBJ1, OBJ2)
$$
;

---------------------------------------------------------------------------------------------------------
-- 3. Create the query_history_enriched table that includes all queries started on or before yesterday
---------------------------------------------------------------------------------------------------------
create or replace table query_history_enriched as (
with
query_history as (
    select
        *,

        -- this removes comments enclosed by /* <comment text> */ and single line comments starting with -- and either ending with a new line or end of string
        dbt_snowflake_monitoring_regexp_replace(query_text, $$(/\*(.|\n|\r)*?\*/)|(--.*$)|(--.*(\n|\r))$$, '') as query_text_no_comments,

        try_parse_json(regexp_substr(query_text, '/\\*\\s({"app":\\s"dbt".*})\\s\\*/', 1, 1, 'ie')) as _dbt_json_comment_meta,
        case
            when try_parse_json(query_tag)['dbt_snowflake_query_tags_version'] is not null then try_parse_json(query_tag)
        end as _dbt_json_query_tag_meta,
        case
            when _dbt_json_comment_meta is not null or _dbt_json_query_tag_meta is not null then
                merge_objects(coalesce(_dbt_json_comment_meta, { }), coalesce(_dbt_json_query_tag_meta, { }))
        end as dbt_metadata

    from snowflake.account_usage.query_history 
    where end_time < date_trunc(day, getdate())   
),

dates_base as (
    select date_day as date from (    
        with rawdata as (
            with p as (
                select 0 as generated_number union all select 1
            ), 
            unioned as (
                select
                p0.generated_number * power(2, 0)
                 + 
                p1.generated_number * power(2, 1)
                 + 
                p2.generated_number * power(2, 2)
                 + 
                p3.generated_number * power(2, 3)
                 + 
                p4.generated_number * power(2, 4)
                 + 
                p5.generated_number * power(2, 5)
                 + 
                p6.generated_number * power(2, 6)
                 + 
                p7.generated_number * power(2, 7)
                 + 
                p8.generated_number * power(2, 8)
                 + 
                p9.generated_number * power(2, 9)
                 + 
                p10.generated_number * power(2, 10)
                + 1
                as generated_number
                from
                p as p0
                 cross join 
                p as p1
                 cross join 
                p as p2
                 cross join 
                p as p3
                 cross join 
                p as p4
                 cross join 
                p as p5
                 cross join 
                p as p6
                 cross join 
                p as p7
                 cross join 
                p as p8
                 cross join 
                p as p9
                 cross join 
                p as p10
            )
            select *
            from unioned
            where generated_number <= 2000
            order by generated_number
        ),

        all_periods as (

            select (
            dateadd(
                day,
                row_number() over (order by 1) - 1,
                '2018-01-01'
                )
            ) as date_day
            from rawdata

        ),

        filtered as (
            select *
            from all_periods
            where date_day <= dateadd(day, 1, current_date)
        )

        select * from filtered


    )
),

rate_sheet_daily_base as (
    select
        date,
        usage_type,
        currency,
        effective_rate,
        service_type
    from snowflake.organization_usage.rate_sheet_daily
    where
        account_locator = current_account()
),

remaining_balance_daily_without_contract_view as (
    select
        date,
        organization_name,
        currency,
        free_usage_balance,
        capacity_balance,
        on_demand_consumption_balance,
        rollover_balance
    from snowflake.organization_usage.remaining_balance_daily

    qualify row_number() over (partition by date order by contract_number desc) = 1
),

stop_thresholds as (
    select min(date) as start_date
    from rate_sheet_daily_base

    union all

    select min(date) as start_date
    from remaining_balance_daily_without_contract_view
),

date_range as (
    select
        max(start_date) as start_date,
        current_date as end_date
    from stop_thresholds
),

remaining_balance_daily as (
    select
        date,
        free_usage_balance + capacity_balance + on_demand_consumption_balance + rollover_balance as remaining_balance,
        remaining_balance < 0 as is_account_in_overage
    from remaining_balance_daily_without_contract_view
),

latest_remaining_balance_daily as (
    select
        date,
        remaining_balance,
        is_account_in_overage
    from remaining_balance_daily
    qualify row_number() over (order by date desc) = 1
),

rate_sheet_daily as (
    select rate_sheet_daily_base.*
    from rate_sheet_daily_base
    inner join date_range
        on rate_sheet_daily_base.date between date_range.start_date and date_range.end_date
),

rates_date_range_w_usage_types as (
    select
        date_range.start_date,
        date_range.end_date,
        usage_types.usage_type
    from date_range
    cross join (select distinct usage_type from rate_sheet_daily) as usage_types
),

base as (
    select
        db.date,
        dr.usage_type
    from dates_base as db
    inner join rates_date_range_w_usage_types as dr
        on db.date between dr.start_date and dr.end_date
),

rates_w_overage as (
    select
        base.date,
        base.usage_type,
        coalesce(
            rate_sheet_daily.service_type,
            lag(rate_sheet_daily.service_type) ignore nulls over (partition by base.usage_type order by base.date),
            lead(rate_sheet_daily.service_type) ignore nulls over (partition by base.usage_type order by base.date)
        ) as service_type,
        coalesce(
            rate_sheet_daily.effective_rate,
            lag(rate_sheet_daily.effective_rate) ignore nulls over (partition by base.usage_type order by base.date),
            lead(rate_sheet_daily.effective_rate) ignore nulls over (partition by base.usage_type order by base.date)
        ) as effective_rate,
        coalesce(
            rate_sheet_daily.currency,
            lag(rate_sheet_daily.currency) ignore nulls over (partition by base.usage_type order by base.date),
            lead(rate_sheet_daily.currency) ignore nulls over (partition by base.usage_type order by base.date)
        ) as currency,
        base.usage_type like 'overage-%' as is_overage_rate,
        replace(base.usage_type, 'overage-', '') as associated_usage_type,
        coalesce(remaining_balance_daily.is_account_in_overage, latest_remaining_balance_daily.is_account_in_overage, false) as _is_account_in_overage,
        case
            when _is_account_in_overage and is_overage_rate then 1
            when not _is_account_in_overage and not is_overage_rate then 1
            else 0
        end as rate_priority

    from base
    left join latest_remaining_balance_daily on latest_remaining_balance_daily.date is not null
    left join remaining_balance_daily
        on base.date = remaining_balance_daily.date
    left join rate_sheet_daily
        on base.date = rate_sheet_daily.date
            and base.usage_type = rate_sheet_daily.usage_type
),

rates as (
    select
        date,
        usage_type,
        associated_usage_type,
        service_type,
        effective_rate,
        currency,
        is_overage_rate
    from rates_w_overage
    qualify row_number() over (partition by date, service_type, associated_usage_type order by rate_priority desc) = 1
),

daily_rates as (
    select
        date,
        associated_usage_type as usage_type,
        service_type,
        effective_rate,
        currency,
        is_overage_rate,
        row_number() over (partition by service_type, associated_usage_type order by date desc) = 1 as is_latest_rate
    from rates
),

stop_threshold as (
    select max(end_time) as latest_ts
    from snowflake.account_usage.warehouse_metering_history
),

filtered_queries as (
    select
        query_id,
        query_text as original_query_text,
        credits_used_cloud_services,
        warehouse_id,
        warehouse_size is not null as ran_on_warehouse,
        timeadd(
            'millisecond',
            queued_overload_time + compilation_time
            + queued_provisioning_time + queued_repair_time
            + list_external_files_time,
            start_time
        ) as execution_start_time,
        start_time,
        end_time
    from snowflake.account_usage.query_history
    where end_time <= (select latest_ts from stop_threshold)
    and start_time < date_trunc(day, getdate())
),

hours_list as (
    select
        dateadd(
            'hour',
            '-' || row_number() over (order by seq4() asc),
            dateadd('day', '+1', current_date::timestamp_tz)
        ) as hour_start,
        dateadd('hour', '+1', hour_start) as hour_end
    from table(generator(rowcount => (24 * 730)))
),

-- 1 row per hour a query ran
query_hours as (
    select
        hours_list.hour_start,
        hours_list.hour_end,
        queries.*
    from hours_list
    inner join filtered_queries as queries
        on hours_list.hour_start >= date_trunc('hour', queries.execution_start_time)
            and hours_list.hour_start < queries.end_time
            and queries.ran_on_warehouse
),

query_seconds_per_hour as (
    select
        *,
        datediff('millisecond', greatest(execution_start_time, hour_start), least(end_time, hour_end)) as num_milliseconds_query_ran,
        sum(num_milliseconds_query_ran) over (partition by warehouse_id, hour_start) as total_query_milliseconds_in_hour,
        div0(num_milliseconds_query_ran, total_query_milliseconds_in_hour) as fraction_of_total_query_time_in_hour,
        hour_start as hour
    from query_hours
),

credits_billed_hourly as (
    select
        start_time as hour,
        warehouse_id,
        credits_used_compute,
        credits_used_cloud_services
    from snowflake.account_usage.warehouse_metering_history
),

query_cost as (
    select
        query_seconds_per_hour.*,
        credits_billed_hourly.credits_used_compute * daily_rates.effective_rate as actual_warehouse_cost,
        credits_billed_hourly.credits_used_compute * query_seconds_per_hour.fraction_of_total_query_time_in_hour * coalesce(daily_rates.effective_rate, current_rates.effective_rate) as allocated_compute_cost_in_hour
    from query_seconds_per_hour
    inner join credits_billed_hourly
        on query_seconds_per_hour.warehouse_id = credits_billed_hourly.warehouse_id
            and query_seconds_per_hour.hour = credits_billed_hourly.hour
    left join daily_rates
        on date(query_seconds_per_hour.start_time) = daily_rates.date
            and daily_rates.service_type = 'COMPUTE'
            and daily_rates.usage_type = 'compute'
    inner join daily_rates as current_rates
        on current_rates.is_latest_rate
            and current_rates.service_type = 'COMPUTE'
            and current_rates.usage_type = 'compute'
),

cost_per_query as (
    select
        query_id,
        any_value(start_time) as start_time,
        any_value(end_time) as end_time,
        any_value(execution_start_time) as execution_start_time,
        sum(allocated_compute_cost_in_hour) as compute_cost,
        any_value(credits_used_cloud_services) as credits_used_cloud_services,
        any_value(ran_on_warehouse) as ran_on_warehouse
    from query_cost
    group by 1
),

credits_billed_daily as (
    select
        date(hour) as date,
        sum(credits_used_compute) as daily_credits_used_compute,
        sum(credits_used_cloud_services) as daily_credits_used_cloud_services,
        greatest(daily_credits_used_cloud_services - daily_credits_used_compute * 0.1, 0) as daily_billable_cloud_services
    from credits_billed_hourly
    group by 1
),

all_queries as (
    select
        query_id,
        start_time,
        end_time,
        execution_start_time,
        compute_cost,
        credits_used_cloud_services,
        ran_on_warehouse
    from cost_per_query

    union all

    select
        query_id,
        start_time,
        end_time,
        execution_start_time,
        0 as compute_cost,
        credits_used_cloud_services,
        ran_on_warehouse
    from filtered_queries
    where
        not ran_on_warehouse
),

stg__cost_per_query as (
    select
        all_queries.query_id,
        all_queries.start_time,
        all_queries.end_time,
        all_queries.execution_start_time,
        all_queries.compute_cost,
        -- For the most recent day, which is not yet complete, this calculation won't be perfect.
        -- So, we don't look at any queries from the most recent day t, just t-1 and before.
        (div0(all_queries.credits_used_cloud_services, credits_billed_daily.daily_credits_used_cloud_services) * credits_billed_daily.daily_billable_cloud_services) * coalesce(daily_rates.effective_rate, current_rates.effective_rate) as cloud_services_cost,
        all_queries.compute_cost + cloud_services_cost as query_cost,
        all_queries.ran_on_warehouse,
        coalesce(daily_rates.currency, current_rates.currency) as currency
    from all_queries
    inner join credits_billed_daily
        on date(all_queries.start_time) = credits_billed_daily.date
    left join daily_rates
        on date(all_queries.start_time) = daily_rates.date
            and daily_rates.service_type = 'COMPUTE'
            and daily_rates.usage_type = 'cloud services'
    inner join daily_rates as current_rates
        on current_rates.is_latest_rate
            and current_rates.service_type = 'COMPUTE'
            and current_rates.usage_type = 'cloud services'
    and all_queries.start_time < date_trunc(day, getdate())
    order by all_queries.start_time asc
)

select
    cost_per_query.query_id,
    cost_per_query.compute_cost,
    cost_per_query.cloud_services_cost,
    cost_per_query.query_cost,
    cost_per_query.execution_start_time,

    -- Grab all columns from query_history (except the query time columns which we rename below)
    query_history.query_text,
    query_history.database_id,
    query_history.database_name,
    query_history.schema_id,
    query_history.schema_name,
    query_history.query_type,
    query_history.session_id,
    query_history.user_name,
    query_history.role_name,
    query_history.warehouse_id,
    query_history.warehouse_name,
    query_history.warehouse_size,
    query_history.warehouse_type,
    query_history.cluster_number,
    query_history.query_tag,
    query_history.execution_status,
    query_history.error_code,
    query_history.error_message,
    query_history.start_time,
    query_history.end_time,
    query_history.total_elapsed_time,
    query_history.bytes_scanned,
    query_history.percentage_scanned_from_cache,
    query_history.bytes_written,
    query_history.bytes_written_to_result,
    query_history.bytes_read_from_result,
    query_history.rows_produced,
    query_history.rows_inserted,
    query_history.rows_updated,
    query_history.rows_deleted,
    query_history.rows_unloaded,
    query_history.bytes_deleted,
    query_history.partitions_scanned,
    query_history.partitions_total,
    query_history.bytes_spilled_to_local_storage,
    query_history.bytes_spilled_to_remote_storage,
    query_history.bytes_sent_over_the_network,
    query_history.outbound_data_transfer_cloud,
    query_history.outbound_data_transfer_region,
    query_history.outbound_data_transfer_bytes,
    query_history.inbound_data_transfer_cloud,
    query_history.inbound_data_transfer_region,
    query_history.inbound_data_transfer_bytes,
    query_history.credits_used_cloud_services,
    query_history.release_version,
    query_history.external_function_total_invocations,
    query_history.external_function_total_sent_rows,
    query_history.external_function_total_received_rows,
    query_history.external_function_total_sent_bytes,
    query_history.external_function_total_received_bytes,
    query_history.query_load_percent,
    query_history.is_client_generated_statement,
    query_history.query_acceleration_bytes_scanned,
    query_history.query_acceleration_partitions_scanned,
    query_history.query_acceleration_upper_limit_scale_factor,

    -- Rename some existing columns for clarity
    query_history.total_elapsed_time as total_elapsed_time_ms,
    query_history.compilation_time as compilation_time_ms,
    query_history.queued_provisioning_time as queued_provisioning_time_ms,
    query_history.queued_repair_time as queued_repair_time_ms,
    query_history.queued_overload_time as queued_overload_time_ms,
    query_history.transaction_blocked_time as transaction_blocked_time_ms,
    query_history.list_external_files_time as list_external_files_time_ms,
    query_history.execution_time as execution_time_ms,

    -- New columns
    query_history.warehouse_size is not null as ran_on_warehouse,
    query_history.bytes_scanned / power(1024, 3) as data_scanned_gb,
    data_scanned_gb * query_history.percentage_scanned_from_cache as data_scanned_from_cache_gb,
    query_history.bytes_spilled_to_local_storage / power(1024, 3) as data_spilled_to_local_storage_gb,
    query_history.bytes_spilled_to_remote_storage / power(1024, 3) as data_spilled_to_remote_storage_gb,
    query_history.bytes_sent_over_the_network / power(1024, 3) as data_sent_over_the_network_gb,
    query_history.query_text_no_comments,
    query_history.dbt_metadata,

    query_history.total_elapsed_time / 1000 as total_elapsed_time_s,
    query_history.compilation_time / 1000 as compilation_time_s,
    query_history.queued_provisioning_time / 1000 as queued_provisioning_time_s,
    query_history.queued_repair_time / 1000 as queued_repair_time_s,
    query_history.queued_overload_time / 1000 as queued_overload_time_s,
    query_history.transaction_blocked_time / 1000 as transaction_blocked_time_s,
    query_history.list_external_files_time / 1000 as list_external_files_time_s,
    query_history.execution_time / 1000 as execution_time_s,
    cost_per_query.currency

from query_history
inner join stg__cost_per_query as cost_per_query
    on query_history.query_id = cost_per_query.query_id
order by query_history.start_time
)
;

---------------------------------------------------------------------------------------------------------
-- 4. Grant the Sigma service role select access on this table
---------------------------------------------------------------------------------------------------------
grant select on table query_history_enriched to role identifier($sigma_role_name);


---------------------------------------------------------------------------------------------------------
-- 5. Create a stored procedure that enriches queries not yet in the query_history_enriched table
---------------------------------------------------------------------------------------------------------

create or replace procedure usp_materialize_query_history_enriched()
returns string
language javascript
as
$$
try {
    snowflake.execute({sqlText: 'begin transaction;'});
    let materialization_query = `
    insert into query_history_enriched
    with last_enriched_query as (
        select 
            max(start_time) as last_enriched_query_start_time
        from query_history_enriched
    ),

    query_history as (
        select
            *,

            -- this removes comments enclosed by /* <comment text> */ and single line comments starting with -- and either ending with a new line or end of string
            dbt_snowflake_monitoring_regexp_replace(query_text, \$\$(/\*(.|\n|\r)*?\*/)|(--.*$)|(--.*(\n|\r))\$\$, '') as query_text_no_comments,

            try_parse_json(regexp_substr(query_text, '/\\*\\s({"app":\\s"dbt".*})\\s\\*/', 1, 1, 'ie')) as _dbt_json_comment_meta,
            case
                when try_parse_json(query_tag)['dbt_snowflake_query_tags_version'] is not null then try_parse_json(query_tag)
            end as _dbt_json_query_tag_meta,
            case
                when _dbt_json_comment_meta is not null or _dbt_json_query_tag_meta is not null then
                    merge_objects(coalesce(_dbt_json_comment_meta, { }), coalesce(_dbt_json_query_tag_meta, { }))
            end as dbt_metadata

        from snowflake.account_usage.query_history
        where start_time > (select last_enriched_query_start_time from last_enriched_query)
        and end_time < date_trunc(day, getdate())
    ),

    dates_base as (
        select date_day as date from (    
            with rawdata as (
                with p as (
                    select 0 as generated_number union all select 1
                ), 
                unioned as (
                    select
                    p0.generated_number * power(2, 0)
                    + 
                    p1.generated_number * power(2, 1)
                    + 
                    p2.generated_number * power(2, 2)
                    + 
                    p3.generated_number * power(2, 3)
                    + 
                    p4.generated_number * power(2, 4)
                    + 
                    p5.generated_number * power(2, 5)
                    + 
                    p6.generated_number * power(2, 6)
                    + 
                    p7.generated_number * power(2, 7)
                    + 
                    p8.generated_number * power(2, 8)
                    + 
                    p9.generated_number * power(2, 9)
                    + 
                    p10.generated_number * power(2, 10)
                    + 1
                    as generated_number
                    from
                    p as p0
                    cross join 
                    p as p1
                    cross join 
                    p as p2
                    cross join 
                    p as p3
                    cross join 
                    p as p4
                    cross join 
                    p as p5
                    cross join 
                    p as p6
                    cross join 
                    p as p7
                    cross join 
                    p as p8
                    cross join 
                    p as p9
                    cross join 
                    p as p10
                )
                select *
                from unioned
                where generated_number <= 2000
                order by generated_number
            ),

            all_periods as (

                select (
                dateadd(
                    day,
                    row_number() over (order by 1) - 1,
                    '2018-01-01'
                    )
                ) as date_day
                from rawdata

            ),

            filtered as (
                select *
                from all_periods
                where date_day <= dateadd(day, 1, current_date)
            )

            select * from filtered


        )
    ),

    rate_sheet_daily_base as (
        select
            date,
            usage_type,
            currency,
            effective_rate,
            service_type
        from snowflake.organization_usage.rate_sheet_daily
        where
            account_locator = current_account()
    ),

    remaining_balance_daily_without_contract_view as (
        select
            date,
            organization_name,
            currency,
            free_usage_balance,
            capacity_balance,
            on_demand_consumption_balance,
            rollover_balance
        from snowflake.organization_usage.remaining_balance_daily

        qualify row_number() over (partition by date order by contract_number desc) = 1
    ),

    stop_thresholds as (
        select min(date) as start_date
        from rate_sheet_daily_base

        union all

        select min(date) as start_date
        from remaining_balance_daily_without_contract_view
    ),

    date_range as (
        select
            max(start_date) as start_date,
            current_date as end_date
        from stop_thresholds
    ),

    remaining_balance_daily as (
        select
            date,
            free_usage_balance + capacity_balance + on_demand_consumption_balance + rollover_balance as remaining_balance,
            remaining_balance < 0 as is_account_in_overage
        from remaining_balance_daily_without_contract_view
    ),

    latest_remaining_balance_daily as (
        select
            date,
            remaining_balance,
            is_account_in_overage
        from remaining_balance_daily
        qualify row_number() over (order by date desc) = 1
    ),

    rate_sheet_daily as (
        select rate_sheet_daily_base.*
        from rate_sheet_daily_base
        inner join date_range
            on rate_sheet_daily_base.date between date_range.start_date and date_range.end_date
    ),

    rates_date_range_w_usage_types as (
        select
            date_range.start_date,
            date_range.end_date,
            usage_types.usage_type
        from date_range
        cross join (select distinct usage_type from rate_sheet_daily) as usage_types
    ),

    base as (
        select
            db.date,
            dr.usage_type
        from dates_base as db
        inner join rates_date_range_w_usage_types as dr
            on db.date between dr.start_date and dr.end_date
    ),

    rates_w_overage as (
        select
            base.date,
            base.usage_type,
            coalesce(
                rate_sheet_daily.service_type,
                lag(rate_sheet_daily.service_type) ignore nulls over (partition by base.usage_type order by base.date),
                lead(rate_sheet_daily.service_type) ignore nulls over (partition by base.usage_type order by base.date)
            ) as service_type,
            coalesce(
                rate_sheet_daily.effective_rate,
                lag(rate_sheet_daily.effective_rate) ignore nulls over (partition by base.usage_type order by base.date),
                lead(rate_sheet_daily.effective_rate) ignore nulls over (partition by base.usage_type order by base.date)
            ) as effective_rate,
            coalesce(
                rate_sheet_daily.currency,
                lag(rate_sheet_daily.currency) ignore nulls over (partition by base.usage_type order by base.date),
                lead(rate_sheet_daily.currency) ignore nulls over (partition by base.usage_type order by base.date)
            ) as currency,
            base.usage_type like 'overage-%' as is_overage_rate,
            replace(base.usage_type, 'overage-', '') as associated_usage_type,
            coalesce(remaining_balance_daily.is_account_in_overage, latest_remaining_balance_daily.is_account_in_overage, false) as _is_account_in_overage,
            case
                when _is_account_in_overage and is_overage_rate then 1
                when not _is_account_in_overage and not is_overage_rate then 1
                else 0
            end as rate_priority

        from base
        left join latest_remaining_balance_daily on latest_remaining_balance_daily.date is not null
        left join remaining_balance_daily
            on base.date = remaining_balance_daily.date
        left join rate_sheet_daily
            on base.date = rate_sheet_daily.date
                and base.usage_type = rate_sheet_daily.usage_type
    ),

    rates as (
        select
            date,
            usage_type,
            associated_usage_type,
            service_type,
            effective_rate,
            currency,
            is_overage_rate
        from rates_w_overage
        qualify row_number() over (partition by date, service_type, associated_usage_type order by rate_priority desc) = 1
    ),

    daily_rates as (
        select
            date,
            associated_usage_type as usage_type,
            service_type,
            effective_rate,
            currency,
            is_overage_rate,
            row_number() over (partition by service_type, associated_usage_type order by date desc) = 1 as is_latest_rate
        from rates
    ),

    stop_threshold as (
        select max(end_time) as latest_ts
        from snowflake.account_usage.warehouse_metering_history
    ),

    filtered_queries as (
        select
            query_id,
            query_text as original_query_text,
            credits_used_cloud_services,
            warehouse_id,
            warehouse_size is not null as ran_on_warehouse,
            timeadd(
                'millisecond',
                queued_overload_time + compilation_time
                + queued_provisioning_time + queued_repair_time
                + list_external_files_time,
                start_time
            ) as execution_start_time,
            start_time,
            end_time
        from snowflake.account_usage.query_history
        where end_time <= (select latest_ts from stop_threshold)
        and start_time > (select last_enriched_query_start_time from last_enriched_query)
        and start_time < date_trunc(day, getdate())
    ),

    hours_list as (
        select
            dateadd(
                'hour',
                '-' || row_number() over (order by seq4() asc),
                dateadd('day', '+1', current_date::timestamp_tz)
            ) as hour_start,
            dateadd('hour', '+1', hour_start) as hour_end
        from table(generator(rowcount => (24 * 730)))
    ),

    -- 1 row per hour a query ran
    query_hours as (
        select
            hours_list.hour_start,
            hours_list.hour_end,
            queries.*
        from hours_list
        inner join filtered_queries as queries
            on hours_list.hour_start >= date_trunc('hour', queries.execution_start_time)
                and hours_list.hour_start < queries.end_time
                and queries.ran_on_warehouse
    ),

    query_seconds_per_hour as (
        select
            *,
            datediff('millisecond', greatest(execution_start_time, hour_start), least(end_time, hour_end)) as num_milliseconds_query_ran,
            sum(num_milliseconds_query_ran) over (partition by warehouse_id, hour_start) as total_query_milliseconds_in_hour,
            div0(num_milliseconds_query_ran, total_query_milliseconds_in_hour) as fraction_of_total_query_time_in_hour,
            hour_start as hour
        from query_hours
    ),

    credits_billed_hourly as (
        select
            start_time as hour,
            warehouse_id,
            credits_used_compute,
            credits_used_cloud_services
        from snowflake.account_usage.warehouse_metering_history
    ),

    query_cost as (
        select
            query_seconds_per_hour.*,
            credits_billed_hourly.credits_used_compute * daily_rates.effective_rate as actual_warehouse_cost,
            credits_billed_hourly.credits_used_compute * query_seconds_per_hour.fraction_of_total_query_time_in_hour * coalesce(daily_rates.effective_rate, current_rates.effective_rate) as allocated_compute_cost_in_hour
        from query_seconds_per_hour
        inner join credits_billed_hourly
            on query_seconds_per_hour.warehouse_id = credits_billed_hourly.warehouse_id
                and query_seconds_per_hour.hour = credits_billed_hourly.hour
        left join daily_rates
            on date(query_seconds_per_hour.start_time) = daily_rates.date
                and daily_rates.service_type = 'COMPUTE'
                and daily_rates.usage_type = 'compute'
        inner join daily_rates as current_rates
            on current_rates.is_latest_rate
                and current_rates.service_type = 'COMPUTE'
                and current_rates.usage_type = 'compute'
    ),

    cost_per_query as (
        select
            query_id,
            any_value(start_time) as start_time,
            any_value(end_time) as end_time,
            any_value(execution_start_time) as execution_start_time,
            sum(allocated_compute_cost_in_hour) as compute_cost,
            any_value(credits_used_cloud_services) as credits_used_cloud_services,
            any_value(ran_on_warehouse) as ran_on_warehouse
        from query_cost
        group by 1
    ),

    credits_billed_daily as (
        select
            date(hour) as date,
            sum(credits_used_compute) as daily_credits_used_compute,
            sum(credits_used_cloud_services) as daily_credits_used_cloud_services,
            greatest(daily_credits_used_cloud_services - daily_credits_used_compute * 0.1, 0) as daily_billable_cloud_services
        from credits_billed_hourly
        group by 1
    ),

    all_queries as (
        select
            query_id,
            start_time,
            end_time,
            execution_start_time,
            compute_cost,
            credits_used_cloud_services,
            ran_on_warehouse
        from cost_per_query

        union all

        select
            query_id,
            start_time,
            end_time,
            execution_start_time,
            0 as compute_cost,
            credits_used_cloud_services,
            ran_on_warehouse
        from filtered_queries
        where
            not ran_on_warehouse
    ),

    stg__cost_per_query as (
        select
            all_queries.query_id,
            all_queries.start_time,
            all_queries.end_time,
            all_queries.execution_start_time,
            all_queries.compute_cost,
            -- For the most recent day, which is not yet complete, this calculation won't be perfect.
            -- For example, at 12PM on the latest day, it's possible that cloud credits make up <10% of compute cost, so the queries
            -- from that day are not allocated any cloud_services_cost. The next time the model runs, after we have the full day of data,
            -- this may change if cloud credits make up >10% of compute cost.
            (div0(all_queries.credits_used_cloud_services, credits_billed_daily.daily_credits_used_cloud_services) * credits_billed_daily.daily_billable_cloud_services) * coalesce(daily_rates.effective_rate, current_rates.effective_rate) as cloud_services_cost,
            all_queries.compute_cost + cloud_services_cost as query_cost,
            all_queries.ran_on_warehouse,
            coalesce(daily_rates.currency, current_rates.currency) as currency
        from all_queries
        inner join credits_billed_daily
            on date(all_queries.start_time) = credits_billed_daily.date
        left join daily_rates
            on date(all_queries.start_time) = daily_rates.date
                and daily_rates.service_type = 'COMPUTE'
                and daily_rates.usage_type = 'cloud services'
        inner join daily_rates as current_rates
            on current_rates.is_latest_rate
                and current_rates.service_type = 'COMPUTE'
                and current_rates.usage_type = 'cloud services'
        where all_queries.start_time > (select last_enriched_query_start_time from last_enriched_query) 
        and all_queries.start_time < date_trunc(day, getdate())
        order by all_queries.start_time asc
    ),

    enriched_queries_for_insert as (
        select
            cost_per_query.query_id,
            cost_per_query.compute_cost,
            cost_per_query.cloud_services_cost,
            cost_per_query.query_cost,
            cost_per_query.execution_start_time,

            -- Grab all columns from query_history (except the query time columns which we rename below)
            query_history.query_text,
            query_history.database_id,
            query_history.database_name,
            query_history.schema_id,
            query_history.schema_name,
            query_history.query_type,
            query_history.session_id,
            query_history.user_name,
            query_history.role_name,
            query_history.warehouse_id,
            query_history.warehouse_name,
            query_history.warehouse_size,
            query_history.warehouse_type,
            query_history.cluster_number,
            query_history.query_tag,
            query_history.execution_status,
            query_history.error_code,
            query_history.error_message,
            query_history.start_time,
            query_history.end_time,
            query_history.total_elapsed_time,
            query_history.bytes_scanned,
            query_history.percentage_scanned_from_cache,
            query_history.bytes_written,
            query_history.bytes_written_to_result,
            query_history.bytes_read_from_result,
            query_history.rows_produced,
            query_history.rows_inserted,
            query_history.rows_updated,
            query_history.rows_deleted,
            query_history.rows_unloaded,
            query_history.bytes_deleted,
            query_history.partitions_scanned,
            query_history.partitions_total,
            query_history.bytes_spilled_to_local_storage,
            query_history.bytes_spilled_to_remote_storage,
            query_history.bytes_sent_over_the_network,
            query_history.outbound_data_transfer_cloud,
            query_history.outbound_data_transfer_region,
            query_history.outbound_data_transfer_bytes,
            query_history.inbound_data_transfer_cloud,
            query_history.inbound_data_transfer_region,
            query_history.inbound_data_transfer_bytes,
            query_history.credits_used_cloud_services,
            query_history.release_version,
            query_history.external_function_total_invocations,
            query_history.external_function_total_sent_rows,
            query_history.external_function_total_received_rows,
            query_history.external_function_total_sent_bytes,
            query_history.external_function_total_received_bytes,
            query_history.query_load_percent,
            query_history.is_client_generated_statement,
            query_history.query_acceleration_bytes_scanned,
            query_history.query_acceleration_partitions_scanned,
            query_history.query_acceleration_upper_limit_scale_factor,

            -- Rename some existing columns for clarity
            query_history.total_elapsed_time as total_elapsed_time_ms,
            query_history.compilation_time as compilation_time_ms,
            query_history.queued_provisioning_time as queued_provisioning_time_ms,
            query_history.queued_repair_time as queued_repair_time_ms,
            query_history.queued_overload_time as queued_overload_time_ms,
            query_history.transaction_blocked_time as transaction_blocked_time_ms,
            query_history.list_external_files_time as list_external_files_time_ms,
            query_history.execution_time as execution_time_ms,

            -- New columns
            query_history.warehouse_size is not null as ran_on_warehouse,
            query_history.bytes_scanned / power(1024, 3) as data_scanned_gb,
            data_scanned_gb * query_history.percentage_scanned_from_cache as data_scanned_from_cache_gb,
            query_history.bytes_spilled_to_local_storage / power(1024, 3) as data_spilled_to_local_storage_gb,
            query_history.bytes_spilled_to_remote_storage / power(1024, 3) as data_spilled_to_remote_storage_gb,
            query_history.bytes_sent_over_the_network / power(1024, 3) as data_sent_over_the_network_gb,
            query_history.query_text_no_comments,
            query_history.dbt_metadata,

            query_history.total_elapsed_time / 1000 as total_elapsed_time_s,
            query_history.compilation_time / 1000 as compilation_time_s,
            query_history.queued_provisioning_time / 1000 as queued_provisioning_time_s,
            query_history.queued_repair_time / 1000 as queued_repair_time_s,
            query_history.queued_overload_time / 1000 as queued_overload_time_s,
            query_history.transaction_blocked_time / 1000 as transaction_blocked_time_s,
            query_history.list_external_files_time / 1000 as list_external_files_time_s,
            query_history.execution_time / 1000 as execution_time_s,
            cost_per_query.currency

        from query_history
        inner join stg__cost_per_query as cost_per_query
            on query_history.query_id = cost_per_query.query_id
        order by query_history.start_time
    )
    select * 
    from enriched_queries_for_insert
    ;`;
    snowflake.execute({sqlText: materialization_query});
    snowflake.execute({sqlText: 'commit;'});
    return "success!";
} catch (err) {
    snowflake.execute({sqlText: 'rollback;'});
    return `Error: ${err}`;
}
$$
;


---------------------------------------------------------------------------------------------------------
-- 6. Create and start a task to call that stored procedure using the specified CRON string
---------------------------------------------------------------------------------------------------------
create or replace task task_call_usp_materialize_query_history_enriched
warehouse = $materialization_warehouse_name
schedule = $task_call_usp_materialize_query_history_enriched_CRON
as
call usp_materialize_query_history_enriched();

alter task task_call_usp_materialize_query_history_enriched resume;


---------------------------------------------------------------------------------------------------------
-- END OF FILE
---------------------------------------------------------------------------------------------------------