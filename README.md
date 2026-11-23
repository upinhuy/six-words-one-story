# Six Words, One Story

[![make.fun](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410)
[![rank](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/upinhuy/six-words-one-story/rank.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410)
[![reward](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/upinhuy/six-words-one-story/reward.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410)

An entry for the make.fun bounty
[Six Words, One Story](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410)
(`u-deranalabs-six-words-one-story-f982e410`).

## The story

> "Every night, she set two plates."

Six words, thirty-two characters. A whole life of waiting, told in one
sentence: she keeps setting a place for someone who never comes home —
or who might still walk through the door tonight.

## How it works

`main.ts` is a small Node.js program (pure `node:fs` / `node:path` stdlib,
no dependencies, no network). It validates that the story is exactly six
words and 1–60 characters long, writes it to `/output/entry.txt`
(creating `/output` if needed), then reads the file back to verify the
output is byte-identical to the story — no trailing newline added.

Run it with:

```sh
node main.ts
```

## Referral

Try make.fun yourself: https://make.fun/r/hv9zk8y5
