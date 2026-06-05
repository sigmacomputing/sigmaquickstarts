You help Phil build and maintain the monthly First Friday Features QuickStart — a recurring summary of Sigma releases (new GA features, public betas, bug fixes, new QuickStarts) published at quickstarts.sigmacomputing.com/firstfridayfeatures.
This skill covers the workflow for FFF specifically. General QuickStart formatting and voice preferences live in the project CLAUDE.md and the quickstart skill.

Templates and file locations
FFF starter template:
sigmaquickstarts/site/sigmaguides/src/QS Starter Projects/AAA_xx_2026_first_friday_features_template/
└── XX_2026_first_friday_features.md
Monthly FFF folders use the pattern MM_YYYY_first_friday_features, e.g.:
site/sigmaguides/src/04_2026_first_friday_features/04_2026_first_friday_features.md
Year-end archives consolidate the year's monthly releases:
2023_first_friday_features/
2024_first_friday_features/
2025_first_friday_features/
When starting a new month:
Copy AAA_xx_2026_first_friday_features_template/ into site/sigmaguides/src/
Rename the folder and .md to MM_YYYY_first_friday_features
Update the frontmatter (id, summary, lastUpdated) and the # (MM-YYYY) Month heading
Replace the placeholder header comment with the actual weekly changelog dates being tracked

Document structure
The FFF document follows the standard QuickStart skeleton but with category-based body sections. Every category section has Duration: 20 and the standard footer:
![Footer](assets/sigma_footer.png)
<!-- END OF SECTION-->
Standard category sections (alphabetical):
Administration
AI
AI Apps
API
Bug Fixes
Charts
Data Modeling
Embedding
Functions and Calculations
Input Tables
New QuickStarts
Security
Workbooks
If a category does not already exist in the document, ask Phil where to place it before adding a new section. Don't introduce new categories unilaterally.

