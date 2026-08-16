import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const scripts = ["dev:current", "dev:original"];
const children = scripts.map(script =>
  spawn("npm", ["run", script], {
    cwd: rootDir,
    stdio: "inherit",
    detached: true
  })
);

let stopping = false;

function stop(exitCode = 0) {
  if (stopping) return;
  stopping = true;
  children.forEach(child => {
    if (!child.pid) return;
    try {
      process.kill(-child.pid, "SIGTERM");
    } catch {
      // The child already exited.
    }
  });
  process.exitCode = exitCode;
}

children.forEach(child => {
  child.on("exit", code => {
    if (!stopping) stop(code ?? 1);
  });
});

process.on("SIGINT", () => stop());
process.on("SIGTERM", () => stop());
