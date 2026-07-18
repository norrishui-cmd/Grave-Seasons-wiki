# Grave Seasons Wiki: 2,000-URL SEO Plan

Last updated: July 18, 2026

## Goal and publishing rule

Reach 2,000 useful, canonical, internally linked URLs before launch without indexing placeholders. The target is a capacity plan, not permission to publish unverified combinations. Every leaf page must answer one player question with confirmed data; pages that only say “TBD” stay out of the sitemap.

Current official launch window: Fall 2026. The former August 14, 2026 date is outdated.

## URL capacity by cluster

| Cluster | Target URLs | Example route | Evidence required before indexation |
|---|---:|---|---|
| Items and materials | 620 | `/items/{item}/` | Name, source, use, value or quest/crafting link |
| Locations and interiors | 210 | `/locations/{area}/{place}/` | Access, map relation, residents, resources or events |
| Quests and errands | 240 | `/quests/{quest}/` | Giver/trigger, objectives, steps, reward, failure/bug notes |
| Characters | 155 | `/characters/{name}/` | Identity plus schedule, gifts, quest, case or romance utility |
| Gifts | 150 | `/gifts/{item}/` | At least one verified preference and item source |
| Recipes and crafting | 180 | `/recipes/{recipe}/` | Ingredients, station, unlock, result and use |
| Crops, fishing, mining, forage | 170 | `/crops/{crop}/`, `/fish/{fish}/` | Season/location, acquisition and practical value |
| Mystery and victim protection | 85 | `/investigation/{case}/` | Campaign/state-specific evidence with spoiler control |
| Romance and heart events | 70 | `/romance/{character}/{event}/` | Verified trigger, requirements, choices and consequences |
| Skills, tools, buildings and upgrades | 55 | `/upgrades/{upgrade}/` | Cost, prerequisites and measurable effect |
| Endings and achievements | 40 | `/endings/{ending}/` | Verified requirements and missable conditions |
| Platforms, settings, errors and FAQ | 25 | `/settings/{topic}/` | Official specification or reproducible test/fix |
| **Total** | **2,000** |  |  |

## Four publishing waves

### Wave 1 — Foundation and pre-launch demand (now to T-8 weeks)

- Fix release-date freshness, platform coverage, canonical routes, sitemap, breadcrumbs, schema, crawl paths and duplicate `.html` routes.
- Publish only officially supported pre-launch intents: delay, demo, platforms, Game Pass, languages, requirements, single-player status, major areas and confirmed mechanics.
- Target: 60–90 approved URLs, not 2,000 empty records.

### Wave 2 — Preview and official-data ingestion (T-8 to T-2 weeks)

- Build structured datasets for confirmed characters, locations, crops, items and mechanics from official previews, store pages and permitted hands-on evidence.
- Create hubs before leaves; every new page receives links from its hub and at least two adjacent pages.
- Target cumulative size: 250–450 approved URLs.

### Wave 3 — Accelerated database build (T-4 weeks to T-1 week)

- Capture official preview, review-build, preload, or other permitted verified data with version, platform and evidence fields. If no reliable build data exists, do not invent records to meet the quota.
- Prioritize queries with immediate need: quest stuck points, item locations, gifts, schedules, recipes, victim protection, choices, endings and bugs.
- Publish in reviewed batches of no more than 80–100 candidate URLs per day. Reject pages failing the semantic answer gate.
- Target cumulative size: 1,200–1,600 approved URLs before the final launch week.

### Wave 4 — Complete the 2,000 useful URL set (T-7 days to launch)

- Fill verified database gaps and split pages only when search intent differs.
- Use GSC query-to-page mapping to find missing answers, cannibalization and weak snippets.
- Reach 2,000 by launch only when each sitemap URL passes the quality gate. If verified entity data arrives later than T-7 days, quality takes precedence and the remaining URLs move to the first post-launch batches rather than becoming thin pages.

## Quality gate for every indexable page

1. One distinct search intent and a direct answer above the fold.
2. Confirmed game entity or reproducible player problem; no fabricated name, value, schedule or drop.
3. Unique title, description, H1, canonical and useful body—not token-swapped boilerplate.
4. At least one hub link and two contextually adjacent links.
5. Breadcrumbs and appropriate WebPage/Article schema; FAQ schema only for visible, page-specific questions.
6. No “coming soon”, “TBD database”, empty table, or speculation page in the sitemap.
7. Version/source field for facts likely to change; clear spoiler handling for mysteries and endings.
8. Build/audit passes: no broken internal links, canonical mismatch, duplicate title, missing H1 or orphan page.

## Weekly operating loop

- Page growth: candidates, approved URLs, rejected thin pages and net sitemap change.
- Indexing/sitemap health: submitted, discovered, crawled, indexed and canonical exclusions.
- Content gaps: GSC query clusters, community “where/how/stuck” questions and missing hubs.
- Competitor/community signal: useful gaps only; never copy text or mass-produce parity pages.
- Monetization readiness: ad placement after useful content, consent/privacy pages, Core Web Vitals and ads.txt.
- Next three actions: one indexing repair, one winning-cluster expansion and one quality/cannibalization fix.

## First-round implementation in this package

- Corrected the release window to Fall 2026 and removed the false end-of-year countdown framing.
- Added verified pre-launch pages for delay, demo, PC, PS5, Xbox Series X|S, Nintendo Switch, Game Pass, languages, multiplayer, PC requirements, Steam Deck, story length, seven confirmed areas and ten confirmed gameplay systems.
- Added location and gameplay hubs, updated navigation/discovery, refreshed sitemap and redirects, and added an automated technical/semantic SEO audit.
- Excluded unknown character, gift, crop, quest and item leaves from the sitemap until they have concrete answers.

## Second-round implementation in this package

- Expanded the site from 55 to 92 canonical pages and from 49 to 92 sitemap URLs; all 92 current pages are indexable and pass the automated audit.
- Added 18 confirmed resident profiles with role, location and relationship context, while withholding unverified schedules, gift preferences and quest rewards.
- Added 14 Ashenridge interior and business pages with concrete map purpose, resident connections and verification boundaries.
- Added five investigation/mechanics guides covering the journal and clues, killer campaigns, character deaths, saving residents and the one-year calendar.
- Reworked the achievements, calendar, endings, gifts, quests and suspects hubs into answer-first pages and promoted them from `noindex` after they passed the semantic quality gate.
- Strengthened title and description length checks, JSON-LD validation, internal-link checks and exact indexable-canonical-to-sitemap parity checks.
