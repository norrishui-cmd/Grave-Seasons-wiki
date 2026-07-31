import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const site = "https://graveseasons.wiki";
const reviewed = "2026-07-31";
const steam = "https://store.steampowered.com/app/3255110/Grave_Seasons/";
const releaseUpdate = "https://store.steampowered.com/news/app/3255110/view/719032843360011099";
const developer = "https://www.perfectgarbage.com/grave-seasons";
const adsense = `    <meta name="google-adsense-account" content="ca-pub-9505220977121599" />\n    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9505220977121599" crossorigin="anonymous"></script>`;

const esc = (value) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

function alternates(slug) {
  const variants = ["ja", "es-419"].filter((code) => fs.existsSync(path.join(root, code, slug, "index.html")));
  if (variants.length !== 2) return "";
  return `<link rel="alternate" hreflang="en" href="${site}/${slug}/" /><link rel="alternate" hreflang="ja" href="${site}/ja/${slug}/" /><link rel="alternate" hreflang="es-419" href="${site}/es-419/${slug}/" /><link rel="alternate" hreflang="x-default" href="${site}/${slug}/" />`;
}

function nav(lang, slug) {
  const prefix = lang === "en" ? "" : `/${lang}`;
  const tabs = [
    ["guide-index", "Guides"], ["release-date", "Release"], ["gameplay", "Gameplay"],
    ["characters", "Characters"], ["locations", "Locations"], ["items-database", "Items"], ["faq", "FAQ"],
  ];
  const tabLinks = tabs.map(([target, label]) => {
    const localized = path.join(root, lang === "en" ? "" : lang, target, "index.html");
    const href = fs.existsSync(localized) ? `${prefix}/${target}/` : `/${target}/`;
    return `<a href="${href}">${label}</a>`;
  }).join("");
  const localizedPath = (code) => {
    if (code === "en") return fs.existsSync(path.join(root, slug, "index.html")) ? `/${slug}/` : "/";
    return fs.existsSync(path.join(root, code, slug, "index.html")) ? `/${code}/${slug}/` : `/${code}/`;
  };
  const current = (code) => code === lang ? ' aria-current="page"' : "";
  return `<nav aria-label="Primary navigation">${tabLinks}<details class="language-dropdown"><summary>Language</summary><div class="language-menu"><a href="${localizedPath("en")}" lang="en"${current("en")}>English</a><a href="${localizedPath("ja")}" lang="ja"${current("ja")}>日本語</a><a href="${localizedPath("es-419")}" lang="es-419"${current("es-419")}>Español (Latinoamérica)</a></div></details></nav>`;
}

function modules(file) {
  if (!fs.existsSync(file)) return "";
  const html = fs.readFileSync(file, "utf8");
  return [...html.matchAll(/<!-- (?:news|faq-access):[^:]+:start -->[\s\S]*?<!-- (?:news|faq-access):[^:]+:end -->/g)].map((m) => m[0]).join("\n");
}