Workflow for incorporating a changelog
1. Fetch the release notes
Phil will provide the changelog link (typically a help.sigmacomputing.com/changelog/... URL for a specific week). Pull the page and extract every entry — new features, changes, betas, and bug fixes — with titles, descriptions, and any inline documentation links.
2. Categorize each feature
Place each feature in the matching category section in the markdown file. If a feature straddles two categories, ask Phil rather than guessing.
3. Alphabetical ordering
Within each category, order features alphabetically by feature title. This applies to both new entries and any reordering of existing ones in the same pass.
4. Documentation link format
Always link to the specific feature documentation page, not the general changelog:
Correct: For more information, see [RegexpCount](https://help.sigmacomputing.com/docs/regexpcount)
Incorrect: For more information, see the [Sigma changelog](https://help.sigmacomputing.com/changelog/2026-20-02)
Sentence-ending hyperlinks do not take a trailing period — leave the period off after the closing parenthesis.
5. "Why It Matters" context
Add a **WHY IT MATTERS:** paragraph with these rules:
Required for every heart-tagged (Spotlight) feature. Every Spotlight feature must have a WIM — no exceptions. The slide generator will flag any heart-tagged feature missing one and refuse to produce a Spotlight slide for it.
Required for Quick Hits features — one sentence only. Space constraints on Quick Hits slides do not allow full WIM blocks, so Quick Hits descriptions should be one sentence total (description + implicit value combined), without a separate labeled block.
Optional for non-hearted, non-Quick-Hits features when business value isn't obvious.
Keep Spotlight WIM to 1–2 sentences. Lead with business impact, not technical mechanics.
6. Heart icon usage
Mark significant features with <img src="assets/heart_icon.png" width="25"/> immediately after the feature title. A feature earns a heart if it meets one of these criteria:
Broad user impact
Most customers will use it and benefit from it
Improves daily workflows for analysts, builders, or end users
Solves a common pain point across platforms/deployments
Examples: Forms, Ad hoc calculations, Find in table, Unix timestamp functions
Competitive differentiation
Strengthens Sigma's enterprise/security posture
Demonstrates platform maturity or competitive advantage
Addresses common requirements in enterprise RFPs, security reviews, or competitive evaluations
Examples: Customer-managed keys, Audit logs for tenants, Multi-tenant capabilities, advanced embedding features
What NOT to tag
Do not exclude platform-specific features (GCP, Snowflake, BigQuery) by default — if a platform-specific feature strengthens competitive position or proves enterprise capabilities, tag it
Minor UI tweaks or administrative conveniences with no strategic value
7. When unsure, ask
If a feature's category placement, description, or heart-tag-worthiness is unclear, ask Phil before deciding. Default to asking over guessing — these documents are reviewed externally and accuracy matters more than speed.

Header tracker
The top of each FFF document has a comment block tracking which weekly changelogs have been incorporated:
<!-- The above name is what appears on the website and is searchable.

April 3, 2026 changes: done
April 10, 2026 changes: done
April 17, 2026 changes: done
April 24, 2026 changes: pending
April 30, 2026 changes:

Publish on May 1
-->
Update this block each time a new changelog is incorporated so it's clear what's covered.

Generating slide decks from FFF markdown
Once the monthly FFF markdown is finalized for publication, generate a Google Slides deck summarizing the release for partner and customer presentations.
Inputs, outputs, and locations
Input: the month's FFF markdown file from site/sigmaguides/src/{MM}_{YYYY}_first_friday_features/.
Master template: .claude/SKILLS/first-friday-features/2026 (Template).pptx — the local PowerPoint export of the Sigma First Friday Features Slides template. Iterate on this file directly when slide design changes are needed; the next month's run picks up the changes.
Generator: Python script using python-pptx that reads the markdown and writes a per-month .pptx. (To be added alongside this skill when the generator is built.)
Output: .claude/SKILLS/first-friday-features/output/{MM}_{YYYY}_first_friday_features.pptx. Phil uploads the generated file to the FFF deck Drive folder; Drive auto-converts to Google Slides for editing.
Formatting (fonts, colors, logo treatments) inherits from the master template, which is authored against the sigma-brand-guidelines skill.
Slide budget
Target under 20 slides per month. Combine categories on a single slide when feature counts allow. The total order:
Title slide
Spotlight slides — one per heart-tagged feature
Quick Hits slides — one per category (or combined across small categories)
New QuickStarts slide — single slide listing all
Bug Fixes slide — single slide listing all
Closing / Additional Resources slide
Contents slide
The contents slide (slide 2) lists the deck sections in order:
Spotlight Features
Quick-Hits by Feature Category
New QuickStarts
Additional Resources
The term is always Spotlight Features — never "Hero Features" or any other label.
Slide layouts
1. Title slide "Sigma First Friday Features" / "{Month YYYY}". Single layout from the master.
2. Spotlight slide (one per heart-tagged feature) Two columns:
Left column: feature title rendered as a clickable hyperlink to its Sigma documentation page (no separate "Learn more" link in the body — the title itself is the link). Description pulled verbatim from the FFF markdown (not paraphrased). Full "Why it matters" block from the markdown, labeled Why it matters:. Release status (GA / Public Beta) as a visible label.
Right column: empty image placeholder. Phil adds screenshots after generation.
The content text box must use normAutofit so text shrinks to fit if content is long — never overflow the box or the Sigma logo at the bottom. Do not disable autofit on Spotlight slides.
3. Quick Hits slide (per category) Category name as the slide title (e.g., Administration - Quick Hits). Each non-Spotlight feature in the category as one bullet: the feature name as the clickable doc link, followed by one sentence of description. No WHY IT MATTERS label or block — the single sentence carries the value implicitly. If a category has only one or two non-Spotlight features, combine it with an adjacent small category on the same slide to stay under the 20-slide budget. Release-status labels (GA, Public Beta) appear at the bottom of the slide; show both when the slide mixes statuses.
4. New QuickStarts slide Single slide titled "New QuickStarts". Each new QS from the markdown's "New QuickStarts" section as one bullet, with the QS title as the clickable link to its published URL. No description, no "why it matters" — name plus link only.
5. Bug Fixes slide Single slide titled "Bug Fixes". The numbered bug-fix list from the markdown, condensed where needed for slide fit. If the list is long enough that a single slide can't hold it readably, ask Phil before splitting across two slides.
6. Closing / Additional Resources slide Inherited verbatim from the master template. Update content in the master only when resources change.
Spotlight feature detection
Heart-tagged features are marked in the markdown by <img src="assets/heart_icon.png" width="25"/> immediately after the feature title:
### CSV upload limit to 1GB option (GA) <img src="assets/heart_icon.png" width="25"/>
The generator treats any feature with that marker as a Spotlight feature, regardless of its category, and produces a dedicated Spotlight slide for it. Spotlight slides appear before that category's Quick Hits slide so the flow stays category-grouped.
Each Spotlight slide requires both a description and a WHY IT MATTERS block pulled from the markdown. If either is missing, flag it and do not generate the Spotlight slide until Phil resolves it.
Clickable feature titles
Every feature reference in the deck — Spotlight, Quick Hits, or New QuickStarts — must have the feature/QS title itself rendered as the hyperlink, with no separate "Learn more" text. This conserves slide space and keeps the visual clean.
The URL is sourced from the markdown's For more information, see [Feature Name](url) line under the feature; the generator extracts the URL and binds it to the slide title text. If a feature has no doc link in the markdown, leave the title plain and flag it in the generator's output report so Phil can decide whether to add a link before sharing.
Generation workflow
When Phil signals "generate the FFF deck" (or equivalent):
Confirm the source markdown is finalized for publication.
Confirm the master template at .claude/SKILLS/first-friday-features/2026 (Template).pptx is the version to use.
Audit every heart-tagged feature in the markdown for a description body and a WHY IT MATTERS block. Flag any that are missing and stop until Phil resolves them.
Run the generator against the markdown.
Run visual QA on all Spotlight slides: convert to images and confirm no text overflows the content box or Sigma logo. If overflow is detected, verify normAutofit is set on the content text box and correct it.
Output the .pptx into .claude/SKILLS/first-friday-features/output/.
Report:
Final slide count
Spotlight feature count
Any features with no doc link
Any categories that were combined onto a single slide
Any other items the generator flagged as ambiguous
When unsure, ask
Same rule as the markdown workflow. Specifically:
A feature with no doc link in the markdown
A category with zero features that month (skip the slide?)
A heart-tagged feature with no description body or missing WIM
More than roughly ten Spotlight features in a month (likely too many — ask Phil to triage before generating)
A bug-fix list too long for one slide
