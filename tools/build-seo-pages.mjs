import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const site = "https://graveseasons.wiki";
const updated = "2026-07-17";

const pages = [
  {
    slug: "release-date/delay",
    title: "Why Was Grave Seasons Delayed? | Fall 2026 Release Update",
    description: "Grave Seasons is now scheduled for Fall 2026 instead of August 14. See the current official release status and what remains unconfirmed.",
    label: "Release update",
    h1: "Why Was Grave Seasons Delayed?",
    answer: "Grave Seasons is no longer scheduled for August 14, 2026. Blumhouse Games now lists the launch window as Fall 2026, while Steam lists only 2026. No replacement day has been announced.",
    facts: ["Current official window: Fall 2026", "Former date: August 14, 2026", "Replacement day and launch time: not announced", "Developer: Perfect Garbage", "Publisher: Blumhouse Games"],
    sections: [
      ["What changed?", "The previously announced August 14 date is outdated. The publisher's current Grave Seasons page now says Fall 2026, and the Steam store has reverted to a broader 2026 date. Until both sources publish a new day, countdowns to August 14 should not be treated as current."],
      ["What players should do", "Keep the game wishlisted on the storefront you plan to use. A wishlist notification is more reliable than third-party countdowns while the date is unsettled. This wiki will update the release hub after a new day is published by Perfect Garbage, Blumhouse Games, or an official storefront."],
      ["What the delay does not change", "The public game description still presents Grave Seasons as a single-player narrative farming and life sim set in Ashenridge. Farming, crafting, relationships, investigation, victim protection, multiple killer campaigns, and the one-year story structure remain part of the official feature set."],
    ],
    related: [["/release-date/", "Release date hub"], ["/demo/", "Demo status"], ["/platforms/", "All platforms"]],
  },
  {
    slug: "demo",
    title: "Grave Seasons Demo | Current Availability and Download Status",
    description: "Is there a Grave Seasons demo? Check the current Steam demo status, what was previously announced, and how to follow official updates.",
    label: "Demo status",
    h1: "Is There a Grave Seasons Demo?",
    answer: "No public Grave Seasons demo is currently available on Steam. The store page has no playable demo button, and the official release pages direct players to wishlist the full game.",
    facts: ["Playable public demo: not currently available", "Steam store page: live for wishlisting", "Full game window: Fall 2026", "Demo save transfer: not announced", "Demo platforms: not announced"],
    sections: [
      ["Can you download the demo now?", "No. A listing, trailer, preview build, or convention hands-on does not mean a public build is downloadable. Use the Steam store page itself as the final availability check: a real public demo will have its own download control."],
      ["Will demo progress carry over?", "There is no confirmed public demo and no official save-transfer policy. Any claim that progress will carry into the full game would be speculation. If a demo appears later, verify its store description or developer announcement before planning a long save."],
      ["How to avoid fake downloads", "Do not install unofficial files described as leaked demos, cracked builds, or early access keys. Follow links from the official publisher page or the verified Steam listing. The game is not yet released, so third-party download claims deserve extra caution."],
    ],
    related: [["/release-date/", "Release date"], ["/platforms/pc/", "PC version"], ["/faq/", "FAQ"]],
  },
  {
    slug: "platforms/pc",
    title: "Grave Seasons PC | Steam Release, Languages, and Requirements",
    description: "Grave Seasons is coming to PC through Steam in 2026. Review its current release status, supported languages, features, and system requirements.",
    label: "Platform guide",
    h1: "Grave Seasons on PC",
    answer: "Yes. Grave Seasons is officially listed for PC on Steam, with a 2026 release window. The page supports wishlisting but the game is not yet available to buy or download.",
    facts: ["PC storefront: Steam", "Release status: upcoming", "Current window: 2026 / Fall 2026 on publisher site", "Single-player: confirmed", "Steam Achievements: listed", "Family Sharing: listed"],
    sections: [
      ["What is confirmed for PC?", "The Steam page lists Perfect Garbage as developer and Blumhouse Games as publisher. It categorizes the game as Indie, RPG, and Simulation and lists single-player, Steam Achievements, and Family Sharing among its features."],
      ["Can you check performance requirements?", "Only a 64-bit processor and operating system are currently stated. CPU, GPU, memory, storage, and operating-system details remain TBD, so it is too early to promise performance on a particular PC."],
      ["PC launch checklist", "Wishlist the correct Steam app, wait for complete requirements, and avoid preorder or key listings that are not linked from an official storefront. After release, this page will add install size, graphics options, controller support, and verified performance."],
    ],
    related: [["/system-requirements/", "System requirements"], ["/steam-deck/", "Steam Deck status"], ["/languages/", "Supported languages"]],
  },
  {
    slug: "platforms/playstation-5",
    title: "Grave Seasons PS5 | PlayStation Release Date and Store Status",
    description: "Grave Seasons is officially coming to PS5. Check the PlayStation Store status, release window, gameplay features, and what is not yet confirmed.",
    label: "Platform guide",
    h1: "Is Grave Seasons Coming to PS5?",
    answer: "Yes. Grave Seasons has an official PlayStation Store listing for PS5. The game is planned for 2026, with the publisher currently identifying Fall 2026 as the launch window.",
    facts: ["Platform: PlayStation 5", "Store page: available", "Release year: 2026", "PS4 version: not listed", "Price: not announced", "Preload time: not announced"],
    sections: [
      ["What is on the PS5 listing?", "The PlayStation description confirms farming, fishing, mining, selling goods, murder investigation, crafting protective items, quests, friendship, romance, and story consequences. It identifies Blumhouse Games as publisher."],
      ["Is there a PS4 version?", "No PS4 edition is shown on the official PlayStation listing. Unless the publisher adds one, the confirmed PlayStation version is PS5 only. Backward compatibility is therefore not relevant to the announced edition."],
      ["What remains unknown?", "The digital price, download size, trophy list, exact launch hour, performance modes, and preload schedule have not been published. Treat retailer placeholders as unconfirmed until the PlayStation Store or publisher provides the details."],
    ],
    related: [["/platforms/", "Platform overview"], ["/release-date/", "Release date"], ["/multiplayer/", "Multiplayer status"]],
  },
  {
    slug: "platforms/xbox-series-xs",
    title: "Grave Seasons Xbox Series X|S | Release and Game Pass Status",
    description: "Grave Seasons is coming to Xbox Series X|S. See the current 2026 release window, Xbox Game Pass status, and confirmed game features.",
    label: "Platform guide",
    h1: "Grave Seasons on Xbox Series X|S",
    answer: "Yes. Grave Seasons is officially announced for Xbox Series X|S, with a 2026 release window. It has also been announced for Xbox Game Pass.",
    facts: ["Platforms: Xbox Series X and Series S", "Release year: 2026", "Xbox Game Pass: announced", "Xbox One version: not announced", "Price and preload: not announced"],
    sections: [
      ["Will it launch on both Series consoles?", "The announced Xbox edition is for the Series X|S generation. Exact resolution, frame-rate targets, install size, and differences between Series X and Series S have not been detailed."],
      ["Is it included with Game Pass?", "The game has been presented as a Game Pass title. Subscription tier, region availability, and the exact time it becomes playable should be checked again on the Xbox listing close to launch."],
      ["Is Xbox One supported?", "No Xbox One version is currently announced. Players on older hardware should not assume an edition or cloud option until Microsoft or the publisher adds it to the official listing."],
    ],
    related: [["/xbox-game-pass/", "Game Pass guide"], ["/release-date/", "Release date"], ["/platforms/pc/", "PC version"]],
  },
  {
    slug: "platforms/nintendo-switch",
    title: "Grave Seasons Nintendo Switch | Release Status and Open Questions",
    description: "Grave Seasons is announced for Nintendo Switch. Check the current release window and which Switch performance and store details remain unconfirmed.",
    label: "Platform guide",
    h1: "Is Grave Seasons Coming to Nintendo Switch?",
    answer: "Yes. Nintendo Switch is part of the officially announced Grave Seasons platform lineup. The game is planned for 2026, with Fall 2026 shown by the publisher.",
    facts: ["Nintendo Switch version: announced", "Release year: 2026", "Exact launch day: not announced", "Price: not announced", "Performance and file size: not announced"],
    sections: [
      ["What is confirmed?", "Grave Seasons is designed as a single-player farming, life-sim, RPG, and supernatural murder mystery. The announced systems include seasonal farming, crafting, relationships, investigation, and changing story outcomes."],
      ["What should Switch players wait for?", "The publisher has not provided frame-rate, resolution, loading-time, control, file-size, or handheld-mode details. Those questions should become separate performance guides only after official specifications or a verified retail build exists."],
      ["Avoid edition confusion", "Store databases can retain old dates after a delay. Use the publisher's Fall 2026 window and the live Nintendo product page once it appears, rather than relying on cached August 14 records."],
    ],
    related: [["/platforms/", "Platform overview"], ["/release-date/delay/", "Delay update"], ["/demo/", "Demo status"]],
  },
  {
    slug: "xbox-game-pass",
    title: "Is Grave Seasons on Xbox Game Pass? | Current Launch Status",
    description: "Grave Seasons has been announced for Xbox Game Pass. See its current Fall 2026 window and which subscription and preload details are pending.",
    label: "Subscription guide",
    h1: "Is Grave Seasons Coming to Xbox Game Pass?",
    answer: "Yes. Grave Seasons has been announced for Xbox Game Pass alongside its Xbox Series X|S and PC release. The current publisher window is Fall 2026, but the exact day is not yet set.",
    facts: ["Game Pass availability: announced", "Xbox Series X|S: confirmed", "PC: confirmed", "Exact Game Pass unlock time: not announced", "Required subscription tier: verify at launch"],
    sections: [
      ["Is it a day-one Game Pass game?", "Launch messaging has included Game Pass, but the date has since moved from August 14 to Fall 2026. The safest reading is that Game Pass remains planned; the exact availability date should be rechecked when a replacement launch day is posted."],
      ["Will it be on PC Game Pass?", "PC is an announced platform, and the game has appeared in Xbox launch coverage. However, the final Xbox store entry should be used to distinguish console and PC subscription availability by region and tier."],
      ["Do you need to buy it?", "A valid subscription normally grants access while a title remains in the catalog. Buying may still be useful for permanent ownership, but price, discounts, and catalog duration are not confirmed."],
    ],
    related: [["/platforms/xbox-series-xs/", "Xbox version"], ["/release-date/", "Release date"], ["/platforms/pc/", "PC version"]],
  },
  {
    slug: "languages",
    title: "Grave Seasons Languages | English, Japanese, Chinese, Spanish, Portuguese",
    description: "Grave Seasons currently lists five supported languages on Steam. Compare interface, subtitles, and full-audio support before launch.",
    label: "Accessibility",
    h1: "Grave Seasons Supported Languages",
    answer: "Steam currently lists English, Japanese, Brazilian Portuguese, Simplified Chinese, and Latin American Spanish. English has interface, full audio, and subtitles; the other four list interface and subtitles.",
    facts: ["English: interface, full audio, subtitles", "Japanese: interface and subtitles", "Portuguese - Brazil: interface and subtitles", "Simplified Chinese: interface and subtitles", "Spanish - Latin America: interface and subtitles"],
    sections: [
      ["Is there voice acting?", "English is the only language currently marked for full audio on Steam. The other listed languages support text interface and subtitles, not full localized voice acting."],
      ["Could more languages be added?", "Store language tables can change before release, but no additional localization should be promised without a store update. French, German, Korean, Traditional Chinese, and other languages are not currently shown in the Steam table."],
      ["How to choose a version", "Language availability can vary by storefront or region. Check the product page for your platform before purchase, especially if you need a specific subtitle language or accessibility feature."],
    ],
    related: [["/platforms/pc/", "PC version"], ["/faq/", "FAQ"], ["/release-date/", "Release date"]],
  },
  {
    slug: "multiplayer",
    title: "Is Grave Seasons Multiplayer or Co-op? | Single-Player Status",
    description: "Grave Seasons is currently listed as a single-player game. Check the co-op, online multiplayer, local multiplayer, and crossplay status.",
    label: "Game mode",
    h1: "Is Grave Seasons Multiplayer?",
    answer: "No multiplayer mode is currently announced. Steam lists Grave Seasons as single-player, and the official feature descriptions focus on one player's year in Ashenridge.",
    facts: ["Single-player: confirmed", "Online co-op: not announced", "Local co-op: not announced", "Competitive multiplayer: not announced", "Crossplay: not applicable to the current feature set"],
    sections: [
      ["Can you farm with friends?", "There is no official co-op farming mode. Relationships, investigation choices, deaths, autosaved decisions, and campaign selection are described around a single player's story."],
      ["Could co-op be added later?", "The developer has not promised it. A future update is always possible, but creating co-op setup or crossplay pages before an announcement would mislead players."],
      ["What can vary between solo playthroughs?", "Replayability comes from the selected killer campaign, resident survival, seasons, choices, relationships, and tracked work from previous years—not from multiplayer sessions."],
    ],
    related: [["/how-long/", "Story length"], ["/killers-and-victims/", "Killer campaigns"], ["/platforms/", "Platforms"]],
  },
  {
    slug: "system-requirements",
    title: "Grave Seasons System Requirements | Current PC Specs",
    description: "Check the current Grave Seasons PC system requirements. Steam confirms a 64-bit processor and OS, while CPU, GPU, RAM, and storage remain TBD.",
    label: "PC requirements",
    h1: "Grave Seasons System Requirements",
    answer: "Full PC specifications are not published yet. Steam currently states only that a 64-bit processor and operating system are required for both minimum and recommended configurations.",
    facts: ["64-bit processor: required", "64-bit operating system: required", "Minimum OS: TBD", "CPU, RAM, GPU, storage: TBD", "Recommended specification: TBD"],
    sections: [
      ["Can your PC run it?", "There is not enough official information to answer reliably. Pixel art and an isometric camera do not guarantee low requirements because lighting, simulation, effects, and optimization also affect performance."],
      ["Do not trust guessed spec pages", "Third-party requirement calculators may invent a CPU or graphics card when the official table is blank. Wait for Steam to publish concrete minimum and recommended hardware."],
      ["What this page will track", "Once specifications appear, the table should record operating system, processor, memory, graphics, DirectX, storage, controller support, and any SSD note. Verified launch testing can then add practical 30 fps and 60 fps guidance."],
    ],
    related: [["/platforms/pc/", "PC version"], ["/steam-deck/", "Steam Deck status"], ["/release-date/", "Release date"]],
  },
  {
    slug: "steam-deck",
    title: "Grave Seasons Steam Deck | Compatibility Status",
    description: "Grave Seasons does not yet have an official Steam Deck compatibility rating. Learn what is confirmed and when reliable performance guidance is possible.",
    label: "Compatibility",
    h1: "Will Grave Seasons Work on Steam Deck?",
    answer: "Steam Deck compatibility is not confirmed. The game is listed for PC, but Steam does not currently show a Verified, Playable, Unsupported, or Unknown test result on the public listing.",
    facts: ["PC release: confirmed", "Steam Deck rating: not published", "Linux support: not listed", "Controller details: not published", "Performance targets: not published"],
    sections: [
      ["Why PC support is not enough", "A Steam release does not automatically mean good Deck support. Text size, controller mapping, launcher behavior, video codecs, performance, and sleep/resume can all affect Valve's compatibility result."],
      ["When will the answer be reliable?", "The strongest evidence will be a Valve compatibility badge or testing on the final retail build. Preview impressions can be useful, but patches near release may change performance and controls."],
      ["What to check at launch", "Look for native controller prompts, readable interface text, stable frame pacing, battery use, cloud saves, and whether the game resumes correctly after sleep. This page should only publish settings after repeatable testing."],
    ],
    related: [["/system-requirements/", "PC requirements"], ["/platforms/pc/", "PC version"], ["/demo/", "Demo status"]],
  },
  {
    slug: "how-long",
    title: "How Long Is Grave Seasons? | One-Year Story Structure Explained",
    description: "Grave Seasons gives players one in-game year to confront the killer, but real-world completion time and day length are not yet confirmed.",
    label: "Story structure",
    h1: "How Long Is Grave Seasons?",
    answer: "The campaign is structured around one in-game year, but the developer has not published a real-world hour estimate. Day length, pause behavior, ending pace, and completionist time remain unknown before release.",
    facts: ["Main story structure: one in-game year", "Real-time campaign length: not announced", "Multiple killer campaigns: confirmed", "Replay tracking: confirmed", "Completionist estimate: not available"],
    sections: [
      ["Does one year mean one playthrough?", "Official copy says you have one year to protect victims and discover the killer. Choices are autosaved, and resident deaths or survival unlock different stories within that year."],
      ["Why replay length matters", "Each playthrough selects a potential supernatural killer from a pool of authored campaigns. A different killer changes reasoning, kill style, and targets, so seeing every branch should require more than one year."],
      ["What not to estimate yet", "Without a retail build, claims such as 20 hours, 40 hours, or a fixed number of minutes per day are guesses. A proper length guide needs at least a main-story run, a side-content run, and multiple campaign samples."],
    ],
    related: [["/calendar/", "Calendar"], ["/day-night-cycle/", "Day-night cycle"], ["/killers-and-victims/", "Killer campaigns"]],
  },
  ...[
    ["locations/farm", "Your Farm", "The farm sits at the top of the mountain and is the player's home production area. Official features confirm seasonal crops, multiple farm-plot types, kitchen and shed recipes, tool and building upgrades, and aesthetic customization options.", "farming, crafting, upgrading buildings, and preparing protective items"],
    ["locations/mountainside", "The Mountainside", "The Mountainside is one of seven named major areas in Ashenridge. The player's farm is described as sitting at the top of the mountain, making this region a likely connection between home and the town below; exact sublocations are not yet published.", "route planning, foraging, resident schedules, and historical discoveries"],
    ["locations/forest", "The Forest", "The Forest is one of Ashenridge's seven confirmed major areas. Official materials connect exploration and foraging with discovering local history and gathering resources, but specific forage tables, characters, and opening hours are not public yet.", "foraging, seasonal resources, investigation routes, and changing world states"],
    ["locations/local-district", "Ashenridge Local District", "The Local District is one of seven confirmed major areas in Ashenridge. The game contains more than 70 interiors and more than 30 residents overall, but official sources do not yet assign specific buildings or residents to this district.", "resident schedules, quests, relationships, and case clues"],
    ["locations/commercial-district", "Ashenridge Commercial District", "The Commercial District is one of Ashenridge's seven named areas. The game lets players participate in the local economy by selling goods in town, but store names, inventories, prices, and opening hours remain unconfirmed.", "selling farm goods, shopping, upgrades, quests, and social routes"],
    ["locations/coast-and-docks", "The Coast & Docks", "The Coast & Docks is a confirmed major area of Ashenridge. Fishing is an official activity and fish or mined ingredients can help unravel mysteries, though species, seasons, weather, and exact fishing spots are not yet known.", "fishing, ingredients, resident schedules, and investigation clues"],
    ["locations/mines", "The Mines", "The Mines are one of the seven confirmed major areas. Mining and ingredient discovery are official mechanics, while floor count, hazards, ore tables, tools, combat, and reset rules have not been published.", "mining, ingredients, crafting materials, upgrades, and mystery progress"],
  ].map(([slug, place, answer, uses]) => ({
    slug,
    title: `Grave Seasons ${place} | Ashenridge Location Guide`,
    description: `Explore ${place} in Grave Seasons. Review confirmed activities, current unknowns, and the verified location details to track at launch.`,
    label: "Ashenridge location",
    h1: `Grave Seasons: ${place}`,
    answer,
    facts: [`Official major area: yes`, `Part of Ashenridge: yes`, `Exact map and sublocations: not published`, `Primary guide uses: ${uses}`],
    sections: [
      ["What is confirmed", `${place} appears in the official list of seven major places to visit. Ashenridge has more than 70 interiors across the wider town, and locations can change with the active killer, resident survival, and season.`],
      ["What this guide will map", `At launch, this page should record entrances, travel time, interiors, residents by time and season, resource nodes, quest triggers, clue locations, locked doors, and links to every relevant item or character page.`],
      ["Pre-release quality rule", `No invented store, NPC, item, fish, crop, mine floor, or schedule belongs here. Until verified gameplay data exists, this page separates official facts from the fields that still need testing.`],
    ],
    related: [["/map/", "Ashenridge map"], ["/ashenridge/", "Town overview"], ["/locations/", "All locations"]],
  })),
  ...[
    ["gameplay/farming", "Farming", "Grave Seasons includes seasonal crops grown on different types of farm plots. Harvests support the town economy and also play a role in solving Ashenridge's mysteries."],
    ["gameplay/character-customization", "Character Customization", "Player-character customization is confirmed, and the farm includes potential aesthetic choices. The complete option list has not been shown."],
    ["gameplay/autosave-and-choices", "Autosave and Choices", "The game checks and autosaves decisions to shape the story. Character deaths and survival unlock different storylines, so choices can carry lasting consequences."],
    ["gameplay/replayability", "Replayability", "Each new year can select a supernatural killer from a pool of candidates, with authored reasoning, kill styles, and targets. Previous work is also tracked across replays."],
  ].map(([slug, mechanic, answer]) => ({
    slug,
    title: `Grave Seasons ${mechanic} Guide | Confirmed Gameplay Explained`,
    description: `How ${mechanic.toLowerCase()} works in Grave Seasons: confirmed mechanics, story connections, current unknowns, and launch-day testing priorities.`,
    label: "Gameplay system",
    h1: `How ${mechanic} Works in Grave Seasons`,
    answer,
    facts: [`Mechanic officially described: yes`, `Exact values and unlock steps: not fully published`, `May change by season, choice, survival state, or killer campaign`, `Launch data must be verified in the retail build`],
    sections: [
      ["Why this system matters", `${mechanic} is connected to the wider farming-mystery loop rather than standing alone. Progress can affect resources, relationships, evidence, resident survival, or the story that becomes available.`],
      ["What remains unconfirmed", `Exact unlock dates, costs, values, schedules, rewards, failure conditions, and optimization routes should not be guessed before release. Preview footage can establish a feature, but not a final database value.`],
      ["Launch-day verification plan", `Test the tutorial explanation, first unlock, UI labels, time and stamina effects, required items, relationship or story consequences, and whether the behavior changes across seasons or killer campaigns.`],
    ],
    related: [["/beginner-guide/", "Beginner guide"], ["/guide-index/", "Guide index"], ["/faq/", "FAQ"]],
  })),
];

