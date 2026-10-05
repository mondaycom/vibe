import { exec } from "child_process";
import { promisify } from "util";
import { detectVibeVersion, VibeMajorVersion } from "../version-detector.js";

const execAsync = promisify(exec);

interface ComponentMetadata {
  displayName: string;
  aggregator?: string;
  [key: string]: any;
}

export class MetadataService {
  private static cachedMetadata: ComponentMetadata[] | null = null;

  private static getUnpkgUrl(version: VibeMajorVersion): string {
    return `https://unpkg.com/@vibe/core@${version}/dist/metadata.json`;
  }

  static async getMetadata(): Promise<ComponentMetadata[]> {
    if (this.cachedMetadata) {
      console.error("[Vibe MCP] Using cached metadata");
      return this.cachedMetadata;
    }

    try {
      const version = await detectVibeVersion();
      const url = this.getUnpkgUrl(version);
      console.error(`[Vibe MCP] Fetching metadata from ${url}...`);
      const metadata = await this.fetchWithRetry(url);
      console.error(`[Vibe MCP] Fetched ${metadata.length} components, caching for session`);
      this.cachedMetadata = metadata;
      return metadata;
    } catch (error) {
      console.error("[Vibe MCP] Failed to fetch metadata:", error);
      console.error("[Vibe MCP] Returning empty array as fallback");
      return [];
    }
  }

  private static async fetchWithRetry(url: string): Promise<ComponentMetadata[]> {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (fetchError) {
      console.error("[Vibe MCP] Fetch failed (likely corporate proxy/SSL), trying curl fallback...");

      try {
        const { stdout } = await execAsync(`curl -s -L "${url}"`);
        return JSON.parse(stdout);
      } catch (curlError) {
        console.error("[Vibe MCP] Curl fallback also failed:", curlError);
        throw fetchError;
      }
    }
  }
}
