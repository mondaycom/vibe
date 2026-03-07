import { getErrorMessage, MCPTool } from "../index.js";
import { z } from "zod";
import { readFileSync, existsSync, readdirSync, statSync } from "fs";
import { join, resolve, extname } from "path";

const migrationGuideSchema = z.object({
  projectPath: z.string().describe("Path to the project directory to analyze for migration")
});

export const v4MigrationTool: MCPTool<typeof migrationGuideSchema.shape> = {
  name: "v4-migration",
  description:
    "Analyzes a project for Vibe 3 to Vibe 4 migration requirements. Scans for deprecated APIs, removed props, renamed components, and generates migration commands.",
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

      const projectInfo = { targetDirectory: resolvedPath };
      const migrationData = getMigrationInstructions(projectInfo);
      const analysis = await analyzeProject(resolvedPath);

      const result = {
        migrationGuide: migrationData,
        projectInfo,
        projectAnalysis: analysis,
        recommendations: generateRecommendations(analysis, projectInfo)
      };

      return {
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }]
      };
    } catch (e) {
      return {
        content: [{ type: "text", text: `Error in v4-migration-tool: ${getErrorMessage(e)}` }],
        isError: true
      };
    }
  }
};

function getMigrationInstructions(projectInfo: { targetDirectory: string }) {
  return {
    overview: {
      description: "Vibe 4 is a major update focused on React 19 support, ~170KB smaller bundle, and modern API patterns",
      keyChanges: [
        "React 19 support — findDOMNode, class components, and framer-motion removed",
        "~170KB smaller bundle (min+gzip) from removing 8 heavy dependencies",
        "All deprecated enum exports and static properties removed — use string literals",
        "ARIA props standardized from camelCase to aria-* attributes",
        "Package rename: monday-ui-style → @vibe/style",
        "@vibe/core/next components promoted to @vibe/core (except List)",
        "moment removed as peer dependency — DatePicker uses native Date + date-fns"
      ]
    },
    packageChanges: {
      install: ["@vibe/core@^4"],
      remove: ["moment"],
      stylePackage: {
        from: "monday-ui-style",
        to: "@vibe/style"
      }
    },
    removedDependencies: [
      { removed: "@popperjs/core + react-popper", replacement: "@floating-ui/react-dom" },
      { removed: "react-dates + moment", replacement: "react-day-picker + date-fns" },
      { removed: "react-select + react-windowed-select", replacement: "New custom Dropdown" },
      { removed: "framer-motion", replacement: "react-transition-group + CSS animations" },
      { removed: "a11y-dialog + body-scroll-lock", replacement: "New functional Modal" }
    ],
    ariaPropsChanges: {
      description: "All custom camelCase ARIA props renamed to standard HTML aria-* attributes",
      mapping: {
        ariaLabel: "aria-label",
        ariaHidden: "aria-hidden",
        ariaExpanded: "aria-expanded",
        ariaControls: "aria-controls",
        ariaHasPopup: "aria-haspopup",
        "ariaLabeledBy / ariaLabelledBy": "aria-labelledby",
        "ariaDescribedBy / ariaDescribedby": "aria-describedby",
        "ariaLabelDescription (Link)": "aria-label"
      },
      note: "Component-specific compound props like inputAriaLabel, menuAriaLabel, closeButtonAriaLabel are NOT affected"
    },
    breakingChanges: {
      AttentionBox: {
        changes: [
          "Legacy AttentionBox removed — new implementation promoted from @vibe/core/next",
          "AttentionBoxLink removed as public export — use link prop",
          'type values: "success" → "positive", "danger" → "negative", "dark" → "neutral"',
          "entryAnimation → animate",
          "withoutIcon / withIconWithoutHeader → icon={false}"
        ]
      },
      Chips: {
        changes: ["disableClickableBehavior prop removed"]
      },
      Clickable: {
        changes: [
          "ariaHasPopup now accepts boolean only (was boolean | string)",
          "tabIndex now accepts number only (was string | number)"
        ]
      },
      CustomSvgIcon: {
        changes: ["onClick and clickable props removed — wrap with a clickable element instead"]
      },
      DatePicker: {
        changes: [
          "date prop type changed from moment.Moment to Date",
          "onPickDate renamed to onDateChange",
          'range boolean prop replaced with mode: "single" | "range"',
          "moment no longer required as peer dependency"
        ]
      },
      Dialog: {
        changes: [
          "Legacy class-based Dialog (Popper.js) replaced with functional Dialog (Floating UI)",
          "modifiers prop removed — use middleware",
          "enableNestedDialogLayer prop removed — LayerProvider always used",
          "addKeyboardHideShowTriggersByDefault default changed to true",
          "Refable component removed from public exports"
        ]
      },
      Dropdown: {
        changes: [
          "Old react-select Dropdown removed — new custom Dropdown promoted from @vibe/core/next",
          "Options structure: { id, text } → { value, label }",
          "Sub-components removed: DropdownMenu, DropdownOption, DropdownSingleValue"
        ]
      },
      Flex: {
        changes: ['"stretch" value removed from justify prop (not valid CSS for flexbox)']
      },
      Icon: {
        changes: [
          "iconLabel → label",
          "iconType → type",
          "iconSize → size",
          'size prop now applies to type="src" icons (previously only svg)'
        ]
      },
      LinearProgressBar: {
        changes: ["Renamed to ProgressBar", "LinearProgressBarProps renamed to ProgressBarProps"]
      },
      Link: {
        changes: [
          "@supports CSS fallback removed for logical properties",
          "Override .iconStart margin-right → margin-inline-end, .iconEnd margin-left → margin-inline-start"
        ]
      },
      MenuButton: {
        changes: ["focusItemIndexOnMount now defaults to 0 for Menu children"]
      },
      MenuItem: {
        changes: ["children accepts only single MenuChild, not MenuChild[]", "Internal MenuItemIcon label prop removed"]
      },
      Modal: {
        changes: [
          "Legacy class-based Modal removed — new functional Modal promoted from @vibe/core/next",
          "Sub-components (ModalHeader, ModalContent, ModalFooter) have updated APIs"
        ]
      },
      Steps: {
        changes: ["Finish button renders by default on the last step"]
      },
      TextField: {
        changes: ["iconName → icon", "iconsNames object → flat iconLabel and secondaryIconLabel props"]
      },
      TextWithHighlight: {
        changes: ['tooltipPosition prop removed — use tooltipProps={{ position: "value" }}']
      },
      Tipseen: {
        changes: ["modifiers prop removed — use middleware"]
      },
      TipseenImage: {
        changes: ["Removed — use TipseenMedia with <img> child"]
      },
      Toggle: {
        changes: ["noSpacing prop removed — margin auto-removed when areLabelsHidden is true"]
      },
      Tooltip: {
        changes: ["TooltipProps now extends DialogProps", "modifiers prop removed — use middleware"]
      },
      VirtualizedList: {
        changes: ["getItemHeight prop removed", "onVerticalScrollbarVisiblityChange prop removed"]
      },
      VirtualizedGrid: {
        changes: ["itemRenderer return type corrected to ReactElement"]
      }
    },
    hookChanges: {
      useMergeRefs: { status: "removed", replacement: "Use react-merge-refs or implement your own" },
      useListenFocusTriggers: { status: "removed", replacement: "Inline the logic using useEventListener" },
      useActiveDescendantListFocus: {
        status: "changed",
        changes: ["onItemClickCallback and createOnItemClickCallback return values removed — use onItemClick directly"]
      },
      useKeyEvent: {
        status: "changed",
        changes: ["callback type changed from GenericEventCallback to KeyboardEventCallback (native KeyboardEvent)"]
      }
    },
    typeChanges: {
      VibeComponent: { status: "removed", replacement: "Use forwardRef<P, T> and let TypeScript infer" },
      withStaticProps: { status: "removed", replacement: "No replacement — static properties are removed in v4" },
      withStaticPropsWithoutForwardRef: { status: "removed", replacement: "No replacement" }
    },
    cssChanges: {
      spacingTokens: {
        description: "Deprecated semantic spacing tokens removed",
        mapping: {
          "--spacing-xs": "--space-4",
          "--spacing-small": "--space-8",
          "--spacing-medium": "--space-16",
          "--spacing-large": "--space-24",
          "--spacing-xl": "--space-32",
          "--spacing-xxl": "--space-48",
          "--spacing-xxxl": "--space-64"
        }
      },
      inputPadding: "padding-inline-start reduced from 16px to 8px in TextField, BaseInput, TextArea, Dropdown Trigger",
      placeholderColor: "All inputs now use var(--placeholder-color) instead of var(--secondary-text-color)",
      logicalProperties: "Physical CSS properties replaced with logical properties throughout"
    },
    migrationSteps: {
      note: "Follow these steps sequentially. Complete each step fully before proceeding.",
      steps: [
        {
          step: 1,
          title: "Analyze Project",
          action: "Run this tool to understand the scope of changes needed",
          details: [
            "Review package.json dependencies",
            "Scan for deprecated APIs and removed props",
            "Identify components with breaking changes",
            "Check for ARIA prop usage that needs updating"
          ]
        },
        {
          step: 2,
          title: "Update Package Dependencies",
          action: "Upgrade @vibe/core to v4 and handle dependency changes",
          command: "yarn add @vibe/core@^4",
          additionalCommands: [
            "yarn remove moment  # if only used for DatePicker",
            "yarn add @vibe/style  # if using monday-ui-style"
          ]
        },
        {
          step: 3,
          title: "Run Automated Migration",
          action: `Run migration codemods`,
          command: `npx @vibe/codemod -m v4 --target "${projectInfo.targetDirectory}" --extensions tsx jsx -y`,
          description: "Handles enum-to-string-literal, ARIA props, import path changes, and component prop renames",
          codemods: [
            "Enums → string literals",
            "ARIA camelCase → aria-* attributes",
            "Icon prop renames (iconLabel → label, iconType → type, iconSize → size)",
            "TextField prop renames (iconName → icon, iconsNames → flat props)",
            "LinearProgressBar → ProgressBar rename",
            "@vibe/core/next → @vibe/core import rewrite",
            "monday-ui-style → @vibe/style import rewrite",
            "Various component prop removals (Chips, Dialog, Toggle, etc.)"
          ]
        },
        {
          step: 4,
          title: "Manual Review and Fixes",
          action: "Address changes that require manual intervention",
          details: [
            "DatePicker: Replace moment objects with native Date, update prop names",
            "Dropdown: Update options from { id, text } to { value, label }",
            "Dialog/Tooltip/Tipseen: Replace modifiers with middleware (Floating UI)",
            "CustomSvgIcon: Wrap with clickable element if onClick was used",
            "Modal: Review sub-component API changes",
            "VibeComponent type: Remove type annotations or use React.ForwardRefExoticComponent",
            "withStaticProps: Remove calls, static properties no longer needed",
            "CSS spacing tokens: Update --spacing-* to --space-* in stylesheets"
          ]
        },
        {
          step: 5,
          title: "Testing",
          action: "Verify all functionality works correctly",
          details: [
            "Test all components with breaking changes",
            "Verify DatePicker works with native Date objects",
            "Check Dialog/Tooltip/Tipseen positioning with new Floating UI middleware",
            "Verify Dropdown options render correctly with new structure",
            "Test keyboard navigation and accessibility",
            "Check CSS spacing and layout"
          ]
        }
      ]
    }
  };
}

