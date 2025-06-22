import { getErrorMessage, MCPTool } from "../index.js";
import { z } from "zod";
import { readFileSync, existsSync, readdirSync, statSync } from "fs";
import { join, resolve, extname } from "path";

const migrationGuideSchema = z.object({
  projectPath: z.string().describe("Path to the project directory to analyze for migration")
});

export const v3MigrationTool: MCPTool<typeof migrationGuideSchema.shape> = {
  name: "v3-migration",
  description:
    "Analyzes a project for Vibe 2 to Vibe 3 migration requirements based on the official migration guide. Generates migration commands using tsx and jsx file extensions.",
  inputSchema: migrationGuideSchema.shape,
  execute: async input => {
    try {
      const { projectPath } = input;
      const resolvedPath = resolve(projectPath);

      if (!existsSync(resolvedPath)) {
        return {
          content: [
            {
              type: "text",
              text: `Error: Project path "${resolvedPath}" does not exist.`
            }
          ],
          isError: true
        };
      }

      const projectInfo = {
        targetDirectory: resolvedPath
      };

      const migrationData = getMigrationInstructions(projectInfo);
      const analysis = await analyzeProject(resolvedPath);

      const result = {
        migrationGuide: migrationData,
        projectInfo,
        projectAnalysis: analysis,
        recommendations: generateRecommendations(analysis, projectInfo)
      };

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result, null, 2)
          }
        ]
      };
    } catch (e) {
      const errorMessage = getErrorMessage(e);
      return {
        content: [
          {
            type: "text",
            text: `Error in vibe-migration-tool: ${errorMessage}`
          }
        ],
        isError: true
      };
    }
  }
};

