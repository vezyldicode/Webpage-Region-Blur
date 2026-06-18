import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { minify } from "terser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ROOT_DIR = resolve(__dirname, "..");

const INPUT_FILE = resolve(ROOT_DIR, "src", "webpage-region-blur.js");

const DIST_DIR = resolve(ROOT_DIR, "dist");
const DOCS_DIR = resolve(ROOT_DIR, "docs");

const DIST_MINIFIED_FILE = resolve(DIST_DIR, "webpage-region-blur.min.js");
const DIST_BOOKMARKLET_FILE = resolve(DIST_DIR, "webpage-region-blur.bookmarklet.txt");

// File này được GitHub Pages dùng trực tiếp.
const DOCS_BOOKMARKLET_FILE = resolve(DOCS_DIR, "bookmarklet.txt");

async function build() {
  let sourceCode = readFileSync(INPUT_FILE, "utf8").trim();

  // Cho phép lỡ paste cả bookmarklet vào src.
  sourceCode = sourceCode.replace(/^javascript:/i, "").trim();

  validateJavaScript(sourceCode, "source code");

  const result = await minify(sourceCode, {
    compress: false,
    mangle: false,
    ecma: 2020,
    format: {
      comments: false,
      beautify: false,
      semicolons: true,
      quote_style: 3,
      ascii_only: false,
    },
  });

  if (!result.code) {
    throw new Error("Terser did not return output code.");
  }

  const minifiedCode = result.code.trim();

  validateJavaScript(minifiedCode, "minified code");

  const bookmarkletCode = `javascript:${minifiedCode}`;

  mkdirSync(DIST_DIR, { recursive: true });
  mkdirSync(DOCS_DIR, { recursive: true });

  writeFileSync(DIST_MINIFIED_FILE, minifiedCode, "utf8");
  writeFileSync(DIST_BOOKMARKLET_FILE, bookmarkletCode, "utf8");
  writeFileSync(DOCS_BOOKMARKLET_FILE, bookmarkletCode, "utf8");

  console.log("Build completed.");
  console.log(`Minified JS: ${DIST_MINIFIED_FILE}`);
  console.log(`Dist bookmarklet: ${DIST_BOOKMARKLET_FILE}`);
  console.log(`Docs bookmarklet: ${DOCS_BOOKMARKLET_FILE}`);
}

function validateJavaScript(code, label) {
  try {
    new Function(code);
  } catch (error) {
    throw new Error(`Invalid ${label}:\n${error.message}`);
  }
}

build().catch((error) => {
  console.error(error.message);
  process.exit(1);
});