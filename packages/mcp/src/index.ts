#!/usr/bin/env node

import { server, addServerTool } from "./server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  getVibeComponentAccessibility,
  getVibeComponentExamples,
  getVibeComponentMetadataTool,
  listVibePublicComponentsTool,
  listVibeIconsTool,
  listVibeTokensTool,
  v3MigrationTool,
  dropdownMigrationTool,
  v4MigrationTool
} from "./server/tools/index.js";

async function main() {
  const transport = new StdioServerTransport();
  addServerTool(getVibeComponentMetadataTool);
  addServerTool(listVibePublicComponentsTool);
  addServerTool(getVibeComponentExamples);
  addServerTool(getVibeComponentAccessibility);
  addServerTool(listVibeIconsTool);
  addServerTool(listVibeTokensTool);
  addServerTool(v3MigrationTool);
  addServerTool(dropdownMigrationTool);
  addServerTool(v4MigrationTool);
  await server.connect(transport);
}

main().catch(() => {
  process.exit(1);
});