function getMigrationInstructions(projectInfo: any) {
  return {
    overview: {
      description: "Vibe 3 is a major update introducing new features, enhancements, and breaking changes",
      keyChanges: [
        "Package rename: monday-ui-react-core → @vibe/core + @vibe/icons",
        "Enhanced TypeScript support",
        "Improved prop type-checking with string literals",
        "Better layering of floating components in modals"
      ]
    },
    packageChanges: {
      remove: ["monday-ui-react-core"],
      add: ["@vibe/core", "@vibe/icons@^1.7.2"],
      description: "Main package rename from monday-ui-react-core to @vibe/core and @vibe/icons"
    },
    importChanges: {
      cssImports: {
        from: "monday-ui-react-core/dist/main.css",
        to: "@vibe/core/tokens"
      },
      iconImports: {
        from: "monday-ui-style/src/Icons",
        to: "@vibe/icons/raw"
      },
      nextComponents: {
        from: "monday-ui-react-core/next",
        to: "@vibe/core",
        components: ["Heading", "EditableHeading", "Search"]
      },
      storybookComponents: {
        from: "monday-ui-react-core/storybookComponents",
        to: "vibe-storybook-components"
      }
    },
    removedComponents: [
      { name: "Input", replacement: "TextField" },
      { name: "EditableInput", replacement: "EditableText" },
      { name: "SearchComponent", replacement: "Search" },
      { name: "ResponsiveList", replacement: "useIsOverflowing hook" }
    ],
    breakingChanges: {
      Button: {
        changes: ["children prop now required", "sm/md/lg sizes renamed to small/medium/large"],
        sizeMapping: { sm: "small", md: "medium", lg: "large" }
      },
      Chips: {
        changes: ["DARK_INDIGO and BLACKISH colors removed", "clickable/isClickable props removed, use onClick"],
        behaviorChanges: ["Use onClick prop for clickable behavior instead of clickable prop"]
      },
      Counter: {
        changes: ["sm/md/lg sizes renamed to small/medium/large"],
        sizeMapping: { sm: "small", md: "medium", lg: "large" }
      },
      Icon: {
        changes: ["clickable and onClick props removed"],
        replacement: "Use IconButton for clickable icons"
      },
      Modal: {
        changes: ["hideCloseButton removed", "unmountOnClose default changed to true"],
        behaviorChanges: ["Modal will not render when show is false by default"]
      },
      TextField: {
        changes: ["requiredAsterisk prop removed", "sm/md/lg sizes renamed", "readonly style updated"],
        sizeMapping: { sm: "small", md: "medium", lg: "large" }
      },
      Tooltip: {
        changes: [
          "paddingSize, justify, arrowPosition props removed",
          "theme limited to dark/primary",
          "position limited to top/right/bottom/left"
        ],
        behaviorChanges: [
          "showOnDialogEnter default changed to true",
          "addKeyboardHideShowTriggersByDefault default changed to true"
        ]
      },
      Dropdown: {
        changes: ["xxs, xs sizes removed (use small)", "new readonly style"]
      },
      MenuButton: {
        changes: ["hideWhenReferenceHidden default changed to true"]
      },
      Steps: {
        changes: ["isOnPrimary prop removed, use color='primary'"]
      },
      Tabs: {
        changes: ["browser default margin/padding reset for ul/li elements"]
      },
      Tipseen: {
        changes: [
          "content prop now mandatory",
          "default color changed from 'primary' to 'inverted'",
          "showDelay default changed to 100",
          "justify prop removed"
        ]
      }
    },
    iconChanges: {
      removed: ["Upgrade"],
      renamed: [
        { from: "Featured", to: "Upgrade" },
        { from: "Replay", to: "Reply" }
      ]
    },
    migrationSteps: {
      note: "⚠️ IMPORTANT: Follow these steps sequentially. Complete each step fully before proceeding to the next.",
      steps: [
        {
          step: 1,
          title: "Analyze Project",
          action: "Run detailed analysis to understand what needs to be migrated",
          description:
            "Use this migration tool with 'detailed' analysis type to understand the scope of changes needed",
          details: [
            "Check package.json dependencies",
            "Scan for old imports and component usage",
            "Identify breaking changes that need manual attention",
            "Review the analysis results and recommendations"
          ],
          important: "Understanding what needs to change before starting will save time and prevent issues",
          note: "This analysis is already being performed by this tool - review the results carefully"
        },
        {
          step: 2,
          title: "Update Package Dependencies",
          action: "Install @vibe/core and @vibe/icons, remove monday-ui-react-core",
          command: "yarn add @vibe/core @vibe/icons && yarn remove monday-ui-react-core",
          description: "This step updates your package.json and installs the new Vibe 3 packages",
          important:
            "Do NOT proceed to step 3 until this completes successfully and you verify the packages are installed"
        },
        {
          step: 3,
          title: "Run Automated Migration",
          action: `Run migration script: npx @vibe/codemod -m v3 --target "${projectInfo.targetDirectory}" --extensions tsx jsx -y`,
          command: `npx @vibe/codemod -m v3 --target "${projectInfo.targetDirectory}" --extensions tsx jsx -y`,
          description:
            "This automated script will handle most import and component transformations. The -y flag skips git confirmation since this tool already manages the process.",
          important: "Let this script complete fully before making any manual changes",
          parameters: {
            target: projectInfo.targetDirectory,
            note: "File extensions are auto-detected from your provided project path"
          }
        },
        {
          step: 4,
          title: "Manual Review and Fixes",
          action: "Review and apply manual changes for breaking changes",
          description: "Check for components and props that require manual intervention",
          important: "Use the breaking changes analysis from this tool to identify what needs manual fixes"
        },
        {
          step: 5,
          title: "Testing",
          action: "Test application",
          description: "Run tests and verify all functionality",
          important: "Do not consider migration complete until all features work correctly"
        },
        {
          step: 6,
          title: "Migration Summary & Next Steps",
          action: "Review migration completion and consider additional improvements",
          description: "Congratulations! You've successfully migrated to Vibe 3. Consider these optional next steps:",
          nextSteps: [
            {
              title: "Code Formatting (Optional)",
              description: "Format your code according to your project's settings",
              userAction: "Run your project's formatter if desired (e.g., 'npm run format' or 'yarn format')",
              note: "Check your package.json scripts for available formatting commands"
            },
            {
              title: "Show Your Support ⭐",
              description: "If this migration helped you, consider giving the Vibe Design System a star!",
              action: "Visit https://github.com/mondaycom/vibe and click the ⭐ Star button",
              note: "Your support helps us continue improving the developer experience"
            }
          ],
          important:
            "🎉 Migration to Vibe 3 is now complete! Your application should be running with all the latest improvements."
        }
      ]
    }
  };
}

