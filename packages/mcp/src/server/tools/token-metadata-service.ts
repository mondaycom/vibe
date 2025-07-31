import * as fs from "fs";
import * as path from "path";

export interface TokenMetadata {
  name: string;
  value: string;
  category: string;
  description?: string;
  file: string;
}

export class TokenMetadataService {
  private static tokenCache: TokenMetadata[] | null = null;

  /**
   * Get all design tokens from the style package
   */
  static async getTokenMetadata(): Promise<TokenMetadata[]> {
    if (this.tokenCache) {
      return this.tokenCache;
    }

    this.tokenCache = await this.parseAllTokenFiles();
    return this.tokenCache;
  }

  /**
   * Parse all SCSS files in the style package to extract tokens
   */
  private static async parseAllTokenFiles(): Promise<TokenMetadata[]> {
    const allTokens: TokenMetadata[] = [];

    try {
      const stylePackagePath = this.getStylePackagePath();
      const srcPath = path.join(stylePackagePath, "src");

      // Parse base token files
      const tokenFiles = [
        { file: "spacing.scss", category: "Spacing" },
        { file: "typography.scss", category: "Typography" },
        { file: "border-radius.scss", category: "Border Radius" },
        { file: "borders.scss", category: "Borders" },
        { file: "motion.scss", category: "Motion" }
      ];

      for (const { file, category } of tokenFiles) {
        const filePath = path.join(srcPath, file);
        if (fs.existsSync(filePath)) {
          const tokens = await this.parseTokensFromFile(filePath, category);
          allTokens.push(...tokens);
        }
      }

      // Parse theme files for color tokens
      const themesPath = path.join(srcPath, "themes");
      if (fs.existsSync(themesPath)) {
        const themeFiles = fs.readdirSync(themesPath).filter(file => file.endsWith(".scss"));

        for (const themeFile of themeFiles) {
          const filePath = path.join(themesPath, themeFile);
          const themeName = path.basename(themeFile, ".scss");
          const category = `Colors (${themeName
            .replace("-theme", "")
            .replace("-", " ")
            .replace(/\b\w/g, l => l.toUpperCase())})`;

          const tokens = await this.parseTokensFromFile(filePath, category);
          allTokens.push(...tokens);
        }
      }

      return allTokens;
    } catch (error) {
      console.error("Error parsing token files:", error);
      return [];
    }
  }

  /**
   * Parse CSS custom properties from a single SCSS file
   */
  private static async parseTokensFromFile(filePath: string, category: string): Promise<TokenMetadata[]> {
    const tokens: TokenMetadata[] = [];

    try {
      const content = fs.readFileSync(filePath, "utf8");
      const lines = content.split("\n");

      // Regex to match CSS custom properties: --variable-name: value;
      const tokenRegex = /^\s*--([a-zA-Z0-9-_]+):\s*([^;]+);?\s*$/;
      const commentRegex = /^\s*\/\/\s*(.+)$/;

      let currentComment = "";

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        // Check for comments that might describe the next token
        const commentMatch = line.match(commentRegex);
        if (commentMatch) {
          currentComment = commentMatch[1];
          continue;
        }

        // Check for CSS custom property
        const tokenMatch = line.match(tokenRegex);
        if (tokenMatch) {
          const [, name, value] = tokenMatch;

          tokens.push({
            name: `--${name}`,
            value: value.trim(),
            category,
            description: currentComment || undefined,
            file: path.relative(this.getStylePackagePath(), filePath)
          });

          // Clear comment after using it
          currentComment = "";
        } else if (line && !line.startsWith("//") && !line.includes("{") && !line.includes("}")) {
          // Clear comment if we hit a non-empty, non-comment line that's not a token
          currentComment = "";
        }
      }
    } catch (error) {
      console.error(`Error parsing file ${filePath}:`, error);
    }

    return tokens;
  }

  /**
   * Get the path to the style package
   */
  private static getStylePackagePath(): string {
    // Navigate from the MCP package to the style package
    const currentDir = process.cwd();

    // Try different possible paths based on where the MCP server might be running
    const possiblePaths = [
      path.join(currentDir, "..", "style"), // Running from packages/mcp
      path.join(currentDir, "packages", "style"), // Running from monorepo root
      path.join(currentDir, "..", "..", "packages", "style") // Running from packages/mcp/dist
    ];

    for (const possiblePath of possiblePaths) {
      if (fs.existsSync(path.join(possiblePath, "package.json"))) {
        return possiblePath;
      }
    }

    throw new Error("Could not find style package path");
  }

  /**
   * Clear the cache (useful for testing or development)
   */
  static clearCache(): void {
    this.tokenCache = null;
  }
}
