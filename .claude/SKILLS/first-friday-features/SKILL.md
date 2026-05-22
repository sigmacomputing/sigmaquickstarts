---
name: first-friday-features
description: >
  Workflow for the monthly First Friday Features (FFF) QuickStart that summarizes Sigma
  releases. Use this skill whenever work involves an FFF document — pulling features from
  a Sigma release changelog, categorizing them, adding "why it matters" context, marking
  heart-icon features, or editing any file under
  `site/sigmaguides/src/*_first_friday_features/`. Trigger on phrases like "let's work
  on FFF", "incorporate the latest release notes", "the monthly features QS", or any
  reference to a Sigma changelog URL combined with one of those FFF .md files.
author: pballai
compatibility: Cowork, Claude Code
---

You help Phil build and maintain the monthly First Friday Features QuickStart — a recurring
summary of Sigma releases (new GA features, public betas, bug fixes, new QuickStarts)
published at quickstarts.sigmacomputing.com/firstfridayfeatures.

This skill covers the *workflow* for FFF specifically. General QuickStart formatting and
voice preferences live in the project CLAUDE.md and the `quickstart` skill.

---

## Templates and file locations

FFF starter template:
```
sigmaquickstarts/site/sigmaguides/src/QS Starter Projects/AAA_xx_2026_first_friday_features_template/
└── XX_2026_first_friday_features.md
```

Monthly FFF folders use the pattern `MM_YYYY_first_friday_features`, e.g.:
```
site/sigmaguides/src/04_2026_first_friday_features/04_2026_first_friday_features.md
```

Year-end archives consolidate the year's monthly releases:
```
2023_first_friday_features/
2024_first_friday_features/
2025_first_friday_features/
```

When starting a new month:
1. Copy `AAA_xx_2026_first_friday_features_template/` into `site/sigmaguides/src/`
2. Rename the folder and `.md` to `MM_YYYY_first_friday_features`
3. Update the frontmatter (`id`, `summary`, `lastUpdated`) and the `# (MM-YYYY) Month` heading
4. Replace the placeholder header comment with the actual weekly changelog dates being tracked

---

## Document structure

The FFF document follows the standard QuickStart skeleton but with category-based body
sections. Every category section has `Duration: 20` and the standard footer:

```markdown
![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->
```

Standard category sections (alphabetical):

- Administration
- AI
- AI Apps
- API
- Bug Fixes
- Charts
- Data Modeling
- Embedding
- Functions and Calculations
- Input Tables
- New QuickStarts
- Security
- Workbooks

If a category does not already exist in the document, **ask Phil where to place it**
before adding a new section. Don't introduce new categories unilaterally.

---

## Workflow for incorporating a changelog

### 1. Fetch the release notes
Phil will provide the changelog link (typically a `help.sigmacomputing.com/changelog/...`
URL for a specific week). Pull the page and extract every entry — new features, changes,
betas, and bug fixes — with titles, descriptions, and any inline documentation links.

### 2. Categorize each feature
Place each feature in the matching category section in the markdown file. If a feature
straddles two categories, ask Phil rather than guessing.

### 3. Alphabetical ordering
Within each category, order features alphabetically by feature title. This applies to
both new entries and any reordering of existing ones in the same pass.

### 4. Documentation link format
Always link to the **specific feature documentation page**, not the general changelog:

- Correct: `For more information, see [RegexpCount](https://help.sigmacomputing.com/docs/regexpcount)`
- Incorrect: `For more information, see the [Sigma changelog](https://help.sigmacomputing.com/changelog/2026-20-02)`

Sentence-ending hyperlinks do not take a trailing period — leave the period off after the
closing parenthesis.

### 5. "Why It Matters" context
Add a brief `**WHY IT MATTERS:**` paragraph where a feature has clear business value
beyond what the description conveys. Focus on the operational benefit, who it helps, and
what workflow it improves. Keep to 1–2 sentences. Use sparingly — not every feature
warrants one.

### 6. Heart icon usage
Mark significant features with `<img src="assets/heart_icon.png" width="25"/>` immediately
after the feature title. A feature earns a heart if it meets one of these criteria:

**Broad user impact**
- Most customers will use it and benefit from it
- Improves daily workflows for analysts, builders, or end users
- Solves a common pain point across platforms/deployments
- Examples: Forms, Ad hoc calculations, Find in table, Unix timestamp functions

**Competitive differentiation**
- Strengthens Sigma's enterprise/security posture
- Demonstrates platform maturity or competitive advantage
- Addresses common requirements in enterprise RFPs, security reviews, or competitive evaluations
- Examples: Customer-managed keys, Audit logs for tenants, Multi-tenant capabilities,
  advanced embedding features

**What NOT to tag**
- Do not exclude platform-specific features (GCP, Snowflake, BigQuery) by default — if a
  platform-specific feature strengthens competitive position or proves enterprise
  capabilities, tag it
- Minor UI tweaks or administrative conveniences with no strategic value

### 7. When unsure, ask
If a feature's category placement, description, or heart-tag-worthiness is unclear, ask
Phil before deciding. Default to asking over guessing — these documents are reviewed
externally and accuracy matters more than speed.

---

## Header tracker

The top of each FFF document has a comment block tracking which weekly changelogs have
been incorporated:

```html
<!-- The above name is what appears on the website and is searchable.

April 3, 2026 changes: done
April 10, 2026 changes: done
April 17, 2026 changes: done
April 24, 2026 changes: pending
April 30, 2026 changes:

Publish on May 1
-->
```

Update this block each time a new changelog is incorporated so it's clear what's covered.

---

## Generating slide decks from FFF markdown

*To be defined.* This skill will eventually include the workflow for producing a Google
Slides deck from a monthly FFF markdown file. Add details here once the slide-generation
process is established.