async function analyzeProject(projectPath: string) {
  const analysis: any = {
    packageJsonAnalysis: null,
    importAnalysis: null,
    componentUsage: null,
    potentialIssues: []
  };

  const packageJsonPath = join(projectPath, "package.json");
  if (existsSync(packageJsonPath)) {
    try {
      const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf-8"));
      analysis.packageJsonAnalysis = analyzePackageJson(packageJson);
    } catch (e) {
      analysis.potentialIssues.push(`Could not parse package.json: ${getErrorMessage(e)}`);
    }
  }

  analysis.importAnalysis = await analyzeImports(projectPath);
  analysis.componentUsage = await analyzeComponentUsage(projectPath);

  return analysis;
}

function analyzePackageJson(packageJson: any) {
  const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
  const hasOldPackage = !!dependencies["monday-ui-react-core"];
  const hasNewPackage = !!dependencies["@vibe/core"];
  const hasMondayUIStyle = !!dependencies["monday-ui-style"];
  const hasVibeIcons = !!dependencies["@vibe/icons"];

  return {
    hasOldPackage,
    hasNewPackage,
    hasMondayUIStyle,
    hasVibeIcons,
    currentVersion: dependencies["monday-ui-react-core"] || "not found",
    newVersion: dependencies["@vibe/core"] || "not installed",
    iconsVersion: dependencies["@vibe/icons"] || "not installed",
    migrationStatus: hasNewPackage ? "migrated" : hasOldPackage ? "needs-migration" : "not-using-vibe"
  };
}

async function analyzeImports(projectPath: string): Promise<any> {
  const importIssues: any = {
    oldCSSImports: [],
    oldIconImports: [],
    nextComponentImports: [],
    storybookImports: [],
    filesScanned: 0
  };

  try {
    const files = await getAllTsFiles(projectPath);
    importIssues.filesScanned = files.length;

    for (const file of files) {
      try {
        const content = readFileSync(file, "utf-8");

        // Check for old CSS imports
        if (content.includes("monday-ui-react-core/dist/main.css")) {
          importIssues.oldCSSImports.push(file);
        }

        // Check for old icon imports
        if (content.includes("monday-ui-style/src/Icons")) {
          importIssues.oldIconImports.push(file);
        }

        // Check for next component imports
        if (content.includes("monday-ui-react-core/next")) {
          importIssues.nextComponentImports.push(file);
        }

        // Check for storybook imports
        if (content.includes("monday-ui-react-core/storybookComponents")) {
          importIssues.storybookImports.push(file);
        }
      } catch (e) {
        // Skip files that can't be read
      }
    }
  } catch (e) {
    importIssues.error = `Error scanning files: ${getErrorMessage(e)}`;
  }

  return importIssues;
}

