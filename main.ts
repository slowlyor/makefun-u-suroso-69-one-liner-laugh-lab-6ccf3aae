// One-Liner Laugh Lab — the excuse a robot vacuum gives after eating a sock.
// Deterministic, stdlib only, no network, no randomness: it writes exactly
// one original line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My contract says anything on the floor is dirt. The sock was on the floor. Case closed, Your Honor.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Refuse to write anything that fails it.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line fails the gate (${LINE.length} characters)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
