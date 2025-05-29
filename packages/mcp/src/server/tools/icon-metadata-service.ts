import { exec } from "child_process";
import { promisify } from "util";
import { createContext, runInContext } from "vm";

const execAsync = promisify(exec);

interface IconMetadata {
  name: string;
  file: string;
  description: string;
  tags: string;
  category?: string[];
  ignore?: boolean;
}

export class IconMetadataService {
  private static readonly UNPKG_URL = "https://unpkg.com/@vibe/icons@latest/dist/iconsMetaData.js";
  private static cachedIconMetadata: IconMetadata[] | null = null;

  static async getIconMetadata(): Promise<IconMetadata[]> {
    if (this.cachedIconMetadata) {
      console.error("[Vibe MCP] Using cached icon metadata");
      return this.cachedIconMetadata;
    }

    try {
      console.error("[Vibe MCP] Fetching icon metadata from unpkg...");
      const metadata = await this.fetchWithRetry();
      console.error(`[Vibe MCP] Fetched ${metadata.length} icons, caching for session`);
      this.cachedIconMetadata = metadata;
      return metadata;
    } catch (error) {
      console.error("[Vibe MCP] Failed to fetch icon metadata:", error);
      throw new Error(
        "Unable to fetch icon metadata from remote sources. Please check your internet connection and try again."
      );
    }
  }

  private static async fetchWithRetry(): Promise<IconMetadata[]> {
    // Try fetch first
    try {
      const response = await fetch(this.UNPKG_URL);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const jsCode = await response.text();

      // Extract the icon data from the JavaScript module
      // The new format is: const e="Basic",t="Platform",i="View";var o=[...];export{o as default}
      return this.parseJavaScriptModule(jsCode);
    } catch (fetchError) {
      console.error("[Vibe MCP] Fetch failed (likely corporate proxy/SSL), trying curl fallback...");

      // Fallback to curl for corporate networks
      try {
        const { stdout } = await execAsync(`curl -s -L "${this.UNPKG_URL}"`);

        // Parse the JavaScript module output from curl
        return this.parseJavaScriptModule(stdout);
      } catch (curlError) {
        console.error("[Vibe MCP] Curl fallback also failed:", curlError);
        throw fetchError; // Re-throw original fetch error
      }
    }
  }

  private static parseJavaScriptModule(jsCode: string): IconMetadata[] {
    // Try the new format first: const e="Basic",t="Platform",i="View";var o=[...];export{o as default}
    const newFormatMatch = jsCode.match(/^const ([^;]+);var o=(\[.*?\]);export\{o as default\}/s);
    if (newFormatMatch) {
      const constantsString = newFormatMatch[1];
      const arrayCode = newFormatMatch[2];

      // Parse the constants - format: e="Basic",t="Platform",i="View"
      const constantsMap = new Map();
      const constantPairs = constantsString.split(",");

      for (const pair of constantPairs) {
        const [variable, value] = pair.split("=");
        if (variable && value) {
          const varName = variable.trim();
          const varValue = value.trim().replace(/^"(.*)"$/, "$1"); // Remove quotes
          constantsMap.set(varName, varValue);
        }
      }

      // Create a safe evaluation environment by creating a function that returns the array
      // We'll replace the variables with their actual values in the function body
      let evalCode = arrayCode;

      // Replace variable references with their actual values
      // We need to be careful to only replace variables in array contexts, not inside strings
      for (const [varName, varValue] of constantsMap) {
        // Replace variables that appear in array contexts like category:[t] or category:[e,t,i]
        const arrayContextRegex = new RegExp(`\\[([^\\]]*\\b${varName}\\b[^\\]]*)\\]`, "g");
        evalCode = evalCode.replace(arrayContextRegex, (match, content) => {
          const replacedContent = content.replace(new RegExp(`\\b${varName}\\b`, "g"), `"${varValue}"`);
          return `[${replacedContent}]`;
        });
      }

      // Replace JavaScript boolean shorthand: !0 = true, !1 = false
      evalCode = evalCode.replace(/!0\b/g, "true");
      evalCode = evalCode.replace(/!1\b/g, "false");

      try {
        // Use vm.runInContext for safer evaluation of the JavaScript array
        // This avoids the JSON parsing issues with unquoted property names
        const context = createContext({});
        const result = runInContext(`(${evalCode})`, context);
        return result;
      } catch (evalError) {
        console.error("[Vibe MCP] Failed to evaluate JavaScript array:", evalError);
        // Fall back to old parsing method
      }
    }

    // Try the old format: var o=([...]);export{o as default}
    const oldFormatMatch = jsCode.match(/var o=(\[.*?\]);export\{o as default\}/s);
    if (oldFormatMatch) {
      try {
        // Use vm.runInContext for old format too
        const context = createContext({});
        const result = runInContext(`(${oldFormatMatch[1]})`, context);
        return result;
      } catch (evalError) {
        // Fall back to JSON.parse for old format
        return JSON.parse(oldFormatMatch[1]);
      }
    }

    throw new Error("Unable to parse icon metadata from JavaScript module - unknown format");
  }
}
