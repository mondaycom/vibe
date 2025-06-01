import fs from "fs";
import path from "path";

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
  private static cachedTokens: TokenInfo[] | null = null;
  private static readonly COLORS_JSON_PATH = path.join(process.cwd(), "packages/style/dist/colors.json");

  static async getTokens(): Promise<TokenInfo[]> {
    if (this.cachedTokens) {
      console.error("[Vibe MCP] Using cached tokens");
      return this.cachedTokens;
    }

    try {
      console.error("[Vibe MCP] Loading tokens from colors.json...");
      const tokens = await this.loadTokensFromFile();
      console.error(`[Vibe MCP] Loaded ${tokens.length} tokens, caching for session`);
      this.cachedTokens = tokens;
      return tokens;
    } catch (error) {
      console.error("[Vibe MCP] Failed to load tokens:", error);
      console.error("[Vibe MCP] Returning empty array as fallback");
      return [];
    }
  }

  private static async loadTokensFromFile(): Promise<TokenInfo[]> {
    try {
      const fileContent = fs.readFileSync(this.COLORS_JSON_PATH, "utf-8");
      const tokenData: TokenData = JSON.parse(fileContent);

      const tokens: TokenInfo[] = [];

      for (const [theme, themeTokens] of Object.entries(tokenData)) {
        for (const [tokenName, tokenValue] of Object.entries(themeTokens)) {
          tokens.push({
            name: tokenName,
            value: tokenValue,
            theme: theme,
            category: this.categorizeToken(tokenName)
          });
        }
      }

      return tokens;
    } catch (error) {
      throw new Error(`Failed to read or parse colors.json: ${error}`);
    }
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