pages.push({
  slug: "locations",
  title: "Grave Seasons Locations | All 7 Ashenridge Areas",
  description: "Explore all seven confirmed Grave Seasons areas: the Farm, Mountainside, Forest, Local District, Commercial District, Coast & Docks, and Mines.",
  label: "Map hub",
  h1: "Grave Seasons Locations",
  answer: "Ashenridge has seven confirmed major areas: Your Farm, the Mountainside, the Forest, the Local District, the Commercial District, the Coast & Docks, and the Mines. Official copy also promises more than 70 interiors across the town.",
  facts: ["Major areas: 7", "Interiors: 70+", "Residents: 30+", "Location state can vary by season", "Routes may change with killer and survival state"],
  sections: [
    ["Complete area list", `<ul class="check-list"><li><a href="/locations/farm/">Your Farm</a></li><li><a href="/locations/mountainside/">The Mountainside</a></li><li><a href="/locations/forest/">The Forest</a></li><li><a href="/locations/local-district/">Local District</a></li><li><a href="/locations/commercial-district/">Commercial District</a></li><li><a href="/locations/coast-and-docks/">Coast &amp; Docks</a></li><li><a href="/locations/mines/">The Mines</a></li></ul>`],
    ["How the location database will grow", "Each verified interior should eventually have one canonical page with access hours, residents, items, quests, clue relevance, season changes, and adjacent places. Empty combinations should never be indexed."],
    ["Why location state matters", "The official description says Ashenridge changes depending on the active killer, who remains alive, and the season. Location pages therefore need state-specific notes instead of a single universal schedule."],
  ],
  related: [["/map/", "Map guide"], ["/characters/", "Residents"], ["/quests/", "Quests"]],
});

