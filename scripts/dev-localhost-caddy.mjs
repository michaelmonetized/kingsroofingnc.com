#!/usr/bin/env bun
import { spawnSync } from "node:child_process";
/** Caddy helpers for deterministic local HTTPS dev hosts. */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
/** Ensure the root Caddyfile imports generated project-localhost snippets. */
export function ensureCaddyImport(caddyfilePath, snippetsDir) {
  const line = `import ${snippetsDir}/*.caddy`;
  const marker = "# Project dev sites";
  const existing = existsSync(caddyfilePath) ? readFileSync(caddyfilePath, "utf8") : "";
  if (existing.includes(line)) return;
  writeFileSync(
    caddyfilePath,
    `${existing.trimEnd()}${existing.trimEnd() ? "\n\n" : ""}${marker}\n${line}\n`,
    "utf8",
  );
}
/** Write the Caddy reverse-proxy snippet for a project dev host. */
export function writeProjectSnippet(snippetPath, host, port) {
  writeFileSync(snippetPath, `${host} {\n\treverse_proxy http://${host}:${port}\n}\n`, "utf8");
}
/** Reload Caddy so the latest generated project snippet is active. */
export function ensureCaddyLoaded(caddyfilePath) {
  const result = spawnSync("caddy", ["reload", "--config", caddyfilePath], {
    stdio: "inherit",
  });
  if (result.status !== 0)
    throw Object.assign(new Error("caddy reload failed"), {
      code: result.status,
    });
}
