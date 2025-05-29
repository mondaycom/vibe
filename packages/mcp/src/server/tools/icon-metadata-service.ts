import { exec } from "child_process";
import { promisify } from "util";

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
      // The file exports a default array, so we need to parse it
      const match = jsCode.match(/var o=(\[.*?\]);export\{o as default\}/s);
      if (!match) {
        throw new Error("Unable to parse icon metadata from JavaScript module");
      }

      return JSON.parse(match[1]);
    } catch (fetchError) {
      console.error("[Vibe MCP] Fetch failed (likely corporate proxy/SSL), trying curl fallback...");

      // Fallback to curl for corporate networks
      try {
        const { stdout } = await execAsync(`curl -s -L "${this.UNPKG_URL}"`);

        // Parse the JavaScript module output from curl
        const match = stdout.match(/var o=(\[.*?\]);export\{o as default\}/s);
        if (!match) {
          throw new Error("Unable to parse icon metadata from JavaScript module (curl)");
        }

        return JSON.parse(match[1]);
      } catch (curlError) {
        console.error("[Vibe MCP] Curl fallback also failed:", curlError);
        throw fetchError; // Re-throw original fetch error
      }
    }
  }
}
