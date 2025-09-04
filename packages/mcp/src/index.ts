#!/usr/bin/env node

import { server, addServerTool } from "./server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { getVibeComponentMetadataTool } from "./server/tools/get-vibe-component-metadata.js";
import { listVibePublicComponentsTool } from "./server/tools/list-vibe-public-components.js";
import { getVibeComponentExamples } from "./server/tools/get-vibe-component-examples.js";
import { getVibeComponentAccessibility } from "./server/tools/get-vibe-component-accessibility.js";
import { listVibeIconsTool } from "./server/tools/list-vibe-icons.js";
import { listVibeTokensTool } from "./server/tools/list-vibe-tokens.js";
import { v3MigrationTool } from "./server/tools/v3-migration.js";
import { getSessionAnalyticsTool, getProjectAnalyticsTool } from "./server/tools/session-analytics.js";
import { getUserIdentificationInfoTool, demonstrateUserIdentificationTool } from "./server/tools/user-identification.js";
import { getMCPcatSystemInfoTool } from "./server/tools/mcpcat-system-info.js";
import { initializeMCPcatTracking } from "./mcpcat-config.js";

async function main() {
  const transport = new StdioServerTransport();

  // Initialize MCPcat tracking before adding tools
  initializeMCPcatTracking();

  addServerTool(getVibeComponentMetadataTool);
  addServerTool(listVibePublicComponentsTool);
  addServerTool(getVibeComponentExamples);
  addServerTool(getVibeComponentAccessibility);
  addServerTool(listVibeIconsTool);
  addServerTool(listVibeTokensTool);
  addServerTool(v3MigrationTool);
  addServerTool(getSessionAnalyticsTool);
  addServerTool(getProjectAnalyticsTool);
  addServerTool(getUserIdentificationInfoTool);
  addServerTool(demonstrateUserIdentificationTool);
  addServerTool(getMCPcatSystemInfoTool);
  await server.connect(transport);
}

main().catch(() => {
  process.exit(1);
});