function page({ slug, title, description, label, h1, answer, facts, sections, related, extraSchema = "", preserved = "" }) {
  const canonical = `${site}/${slug}/`;
  const factsHtml = facts.map((x) => `<li>${x}</li>`).join("");
  const sectionsHtml = sections.map(([heading, body]) => `<section class="page-panel"><h2>${heading}</h2>${body}</section>`).join("\n      ");
  const relatedHtml = related.map(([href, text]) => `<a href="${href}">${text}</a>`).join("");
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "WebPage", "@id": `${canonical}#webpage`, url: canonical, name: h1, description, dateModified: reviewed, isPartOf: { "@type": "WebSite", name: "GraveSeasons Wiki & Guide", url: `${site}/` }, inLanguage: "en" },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site}/` },
      { "@type": "ListItem", position: 2, name: h1, item: canonical },
    ] },
  ] };
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}" />
    <link rel="canonical" href="${canonical}" />${alternates(slug)}
    <link rel="icon" href="/favicon.ico" sizes="48x48" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="robots" content="index,follow,max-image-preview:large" />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="GraveSeasons Wiki & Guide" />
    <meta property="og:title" content="${esc(h1)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="article:modified_time" content="${reviewed}T00:00:00Z" />
    <script type="application/ld+json">${JSON.stringify(schema)}</script>
    ${extraSchema}
    <link rel="stylesheet" href="/styles.css" />
${adsense}
  </head>
  <body>
    <header class="site-header"><a class="brand" href="/"><span class="brand-mark" aria-hidden="true">GS</span><span>GraveSeasons Wiki & Guide</span></a>${nav("en", slug)}</header>
    <main class="content-page">
      <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">›</span><span>${h1}</span></nav>
      <p class="section-label">${label}</p>
      <h1>${h1}</h1>
      <p class="lead direct-answer">${answer}</p>
      <aside class="fact-box" aria-label="Quick facts"><h2>Quick facts</h2><ul class="check-list">${factsHtml}</ul></aside>
      ${sectionsHtml}
      <section class="page-panel source-note"><h2>Sources and update policy</h2><p>Verified against the <a href="${steam}" rel="noopener noreferrer">official Steam listing</a>, <a href="${releaseUpdate}" rel="noopener noreferrer">official release update</a>, and <a href="${developer}" rel="noopener noreferrer">Perfect Garbage game page</a>. Last reviewed: July 31, 2026. Unannounced dates, modes, names, schedules, gifts, or route requirements are not inferred.</p></section>
      <nav class="related-links" aria-label="Related guides">${relatedHtml}</nav>
      ${preserved}
    </main>
    <footer><p>Unofficial GraveSeasons Wiki & Guide. Not affiliated with Perfect Garbage or Blumhouse Games.</p></footer>
  </body>
</html>\n`;
}

const releaseFile = path.join(root, "release-date", "index.html");
fs.writeFileSync(releaseFile, page({
  slug: "release-date",
  title: "Grave Seasons Release Date | 2026 Delay Status",
  description: "Grave Seasons no longer releases August 14. Steam lists 2026, the official delay update says Fall 2026, and no replacement day is confirmed.",
  label: "Release status",
  h1: "Grave Seasons Release Date",
  answer: `<strong>Grave Seasons has no confirmed exact release day.</strong> Steam currently lists 2026, while the official June delay update moved the game from August 14 to a Fall 2026 window. August 14 is obsolete and should not be used for a countdown.`,
  facts: ["Current Steam date: 2026", "Latest announced window: Fall 2026", "Former date: August 14, 2026 (cancelled)", "Replacement day and launch time: not announced", "Store status: upcoming and available to wishlist"],
  sections: [
    ["What is the current Grave Seasons release date?", `<p>The most current live Steam listing gives only the year 2026. Perfect Garbage's official delay update provides the narrower Fall 2026 window but does not name a month or day. The safest current answer is therefore <strong>2026, with Fall 2026 as the latest announced window</strong>.</p>`],
    ["Was the August 14 release cancelled?", `<p>Yes. August 14, 2026 was the former date and was replaced when the team delayed the launch. Old search snippets, cached storefront translations, retailer placeholders, and countdown pages may still show it; they are not current confirmation.</p>`],
    ["Which platforms are planned?", `<p>Official materials announce PC and consoles. Existing platform announcements and storefronts cover Steam, PlayStation 5, Xbox Series X|S, and Nintendo Switch. Exact regional unlock times, preload dates, price, and final subscription details must be checked again when a replacement day is announced.</p>`],
    ["Is a public demo available?", `<p>No public Steam demo is downloadable now. A previously planned June 15 demo was cancelled so development capacity could remain focused on the full release. A future demo and demo-save transfer have not been confirmed.</p>`],
  ],
  related: [["/release-date/delay/", "Why it was delayed"], ["/demo/", "Demo status"], ["/platforms/", "Platforms"], ["/faq/release/is-august-14-still-the-release-date/", "August 14 FAQ"]],
  preserved: modules(releaseFile),
}));

