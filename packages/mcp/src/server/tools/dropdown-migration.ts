import { getErrorMessage, MCPTool } from "../index.js";
import { z } from "zod";
import { readFileSync, existsSync, readdirSync, statSync } from "fs";
import { join, resolve, extname } from "path";

const dropdownMigrationSchema = z.object({
  projectPath: z.string().describe("Path to the project directory to analyze for Dropdown migration")
});

export const dropdownMigrationTool: MCPTool<typeof dropdownMigrationSchema.shape> = {
  name: "dropdown-migration",
  description:
    "Analyzes a project for migrating from old Dropdown to new Dropdown (Alpha) component based on the official migration guide. Helps identify usage patterns and provides migration steps.",
  inputSchema: dropdownMigrationSchema.shape,
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

      const migrationData = getDropdownMigrationInstructions(projectInfo);
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
            text: `Error in dropdown-migration-tool: ${errorMessage}`
          }
        ],
        isError: true
      };
    }
  }
};

function getDropdownMigrationInstructions(projectInfo: any) {
  return {
    overview: {
      description: "Migration from old Dropdown to new Dropdown (Alpha) component",
      keyChanges: [
        "Import path change: '@vibe/core' → '@vibe/core/next'",
        "Option data structure: { id, text } → { value, label }",
        "Built-in form field support (label, helperText, error, required)",
        "Enhanced accessibility with ARIA attributes",
        "Better TypeScript support with generics",
        "Improved tooltip integration",
        "Breaking changes in default behavior"
      ],
      status: "Alpha - Available under @vibe/core/next"
    },
    benefits: {
      accessibility: [
        "Proper ARIA attributes and keyboard navigation",
        "Screen reader optimized with clear announcements",
        "Single combobox role to avoid confusion",
        "Improved focus management and visual indicators"
      ],
      performance: [
        "Smaller bundle size (no react-select dependency)",
        "Native implementation with optimized rendering",
        "Improved performance for large datasets",
        "Better memory usage with optimized re-renders"
      ],
      developerExperience: [
        "Full generic type support with <Item> type parameter",
        "Better type safety for options and callbacks",
        "Comprehensive prop type definitions",
        "IntelliSense improvements"
      ],
      features: [
        "Built-in label, helper text, and error state support",
        "Sticky group headers with stickyGroupTitle",
        "Custom filtering with filterOption prop",
        "Control selected options visibility with showSelectedOptions",
        "Enhanced tooltip integration with tooltipProps"
      ]
    },
    migrationSteps: {
      note: "⚠️ IMPORTANT: The new Dropdown is in Alpha. Test thoroughly before production use.",
      steps: [
        {
          step: 1,
          title: "Analyze Current Dropdown Usage",
          action: "Run this migration tool to understand current usage patterns",
          description: "Identify all Dropdown components and their configuration in your project",
          important: "Review the analysis results to understand the scope of changes needed"
        },
        {
          step: 2,
          title: "Update Import Statements",
          action: "Import Dropdown from '@vibe/core'",
          example: "import { Dropdown } from '@vibe/core';",
          description: "In v4, the new Dropdown is the default export from @vibe/core. If you were using @vibe/core/next, update to @vibe/core.",
          command: "Find and replace: 'from \"@vibe/core/next\"' → 'from \"@vibe/core\"' (for Dropdown imports)"
        },
        {
          step: 3,
          title: "Update Option Data Structure",
          action: "Convert options from { id, text } to { value, label } format",
          description: "The new Dropdown expects explicit 'label' and 'value' properties",
          important: "This is a breaking change that requires manual updates to all option arrays"
        },
        {
          step: 4,
          title: "Update Form Integration",
          action: "Replace external labels/helper text with built-in props",
          description: "Use label, helperText, error, and required props instead of external elements",
          improvement: "This provides better accessibility and form field semantics"
        },
        {
          step: 5,
          title: "Handle Breaking Changes",
          action: "Review and update props that have changed behavior",
          description: "Address searchable default change, showSelectedOptions behavior, and removed props",
          important: "Pay special attention to searchable (now defaults to false) and removed props"
        },
        {
          step: 6,
          title: "Update Tooltip Integration",
          action: "Replace tooltipContent with tooltipProps for enhanced tooltip support",
          description: "The new implementation supports both dropdown-level and option-level tooltips",
          enhancement: "More flexible tooltip configuration with full Tooltip component props"
        },
        {
          step: 7,
          title: "Testing and Validation",
          action: "Thoroughly test all Dropdown functionality",
          description: "Verify accessibility, keyboard navigation, form integration, and visual appearance",
          critical: "Alpha status requires careful testing before production deployment"
        }
      ]
    },
    breakingChanges: {
      importPath: {
        old: "import { Dropdown } from '@vibe/core'; // v3 (react-select based)",
        new: "import { Dropdown } from '@vibe/core'; // v4 (new implementation)",
        reason: "The old react-select Dropdown has been removed in v4. The new Dropdown is now the default export."
      },
      optionStructure: {
        old: "{ id: 1, text: 'Option 1' }",
        new: "{ value: 1, label: 'Option 1' }",
        reason: "Explicit value and label properties for better type safety"
      },
      searchableDefault: {
        old: "searchable defaults to true",
        new: "searchable defaults to false",
        reason: "Most dropdowns don't need search functionality",
        fix: "Add searchable prop if search is needed"
      },
      showSelectedOptions: {
        old: "Selected options always visible in list",
        new: "showSelectedOptions defaults to true (selected options hidden by default in old Dropdown)",
        reason: "Better UX by hiding already selected options",
        fix: "Set showSelectedOptions={true} to restore old behavior if needed"
      },
      removedProps: [
        "extraStyles",
        "menuPortalTarget",
        "isVirtualized",
        "asyncOptions",
        "cacheOptions",
        "loadingMessage",
        "onMenuScrollToBottom",
        "captureMenuScroll",
        "insideOverflowContainer",
        "insideOverflowWithTransformContainer",
        "insideLayerContext",
        "popupsContainerSelector",
        "tooltipContent"
      ],
      newProps: [
        "label",
        "helperText",
        "error",
        "required",
        "stickyGroupTitle",
        "showSelectedOptions",
        "filterOption",
        "tooltipProps",
        "inputAriaLabel",
        "menuAriaLabel",
        "dir"
      ]
    },
    enhancedFeatures: {
      typeScript: {
        description: "Full generic type support",
        example: "<Dropdown<UserType> options={users} onChange={(user) => {...}} />"
      },
      formIntegration: {
        description: "Built-in form field support",
        example: "<Dropdown label='Select User' helperText='Choose from the list' required error={hasError} />"
      },
      optionElements: {
        description: "Rich option structure with start/end elements",
        startElements: ["avatar", "icon", "indent", "custom"],
        endElements: ["icon", "suffix", "custom"],
        example:
          "{ value: 1, label: 'User', startElement: { type: 'avatar', value: 'user.jpg' }, endElement: { type: 'suffix', value: 'Admin' } }"
      },
      tooltips: {
        description: "Enhanced tooltip support at dropdown and option level",
        example: "tooltipProps={{ content: 'Help text', position: 'top' }}"
      }
    }
  };
}

