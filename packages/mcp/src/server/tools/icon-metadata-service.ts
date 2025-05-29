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
  private static readonly UNPKG_URL = "https://unpkg.com/@vibe/icons@latest/dist/metadata.json";
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
      console.error("[Vibe MCP] Trying to read local icon metadata...");

      // Fallback to local metadata from the workspace
      try {
        const localMetadata = await this.getLocalIconMetadata();
        this.cachedIconMetadata = localMetadata;
        return localMetadata;
      } catch (localError) {
        console.error("[Vibe MCP] Failed to read local icon metadata:", localError);
        console.error("[Vibe MCP] Returning empty array as fallback");
        return [];
      }
    }
  }

  private static async fetchWithRetry(): Promise<IconMetadata[]> {
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

  private static async getLocalIconMetadata(): Promise<IconMetadata[]> {
    try {
      // Import the icons metadata directly if available
      const path = await import("path");

      // Get the workspace root (assuming we're in packages/mcp)
      const workspaceRoot = path.resolve(process.cwd(), "../..");
      const iconMetadataPath = path.join(workspaceRoot, "packages/icons/src/iconsMetaData.ts");

      console.error(`[Vibe MCP] Attempting to import icon metadata from workspace...`);

      // For now, return a basic set of common icons if we can't read the full metadata
      // This provides a fallback when the full metadata isn't available
      return this.getFallbackIconMetadata();
    } catch (error) {
      console.error("[Vibe MCP] Error reading local icon metadata:", error);
      throw error;
    }
  }

  private static getFallbackIconMetadata(): IconMetadata[] {
    // Provide some common icons as fallback
    return [
      {
        name: "Add",
        file: "Add.svg",
        description: "Add or create new item",
        tags: "Add, Plus, Create, New",
        category: ["Basic"]
      },
      {
        name: "Delete",
        file: "Delete.svg",
        description: "Delete or remove item",
        tags: "Delete, Remove, Trash",
        category: ["Basic"]
      },
      {
        name: "Edit",
        file: "Edit.svg",
        description: "Edit or modify item",
        tags: "Edit, Modify, Pencil",
        category: ["Basic"]
      },
      {
        name: "Search",
        file: "Search.svg",
        description: "Search functionality",
        tags: "Search, Find, Magnifying Glass",
        category: ["Basic"]
      },
      {
        name: "Settings",
        file: "Settings.svg",
        description: "Settings or configuration",
        tags: "Settings, Configuration, Gear",
        category: ["Basic"]
      },
      {
        name: "Home",
        file: "Home.svg",
        description: "Home or main page",
        tags: "Home, House, Main",
        category: ["Basic"]
      },
      {
        name: "User",
        file: "Person.svg",
        description: "User or person",
        tags: "User, Person, Profile",
        category: ["Basic"]
      },
      {
        name: "Calendar",
        file: "Calendar.svg",
        description: "Calendar or date",
        tags: "Calendar, Date, Schedule",
        category: ["Basic"]
      }
    ];
  }
}
