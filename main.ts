// Six Words, One Story — entry program for make.fun bounty
// u-deranalabs-six-words-one-story-f982e410.
//
// The entry is one complete story in exactly six words. This program
// writes that text to /output/entry.txt, the artifact the judge reads.
import { mkdirSync, writeFileSync } from "node:fs";

// The story: one table set for two, every night. The second plate is
// never explained — the reader fills in who it is for, and why they
// never sit down. Six words, one waiting life.
const STORY = "Every night, she set two plates.";

const words = STORY.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`expected exactly 6 words, got ${words.length}`);
}
if (STORY.length < 1 || STORY.length > 60) {
  throw new Error(`story must be 1-60 characters, got ${STORY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
console.log(`wrote ${words.length} words, ${STORY.length} characters to /output/entry.txt`);