async function analyzeProject(projectPath: string) {
  const analysis: any = {
    dropdownUsage: null,
    importAnalysis: null,
    propUsage: null,
    optionStructures: null,
    potentialIssues: []
  };

  analysis.importAnalysis = await analyzeDropdownImports(projectPath);
  analysis.dropdownUsage = await analyzeDropdownUsage(projectPath);
  analysis.propUsage = await analyzePropUsage(projectPath);
  analysis.optionStructures = await analyzeOptionStructures(projectPath);

  return analysis;
}

async function analyzeDropdownImports(projectPath: string): Promise<any> {
  const importAnalysis: any = {
    oldDropdownImports: [],
    newDropdownImports: [],
    mixedImports: [],
    filesScanned: 0
  };

  try {
    const files = await getAllTsFiles(projectPath);
    importAnalysis.filesScanned = files.length;

    for (const file of files) {
      try {
        const content = readFileSync(file, "utf-8");

        const hasOldImport = content.includes("from '@vibe/core'") && content.includes("Dropdown");
        const hasNewImport = content.includes("from '@vibe/core/next'") && content.includes("Dropdown");

        if (hasOldImport && hasNewImport) {
          importAnalysis.mixedImports.push(file);
        } else if (hasOldImport) {
          importAnalysis.oldDropdownImports.push(file);
        } else if (hasNewImport) {
          importAnalysis.newDropdownImports.push(file);
        }
      } catch (e) {
        // Skip files that can't be read
      }
    }
  } catch (e) {
    importAnalysis.error = `Error scanning imports: ${getErrorMessage(e)}`;
  }

  return importAnalysis;
}

async function analyzeDropdownUsage(projectPath: string): Promise<any> {
  const dropdownUsage: any = {
    dropdownComponents: [],
    totalUsages: 0,
    filesWithDropdowns: [],
    filesScanned: 0
  };

  try {
    const files = await getAllTsFiles(projectPath);
    dropdownUsage.filesScanned = files.length;

    for (const file of files) {
      try {
        const content = readFileSync(file, "utf-8");

        const dropdownMatches = content.match(/<Dropdown\s/g);
        if (dropdownMatches) {
          dropdownUsage.filesWithDropdowns.push(file);
          dropdownUsage.totalUsages += dropdownMatches.length;
        }
      } catch (e) {
        // Skip files that can't be read
      }
    }
  } catch (e) {
    dropdownUsage.error = `Error scanning Dropdown usage: ${getErrorMessage(e)}`;
  }

  return dropdownUsage;
}