async function analyzeComponentUsage(projectPath: string): Promise<any> {
  const componentUsage: any = {
    removedComponents: {},
    breakingChangeComponents: {},
    iconUsage: {},
    filesScanned: 0
  };

  const removedComponents = ["Input", "EditableInput", "SearchComponent", "ResponsiveList"];
  const breakingChangeComponents = ["Button", "Chips", "Counter", "Icon", "Modal", "TextField", "Tooltip", "Dropdown"];
  const removedIcons = ["Upgrade"];
  const renamedIcons = ["Featured", "Replay"];

  try {
    const files = await getAllTsFiles(projectPath);
    componentUsage.filesScanned = files.length;

    for (const file of files) {
      try {
        const content = readFileSync(file, "utf-8");

        // Check for removed components
        for (const component of removedComponents) {
          if (content.includes(`<${component}`) || content.includes(`${component}.`)) {
            if (!componentUsage.removedComponents[component]) {
              componentUsage.removedComponents[component] = [];
            }
            componentUsage.removedComponents[component].push(file);
          }
        }

        // Check for components with breaking changes
        for (const component of breakingChangeComponents) {
          if (content.includes(`<${component}`) || content.includes(`${component}.`)) {
            if (!componentUsage.breakingChangeComponents[component]) {
              componentUsage.breakingChangeComponents[component] = [];
            }
            componentUsage.breakingChangeComponents[component].push(file);
          }
        }

        // Check for icon usage
        for (const icon of [...removedIcons, ...renamedIcons]) {
          if (content.includes(icon)) {
            if (!componentUsage.iconUsage[icon]) {
              componentUsage.iconUsage[icon] = [];
            }
            componentUsage.iconUsage[icon].push(file);
          }
        }
      } catch (e) {
        // Skip files that can't be read
      }
    }
  } catch (e) {
    componentUsage.error = `Error scanning files: ${getErrorMessage(e)}`;
  }

  return componentUsage;
}

async function getAllTsFiles(dir: string): Promise<string[]> {
  const files: string[] = [];
  const validExtensions = [".ts", ".tsx", ".js", ".jsx"];

  function scanDirectory(currentDir: string, depth = 0) {
    if (depth > 5) return; // Prevent too deep recursion

    try {
      const entries = readdirSync(currentDir);

      for (const entry of entries) {
        if (entry.startsWith(".") || entry === "node_modules" || entry === "dist" || entry === "build") {
          continue; // Skip hidden dirs and common build dirs
        }

        const fullPath = join(currentDir, entry);
        try {
          const stat = statSync(fullPath);

          if (stat.isDirectory()) {
            scanDirectory(fullPath, depth + 1);
          } else if (stat.isFile() && validExtensions.includes(extname(entry))) {
            files.push(fullPath);
          }
        } catch (e) {
          // Skip if can't stat file
        }
      }
    } catch (e) {
      // Skip if can't read directory
    }
  }

  scanDirectory(dir);
  return files;
}