function escapeJson(value) {
  return JSON.stringify(value).replaceAll("<", "\\u003c");
}

function render(page) {
  const url = `${site}/${page.slug}/`;
  const related = page.related.map(([href, text]) => `<a href="${href}">${text}</a>`).join("\n          ");
  const facts = page.facts.map((fact) => `<li>${fact}</li>`).join("\n            ");
  const sections = page.sections.map(([heading, body]) => `<section class="page-panel"><h2>${heading}</h2>${body.startsWith("<") ? body : `<p>${body}</p>`}</section>`).join("\n      ");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {"@type": "WebPage", "@id": `${url}#webpage`, url, name: page.h1, description: page.description, dateModified: updated, isPartOf: {"@id": `${site}/#website`}, inLanguage: "en"},
      {"@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [
        {"@type": "ListItem", position: 1, name: "Home", item: `${site}/`},
        {"@type": "ListItem", position: 2, name: page.h1, item: url},
      ]},
    ],
  };
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${page.title}</title>
    <meta name="description" content="${page.description}" />
    <link rel="canonical" href="${url}" />
    <link rel="icon" href="/favicon.ico" sizes="48x48" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="robots" content="index,follow,max-image-preview:large" />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="GraveSeasons Wiki & Guide" />
    <meta property="og:title" content="${page.h1}" />
    <meta property="og:description" content="${page.description}" />
    <meta property="og:url" content="${url}" />
    <meta property="article:modified_time" content="${updated}T00:00:00Z" />
    <meta name="twitter:card" content="summary" />
    <script type="application/ld+json">${escapeJson(schema)}</script>
    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body>
    <header class="site-header">
      <a class="brand" href="/"><span class="brand-mark" aria-hidden="true">GS</span><span>GraveSeasons Wiki & Guide</span></a>
      <nav aria-label="Primary navigation"><a href="/guide-index/">Guides</a><a href="/release-date/">Release</a><a href="/gameplay/">Gameplay</a><a href="/characters/">Characters</a><a href="/locations/">Locations</a><a href="/items-database/">Items</a><a href="/faq/">FAQ</a></nav>
    </header>
    <main class="content-page">
      <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">›</span><span>${page.h1}</span></nav>
      <p class="section-label">${page.label}</p>
      <h1>${page.h1}</h1>
      <p class="lead direct-answer">${page.answer}</p>
      <aside class="fact-box" aria-label="Quick facts"><h2>Quick facts</h2><ul class="check-list">${facts}</ul></aside>
      ${sections}
      <section class="page-panel source-note"><h2>Sources and update policy</h2><p>Current facts are checked against the <a href="https://www.blumhouse.com/games/grave-seasons" rel="noopener noreferrer">official publisher page</a>, the <a href="https://store.steampowered.com/app/3255110/Grave_Seasons/" rel="noopener noreferrer">official Steam listing</a>, and official console storefronts where relevant. Last reviewed: July 17, 2026. Unannounced details are labeled rather than inferred.</p></section>
      <nav class="related-links" aria-label="Related guides">${related}</nav>
    </main>
    <footer><p>Unofficial GraveSeasons Wiki & Guide. Not affiliated with Perfect Garbage or Blumhouse Games.</p></footer>
  </body>
