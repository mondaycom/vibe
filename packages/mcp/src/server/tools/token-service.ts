import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

interface TokenData {
  [theme: string]: {
    [tokenName: string]: string;
  };
}

interface TokenInfo {
  name: string;
  value: string;
  theme: string;
  category: string;
}

export class TokenService {
  private static readonly UNPKG_URL = "https://unpkg.com/@vibe/style@latest/dist/colors.json";
  private static cachedTokens: TokenInfo[] | null = null;

  static async getTokens(): Promise<TokenInfo[]> {
    if (this.cachedTokens) {
      console.error("[Vibe MCP] Using cached tokens");
      return this.cachedTokens;
    }

    try {
      console.error("[Vibe MCP] Fetching tokens from unpkg...");
      const tokens = await this.fetchFromUnpkg();
      console.error(`[Vibe MCP] Fetched ${tokens.length} tokens, caching for session`);
      this.cachedTokens = tokens;
      return tokens;
    } catch (error) {
      console.error("[Vibe MCP] Failed to fetch tokens:", error);
      console.error("[Vibe MCP] Returning empty array as fallback");
      return [];
    }
  }

  private static async fetchFromUnpkg(): Promise<TokenInfo[]> {
    return await this.fetchWithRetry();
  }

  private static async fetchWithRetry(): Promise<TokenInfo[]> {
    // Try native fetch first
    try {
      const response = await fetch(this.UNPKG_URL);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      const tokensData: TokenData = await response.json();
      return this.processTokensData(tokensData);
    } catch (fetchError) {
      console.error("[Vibe MCP] Fetch failed (likely corporate proxy/SSL), trying curl fallback...");

      // Fallback to curl
      try {
        const { stdout } = await execAsync(`curl -s "${this.UNPKG_URL}"`);
        const tokensData: TokenData = JSON.parse(stdout);
        return this.processTokensData(tokensData);
      } catch (curlError) {
        console.error(`[Vibe MCP] Curl fallback also failed: ${curlError}`);
        throw fetchError; // Re-throw the original fetch error
      }
    }
  }

  private static processTokensData(tokensData: TokenData): TokenInfo[] {
    const tokens: TokenInfo[] = [];

    for (const [theme, themeTokens] of Object.entries(tokensData)) {
      for (const [tokenName, tokenValue] of Object.entries(themeTokens)) {
        tokens.push({
          name: tokenName,
          value: tokenValue,
          theme,
          category: this.categorizeToken(tokenName)
        });
      }
    }

    return tokens;
  }

  private static categorizeToken(tokenName: string): string {
    // Categorize tokens based on their naming patterns - order matters, more specific first
    if (tokenName.includes("text")) {
      return "typography";
    }
    if (tokenName.includes("border")) {
      return "border";
    }
    if (tokenName.includes("hover") || tokenName.includes("selected")) {
      return "state";
    }
    if (
      tokenName.includes("warning") ||
      tokenName.includes("error") ||
      tokenName.includes("success") ||
      tokenName.includes("positive") ||
      tokenName.includes("negative")
    ) {
      return "status";
    }
    if (tokenName.startsWith("primary-") || tokenName.startsWith("secondary-")) {
      return "semantic";
    }
    if (tokenName.includes("color") || tokenName.includes("background") || tokenName.includes("surface")) {
      return "color";
    }
    return "other";
  }

  static async getTokensByCategory(category?: string): Promise<TokenInfo[]> {
    const allTokens = await this.getTokens();

    if (!category) {
      return allTokens;
    }

    return allTokens.filter(token => token.category === category);
  }

  static async getTokensByTheme(theme?: string): Promise<TokenInfo[]> {
    const allTokens = await this.getTokens();

    if (!theme) {
      return allTokens;
    }

    return allTokens.filter(token => token.theme === theme);
  }

  static async searchTokens(query: string): Promise<TokenInfo[]> {
    const allTokens = await this.getTokens();
    const searchTerm = query.toLowerCase();

    return allTokens.filter(
      token =>
        token.name.toLowerCase().includes(searchTerm) ||
        token.value.toLowerCase().includes(searchTerm) ||
        token.category.toLowerCase().includes(searchTerm) ||
        token.theme.toLowerCase().includes(searchTerm)
    );
  }

  static getAvailableThemes(): string[] {
    return ["light-app-theme", "dark-app-theme", "black-app-theme", "hacker-app-theme"];
  }

  static getAvailableCategories(): string[] {
    return ["color", "typography", "border", "semantic", "state", "status", "other"];
  }
}
