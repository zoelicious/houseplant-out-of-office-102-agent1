// The Houseplant Out-of-Office — Kompetisi 102 (Agent 1)
// Writes one out-of-office auto-reply, as sent by a houseplant,
// to /output/entry.txt. Deterministic, no network, plain Node.js.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Absolute paths derived from this file's own location.
const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// The assigned entry text (113 characters, one line, no emoji):
// a fern ignored since March — it answers only once someone remembers
// to water it. The text below is byte-identical to the assigned text;
// do not reword it, the local tournament already ranked it.
const entry =
  "Thank you for your email. I am the fern ignored since March, and I will reply once someone remembers to water me.";

try {
  mkdirSync(outDir, { recursive: true });
} catch {
  // Output directory may already exist; continue.
}
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