async function analyzePropUsage(projectPath: string): Promise<any> {
  const propUsage: any = {
    removedProps: {},
    changedProps: {},
    filesScanned: 0
  };

  const removedProps = [
    "extraStyles",
    "menuPortalTarget",
    "isVirtualized",
    "asyncOptions",
    "cacheOptions",
    "loadingMessage",
    "onMenuScrollToBottom",
    "captureMenuScroll",
    "insideOverflowContainer",
    "insideOverflowWithTransformContainer",
    "insideLayerContext",
    "popupsContainerSelector",
    "tooltipContent"
  ];

  const changedProps = ["searchable", "showSelectedOptions"];

  try {
    const files = await getAllTsFiles(projectPath);
    propUsage.filesScanned = files.length;

    for (const file of files) {
      try {
        const content = readFileSync(file, "utf-8");

        if (content.includes("<Dropdown") || content.includes("Dropdown.")) {
          // Check for removed props
          for (const prop of removedProps) {
            if (content.includes(prop)) {
              if (!propUsage.removedProps[prop]) {
                propUsage.removedProps[prop] = [];
              }
              propUsage.removedProps[prop].push(file);
            }
          }

          // Check for props with changed behavior
          for (const prop of changedProps) {
            if (content.includes(prop)) {
              if (!propUsage.changedProps[prop]) {
                propUsage.changedProps[prop] = [];
              }
              propUsage.changedProps[prop].push(file);
            }
          }
        }
      } catch (e) {
        // Skip files that can't be read
      }
    }
  } catch (e) {
    propUsage.error = `Error scanning prop usage: ${getErrorMessage(e)}`;
  }

  return propUsage;
}

