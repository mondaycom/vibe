import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export interface TokenMetadata {
  name: string;
  value: string;
  category: string;
  description?: string;
  file: string;
}

export class TokenMetadataService {
  private static tokenCache: TokenMetadata[] | null = null;
  private static readonly TOKENS_URL = "https://unpkg.com/monday-ui-style@latest/dist/index.css";

  /**
   * Get all design tokens from the style package
   */
  static async getTokenMetadata(): Promise<TokenMetadata[]> {
    if (this.tokenCache) {
      return this.tokenCache;
    }

    try {
      console.error("[Vibe MCP] Fetching tokens from unpkg...");
      const cssContent = await this.fetchWithRetry();
      const tokens = this.parseTokensFromContent(cssContent);
      console.error(`[Vibe MCP] Parsed ${tokens.length} tokens, caching for session`);
      this.tokenCache = tokens;
      return tokens;
    } catch (error) {
      console.error("[Vibe MCP] Failed to fetch tokens:", error);
      console.error("[Vibe MCP] Returning empty array as fallback");
      return [];
    }
  }

  /**
   * Fetch CSS content from remote URL with retry logic
   */
  private static async fetchWithRetry(): Promise<string> {
    // Try fetch first
    try {
      const response = await fetch(this.TOKENS_URL);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return await response.text();
    } catch (fetchError) {
      console.error("[Vibe MCP] Fetch failed (likely corporate proxy/SSL), trying curl fallback...");

      // Fallback to curl for corporate networks
      try {
        const { stdout } = await execAsync(`curl -s -L "${this.TOKENS_URL}"`);
        return stdout;
      } catch (curlError) {
        console.error("[Vibe MCP] Curl fallback also failed:", curlError);
        throw fetchError; // Re-throw original fetch error
      }
    }
  }

  /**
   * Parse CSS custom properties from CSS content
   */
  private static parseTokensFromContent(content: string): TokenMetadata[] {
    const tokens: TokenMetadata[] = [];
    const lines = content.split("\n");

    // Regex to match CSS custom properties: --variable-name: value; (with optional inline comments)
    const tokenRegex = /^\s*--([a-zA-Z0-9-_]+):\s*([^;]+);?\s*(?:\/\*.*?\*\/)?\s*$/;
    const commentRegex = /^\s*\/\*\s*(.+?)\s*\*\/\s*$/;

    let currentComment = "";

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      // Check for CSS comments that might describe the next token
      const commentMatch = line.match(commentRegex);
      if (commentMatch) {
        currentComment = commentMatch[1];
        continue;
      }

      // Check for CSS custom property
      const tokenMatch = line.match(tokenRegex);
      if (tokenMatch) {
        const [, name, value] = tokenMatch;
        const category = this.categorizeToken(name);

        tokens.push({
          name: `--${name}`,
          value: value.trim(),
          category,
          description: currentComment || undefined,
          file: "index.css"
        });

        // Clear comment after using it
        currentComment = "";
      } else if (line && !line.startsWith("/*") && !line.endsWith("*/") && !line.includes("{") && !line.includes("}")) {
        // Clear comment if we hit a non-empty, non-comment line that's not a token
        currentComment = "";
      }
    }

    return tokens;
  }

  /**
   * Categorize tokens based on their name patterns
   */
  private static categorizeToken(tokenName: string): string {
    // Remove the -- prefix and convert to lowercase for pattern matching
    const name = tokenName.toLowerCase().replace(/^--/, "");

    // Motion tokens - start with motion-
    if (name.startsWith("motion-")) {
      return "Motion";
    }

    // Spacing tokens - start with spacing- or space-
    if (name.startsWith("spacing-") || name.startsWith("space-")) {
      return "Spacing";
    }

    // Typography tokens - start with font- or letter-spacing-
    if (name.startsWith("font-") || name.startsWith("letter-spacing-")) {
      return "Typography";
    }

    // Border radius tokens
    if (name.startsWith("border-radius-")) {
      return "Border Radius";
    }

    // Shadow tokens
    if (name.startsWith("box-shadow-")) {
      return "Shadows";
    }

    // Color tokens - simplified to just check if "color" is included
    if (name.includes("color")) {
      return "Colors";
    }

    // Animation/transition related
    if (name.includes("animation") || name.includes("transition") || name.includes("timing")) {
      return "Motion";
    }

    // Default category
    return "Otherww";
  }

  /**
   * Clear the cache (useful for testing or development)
   */
  static clearCache(): void {
    this.tokenCache = null;
  }
}
