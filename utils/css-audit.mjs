#!/usr/bin/env node
import { promises as fs } from "node:fs";
import path from "node:path";

const root = path.resolve(process.cwd());
const stylesDir = path.join(root, "src", "styles");
const srcDir = path.join(root, "src");

// match .class names starting with a letter/_/- to avoid numeric matches like .25rem
const classRegex = /\.([a-zA-Z_-][a-zA-Z0-9_-]*)\b/g;

async function readAllFiles(dir, exts = [".scss", ".svelte", ".astro", ".ts", ".js", ".mjs"]) {
  const out = [];
  async function walk(d) {
    const ents = await fs.readdir(d, { withFileTypes: true });
    for (const ent of ents) {
      const p = path.join(d, ent.name);
      if (ent.isDirectory()) await walk(p);
      else if (exts.includes(path.extname(p))) out.push(p);
    }
  }
  await walk(dir);
  return out;
}

async function main() {
  const styleFiles = await readAllFiles(stylesDir, [".scss"]);
  const appFiles = (await readAllFiles(srcDir)).filter(
    (p) => !p.includes(path.join("src", "styles") + path.sep)
  );

  const defined = new Map();
  const extended = new Set();
  for (const file of styleFiles) {
    let text = await fs.readFile(file, "utf8");
    // strip block comments and line comments in SCSS
    text = text.replace(/\/\*[\s\S]*?\*\//g, "");
    text = text.replace(/(^|\n)\s*\/\/.*(?=$|\n)/g, "$1");
    const classes = new Set();
    let m;
    while ((m = classRegex.exec(text))) {
      // skip SCSS placeholders like %foo (not matched) and :global( cases
      const name = m[1];
      if (name === "global") continue;
      classes.add(name);
    }
    // track @extend usages so base classes are considered used
    const extendRe = /@extend\s+\.([a-zA-Z0-9_-]+)/g;
    let ex;
    while ((ex = extendRe.exec(text))) {
      extended.add(ex[1]);
    }
    for (const c of classes) {
      const arr = defined.get(c) || [];
      arr.push(path.relative(root, file));
      defined.set(c, arr);
    }
  }

  // Search usage across src
  const used = new Set();
  for (const file of appFiles) {
    const text = await fs.readFile(file, "utf8");
    for (const cls of defined.keys()) {
      // check class="... cls ..." or class:cls or .cls in string
      const re = new RegExp(
        `(?:class[:=]\\s*['\"].*?\\b${cls}\\b|class:${cls}\\b|\\b${cls}\\b)`,
        "s"
      );
      if (re.test(text)) used.add(cls);
    }
  }

  const unused = [...defined.keys()].filter((c) => !used.has(c) && !extended.has(c));
  unused.sort();

  const report = [
    "# CSS Audit Report",
    `Defined classes: ${defined.size}`,
    `Likely unused (heuristic): ${unused.length}`,
    "",
    ...unused.map((c) => `- ${c} — defined in ${defined.get(c).join(", ")}`),
    "",
    "Note: This is heuristic. Classes used only via @extend, or composed by scripts, may be flagged.",
  ].join("\n");

  const outPath = path.join(root, "utils", "css-audit-report.md");
  await fs.writeFile(outPath, report, "utf8");
  console.log(report);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
