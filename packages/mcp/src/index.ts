#!/usr/bin/env node

import { server, addServerTool } from "./server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { getVibeComponentMetadataTool } from "./server/tools/get-vibe-component-metadata.js";
import { listVibePublicComponentsTool } from "./server/tools/list-vibe-public-components.js";
import { getVibeComponentExamples } from "./server/tools/get-vibe-component-examples.js";
import { listVibeIconsTool } from "./server/tools/list-vibe-icons.js";
import { v3MigrationTool } from "./server/tools/v3-migration.js";

async function main() {
  const transport = new StdioServerTransport();
  addServerTool(getVibeComponentMetadataTool);
  addServerTool(listVibePublicComponentsTool);
  addServerTool(getVibeComponentExamples);
  addServerTool(listVibeIconsTool);
  addServerTool(v3MigrationTool);
  await server.connect(transport);
}

main().catch(() => {
  process.exit(1);
});
