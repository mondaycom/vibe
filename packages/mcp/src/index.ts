#!/usr/bin/env node

import { server, addServerTool } from "./server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { getVibeComponentMetadataTool } from "./server/tools/get-vibe-component-metadata.js";
import { listVibePublicComponentsTool } from "./server/tools/list-vibe-public-components.js";
import { getVibeComponentBoilerplate } from "./server/tools/get-vibe-component-boilerplate.js";
import { listVibeIconsTool } from "./server/tools/list-vibe-icons.js";
import { listVibeTokensTool } from "./server/tools/list-vibe-tokens.js";

async function main() {
  const transport = new StdioServerTransport();
  addServerTool(getVibeComponentMetadataTool);
  addServerTool(listVibePublicComponentsTool);
  addServerTool(getVibeComponentBoilerplate);
  addServerTool(listVibeIconsTool);
  addServerTool(listVibeTokensTool);
  await server.connect(transport);
}

main().catch(() => {
  process.exit(1);
});
