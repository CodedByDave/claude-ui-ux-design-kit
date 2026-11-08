#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const os = require("os");

const args = process.argv.slice(2);
const has = (f) => args.includes(f);

if (has("--help") || has("-h")) {
  console.log(`claude-ui-ux-design-kit

Usage:
  npx claude-ui-ux-design-kit              Install for all projects (~/.claude)
  npx claude-ui-ux-design-kit --project    Install only in the current project (./.claude)
  npx claude-ui-ux-design-kit --uninstall  Remove the kit (add --project for project level)

Installs:
  skills/ui-ux-design-kit   design / redesign screens with one design system per project
  skills/ui-ux-audit        review a screen and rank the fixes
  commands/design-init.md   /design-init <product and audience> creates DESIGN.md

Set CLAUDE_CONFIG_DIR to use a different Claude Code config folder.`);
  process.exit(0);
}

const projectLevel = has("--project");
const uninstall = has("--uninstall");

const target = projectLevel
  ? path.join(process.cwd(), ".claude")
  : process.env.CLAUDE_CONFIG_DIR || path.join(os.homedir(), ".claude");

const templates = path.join(__dirname, "..", "templates");

function listFiles(dir, base = dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listFiles(full, base));
    else out.push(path.relative(base, full));
  }
  return out;
}

const files = listFiles(templates);
let changed = 0;

if (uninstall) {
  for (const rel of files) {
    const dest = path.join(target, rel);
    if (fs.existsSync(dest)) {
      fs.unlinkSync(dest);
      console.log("removed  " + dest);
      changed++;
      // remove empty skill folder
      const dir = path.dirname(dest);
      if (dir !== target && fs.readdirSync(dir).length === 0) fs.rmdirSync(dir);
    }
  }
  console.log(changed ? `\nRemoved ${changed} file(s).` : "\nNothing to remove.");
  process.exit(0);
}

for (const rel of files) {
  const src = path.join(templates, rel);
  const dest = path.join(target, rel);
  const next = fs.readFileSync(src);
  fs.mkdirSync(path.dirname(dest), { recursive: true });

  if (fs.existsSync(dest)) {
    const current = fs.readFileSync(dest);
    if (current.equals(next)) {
      console.log("unchanged " + dest);
      continue;
    }
    fs.copyFileSync(dest, dest + ".bak");
    fs.writeFileSync(dest, next);
    console.log("updated   " + dest + "  (old copy saved as .bak)");
  } else {
    fs.writeFileSync(dest, next);
    console.log("installed " + dest);
  }
  changed++;
}

console.log(
  `\nDone (${projectLevel ? "this project" : "all projects"}). Restart Claude Code, then run:\n` +
    "  /design-init <what you are building and who uses it>"
);
