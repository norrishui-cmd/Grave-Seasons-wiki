# GraveSeasons Wiki & Guide Research and SEO Notes

## Public Information Summary

- Game: Grave Seasons
- Developer: Perfect Garbage
- Publishing context: Blumhouse Games has publicly presented the project
- Positioning: pixel-art farming life sim, town social sim, romance routes, and murder mystery
- Known hook: the player farms in Ashenridge while investigating murders that may continue across an in-game year
- Key design implication: the killer can vary, so the guide should support evidence tracking instead of only publishing one fixed answer

## What GraveSeasons Wiki & Guide Must Include

1. The first screen should communicate the hybrid promise: farming, relationships, and murder investigation.
2. Search must be prominent because players will repeatedly look up crops, gifts, residents, locations, quests, and suspects.
3. A beginner route is essential, especially for day one, week one, and the first season.
4. Resident pages are core traffic drivers. They should include birthday, schedule, gifts, romance events, and case relevance.
5. Crop and economy tables are evergreen guide content. They need season, cost, growth time, sale value, regrowth, and processing value.
6. The mystery layer needs a spoiler-safe default mode.
7. Since the killer can change, the site should provide evidence weighting and verification methods rather than a single hardcoded solution.
8. Map, shop hours, NPC locations, and event trigger pages will become high-frequency tools after launch.
9. Version and patch notes matter for quest blockers, bugs, and balance changes.
10. Content templates should be ready before launch so verified data can be added quickly.

## Implemented Site Features

- Static English guide homepage
- Search and category filtering
- First-week beginner route
- Guide database cards
- Field-template modal windows
- Spoiler-safe suspect tracker
- Locally saved suspicion levels
- Spoiler example toggle
- Pre-launch, launch-week, and long-term content roadmap
- Canonical domain: `https://graveseasons.wiki/`
- `robots.txt` with sitemap declaration
- Valid `sitemap.xml` for all public pages
- SEO landing pages for release date, characters, crops, romance, suspects, platforms, FAQ, and About
- Pretty canonical URLs: `/release-date/`, `/beginner-guide/`, `/characters/`, `/crops/`, `/gifts/`, `/romance/`, `/suspects/`, `/endings/`, `/platforms/`, `/faq/`, and `/about/`
- Added missing content hubs for this genre: `/guide-index/`, `/calendar/`, `/map/`, `/quests/`, `/resources/`, and `/achievements/`
- Added deeper non-thin genre hubs supported by official feature descriptions: `/investigation/`, `/killers-and-victims/`, `/crafting-and-occult-items/`, `/fishing-and-mining/`, and `/farm-upgrades/`
- Homepage hero includes a release-window countdown based on the official public 2026 window. Exact release date remains TBA and should be updated when an official day is announced.
- Legacy `.html` pages are retained only as compatibility copies and canonicalize to the pretty URL version
- Redirect rules are included for Netlify/Cloudflare Pages style `_redirects` and Apache `.htaccess`

## Google Search Console Upload Notes

- Upload the contents of this folder to the web root of `graveseasons.wiki`.
- Confirm these URLs return HTTP 200:
  - `https://graveseasons.wiki/`
  - `https://graveseasons.wiki/robots.txt`
  - `https://graveseasons.wiki/sitemap.xml`
- In Google Search Console, submit `https://graveseasons.wiki/sitemap.xml`.
- If GSC asks for site ownership verification, add the exact Google verification HTML file or meta tag it provides. That token is unique to your GSC property and cannot be guessed in advance.

## Recommended Next Steps

- Move the guide database into Markdown, JSON, or a headless CMS
- Add resident, crop, location, and clue detail pages
- Fill exact data after release
- Add community submissions and evidence confidence voting
- Create three spoiler tiers: spoiler-free hints, light spoilers, and full walkthroughs


- Favicon files: /favicon.ico and /favicon.svg for browser tabs and Google search result branding.