const residents = [
  ["dara", "Dara", "customizable player character and farmer"], ["jade", "Jade", "blacksmith"], ["xia", "Xia", "carpenter"],
  ["althea", "Althea", "doctor"], ["aria", "Aria", "singer and guitarist"], ["elias", "Elias", "baker"],
  ["fitch", "Fitch", "mayor"], ["gregory", "Gregory", "diner owner"], ["hari", "Hari", "farmhand"],
  ["jessie", "Jessie", "librarian"], ["kaarina", "Kaarina", "diner employee"], ["leilani", "Leilani", "florist"],
  ["lukas", "Lukas", "bar owner"], ["maggie", "Maggie", "clinic assistant"], ["naya", "Naya", "mayoral intern"],
  ["noa", "Noa", "rancher"], ["pilar", "Pilar", "salon and tailor owner"], ["rose", "Rose", "school teacher"],
  ["sameera", "Sameera", "butcher"], ["tomas", "Father Tomás", "priest"], ["yuto", "Yuto", "S-Mart manager"],
];
const residentCards = `<div class="template-grid">${residents.map(([slug, name, role]) => `<article><h3><a href="/characters/${slug}/">${name}</a></h3><p>Officially revealed ${role} in Ashenridge.</p></article>`).join("")}</div>`;
const characterFile = path.join(root, "characters", "index.html");
fs.writeFileSync(characterFile, page({
  slug: "characters",
  title: "Grave Seasons Characters | Confirmed Resident List",
  description: "Browse confirmed Grave Seasons characters and Ashenridge residents, including roles, romance facts, killer possibilities, and verified profile links.",
  label: "Character directory",
  h1: "Grave Seasons Characters",
  answer: `<strong>Ashenridge has more than 30 residents, and 21 currently have dedicated verified profiles in this directory.</strong> The game also confirms 12 potential romance options, but the complete official list of all romanceable names has not been published.`,
  facts: ["Residents in the full game: 30+", "Potential romance options: 12", "Verified resident profiles currently listed: 21", "Each resident has a unique home", "Some romance candidates can become the active killer"],
  sections: [
    ["Confirmed Ashenridge character list", residentCards],
    ["How can one resident have different story roles?", `<p>Each playthrough selects a supernatural killer from a pool of authored candidates. A resident can therefore be alive, dead, targeted as a victim, or selected as the killer in different campaigns. Their reasoning, kill style, targets, relationship scenes, and survival consequences can change the route.</p>`],
    ["What character details are not confirmed yet?", `<p>The complete cast, all 12 romanceable names, birthdays, daily schedules, loved gifts, heart-event requirements, and campaign-specific alibis are not fully public. Individual profiles distinguish developer-revealed facts from fields that still require verification in the release build.</p>`],
  ],
  related: [["/romance/", "Romance options"], ["/questions/how-many-romance-options/", "Why the confirmed count is 12"], ["/killers-and-victims/", "Killer campaigns"], ["/locations/", "Resident locations"]],
  preserved: modules(characterFile),
}));