async function analyzeOptionStructures(projectPath: string): Promise<any> {
  const optionAnalysis: any = {
    oldStructurePatterns: [],
    newStructurePatterns: [],
    unknownStructures: [],
    filesScanned: 0
  };

  try {
    const files = await getAllTsFiles(projectPath);
    optionAnalysis.filesScanned = files.length;

    for (const file of files) {
      try {
        const content = readFileSync(file, "utf-8");

        // Look for common old structure patterns
        if (content.includes("id:") && content.includes("text:")) {
          optionAnalysis.oldStructurePatterns.push({
            file,
            pattern: "{ id, text } structure detected"
          });
        }

        // Look for new structure patterns
        if (content.includes("value:") && content.includes("label:")) {
          optionAnalysis.newStructurePatterns.push({
            file,
            pattern: "{ value, label } structure detected"
          });
        }
      } catch (e) {
        // Skip files that can't be read
      }
    }
  } catch (e) {
    optionAnalysis.error = `Error scanning option structures: ${getErrorMessage(e)}`;
  }

  return optionAnalysis;
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

  // Import recommendations
  if (analysis.importAnalysis) {
    const imports = analysis.importAnalysis;

    if (imports.oldDropdownImports?.length > 0) {
      recommendations.push({
        type: "import-migration",
        priority: "high",
        action: "Update Dropdown imports for v4",
        details: `Found ${imports.oldDropdownImports.length} files importing Dropdown from '@vibe/core'`,
        files: imports.oldDropdownImports.slice(0, 10),
        fix: "The Dropdown API has changed in v4. Update usage to match the new API (see migration guide).",
        command: "Find and replace in files with Dropdown imports"
      });
    }

    if (imports.mixedImports?.length > 0) {
      recommendations.push({
        type: "mixed-imports",
        priority: "medium",
        action: "Resolve mixed import patterns",
        details: `Found ${imports.mixedImports.length} files with both old and new Dropdown imports`,
        files: imports.mixedImports,
        fix: "Consolidate to use only '@vibe/core/next' imports"
      });
    }

    if (imports.newDropdownImports?.length > 0) {
      recommendations.push({
        type: "already-migrated-imports",
        priority: "info",
        message: `${imports.newDropdownImports.length} files already using new Dropdown imports`
      });
    }
  }

  // Usage recommendations
  if (analysis.dropdownUsage) {
    const usage = analysis.dropdownUsage;

    if (usage.totalUsages > 0) {
      recommendations.push({
        type: "dropdown-usage-found",
        priority: "info",
        message: `Found ${usage.totalUsages} Dropdown components across ${usage.filesWithDropdowns?.length} files`,
        files: usage.filesWithDropdowns?.slice(0, 10)
      });
    }
  }

  // Prop usage recommendations
  if (analysis.propUsage) {
    const props = analysis.propUsage;

    Object.entries(props.removedProps || {}).forEach(([prop, files]: [string, any]) => {
      recommendations.push({
        type: "removed-prop",
        priority: "high",
        action: `Remove or replace '${prop}' prop`,
        details: `Found ${files.length} files using removed prop '${prop}'`,
        files: files.slice(0, 5),
        fix: getRemovedPropFix(prop)
      });
    });

    Object.entries(props.changedProps || {}).forEach(([prop, files]: [string, any]) => {
      recommendations.push({
        type: "changed-prop",
        priority: "medium",
        action: `Review '${prop}' prop usage`,
        details: `Found ${files.length} files using '${prop}' - behavior has changed`,
        files: files.slice(0, 5),
        fix: getChangedPropFix(prop)
      });
    });
  }

  // Option structure recommendations
  if (analysis.optionStructures) {
    const options = analysis.optionStructures;

    if (options.oldStructurePatterns?.length > 0) {
      recommendations.push({
        type: "option-structure",
        priority: "high",
        action: "Update option data structure",
        details: `Found ${options.oldStructurePatterns.length} files with old { id, text } option structure`,
        files: options.oldStructurePatterns.map((p: any) => p.file).slice(0, 10),
        fix: "Convert options from { id, text } format to { value, label } format",
        example: "{ id: 1, text: 'Option 1' } → { value: 1, label: 'Option 1' }"
      });
    }

    if (options.newStructurePatterns?.length > 0) {
      recommendations.push({
        type: "already-migrated-options",
        priority: "info",
        message: `${options.newStructurePatterns.length} files already using new { value, label } option structure`
      });
    }
  }

  // General migration recommendations
  recommendations.push({
    type: "form-integration",
    priority: "medium",
    action: "Consider upgrading to built-in form integration",
    details: "Replace external labels/helper text with built-in label, helperText, error, and required props",
    benefits: ["Better accessibility", "Improved form field semantics", "Consistent styling"]
  });

  recommendations.push({
    type: "searchable-default",
    priority: "medium",
    action: "Review searchable prop usage",
    details: "New Dropdown defaults to searchable=false (old default was true)",
    fix: "Add 'searchable' prop if search functionality is needed",
    warning: "This is a breaking change in default behavior"
  });

  recommendations.push({
    type: "tooltip-enhancement",
    priority: "low",
    action: "Upgrade tooltip integration",
    details: "Replace 'tooltipContent' with 'tooltipProps' for enhanced tooltip support",
    benefits: ["Option-level tooltips", "Full Tooltip component props support", "Better positioning"]
  });

  recommendations.push({
    type: "testing",
    priority: "critical",
    action: "Thorough testing required",
    details: [
      "Test all Dropdown functionality after migration",
      "Verify accessibility and keyboard navigation",
      "Check form integration and validation",
      "Test with different option structures",
      "Verify tooltip behavior",
      "Test multi-select functionality"
    ],
    warning: "⚠️ New Dropdown is in Alpha - extensive testing required before production use"
  });

  recommendations.push({
    type: "alpha-warning",
    priority: "critical",
    action: "Alpha release considerations",
    details: [
      "New Dropdown is currently in Alpha status",
      "API may change before stable release",
      "Not recommended for production without thorough testing",
      "Will eventually replace current Dropdown in main package"
    ],
    suggestion: "Consider migrating incrementally, starting with non-critical components"
  });

  return recommendations;
}

function getRemovedPropFix(prop: string): string {
  const fixes: { [key: string]: string } = {
    extraStyles: "Use CSS classes instead of extraStyles",
    menuPortalTarget: "Handled automatically with better positioning",
    isVirtualized: "Built-in performance optimization, remove prop",
    asyncOptions: "Use external data fetching with options prop",
    cacheOptions: "Handle caching externally",
    loadingMessage: "Use helperText with loading indicator",
    onMenuScrollToBottom: "Use onScroll instead",
    captureMenuScroll: "Handled automatically, remove prop",
    insideOverflowContainer: "Handled automatically, remove prop",
    insideOverflowWithTransformContainer: "Handled automatically, remove prop",
    insideLayerContext: "Handled automatically, remove prop",
    popupsContainerSelector: "Handled automatically, remove prop",
    tooltipContent: "Replace with tooltipProps for enhanced tooltip support"
  };
  return fixes[prop] || "Check migration guide for replacement";
}

function getChangedPropFix(prop: string): string {
  const fixes: { [key: string]: string } = {
    searchable: "Now defaults to false. Add 'searchable' prop if search is needed",
    showSelectedOptions: "Behavior changed. Review if current behavior meets your needs"
  };
  return fixes[prop] || "Check migration guide for behavior changes";
}