</html>\n`;
}

for (const page of pages) {
  const dir = path.join(root, page.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), render(page));
}

const gameplayLinks = pages.filter((p) => p.slug.startsWith("gameplay/")).map((p) => `<article><h2><a href="/${p.slug}/">${p.h1.replace("How ", "").replace(" Works in Grave Seasons", "")}</a></h2><p>${p.answer}</p></article>`).join("\n        ");
const establishedGameplayLinks = `<article><h2><a href="/crafting-and-occult-items/">Crafting &amp; Occult Items</a></h2><p>Kitchen, shed, and protective crafting.</p></article><article><h2><a href="/investigation/">Investigation</a></h2><p>Clues, residents, choices, and killer campaigns.</p></article><article><h2><a href="/romance/">Romance</a></h2><p>Twelve potential romance options and story consequences.</p></article><article><h2><a href="/victim-protection/">Victim Protection</a></h2><p>Identify danger and craft protective items.</p></article><article><h2><a href="/break-ins/">Breaking and Entering</a></h2><p>Search homes for clues without getting caught.</p></article><article><h2><a href="/day-night-cycle/">Day and Night</a></h2><p>Schedules and a 24+ hour activity cycle.</p></article>`;
const gameplayHub = render({
  slug: "gameplay",
  title: "Grave Seasons Gameplay Guide | Farming, Romance, Mystery, and Choices",
  description: "Explore confirmed Grave Seasons gameplay systems: farming, crafting, investigation, romance, victim protection, day and night, choices, and replayability.",
  label: "Gameplay hub",
  h1: "Grave Seasons Gameplay Guide",
  answer: "Grave Seasons combines seasonal farming and town life with an authored supernatural murder mystery. Farming, crafting, quests, relationships, investigation, victim protection, choices, and replay campaigns are connected systems.",
  facts: ["Genre: narrative farming and life simulation", "Story: supernatural murder mystery", "Residents: 30+", "Romance options: 12", "Items: 600+", "Campaign structure: one in-game year"],
  sections: [["Confirmed gameplay systems", `<div class="template-grid">${gameplayLinks}${establishedGameplayLinks}</div>`], ["How guides will be verified", "Pre-release pages describe only public features. After launch, exact mechanics will be tested in the retail build and separated by season, story state, killer campaign, and resident survival where necessary."], ["Spoiler policy", "Hub pages remain spoiler-safe. Killer identities, victims, endings, and irreversible choice outcomes belong behind clear spoiler warnings on dedicated pages."]],
  related: [["/beginner-guide/", "Beginner guide"], ["/locations/", "Locations"], ["/investigation/", "Investigation hub"]],
});
fs.mkdirSync(path.join(root, "gameplay"), { recursive: true });
fs.writeFileSync(path.join(root, "gameplay/index.html"), gameplayHub);

for (const obsolete of [
  "gameplay/crafting", "gameplay/investigation", "gameplay/romance",
  "gameplay/victim-protection", "gameplay/breaking-and-entering", "gameplay/day-night",
]) {
  fs.rmSync(path.join(root, obsolete), { recursive: true, force: true });
}

for (const legacyFile of [
  "about.html", "characters.html", "crops.html", "faq.html",
  "platforms.html", "release-date.html", "romance.html", "suspects.html",
]) {
  fs.rmSync(path.join(root, legacyFile), { force: true });
}

const canonicalPages = [];
function collectIndexFiles(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (["tools", ".git"].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) collectIndexFiles(full);
    else if (entry.name === "index.html") canonicalPages.push(full);
  }
}
collectIndexFiles(root);
const indexablePages = canonicalPages.filter((file) => !/name="robots" content="noindex,follow/.test(fs.readFileSync(file, "utf8")));
const sitemapEntries = indexablePages.map((file) => {
  const rel = path.relative(root, path.dirname(file)).replaceAll(path.sep, "/");
  const loc = rel === "" ? `${site}/` : `${site}/${rel}/`;
  return `  <url><loc>${loc}</loc><lastmod>${updated}</lastmod></url>`;
}).sort().join("\n");
fs.writeFileSync(path.join(root, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`);

console.log(`Generated ${pages.length + 1} SEO pages and a ${indexablePages.length}-URL sitemap.`);
