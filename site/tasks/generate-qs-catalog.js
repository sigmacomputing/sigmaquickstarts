#!/usr/bin/env node
'use strict';

// Generates site/app/data/qs-catalog.json — a single-file catalog of every
// Published QuickStart's id, title, category, and summary, so tools (e.g. an
// MCP-connected agent) can look up "what QuickStarts exist and what are they
// about" in one read instead of searching/opening every QS file individually.

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const SRC_DIR = path.join(__dirname, '..', 'sigmaguides', 'src');
const OUT_FILE = path.join(__dirname, '..', 'app', 'data', 'qs-catalog.json');

function parseFrontMatter(content) {
  const meta = {};
  for (const line of content.split(/\r?\n/)) {
    if (line.trim() === '') break;
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim().toLowerCase();
    const value = line.slice(idx + 1).trim();
    meta[key] = value;
  }
  return meta;
}

function findTitle(content) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : null;
}

function main() {
  const files = glob.sync('*/*.md', { cwd: SRC_DIR });
  const entries = [];

  for (const rel of files) {
    const folder = rel.split(path.sep)[0];
    if (folder === 'QS Starter Projects') continue;
    if (path.basename(rel) === 'CLAUDE.md') continue;

    const content = fs.readFileSync(path.join(SRC_DIR, rel), 'utf8');
    const meta = parseFrontMatter(content);

    if (!meta.id) continue;
    if ((meta.status || '').toLowerCase() !== 'published') continue;

    entries.push({
      id: meta.id,
      title: findTitle(content) || meta.id,
      category: meta.categories || '',
      summary: meta.summary || '',
      lastUpdated: meta.lastupdated || '',
      url: `https://quickstarts.sigmacomputing.com/guide/${meta.id}/index.html`,
    });
  }

  entries.sort((a, b) => a.id.localeCompare(b.id));

  fs.writeFileSync(OUT_FILE, JSON.stringify({ quickstarts: entries }, null, 2) + '\n');
  console.log(`Wrote ${entries.length} published QuickStarts to ${path.relative(process.cwd(), OUT_FILE)}`);
}

main();