async function analyzeProject(projectPath: string) {
  const analysis: {
    packageJsonAnalysis: ReturnType<typeof analyzePackageJson> | null;
    importAnalysis: Awaited<ReturnType<typeof analyzeImports>> | null;
    componentUsage: Awaited<ReturnType<typeof analyzeComponentUsage>> | null;
    potentialIssues: string[];
  } = {
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

function analyzePackageJson(packageJson: { dependencies?: Record<string, string>; devDependencies?: Record<string, string> }) {
  const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
  const hasVibeCore = !!dependencies["@vibe/core"];
  const vibeCoreVersion = dependencies["@vibe/core"] || "not installed";
  const hasMoment = !!dependencies["moment"];
  const hasMondayUIStyle = !!dependencies["monday-ui-style"];
  const hasVibeStyle = !!dependencies["@vibe/style"];
  const hasReactSelect = !!dependencies["react-select"];
  const hasFramerMotion = !!dependencies["framer-motion"];
  const hasPopperJs = !!dependencies["@popperjs/core"];

  const isV3 = hasVibeCore && !vibeCoreVersion.startsWith("4");
  const isV4 = hasVibeCore && vibeCoreVersion.startsWith("4");

  return {
    hasVibeCore,
    vibeCoreVersion,
    hasMoment,
    hasMondayUIStyle,
    hasVibeStyle,
    hasReactSelect,
    hasFramerMotion,
    hasPopperJs,
    migrationStatus: isV4 ? "already-v4" : isV3 ? "needs-migration" : hasVibeCore ? "check-version" : "not-using-vibe",
    removableDependencies: [
      hasMoment && "moment (if only used for DatePicker)",
      hasMondayUIStyle && "monday-ui-style (replace with @vibe/style)",
      hasReactSelect && "react-select (no longer used by Dropdown)",
      hasFramerMotion && "framer-motion (replaced with react-transition-group + CSS)",
      hasPopperJs && "@popperjs/core (replaced with @floating-ui/react-dom)"
    ].filter(Boolean)
  };
}

async function analyzeImports(projectPath: string) {
  const importIssues = {
    mondayUIStyleImports: [] as string[],
    nextImports: [] as string[],
    momentImports: [] as string[],
    reactSelectImports: [] as string[],
    ariaPropsUsage: [] as string[],
    enumUsage: [] as string[],
    filesScanned: 0
  };

  try {
    const files = await getAllSourceFiles(projectPath);
    importIssues.filesScanned = files.length;

    for (const file of files) {
      try {
        const content = readFileSync(file, "utf-8");

        if (content.includes("monday-ui-style")) {
          importIssues.mondayUIStyleImports.push(file);
        }
        if (content.includes("@vibe/core/next")) {
          importIssues.nextImports.push(file);
        }
        if (content.includes("from \"moment\"") || content.includes("from 'moment'")) {
          importIssues.momentImports.push(file);
        }
        if (content.includes("react-select")) {
          importIssues.reactSelectImports.push(file);
        }
        if (/\bariaLabel\b|\bariaHidden\b|\bariaExpanded\b|\bariaControls\b|\bariaHasPopup\b|\bariaLabeledBy\b|\bariaLabelledBy\b|\bariaDescribedBy\b/.test(content)) {
          importIssues.ariaPropsUsage.push(file);
        }
        if (/\.\b(sizes|kinds|types|positions|colors|feedbacks)\b\.\b[A-Z_]+\b/.test(content)) {
          importIssues.enumUsage.push(file);
        }
      } catch {
        // Skip files that can't be read
      }
    }
  } catch (e) {
    (importIssues as any).error = `Error scanning files: ${getErrorMessage(e)}`;
  }

  return importIssues;
}

async function analyzeComponentUsage(projectPath: string) {
  const componentUsage: {
    renamedComponents: Record<string, string[]>;
    removedProps: Record<string, string[]>;
    removedComponents: Record<string, string[]>;
    removedHooks: Record<string, string[]>;
    removedTypes: Record<string, string[]>;
    filesScanned: number;
  } = {
    renamedComponents: {},
    removedProps: {},
    removedComponents: {},
    removedHooks: {},
    removedTypes: {},
    filesScanned: 0
  };

  const renamedComponents = [{ old: "LinearProgressBar", new: "ProgressBar" }];

  const removedComponentExports = ["TipseenImage", "AttentionBoxLink", "DropdownMenu", "DropdownOption", "DropdownSingleValue"];

  const propsToCheck = [
    { component: "CustomSvgIcon", props: ["onClick", "clickable"] },
    { component: "Dialog", props: ["modifiers", "enableNestedDialogLayer"] },
    { component: "Tooltip", props: ["modifiers"] },
    { component: "Tipseen", props: ["modifiers"] },
    { component: "DatePicker", props: ["onPickDate"] },
    { component: "TextField", props: ["iconName", "iconsNames"] },
    { component: "Toggle", props: ["noSpacing"] },
    { component: "Chips", props: ["disableClickableBehavior"] },
    { component: "Icon", props: ["iconLabel", "iconType", "iconSize"] },
    { component: "TextWithHighlight", props: ["tooltipPosition"] },
    { component: "VirtualizedList", props: ["getItemHeight", "onVerticalScrollbarVisiblityChange"] },
    { component: "AttentionBox", props: ["entryAnimation", "withoutIcon", "withIconWithoutHeader"] }
  ];

  const removedHooks = ["useMergeRefs", "useListenFocusTriggers"];
  const removedTypes = ["VibeComponent", "withStaticProps", "withStaticPropsWithoutForwardRef"];

  try {
    const files = await getAllSourceFiles(projectPath);
    componentUsage.filesScanned = files.length;

    for (const file of files) {
      try {
        const content = readFileSync(file, "utf-8");

        for (const { old: oldName } of renamedComponents) {
          if (content.includes(`<${oldName}`) || content.includes(`${oldName}Props`)) {
            if (!componentUsage.renamedComponents[oldName]) componentUsage.renamedComponents[oldName] = [];
            componentUsage.renamedComponents[oldName].push(file);
          }
        }

        for (const comp of removedComponentExports) {
          if (content.includes(comp)) {
            if (!componentUsage.removedComponents[comp]) componentUsage.removedComponents[comp] = [];
            componentUsage.removedComponents[comp].push(file);
          }
        }

        for (const { component, props } of propsToCheck) {
          if (content.includes(`<${component}`) || content.includes(`<${component} `)) {
            for (const prop of props) {
              const propRegex = new RegExp(`\\b${prop}\\b`);
              if (propRegex.test(content)) {
                const key = `${component}.${prop}`;
                if (!componentUsage.removedProps[key]) componentUsage.removedProps[key] = [];
                componentUsage.removedProps[key].push(file);
              }
            }
          }
        }

        for (const hook of removedHooks) {
          if (content.includes(hook)) {
            if (!componentUsage.removedHooks[hook]) componentUsage.removedHooks[hook] = [];
            componentUsage.removedHooks[hook].push(file);
          }
        }

        for (const typeName of removedTypes) {
          if (content.includes(typeName)) {
            if (!componentUsage.removedTypes[typeName]) componentUsage.removedTypes[typeName] = [];
            componentUsage.removedTypes[typeName].push(file);
          }
        }
      } catch {
        // Skip files that can't be read
      }
    }
  } catch (e) {
    (componentUsage as any).error = `Error scanning files: ${getErrorMessage(e)}`;
  }

  return componentUsage;
}

async function getAllSourceFiles(dir: string): Promise<string[]> {
  const files: string[] = [];
  const validExtensions = [".ts", ".tsx", ".js", ".jsx", ".css", ".scss"];

  function scanDirectory(currentDir: string, depth = 0) {
    if (depth > 5) return;

    try {
      const entries = readdirSync(currentDir);

      for (const entry of entries) {
        if (entry.startsWith(".") || entry === "node_modules" || entry === "dist" || entry === "build") {
          continue;
        }

        const fullPath = join(currentDir, entry);
        try {
          const stat = statSync(fullPath);

          if (stat.isDirectory()) {
            scanDirectory(fullPath, depth + 1);
          } else if (stat.isFile() && validExtensions.includes(extname(entry))) {
            files.push(fullPath);
          }
        } catch {
          // Skip if can't stat
        }
      }
    } catch {
      // Skip if can't read directory
    }
  }

  scanDirectory(dir);
  return files;
}

function generateRecommendations(analysis: any, projectInfo: { targetDirectory: string }) {
  const recommendations = [];

  if (analysis.packageJsonAnalysis) {
    const pkg = analysis.packageJsonAnalysis;

    if (pkg.migrationStatus === "already-v4") {
      recommendations.push({
        type: "already-migrated",
        priority: "info",
        message: "Package dependencies appear to be already on Vibe 4"
      });
    } else if (pkg.migrationStatus === "needs-migration") {
      recommendations.push({
        type: "package-upgrade",
        priority: "high",
        action: "Upgrade @vibe/core to v4",
        command: "yarn add @vibe/core@^4"
      });
    }

    if (pkg.removableDependencies.length > 0) {
      recommendations.push({
        type: "removable-dependencies",
        priority: "medium",
        action: "Remove dependencies that are no longer needed",
        dependencies: pkg.removableDependencies
      });
    }

    if (pkg.hasMondayUIStyle && !pkg.hasVibeStyle) {
      recommendations.push({
        type: "style-package",
        priority: "high",
        action: "Replace monday-ui-style with @vibe/style",
        command: "yarn add @vibe/style && yarn remove monday-ui-style"
      });
    }
  }

  if (analysis.importAnalysis) {
    const imports = analysis.importAnalysis;

    if (imports.mondayUIStyleImports.length > 0) {
      recommendations.push({
        type: "style-imports",
        priority: "high",
        action: "Update monday-ui-style imports to @vibe/style",
        details: `Found ${imports.mondayUIStyleImports.length} files`,
        files: imports.mondayUIStyleImports.slice(0, 5),
        fix: "Handled by codemod: packages-rename-migration"
      });
    }

    if (imports.nextImports.length > 0) {
      recommendations.push({
        type: "next-imports",
        priority: "high",
        action: "Update @vibe/core/next imports to @vibe/core",
        details: `Found ${imports.nextImports.length} files`,
        files: imports.nextImports.slice(0, 5),
        fix: "Handled by codemod: next-imports-migration (List stays in /next)"
      });
    }

    if (imports.ariaPropsUsage.length > 0) {
      recommendations.push({
        type: "aria-props",
        priority: "high",
        action: "Update camelCase ARIA props to standard aria-* attributes",
        details: `Found ${imports.ariaPropsUsage.length} files with camelCase ARIA props`,
        files: imports.ariaPropsUsage.slice(0, 5),
        fix: "Handled by codemod: aria-props-migration"
      });
    }

    if (imports.enumUsage.length > 0) {
      recommendations.push({
        type: "enum-usage",
        priority: "high",
        action: "Replace enum static properties with string literals",
        details: `Found ${imports.enumUsage.length} files with enum-style usage (e.g. Button.sizes.LARGE)`,
        files: imports.enumUsage.slice(0, 5),
        fix: "Handled by codemod: Enums-migration"
      });
    }

    if (imports.momentImports.length > 0) {
      recommendations.push({
        type: "moment-usage",
        priority: "medium",
        action: "Replace moment.js with native Date objects for DatePicker",
        details: `Found ${imports.momentImports.length} files importing moment`,
        files: imports.momentImports.slice(0, 5),
        fix: "Manual: Replace moment() with new Date(), update DatePicker props"
      });
    }
  }

  if (analysis.componentUsage) {
    const usage = analysis.componentUsage;

    Object.entries(usage.renamedComponents || {}).forEach(([component, files]: [string, any]) => {
      recommendations.push({
        type: "renamed-component",
        priority: "high",
        action: `Rename ${component} → ProgressBar`,
        details: `Found ${files.length} files`,
        files: files.slice(0, 5),
        fix: "Handled by codemod: LinearProgressBar-component-migration"
      });
    });

    Object.entries(usage.removedComponents || {}).forEach(([component, files]: [string, any]) => {
      recommendations.push({
        type: "removed-component",
        priority: "high",
        action: `Replace removed component: ${component}`,
        details: `Found ${files.length} files`,
        files: files.slice(0, 5),
        fix: getComponentReplacement(component)
      });
    });

    Object.entries(usage.removedProps || {}).forEach(([key, files]: [string, any]) => {
      recommendations.push({
        type: "removed-prop",
        priority: "medium",
        action: `Update deprecated prop: ${key}`,
        details: `Found ${files.length} files`,
        files: files.slice(0, 5),
        fix: getPropReplacement(key)
      });
    });

    Object.entries(usage.removedHooks || {}).forEach(([hook, files]: [string, any]) => {
      recommendations.push({
        type: "removed-hook",
        priority: "high",
        action: `Replace removed hook: ${hook}`,
        details: `Found ${files.length} files`,
        files: files.slice(0, 5),
        fix: getHookReplacement(hook)
      });
    });

    Object.entries(usage.removedTypes || {}).forEach(([typeName, files]: [string, any]) => {
      recommendations.push({
        type: "removed-type",
        priority: "medium",
        action: `Remove usage of ${typeName}`,
        details: `Found ${files.length} files`,
        files: files.slice(0, 5),
        fix: getTypeReplacement(typeName)
      });
    });
  }

  recommendations.push({
    type: "migration-script",
    priority: "high",
    action: "Run automated migration codemods",
    command: `npx @vibe/codemod -m v4 --target "${projectInfo.targetDirectory}" --extensions tsx jsx -y`,
    description: "Handles enums, ARIA props, import renames, and component prop migrations automatically",
    warning: "Run AFTER updating package dependencies"
  });

  recommendations.push({
    type: "css-tokens",
    priority: "medium",
    action: "Update deprecated CSS spacing tokens in stylesheets",
    details: "Replace --spacing-xs/small/medium/large/xl/xxl/xxxl with --space-4/8/16/24/32/48/64",
    fix: "Use stylelint with @vibe/style/use-new-spacing-tokens for auto-fix"
  });

  recommendations.push({
    type: "testing",
    priority: "high",
    action: "Thorough testing required",
    details: [
      "Test DatePicker with native Date objects",
      "Verify Dialog/Tooltip/Tipseen positioning (Floating UI)",
      "Check Dropdown options with new { value, label } structure",
      "Test Modal behavior and sub-component APIs",
      "Verify accessibility — ARIA attributes render correctly",
      "Check CSS layout with logical properties"
    ],
    warning: "Test AFTER completing all manual fixes"
  });

  return recommendations;
}

function getComponentReplacement(component: string): string {
  const replacements: Record<string, string> = {
    TipseenImage: "Use TipseenMedia with an <img> child",
    AttentionBoxLink: "Use the AttentionBox link prop instead",
    DropdownMenu: "Removed — use new Dropdown API",
    DropdownOption: "Removed — use new Dropdown API",
    DropdownSingleValue: "Removed — use new Dropdown API"
  };
  return replacements[component] || "Check migration guide for replacement";
}

function getPropReplacement(key: string): string {
  const replacements: Record<string, string> = {
    "CustomSvgIcon.onClick": "Manual: Wrap with <button> or <Clickable>",
    "CustomSvgIcon.clickable": "Manual: Wrap with <button> or <Clickable>",
    "Dialog.modifiers": "Manual: Replace with middleware prop (Floating UI)",
    "Dialog.enableNestedDialogLayer": "Remove — LayerProvider is always used",
    "Tooltip.modifiers": "Manual: Replace with middleware prop (Floating UI)",
    "Tipseen.modifiers": "Manual: Replace with middleware prop (Floating UI)",
    "DatePicker.onPickDate": "Rename to onDateChange",
    "TextField.iconName": "Handled by codemod: rename to icon",
    "TextField.iconsNames": "Handled by codemod: replace with iconLabel + secondaryIconLabel",
    "Toggle.noSpacing": "Handled by codemod: remove prop",
    "Chips.disableClickableBehavior": "Handled by codemod: remove prop",
    "Icon.iconLabel": "Handled by codemod: rename to label",
    "Icon.iconType": "Handled by codemod: rename to type",
    "Icon.iconSize": "Handled by codemod: rename to size",
    "TextWithHighlight.tooltipPosition": 'Handled by codemod: use tooltipProps={{ position }}',
    "VirtualizedList.getItemHeight": "Remove — no longer supported",
    "VirtualizedList.onVerticalScrollbarVisiblityChange": "Remove — no longer supported",
    "AttentionBox.entryAnimation": "Rename to animate",
    "AttentionBox.withoutIcon": "Replace with icon={false}",
    "AttentionBox.withIconWithoutHeader": "Replace with icon={false}"
  };
  return replacements[key] || "Check migration guide";
}

function getHookReplacement(hook: string): string {
  const replacements: Record<string, string> = {
    useMergeRefs: "Use react-merge-refs package or implement your own ref merging",
    useListenFocusTriggers: "Inline the logic using useEventListener"
  };
  return replacements[hook] || "Check migration guide";
}

function getTypeReplacement(typeName: string): string {
  const replacements: Record<string, string> = {
    VibeComponent: "Remove — use forwardRef<P, T> and let TypeScript infer the type",
    withStaticProps: "Remove — static properties are no longer used in v4",
    withStaticPropsWithoutForwardRef: "Remove — static properties are no longer used in v4"
  };
  return replacements[typeName] || "Check migration guide";
}
