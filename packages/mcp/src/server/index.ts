import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z, ZodRawShape, ZodObject } from "zod";

export const server = new McpServer({
  name: "@vibe/mcp",
  version: "0.0.1",
  capabilities: {
    resources: {},
    tools: {}
  }
});

type ExecuteResult = Promise<{
  content: { type: "text"; text: string }[];
  isError?: boolean;
}>;

export interface MCPTool<T extends ZodRawShape> {
  name: string;
  description: string;
  inputSchema: T;
  execute: (input: z.infer<ZodObject<T>>) => ExecuteResult;
}

export const addServerTool = (tool: MCPTool<any>) => {
  server.tool(tool.name, tool.description, tool.inputSchema, tool.execute);
};

export const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  return String(error);
};
