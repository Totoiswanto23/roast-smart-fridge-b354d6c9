// Roast the Smart Fridge: One Line, Best Laugh Wins — make.fun bounty
// Writes one roast line (at most 160 characters) to /output/entry.txt:
// a single-line roast of a smart fridge.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The roast: the fridge nags about the door but stays silent about the
// leftovers growing a civilization in the crisper drawer. It dodges the
// stock jokes flooding the field (ordering milk, 3 AM snacks, the door
// alarm as the punchline) and turns the fridge into a silent accomplice.
const LINE =
  'My smart fridge beeps when the door stays open but stays silent about the leftovers growing a civilization in the crisper drawer.';

if (LINE.length < 1 || LINE.length > 160 || LINE.includes('\n')) {
  console.error(`smart fridge roast must be a single line of 1-160 chars, got ${LINE.length}`);
  process.exit(1);
}

// No trailing newline: the file is exactly the one line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
console.log(LINE);
