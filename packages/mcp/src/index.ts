#!/usr/bin/env node

import { server, addServerTool } from "./server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { getEZDSComponentMetadataTool } from "./server/tools/get-ezds-component-metadata.js";
import { listEZDSPublicComponentsTool } from "./server/tools/list-ezds-public-components.js";
import { getEZDSComponentExamples } from "./server/tools/get-ezds-component-examples.js";
import { getEZDSComponentAccessibility } from "./server/tools/get-ezds-component-accessibility.js";
import { listEZDSIconsTool } from "./server/tools/list-ezds-icons.js";
import { listEZDSTokensTool } from "./server/tools/list-ezds-tokens.js";
import { v3MigrationTool } from "./server/tools/v3-migration.js";
import { dropdownMigrationTool } from "./server/tools/dropdown-migration.js";

async function main() {
  const transport = new StdioServerTransport();
  addServerTool(getEZDSComponentMetadataTool);
  addServerTool(listEZDSPublicComponentsTool);
  addServerTool(getEZDSComponentExamples);
  addServerTool(getEZDSComponentAccessibility);
  addServerTool(listEZDSIconsTool);
  addServerTool(listEZDSTokensTool);
  addServerTool(v3MigrationTool);
  addServerTool(dropdownMigrationTool);
  await server.connect(transport);
}

main().catch(() => {
  process.exit(1);
});
