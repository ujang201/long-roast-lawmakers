// Entry for "The Long Roast: Lawmakers and the File They Cannot Convert".
// A single satirical sentence, written out to entry.txt by this program.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "Congress can draft a 400-page bill to regulate artificial intelligence overnight, yet the lawmaker who wrote it still emails his staff a scanned photo of a Word document and asks them to turn it into a PDF before lunch.";

const targetDir = process.env.OUTPUT_DIR || "/output";

// The gate allows 1 to 320 characters; fail loudly instead of
// silently writing an entry the scorer would refuse.
if (SENTENCE.length < 1 || SENTENCE.length > 320) {
  throw new Error(`entry is ${SENTENCE.length} characters, outside the 1-320 gate`);
}

mkdirSync(targetDir, { recursive: true });
writeFileSync(join(targetDir, "entry.txt"), SENTENCE + "\n", "utf8");