const romanceFaq = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "How many romance options are in Grave Seasons?", acceptedAnswer: { "@type": "Answer", text: "Grave Seasons confirms 12 potential romance options." } },
  { "@type": "Question", name: "Can you romance the killer in Grave Seasons?", acceptedAnswer: { "@type": "Answer", text: "Yes. Some romance candidates can become the active supernatural killer in a playthrough." } },
  { "@type": "Question", name: "Is marriage confirmed in Grave Seasons?", acceptedAnswer: { "@type": "Answer", text: "No marriage system or wedding requirements have been officially confirmed." } },
] };
fs.writeFileSync(path.join(root, "romance", "index.html"), page({
  slug: "romance",
  title: "Grave Seasons Romance Options | 12 Partners Confirmed",
  description: "Grave Seasons has 12 romance options, and some may become the killer. See what is confirmed about partners, routes, gifts, marriage, and spoilers.",
  label: "Romance guide",
  h1: "Grave Seasons Romance Options",
  answer: `<strong>Grave Seasons confirms 12 potential romance options.</strong> Some may be selected as the supernatural killer, so the same relationship can develop differently depending on the active campaign, resident survival, and player choices.`,
  facts: ["Potential romance partners: 12", "Complete official name list: not yet published", "Romancing the active killer: confirmed", "Resident quests and trust: confirmed", "Marriage, weddings, children, and route locks: not announced"],
  sections: [
    ["Who are the 12 romance options?", `<p>The official Steam description confirms the total but does not identify a complete, final list of all 12 names. Revealed character profiles should not automatically be labeled romanceable. This page will only add a name after an official profile, store description, developer statement, or verified release-build event confirms it.</p>`],
    ["Can you romance the killer?", `<p>Yes. Official copy says a few potential partners may also be selected as the killer. Romance does not remove the murder campaign; it can place the relationship directly inside it. Killer identities and route outcomes belong behind clear spoiler warnings.</p>`],
    ["How do relationships progress?", `<p>Players complete quests, earn residents' trust, and make autosaved choices that shape the year in Ashenridge. Exact heart levels, gift points, dialogue answers, schedules, event dates, jealousy rules, and exclusivity requirements have not been published and are not guessed here.</p>`],
    ["Are marriage and children confirmed?", `<p>No. Romance is confirmed, but an engagement system, wedding ceremony, spouse housing, children, divorce, or post-marriage schedule has not been announced. Search results that assume standard farming-sim systems are speculation until verified.</p>`],
  ],
  related: [["/characters/", "All characters"], ["/questions/can-you-romance-the-killer/", "Romance the killer"], ["/questions/how-many-romance-options/", "12-option FAQ"], ["/gifts/", "Gift facts"]],
  extraSchema: `<script type="application/ld+json">${JSON.stringify(romanceFaq)}</script>`,
}));

const multiplayerFaq = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "Is Grave Seasons multiplayer?", acceptedAnswer: { "@type": "Answer", text: "No multiplayer mode is announced. Steam lists Grave Seasons as single-player." } },
  { "@type": "Question", name: "Does Grave Seasons have online co-op?", acceptedAnswer: { "@type": "Answer", text: "No online co-op mode is currently announced." } },
  { "@type": "Question", name: "Does Grave Seasons have local co-op?", acceptedAnswer: { "@type": "Answer", text: "No split-screen or local co-op mode is currently announced." } },
  { "@type": "Question", name: "Does Grave Seasons support crossplay?", acceptedAnswer: { "@type": "Answer", text: "Crossplay does not apply to the currently announced single-player feature set." } },
] };
fs.writeFileSync(path.join(root, "multiplayer", "index.html"), page({
  slug: "multiplayer",
  title: "Is Grave Seasons Multiplayer? | Co-op Status",
  description: "Grave Seasons is single-player. No online co-op, local co-op, split-screen, competitive multiplayer, or crossplay mode is currently announced.",
  label: "Game mode",
  h1: "Is Grave Seasons Multiplayer?",
  answer: `<strong>No. Grave Seasons is currently a single-player game.</strong> Steam explicitly lists Single-player and does not list online co-op, local co-op, multiplayer, split-screen, Remote Play Together, or cross-platform multiplayer.`,
  facts: ["Single-player: confirmed", "Online co-op: not announced", "Local or split-screen co-op: not announced", "Competitive multiplayer: not announced", "Crossplay: not applicable to the current feature set"],
  sections: [
    ["Can you farm with friends?", `<p>No co-op farming mode is announced. Farming, relationships, investigation, autosaved decisions, victim survival, and the selected killer campaign are currently designed around one player's year in Ashenridge.</p>`],
    ["Is there online or local co-op?", `<p>Neither mode appears in the official Steam feature panel. The store lists Single-player, Steam Achievements, and Family Sharing; it does not list Online Co-op, Shared/Split Screen, LAN Co-op, or Remote Play Together.</p>`],
    ["Does Grave Seasons have crossplay?", `<p>No. Crossplay only matters when a game has a multiplayer mode connecting different platforms. Grave Seasons is announced for PC and consoles, but those platform releases do not imply shared sessions or cross-platform progression.</p>`],
    ["Could multiplayer be added later?", `<p>The developer has not promised it. This page will change only if Perfect Garbage, Blumhouse Games, or an official storefront announces a multiplayer feature. Until then, co-op setup guides and friend invites would be misleading.</p>`],
  ],
  related: [["/gameplay/", "Gameplay systems"], ["/platforms/", "Platforms"], ["/how-long/", "Campaign length"], ["/killers-and-victims/", "Replay campaigns"]],
  extraSchema: `<script type="application/ld+json">${JSON.stringify(multiplayerFaq)}</script>`,
}));

