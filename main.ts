// Six Words, One Story — make.fun bounty u-deranalabs-six-words-one-story-f982e410
// Writes exactly one six-word story to /output/entry.txt.
// Pure Node.js stdlib only (node:fs, node:path). No dependencies, no network.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY = "Every night, she set two plates.";
const OUT_DIR = "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

const words = STORY.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`Story must be exactly 6 words, got ${words.length}.`);
}
if (STORY.length < 1 || STORY.length > 60) {
  throw new Error(`Story must be 1-60 characters, got ${STORY.length}.`);
}
if (STORY.trim().length === 0) {
  throw new Error("Story must not be only whitespace.");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, STORY, "utf8");

// Verify by reading the file back: the output must be byte-identical
// to the story, with no trailing newline added.
const written = readFileSync(OUT_FILE, "utf8");
if (written !== STORY) {
  throw new Error(`Verification failed: /output/entry.txt does not match the story.`);
}

console.log(`Wrote ${words.length}-word story (${STORY.length} chars) to ${OUT_FILE}`);
console.log(`Verified: /output/entry.txt == "${STORY}"`);