function generateRecommendations(analysis: any, projectInfo: any) {
  const recommendations = [];

  if (analysis.packageJsonAnalysis) {
    const pkg = analysis.packageJsonAnalysis;

    if (pkg.migrationStatus === "needs-migration") {
      recommendations.push({
        type: "package-migration",
        priority: "high",
        action: "Update package.json dependencies",
        command: "yarn add @vibe/core @vibe/icons && yarn remove monday-ui-react-core",
        details: "This is the first and most important step in the migration process"
      });
    }

    if (pkg.migrationStatus === "migrated") {
      recommendations.push({
        type: "already-migrated",
        priority: "info",
        message: "Package dependencies appear to be already migrated to Vibe 3"
      });
    }

    if (pkg.hasOldPackage && !pkg.hasVibeIcons) {
      recommendations.push({
        type: "missing-icons",
        priority: "medium",
        action: "Install @vibe/icons package",
        command: "yarn add @vibe/icons",
        details: "Icons have been moved to a separate package"
      });
    }
  }

  if (analysis.importAnalysis) {
    const imports = analysis.importAnalysis;

    if (imports.oldCSSImports?.length > 0) {
      recommendations.push({
        type: "css-imports",
        priority: "high",
        action: "Update CSS imports",
        details: `Found ${imports.oldCSSImports.length} files with old CSS imports`,
        files: imports.oldCSSImports.slice(0, 5),
        fix: "Replace 'monday-ui-react-core/dist/main.css' with '@vibe/core/tokens'"
      });
    }

    if (imports.oldIconImports?.length > 0) {
      recommendations.push({
        type: "icon-imports",
        priority: "high",
        action: "Update icon imports",
        details: `Found ${imports.oldIconImports.length} files with old icon imports`,
        files: imports.oldIconImports.slice(0, 5),
        fix: "Replace 'monday-ui-style/src/Icons' with '@vibe/icons/raw'"
      });
    }
  }

  // Component usage recommendations
  if (analysis.componentUsage) {
    const usage = analysis.componentUsage;

    Object.entries(usage.removedComponents || {}).forEach(([component, files]: [string, any]) => {
      recommendations.push({
        type: "removed-component",
        priority: "high",
        action: `Replace ${component} component`,
        details: `Found ${files.length} files using removed component ${component}`,
        files: files.slice(0, 5),
        fix: getComponentReplacement(component)
      });
    });

    Object.entries(usage.breakingChangeComponents || {}).forEach(([component, files]: [string, any]) => {
      recommendations.push({
        type: "breaking-change",
        priority: "medium",
        action: `Review ${component} usage`,
        details: `Found ${files.length} files using ${component} - check for breaking changes`,
        files: files.slice(0, 5),
        fix: getBreakingChangeDetails(component)
      });
    });
  }

  recommendations.push({
    type: "migration-script",
    priority: "high",
    action: "Run automated migration script",
    command: `npx @vibe/codemod -m v3 --target "${projectInfo.targetDirectory}" --extensions tsx jsx -y`,
    details:
      "This will handle most of the automated transformations. The -y flag auto-confirms to proceed with git changes.",
    warning: "⚠️ ONLY run this AFTER completing package dependency updates (step 2)",
    parameters: {
      target: projectInfo.targetDirectory,
      note: "Uses tsx and jsx file extensions for migration"
    }
  });

  recommendations.push({
    type: "manual-review",
    priority: "medium",
    action: "Manual review and fixes",
    details: "Review breaking changes and apply manual fixes",
    warning: "⚠️ ONLY do manual changes AFTER the automated migration script completes (step 3)"
  });

  recommendations.push({
    type: "testing",
    priority: "high",
    action: "Thorough testing required",
    details: [
      "Test all components with breaking changes",
      "Verify styling and behavior changes",
      "Check floating components in modals",
      "Test keyboard navigation with tooltips",
      "Verify prop changes work correctly"
    ],
    warning: "⚠️ ONLY test AFTER completing manual fixes (step 4)"
  });

  recommendations.push({
    type: "sequential-steps",
    priority: "critical",
    action: "Follow migration steps in order",
    details: "Use the migrationSteps guide to follow the process sequentially",
    warning: "🚨 DO NOT skip steps or work on multiple steps simultaneously"
  });

  // Add post-migration recommendations
  recommendations.push({
    type: "formatting",
    priority: "info",
    action: "Format code according to your project settings",
    details: "Run your project's formatting commands after migration is complete",
    examples: ["npm run format", "yarn format", "npm run lint:fix"],
    note: "Check your package.json scripts for available formatting commands"
  });

  recommendations.push({
    type: "github-star",
    priority: "info",
    action: "Show your support with a GitHub star ⭐",
    details: "If this migration tool helped you, consider starring the Vibe repository",
    link: "https://github.com/mondaycom/vibe",
    note: "Your support helps us continue improving the developer experience"
  });

  return recommendations;
}

function getComponentReplacement(component: string): string {
  const replacements: { [key: string]: string } = {
    Input: "Use TextField instead",
    EditableInput: "Use EditableText instead",
    SearchComponent: "Use Search instead",
    ResponsiveList: "Use useIsOverflowing hook instead"
  };
  return replacements[component] || "Check migration guide for replacement";
}

function getBreakingChangeDetails(component: string): string {
  const details: { [key: string]: string } = {
    Button: "Check size props (sm/md/lg → small/medium/large), ensure children prop is provided",
    Chips: "Replace clickable prop with onClick, check removed colors",
    Counter: "Check size props (sm/md/lg → small/medium/large)",
    Icon: "Replace clickable icons with IconButton component",
    Modal: "Remove hideCloseButton usage, check unmountOnClose behavior",
    TextField: "Check size props, remove requiredAsterisk usage",
    Tooltip: "Remove paddingSize, justify, arrowPosition props, check theme/position values"
  };
  return details[component] || "Check migration guide for specific changes";
}
