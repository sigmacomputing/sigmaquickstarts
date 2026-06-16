-- ThoughtSpot (Sample) Retail - Apparel → Snowflake landing
-- Schema:  QUICKSTARTS.TS_RETAIL_APPAREL
-- Source:  s3://sigma-quickstarts-main/thoughtspot/APPAREL_FACT.csv
-- Origin:  ThoughtSpot Falcon extract via /searchdata REST endpoint (22,425 rows)

CREATE SCHEMA IF NOT EXISTS QUICKSTARTS.TS_RETAIL_APPAREL;
USE SCHEMA QUICKSTARTS.TS_RETAIL_APPAREL;

-- MONTH is Unix epoch seconds as exported by ThoughtSpot's searchdata API.
-- Stored as NUMBER(10,0); convert to DATE in Sigma with TO_TIMESTAMP(MONTH) or
-- add a generated DATE column here if you want native date handling at the SQL layer.
CREATE OR REPLACE TABLE TS_APPAREL_FACT (
  ITEM_TYPE          VARCHAR,
  PRODUCT            VARCHAR,
  MONTH              NUMBER(10,0),
  QUANTITY_PURCHASED NUMBER(38,0),
  SALES              NUMBER(20,2)
);

CREATE OR REPLACE STAGE QUICKSTARTS.TS_RETAIL_APPAREL.S3_TS_STAGE
  URL = 's3://sigma-quickstarts-main/thoughtspot/'
  FILE_FORMAT = (
    TYPE = CSV
    FIELD_DELIMITER = ','
    SKIP_HEADER = 1
    FIELD_OPTIONALLY_ENCLOSED_BY = '"'
    NULL_IF = ('', 'NULL')
    EMPTY_FIELD_AS_NULL = TRUE
  );

COPY INTO TS_APPAREL_FACT
  FROM @S3_TS_STAGE/APPAREL_FACT.csv
  ON_ERROR = ABORT_STATEMENT;

GRANT USAGE  ON DATABASE QUICKSTARTS                              TO ROLE SIGMA_SERVICE_ROLE;
GRANT USAGE  ON SCHEMA   QUICKSTARTS.TS_RETAIL_APPAREL            TO ROLE SIGMA_SERVICE_ROLE;
GRANT SELECT ON ALL TABLES IN SCHEMA QUICKSTARTS.TS_RETAIL_APPAREL    TO ROLE SIGMA_SERVICE_ROLE;
GRANT SELECT ON FUTURE TABLES IN SCHEMA QUICKSTARTS.TS_RETAIL_APPAREL TO ROLE SIGMA_SERVICE_ROLE;

-- Verify against TJ's proven parity numbers
SELECT
  COUNT(*)                          AS ROW_COUNT,      -- expected 22,425
  COUNT(DISTINCT ITEM_TYPE)         AS ITEM_TYPES,     -- expected 15
  COUNT(DISTINCT PRODUCT)           AS PRODUCTS,       -- expected 345
  TO_CHAR(SUM(SALES), '$999,999,999.99') AS TOTAL_SALES  -- expected $970,696,156.87
FROM TS_APPAREL_FACT;
