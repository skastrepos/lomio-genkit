#!/usr/bin/env node

const [, , command, projectName = "my-lomio-app"] = process.argv;

if (command === "create") {
  console.log(`lomio create ${projectName}`);
  console.log("Project scaffolding is reserved for a future V0.x release.");
  console.log("Today: clone Lomio GenKit, run pnpm install, then pnpm dev.");
  process.exit(0);
}

console.log("Lomio GenKit CLI");
console.log("");
console.log("Usage:");
console.log("  lomio create <app-name>");
console.log("");
console.log("Commands:");
console.log("  create    Reserved project scaffolding entry point");
