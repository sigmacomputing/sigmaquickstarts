#!/usr/bin/env node
'use strict';

// Generates site/app/sitemap.xml: the landing page, the public list pages, and
// every QuickStart that appears on one of them (landing, Hands-on labs, First
// Friday Features, Archive). Hidden guides stay off the landing page and
// Internal guides are left out.
// URLs match each page's canonical link.

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const BASE = 'https://quickstarts.sigmacomputing.com';
const SRC_DIR = path.join(__dirname, '..', 'sigmaguides', 'src');
const OUT_FILE = path.join(__dirname, '..', 'app', 'sitemap.xml');

// A guide is listed publicly when it carries one of these tags.
const PUBLIC_TAGS = ['default', 'eventhols', 'first_friday_features', 'archive'];
const LIST_PAGES = ['/', '/eventhols/', '/firstfridayfeatures/', '/archive/'];

function parseFrontMatter(content) {
  const meta = {};
  for (const line of content.split(/\r?\n/)) {
    if (line.trim() === '') {
      if (Object.keys(meta).length) break; // end of front matter
      continue; // some guides start with a blank line
    }
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    meta[line.slice(0, idx).trim().toLowerCase()] = line.slice(idx + 1).trim();
  }
  return meta;
}

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function main() {
  const guides = [];
  for (const rel of glob.sync('*/*.md', { cwd: SRC_DIR })) {
    if (rel.split(path.sep)[0] === 'QS Starter Projects') continue;
    if (path.basename(rel) === 'CLAUDE.md') continue;
    const meta = parseFrontMatter(fs.readFileSync(path.join(SRC_DIR, rel), 'utf8'));
    if (!meta.id) continue;
    const status = (meta.status || '').toLowerCase();
    const tags = (meta.tags || '').toLowerCase().split(',').map(t => t.trim());
    if (tags.includes('internal')) continue;
    // Same rule the site uses: the landing page skips Hidden guides, while the
    // Hands-on labs, First Friday Features and Archive pages list theirs regardless.
    const onLanding = tags.includes('default') && !status.includes('hidden');
    const onListPage = tags.some(t => t !== 'default' && PUBLIC_TAGS.includes(t));
    if (!onLanding && !onListPage) continue;
    guides.push({ id: meta.id, lastmod: /^\d{4}-\d{2}-\d{2}$/.test(meta.lastupdated || '') ? meta.lastupdated : '' });
  }
  guides.sort((a, b) => a.id.localeCompare(b.id));

  const urls = LIST_PAGES.map(p => ({ loc: BASE + p, lastmod: '' }))
    .concat(guides.map(g => ({ loc: `${BASE}/guide/${g.id}/index.html`, lastmod: g.lastmod })));

  const xml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.map(u => '  <url><loc>' + esc(u.loc) + '</loc>' + (u.lastmod ? '<lastmod>' + u.lastmod + '</lastmod>' : '') + '</url>').join('\n') +
    '\n</urlset>\n';
  fs.writeFileSync(OUT_FILE, xml);
  console.log(`Wrote ${urls.length} URLs (${guides.length} guides) to ${path.relative(process.cwd(), OUT_FILE)}`);
}

main();
