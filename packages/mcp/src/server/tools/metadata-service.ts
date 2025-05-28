import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

interface ComponentMetadata {
  displayName: string;
  aggregator?: string;
  [key: string]: any;
}

export class MetadataService {
  private static readonly UNPKG_URL = "https://unpkg.com/@vibe/core@latest/dist/metadata.json";
  private static cachedMetadata: ComponentMetadata[] | null = null;

  static async getMetadata(): Promise<ComponentMetadata[]> {
    if (this.cachedMetadata) {
      console.error("[Vibe MCP] Using cached metadata");
      return this.cachedMetadata;
    }

    try {
      console.error("[Vibe MCP] Fetching metadata from unpkg...");
      const metadata = await this.fetchWithRetry();
      console.error(`[Vibe MCP] Fetched ${metadata.length} components, caching for session`);
      this.cachedMetadata = metadata;
      return metadata;
    } catch (error) {
      console.error("[Vibe MCP] Failed to fetch metadata:", error);
      console.error("[Vibe MCP] Returning empty array as fallback");
      return [];
    }
  }

  private static async fetchWithRetry(): Promise<ComponentMetadata[]> {
    // Try fetch first
    try {
      const response = await fetch(this.UNPKG_URL);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (fetchError) {
      console.error("[Vibe MCP] Fetch failed (likely corporate proxy/SSL), trying curl fallback...");
      
      // Fallback to curl for corporate networks
      try {
        const { stdout } = await execAsync(`curl -s -L "${this.UNPKG_URL}"`);
        return JSON.parse(stdout);
      } catch (curlError) {
        console.error("[Vibe MCP] Curl fallback also failed:", curlError);
        throw fetchError; // Re-throw original fetch error
      }
    }
  }
}