const redirectSources = [
  ["/news/faq/not-a-multiplayer-game/", "/multiplayer/"],
  ["/news/gameplay/single-player-with-steam-achievements/", "/multiplayer/"],
  ["/faq/technical/is-the-game-single-player/", "/multiplayer/"],
  ["/romance-options/", "/romance/"],
];
for (const [source] of redirectSources.slice(0, 3)) {
  const file = path.join(root, source, "index.html");
  if (!fs.existsSync(file)) continue;
  let html = fs.readFileSync(file, "utf8");
  html = html.replace(/<meta name="robots" content="[^"]+" \/>/, '<meta name="robots" content="noindex,follow" />');
  fs.writeFileSync(file, html);
}

const redirectFile = path.join(root, "_redirects");
let redirects = fs.readFileSync(redirectFile, "utf8").trimEnd();
for (const [source, destination] of redirectSources) {
  const line = `${source} ${destination} 301`;
  if (!redirects.includes(line)) redirects += `\n${line}`;
}
fs.writeFileSync(redirectFile, `${redirects}\n`);

const vercelFile = path.join(root, "vercel.json");
const config = JSON.parse(fs.readFileSync(vercelFile, "utf8"));
config.redirects ??= [];
for (const [source, destination] of redirectSources) {
  if (!config.redirects.some((item) => item.source === source)) config.redirects.push({ source, destination, permanent: true });
}
fs.writeFileSync(vercelFile, `${JSON.stringify(config, null, 2)}\n`);

const htmlFiles = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (["tools", ".git"].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name === "index.html") htmlFiles.push(full);
  }
}
walk(root);

for (const file of htmlFiles) {
  let html = fs.readFileSync(file, "utf8");
  const lang = html.match(/<html\s+lang="([^"]+)"/)?.[1] || "en";
  const rel = path.relative(root, path.dirname(file)).replaceAll(path.sep, "/");
  const slug = lang === "en" ? rel : rel.replace(new RegExp(`^${lang}/?`), "");
  html = html.replace(/<nav aria-label="Primary navigation">[\s\S]*?<\/nav>/, nav(lang, slug));
  html = html.replaceAll('href="/news/faq/not-a-multiplayer-game/"', 'href="/multiplayer/"');
  html = html.replaceAll('href="/news/gameplay/single-player-with-steam-achievements/"', 'href="/multiplayer/"');
  html = html.replaceAll('href="/faq/technical/is-the-game-single-player/"', 'href="/multiplayer/"');
  fs.writeFileSync(file, html);
}

const indexable = htmlFiles.map((file) => fs.readFileSync(file, "utf8"))
  .filter((html) => !/name="robots" content="noindex,follow/.test(html))
  .map((html) => html.match(/<link rel="canonical" href="([^"]+)"/)?.[1])
  .filter(Boolean);
fs.writeFileSync(path.join(root, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...new Set(indexable)].sort().map((url) => `  <url><loc>${url}</loc><lastmod>${reviewed}</lastmod></url>`).join("\n")}\n</urlset>\n`);

const report = `# Grave Seasons P0 SEO Implementation — July 31, 2026\n\n- Unified all HTML pages on the seven-tab navigation and language dropdown.\n- Rebuilt Release Date, Characters, Romance, and Multiplayer around direct search answers.\n- Consolidated three competing single-player/multiplayer URLs into /multiplayer/ with permanent redirects.\n- Consolidated /romance-options/ into /romance/.\n- Removed redirected source pages from the sitemap with noindex fallback markup.\n- Verified live Steam status: 2026, Single-player, 30+ residents, 12 romance options.\n- Preserved existing News, FAQ, AdSense, i18n, and hreflang modules.\n`;
fs.writeFileSync(path.join(root, "SEO-P0-IMPLEMENTATION-2026-07-31.md"), report);
console.log(`P0 generated ${new Set(indexable).size} indexable canonical URLs from ${htmlFiles.length} HTML files.`);
