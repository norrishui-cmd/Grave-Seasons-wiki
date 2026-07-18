import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
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
const errors = [];
const warnings = [];
const seenTitles = new Map();
const seenCanonicals = new Map();
const indexableCanonicals = new Set();
const noindexPaths = new Set();

function match(html, pattern) {
  return html.match(pattern)?.[1]?.trim() || "";
}

for (const file of htmlFiles) {
  const rel = path.relative(root, file);
  const html = fs.readFileSync(file, "utf8");
  const title = match(html, /<title>([\s\S]*?)<\/title>/i);
  const description = match(html, /<meta\s+name="description"\s+content="([^"]*)"/i);
  const canonical = match(html, /<link\s+rel="canonical"\s+href="([^"]*)"/i);
  const h1s = [...html.matchAll(/<h1(?:\s[^>]*)?>([\s\S]*?)<\/h1>/gi)];
  const text = html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/&[a-z#0-9]+;/gi, " ").replace(/\s+/g, " ").trim();
  const words = text.split(" ").filter(Boolean).length;
  const noindex = /name="robots" content="noindex,follow/.test(html);
  const expectedCanonical = rel === "index.html" ? "https://graveseasons.wiki/" : `https://graveseasons.wiki/${path.dirname(rel).replaceAll(path.sep, "/")}/`;

  if (!title) errors.push(`${rel}: missing title`);
  if (!description) errors.push(`${rel}: missing meta description`);
  if (!canonical.startsWith("https://graveseasons.wiki/")) errors.push(`${rel}: invalid canonical ${canonical}`);
  if (canonical !== expectedCanonical) errors.push(`${rel}: canonical/path mismatch (${canonical})`);
  if (h1s.length !== 1) errors.push(`${rel}: expected one H1, found ${h1s.length}`);
  if (!html.includes('name="robots"')) errors.push(`${rel}: missing robots meta`);
  if (!html.includes("application/ld+json")) errors.push(`${rel}: missing JSON-LD`);
  if (!noindex && words < 180) warnings.push(`${rel}: low text count (${words})`);
  if (title.length > 65 || title.length < 25) warnings.push(`${rel}: title length ${title.length}`);
  if (description.length > 170 || description.length < 90) warnings.push(`${rel}: description length ${description.length}`);
  if (/check back later|lorem ipsum/i.test(text)) errors.push(`${rel}: placeholder language detected`);
  if (/exact release date tba|expected in 2026|remaining time in the official 2026 window/i.test(text)) errors.push(`${rel}: stale release wording detected`);

  if (seenTitles.has(title)) errors.push(`${rel}: duplicate title with ${seenTitles.get(title)}`);
  else seenTitles.set(title, rel);
  if (seenCanonicals.has(canonical)) errors.push(`${rel}: duplicate canonical with ${seenCanonicals.get(canonical)}`);
  else seenCanonicals.set(canonical, rel);
  if (noindex) noindexPaths.add(`/${path.dirname(rel).replaceAll(path.sep, "/")}/`.replace("/./", "/"));
  else indexableCanonicals.add(canonical);

  for (const block of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(block[1]); }
    catch { errors.push(`${rel}: invalid JSON-LD`); }
  }

  for (const href of html.matchAll(/href="(\/[^"]*)"/g)) {
    const target = href[1].split(/[?#]/)[0];
    if (!target || target === "/" || /\.(?:css|js|ico|svg|xml|webmanifest)$/.test(target)) continue;
    const expected = path.join(root, target.replace(/^\//, ""), "index.html");
    if (!fs.existsSync(expected)) errors.push(`${rel}: broken internal link ${href[1]}`);
  }
}

for (const file of htmlFiles) {
  const rel = path.relative(root, file);
  const html = fs.readFileSync(file, "utf8");
  if (/name="robots" content="noindex,follow/.test(html)) continue;
  for (const href of html.matchAll(/href="(\/[^"]*)"/g)) {
    const target = href[1].split(/[?#]/)[0];
    if (noindexPaths.has(target)) warnings.push(`${rel}: promotes noindex page ${target}`);
  }
}

const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
const sitemapUrls = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]));
for (const canonical of indexableCanonicals) if (!sitemapUrls.has(canonical)) errors.push(`sitemap: missing ${canonical}`);
for (const url of sitemapUrls) if (!indexableCanonicals.has(url)) errors.push(`sitemap: non-indexable or unknown ${url}`);

console.log(`Audited ${htmlFiles.length} canonical HTML pages.`);
console.log(`Errors: ${errors.length}`);
for (const issue of errors) console.log(`ERROR ${issue}`);
console.log(`Warnings: ${warnings.length}`);
for (const issue of warnings) console.log(`WARN  ${issue}`);
if (errors.length) process.exitCode = 1;
