import { getErrorMessage, MCPTool } from "../index.js";
import { z } from "zod";
import { readFileSync, existsSync, readdirSync, statSync } from "fs";
import { join, resolve, extname } from "path";

// ── Promoted Components (old @vibe/core → new @vibe/core/next in v3, now default in v4) ──

const PROMOTED_COMPONENTS = ["Dropdown", "AttentionBox", "Modal", "DatePicker", "Dialog"] as const;

interface OldComponentDetection {
  component: string;
  file: string;
  line: number;
  importSource: "old" | "new";
  importStatement: string;
}

interface PromotedComponentAnalysis {
  oldApiUsage: OldComponentDetection[];
  newApiUsage: OldComponentDetection[];
  summary: Record<string, { oldCount: number; newCount: number; oldFiles: string[]; newFiles: string[] }>;
}

const migrationGuideSchema = z.object({
  projectPath: z.string().describe("Path to the project directory to analyze for migration")
});

export const v4MigrationTool: MCPTool<typeof migrationGuideSchema.shape> = {
  name: "v4-migration",
  description:
    "Analyzes a project for Vibe 3 to Vibe 4 migration requirements. Scans for deprecated APIs, removed props, renamed components, and generates migration commands with file-level before/after replacements.",
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
        promotedComponentMigrationGuide: getPromotedComponentMigrationGuide(),
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

// ── Migration Instructions ───────────────────────────────────────────

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
      upgrade: ["@vibe/core@^4"],
      replace: [{ from: "monday-ui-style", to: "@vibe/style", note: "Uncommon — only a few consumers use this directly" }],
      description: "Upgrade @vibe/core. The project analysis below will detect any dependencies that need to be removed or replaced."
    },
    importChanges: {
      styleImports: {
        from: "monday-ui-style",
        to: "@vibe/style"
      },
      nextComponents: {
        from: "@vibe/core/next",
        to: "@vibe/core",
        components: ["AttentionBox", "Dropdown", "DatePicker", "Dialog", "Modal"],
        exception: "List remains in @vibe/core/next"
      }
    },
    removedComponents: [
      { name: "TipseenImage", replacement: "TipseenMedia with <img> child" },
      { name: "AttentionBoxLink", replacement: "AttentionBox link prop" },
      { name: "DropdownMenu", replacement: "New Dropdown API" },
      { name: "DropdownOption", replacement: "New Dropdown API" },
      { name: "DropdownSingleValue", replacement: "New Dropdown API" },
      { name: "Combobox", replacement: "Dropdown with box mode (from @vibe/core)" }
    ],
    breakingChanges: {
      AttentionBox: {
        changes: [
          'type values: "success" → "positive", "danger" → "negative", "dark" → "neutral"',
          "entryAnimation → animate",
          "withoutIcon / withIconWithoutHeader → icon={false}",
          "AttentionBoxLink removed — use link prop"
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
        changes: ["onClick and clickable props removed — wrap with a clickable element"]
      },
      DatePicker: {
        changes: [
          "date prop: moment.Moment → Date",
          "onPickDate → onDateChange",
          'range boolean → mode: "single" | "range"',
          "moment no longer required as peer dependency"
        ]
      },
      Dialog: {
        changes: [
          "modifiers prop removed — use middleware (Floating UI)",
          "enableNestedDialogLayer removed — LayerProvider always used",
          "addKeyboardHideShowTriggersByDefault default changed to true",
          "Refable component removed from public exports"
        ]
      },
      Dropdown: {
        changes: [
          "Options: { id, text } → { value, label }",
          "Sub-components removed: DropdownMenu, DropdownOption, DropdownSingleValue"
        ]
      },
      Flex: {
        changes: ['"stretch" value removed from justify prop']
      },
      Icon: {
        changes: ["iconLabel → label", "iconType → type", "iconSize → size", 'size prop now applies to type="src" icons']
      },
      LinearProgressBar: {
        changes: ["Renamed to ProgressBar", "LinearProgressBarProps → ProgressBarProps"]
      },
      Link: {
        changes: ["@supports CSS fallback removed for logical properties"]
      },
      MenuButton: {
        changes: ["focusItemIndexOnMount now defaults to 0"]
      },
      MenuItem: {
        changes: ["children accepts only single MenuChild, not array"]
      },
      Modal: {
        changes: ["Legacy Modal removed — new functional Modal promoted from @vibe/core/next"]
      },
      Steps: {
        changes: ["Finish button renders by default on last step"]
      },
      TextField: {
        changes: ["iconName → icon", "iconsNames → flat iconLabel and secondaryIconLabel props"]
      },
      TextWithHighlight: {
        changes: ['tooltipPosition removed — use tooltipProps={{ position }}']
      },
      Tipseen: {
        changes: ["modifiers prop removed — use middleware"]
      },
      TipseenImage: {
        changes: ["Removed — use TipseenMedia with <img> child"]
      },
      Toggle: {
        changes: ["noSpacing prop removed — auto-removed when areLabelsHidden is true"]
      },
      Tooltip: {
        changes: ["TooltipProps extends DialogProps", "modifiers removed — use middleware"]
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
        changes: ["onItemClickCallback and createOnItemClickCallback removed — use onItemClick directly"]
      },
      useKeyEvent: {
        status: "changed",
        changes: ["callback type: GenericEventCallback → KeyboardEventCallback (native KeyboardEvent)"]
      }
    },
    typeChanges: {
      VibeComponent: { status: "removed", replacement: "Use forwardRef<P, T> and let TypeScript infer" },
      withStaticProps: { status: "removed", replacement: "No replacement — static properties removed in v4" },
      withStaticPropsWithoutForwardRef: { status: "removed", replacement: "No replacement" }
    },
    cssChanges: {
      spacingTokens: {
        "--spacing-xs": "--space-4",
        "--spacing-small": "--space-8",
        "--spacing-medium": "--space-16",
        "--spacing-large": "--space-24",
        "--spacing-xl": "--space-32",
        "--spacing-xxl": "--space-48",
        "--spacing-xxxl": "--space-64"
      },
      inputPadding: "padding-inline-start reduced from 16px to 8px",
      placeholderColor: "Inputs use var(--placeholder-color) instead of var(--secondary-text-color)"
    },
    migrationSteps: {
      note: "⚠️ IMPORTANT: Follow these steps sequentially. Complete each step fully before proceeding to the next.",
      steps: [
        {
          step: 1,
          title: "Analyze Project",
          action: "Run detailed analysis to understand what needs to be migrated",
          description: "Use this migration tool to understand the scope of changes needed",
          details: [
            "Check package.json dependencies",
            "Scan for deprecated APIs, removed props, and enum usage",
            "Identify components with breaking changes",
            "Check for ARIA prop usage and CSS token changes"
          ],
          note: "This analysis is already being performed by this tool - review the results carefully"
        },
        {
          step: 2,
          title: "Update Package Dependencies",
          action: "Upgrade @vibe/core, replace monday-ui-style, remove unused dependencies",
          command: "yarn add @vibe/core@^4 && yarn remove moment react-select",
          description: "Update package.json and install new Vibe 4 packages",
          important: "Do NOT proceed to step 3 until this completes successfully"
        },
        {
          step: 3,
          title: "Migrate Old Components to New API",
          action: "Identify and migrate components that had old/new versions in Vibe 3",
          description:
            "In Vibe 3, Dropdown, AttentionBox, Modal, DatePicker, and Dialog had OLD versions in @vibe/core and NEW versions in @vibe/core/next. " +
            "In Vibe 4, the NEW versions are now the default in @vibe/core. If you were importing these from @vibe/core (old API), " +
            "your code now silently uses a completely different component with a different API.",
          details: [
            "Check the promotedComponentAnalysis section in the project analysis output",
            "Components imported from @vibe/core (old API) need manual migration to the new API",
            "Components imported from @vibe/core/next (new API) only need the import path updated (handled by codemod)",
            "For Dropdown migration, use the dedicated 'dropdown-migration' tool for detailed guidance",
            "Review the promotedComponentMigrationGuide for before/after examples per component"
          ],
          important: "⚠️ This step MUST be completed BEFORE running codemods. The codemods update import paths but do NOT transform old API usage to new API usage."
        },
        {
          step: 4,
          title: "Run Automated Migration",
          action: `Run migration script: npx @vibe/codemod -m v4 --target "${projectInfo.targetDirectory}" --extensions tsx jsx -y`,
          command: `npx @vibe/codemod -m v4 --target "${projectInfo.targetDirectory}" --extensions tsx jsx -y`,
          description: "Handles enum→string, ARIA props, import renames, and component prop changes automatically.",
          important: "Let this script complete fully before making any manual changes",
          codemods: [
            "Enums → string literals (Button.sizes.LARGE → \"large\")",
            "ARIA camelCase → aria-* attributes",
            "Icon prop renames (iconLabel → label, iconType → type, iconSize → size)",
            "TextField prop renames (iconName → icon, iconsNames → flat props)",
            "LinearProgressBar → ProgressBar rename",
            "@vibe/core/next → @vibe/core import rewrite (List stays in /next)",
            "monday-ui-style → @vibe/style import rewrite",
            "Flex stretch removal, Toggle noSpacing removal, Chips disableClickableBehavior removal",
            "Dialog enableNestedDialogLayer removal",
            "TipseenImage → TipseenMedia, TextWithHighlight tooltipPosition → tooltipProps"
          ]
        },
        {
          step: 5,
          title: "Manual Review and Fixes",
          action: "Apply changes that codemods cannot handle",
          description: "Use the projectAnalysis.manualChanges results to find and fix these issues",
          details: [
            "DatePicker: Replace moment objects with native Date, onPickDate → onDateChange, range → mode",
            "Dropdown: Update options from { id, text } to { value, label }",
            "Dialog/Tooltip/Tipseen: Replace modifiers with middleware (@floating-ui/react-dom)",
            "CustomSvgIcon: Wrap with <button> or <Clickable> if onClick was used",
            "AttentionBox: Update type values (success→positive, danger→negative, dark→neutral)",
            "Modal: Review sub-component API changes (ModalHeader, ModalContent, ModalFooter)",
            "useMergeRefs: Replace with react-merge-refs package",
            "useListenFocusTriggers: Inline with useEventListener",
            "VibeComponent type: Remove and use forwardRef directly",
            "withStaticProps: Remove — static properties no longer used",
            "CSS spacing tokens: Replace --spacing-* with --space-* in stylesheets"
          ],
          important: "Use the file:line references from projectAnalysis to locate each issue"
        },
        {
          step: 6,
          title: "Testing",
          action: "Build and test application",
          description: "Run build and tests to verify all functionality",
          details: [
            "Verify the project builds successfully (e.g., yarn build / npm run build)",
            "Run all unit and integration tests",
            "Verify the application works correctly in the browser"
          ],
          important: "Do not consider migration complete until build passes and all features work correctly"
        },
        {
          step: 7,
          title: "Migration Summary & Next Steps",
          action: "Review migration completion",
          description: "Congratulations! You've successfully migrated to Vibe 4.",
          nextSteps: [
            {
              title: "Code Formatting (Optional)",
              description: "Format your code according to your project's settings",
              note: "Check your package.json scripts for available formatting commands"
            },
            {
              title: "Show Your Support ⭐",
              description: "If this migration helped you, consider giving the Vibe Design System a star!",
              action: "Visit https://github.com/mondaycom/vibe and click the ⭐ Star button"
            }
          ],
          important: "🎉 Migration to Vibe 4 is now complete!"
        }
      ]
    }
  };
}

// ── Project Analysis ─────────────────────────────────────────────────

interface FileIssue {
  file: string;
  line: number;
  match: string;
  before: string;
  after: string;
}

async function analyzeProject(projectPath: string) {
  const analysis: any = {
    packageJsonAnalysis: null,
    importAnalysis: null,
    componentUsage: null,
    manualChanges: null,
    promotedComponentAnalysis: null,
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

  const files = getAllSourceFiles(projectPath);
  const scanResult = scanAllFiles(files);
  analysis.importAnalysis = scanResult.importAnalysis;
  analysis.componentUsage = scanResult.componentUsage;
  analysis.manualChanges = scanResult.manualChanges;
  analysis.promotedComponentAnalysis = scanResult.promotedComponentAnalysis;

  return analysis;
}

function analyzePackageJson(packageJson: any) {
  const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
  const hasVibeCore = !!dependencies["@vibe/core"];
  const vibeCoreVersion = dependencies["@vibe/core"] || "not found";
  const hasMondayUIStyle = !!dependencies["monday-ui-style"];

  return {
    hasVibeCore,
    vibeCoreVersion,
    hasMondayUIStyle,
    migrationStatus: hasVibeCore ? "needs-migration" : "not-using-vibe",
    dependencyActions: [
      hasVibeCore && { action: "upgrade", package: "@vibe/core", from: vibeCoreVersion, to: "^4", command: "yarn add @vibe/core@^4" },
      hasMondayUIStyle && { action: "replace", package: "monday-ui-style", with: "@vibe/style", command: "yarn add @vibe/style && yarn remove monday-ui-style" }
    ].filter(Boolean)
  };
}

function scanAllFiles(files: string[]) {
  const importAnalysis: any = {
    mondayUIStyleImports: [] as string[],
    nextImports: [] as string[],
    enumUsage: [] as string[],
    ariaPropsUsage: [] as string[],
    filesScanned: files.length
  };

  const componentUsage: any = {
    renamedComponents: {} as Record<string, string[]>,
    removedComponents: {} as Record<string, string[]>,
    breakingChangeComponents: {} as Record<string, string[]>,
    filesScanned: files.length
  };

  const manualChanges: Record<string, FileIssue[]> = {
    datePickerMoment: [],
    datePickerOnPickDate: [],
    datePickerRange: [],
    dropdownOldOptions: [],
    dropdownSubComponents: [],
    dialogModifiers: [],
    tooltipModifiers: [],
    tipseenModifiers: [],
    customSvgIconOnClick: [],
    attentionBoxTypeValues: [],
    attentionBoxProps: [],
    attentionBoxLink: [],
    modalFromNext: [],
    useMergeRefs: [],
    useListenFocusTriggers: [],
    vibeComponentType: [],
    withStaticPropsUsage: [],
    useActiveDescendantCallbacks: [],
    useKeyEventCallback: [],
    spacingTokens: []
  };

  const removedComponents = ["TipseenImage", "AttentionBoxLink", "DropdownMenu", "DropdownOption", "DropdownSingleValue", "Combobox"];
  const breakingChangeComponents = [
    "AttentionBox", "Chips", "CustomSvgIcon", "DatePicker", "Dialog", "Dropdown", "Flex",
    "Icon", "LinearProgressBar", "MenuButton", "MenuItem", "Modal", "Steps",
    "TextField", "TextWithHighlight", "Tipseen", "Toggle", "Tooltip",
    "VirtualizedList", "VirtualizedGrid"
  ];

  for (const file of files) {
    try {
      const content = readFileSync(file, "utf-8");
      const lines = content.split("\n");
      const ext = extname(file);
      const isStyleFile = ext === ".css" || ext === ".scss";

      if (isStyleFile) {
        scanStyleFile(file, lines, importAnalysis, manualChanges);
        continue;
      }

      // Import analysis
      if (content.includes("monday-ui-style")) {
        importAnalysis.mondayUIStyleImports.push(file);
      }
      if (content.includes("@vibe/core/next")) {
        importAnalysis.nextImports.push(file);
      }
      if (/\.\b(sizes|kinds|types|positions|colors|feedbacks)\b\.\b[A-Z_]+\b/.test(content)) {
        importAnalysis.enumUsage.push(file);
      }
      if (/\bariaLabel\b|\bariaHidden\b|\bariaExpanded\b|\bariaControls\b|\bariaHasPopup\b|\bariaLabelledBy\b|\bariaLabeledBy\b|\bariaDescribedBy\b/.test(content)) {
        importAnalysis.ariaPropsUsage.push(file);
      }

      // Component usage
      if (content.includes("LinearProgressBar")) {
        if (!componentUsage.renamedComponents["LinearProgressBar"]) componentUsage.renamedComponents["LinearProgressBar"] = [];
        componentUsage.renamedComponents["LinearProgressBar"].push(file);
      }

      for (const comp of removedComponents) {
        if (content.includes(comp)) {
          if (!componentUsage.removedComponents[comp]) componentUsage.removedComponents[comp] = [];
          componentUsage.removedComponents[comp].push(file);
        }
      }

      for (const comp of breakingChangeComponents) {
        if (content.includes(`<${comp}`) || content.includes(`${comp}.`)) {
          if (!componentUsage.breakingChangeComponents[comp]) componentUsage.breakingChangeComponents[comp] = [];
          componentUsage.breakingChangeComponents[comp].push(file);
        }
      }

      // Manual changes — file:line level detection
      scanManualChanges(file, lines, content, manualChanges);
    } catch {
      // Skip unreadable files
    }
  }

  const promotedComponentAnalysis = detectPromotedComponentImports(files);

  return { importAnalysis, componentUsage, manualChanges, promotedComponentAnalysis };
}

function scanStyleFile(file: string, lines: string[], importAnalysis: any, manualChanges: Record<string, FileIssue[]>) {
  const spacingMap: Record<string, string> = {
    "--spacing-xs": "--space-4",
    "--spacing-small": "--space-8",
    "--spacing-medium": "--space-16",
    "--spacing-large": "--space-24",
    "--spacing-xl": "--space-32",
    "--spacing-xxl": "--space-48",
    "--spacing-xxxl": "--space-64"
  };

  for (let i = 0; i < lines.length; i++) {
    for (const [oldToken, newToken] of Object.entries(spacingMap)) {
      if (lines[i].includes(oldToken)) {
        manualChanges.spacingTokens.push({
          file, line: i + 1, match: lines[i].trim(),
          before: `var(${oldToken})`,
          after: `var(${newToken})`
        });
      }
    }
    if (lines[i].includes("monday-ui-style")) {
      importAnalysis.mondayUIStyleImports.push(file);
    }
  }
}

function scanManualChanges(file: string, lines: string[], content: string, manualChanges: Record<string, FileIssue[]>) {
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // DatePicker: moment → Date
    if (content.includes("DatePicker") && /\bmoment\b/.test(line) && !line.trimStart().startsWith("//")) {
      manualChanges.datePickerMoment.push({
        file, line: i + 1, match: line.trim(),
        before: 'moment("2023-05-01")',
        after: 'new Date("2023-05-01")'
      });
    }

    // DatePicker: onPickDate → onDateChange
    if (line.includes("onPickDate")) {
      manualChanges.datePickerOnPickDate.push({
        file, line: i + 1, match: line.trim(),
        before: "onPickDate={(d) => setDate(d)}",
        after: "onDateChange={(d) => setDate(d)}"
      });
    }

    // DatePicker: range → mode
    if (content.includes("DatePicker") && /\brange\b/.test(line) && !line.includes("mode")) {
      manualChanges.datePickerRange.push({
        file, line: i + 1, match: line.trim(),
        before: "<DatePicker range />",
        after: '<DatePicker mode="range" />'
      });
    }

    // Dropdown: { id, text } → { value, label }
    if (content.includes("Dropdown") && (/\{\s*id\s*:.*text\s*:/.test(line) || /\{\s*text\s*:.*id\s*:/.test(line))) {
      manualChanges.dropdownOldOptions.push({
        file, line: i + 1, match: line.trim(),
        before: '{ id: "1", text: "Option 1" }',
        after: '{ value: "1", label: "Option 1" }'
      });
    }

    // Dropdown sub-components
    for (const subComp of ["DropdownMenu", "DropdownOption", "DropdownSingleValue"]) {
      if (line.includes(subComp)) {
        manualChanges.dropdownSubComponents.push({
          file, line: i + 1, match: line.trim(),
          before: subComp,
          after: "// removed — use new Dropdown API. See: https://vibe.monday.com/?path=/docs/components-dropdown-migration-guide--docs"
        });
      }
    }

    // Dialog/Tooltip/Tipseen: modifiers → middleware
    if (/\bmodifiers\b/.test(line)) {
      if (content.includes("<Dialog")) {
        manualChanges.dialogModifiers.push({
          file, line: i + 1, match: line.trim(),
          before: 'modifiers={[{ name: "offset", options: { offset: [0, 8] } }]}',
          after: 'middleware={[offset(8)]}  // import { offset } from "@floating-ui/react-dom"'
        });
      }
      if (content.includes("<Tooltip")) {
        manualChanges.tooltipModifiers.push({
          file, line: i + 1, match: line.trim(),
          before: "modifiers={...}",
          after: "middleware={...}  // use @floating-ui/react-dom middleware"
        });
      }
      if (content.includes("<Tipseen")) {
        manualChanges.tipseenModifiers.push({
          file, line: i + 1, match: line.trim(),
          before: "modifiers={...}",
          after: "middleware={...}  // use @floating-ui/react-dom middleware"
        });
      }
    }

    // CustomSvgIcon: onClick removed
    if (content.includes("CustomSvgIcon") && /\bonClick\b/.test(line)) {
      manualChanges.customSvgIconOnClick.push({
        file, line: i + 1, match: line.trim(),
        before: "<CustomSvgIcon onClick={handleClick} clickable />",
        after: '<button onClick={handleClick}><CustomSvgIcon /></button>  // or use <Clickable>'
      });
    }

    // AttentionBox: type value changes
    if (content.includes("AttentionBox")) {
      const typeMatch = line.match(/type\s*=\s*["'](success|danger|dark)["']/);
      if (typeMatch) {
        const oldType = typeMatch[1];
        const newType = oldType === "success" ? "positive" : oldType === "danger" ? "negative" : "neutral";
        manualChanges.attentionBoxTypeValues.push({
          file, line: i + 1, match: line.trim(),
          before: `type="${oldType}"`,
          after: `type="${newType}"`
        });
      }
      if (line.includes("entryAnimation")) {
        manualChanges.attentionBoxProps.push({
          file, line: i + 1, match: line.trim(), before: "entryAnimation", after: "animate"
        });
      }
      if (line.includes("withoutIcon") || line.includes("withIconWithoutHeader")) {
        manualChanges.attentionBoxProps.push({
          file, line: i + 1, match: line.trim(), before: "withoutIcon", after: "icon={false}"
        });
      }
    }

    // AttentionBoxLink
    if (line.includes("AttentionBoxLink")) {
      manualChanges.attentionBoxLink.push({
        file, line: i + 1, match: line.trim(),
        before: '<AttentionBoxLink href="/docs" text="Learn more" />',
        after: '// use AttentionBox link prop: link={{ href: "/docs", text: "Learn more" }}'
      });
    }

    // Modal from @vibe/core/next
    if (line.includes("Modal") && line.includes("@vibe/core/next")) {
      manualChanges.modalFromNext.push({
        file, line: i + 1, match: line.trim(),
        before: 'import { Modal } from "@vibe/core/next"',
        after: 'import { Modal } from "@vibe/core"  // review ModalHeader/ModalContent/ModalFooter API changes'
      });
    }

    // useMergeRefs
    if (line.includes("useMergeRefs")) {
      manualChanges.useMergeRefs.push({
        file, line: i + 1, match: line.trim(),
        before: 'import { useMergeRefs } from "@vibe/core";\nconst ref = useMergeRefs({ refs: [ref1, ref2] });',
        after: 'import { mergeRefs } from "react-merge-refs";\nconst ref = mergeRefs([ref1, ref2]);'
      });
    }

    // useListenFocusTriggers
    if (line.includes("useListenFocusTriggers")) {
      manualChanges.useListenFocusTriggers.push({
        file, line: i + 1, match: line.trim(),
        before: "useListenFocusTriggers({ ref, onFocusByKeyboard, onFocusByMouse })",
        after: 'Inline using useEventListener:\nuseEventListener({ eventName: "focusin", callback: ..., ref });\nuseEventListener({ eventName: "mousedown", callback: ..., ref });'
      });
    }

    // VibeComponent type
    if (/\bVibeComponent\b/.test(line) && !line.includes("VibeComponentProps")) {
      manualChanges.vibeComponentType.push({
        file, line: i + 1, match: line.trim(),
        before: "const MyComp: VibeComponent<MyProps, HTMLDivElement> = forwardRef(...)",
        after: "const MyComp = forwardRef<HTMLDivElement, MyProps>(...)  // let TS infer"
      });
    }

    // withStaticProps
    if (line.includes("withStaticProps")) {
      manualChanges.withStaticPropsUsage.push({
        file, line: i + 1, match: line.trim(),
        before: "export default withStaticProps(MyComponent, { sizes: MySizes })",
        after: "export default MyComponent  // static properties removed in v4"
      });
    }

    // useActiveDescendantListFocus removed callbacks
    if (line.includes("onItemClickCallback") || line.includes("createOnItemClickCallback")) {
      manualChanges.useActiveDescendantCallbacks.push({
        file, line: i + 1, match: line.trim(),
        before: "const { onItemClickCallback } = useActiveDescendantListFocus(...)",
        after: "// use onItemClick directly instead"
      });
    }

    // useKeyEvent callback type
    if (line.includes("GenericEventCallback") && content.includes("useKeyEvent")) {
      manualChanges.useKeyEventCallback.push({
        file, line: i + 1, match: line.trim(),
        before: "callback: GenericEventCallback",
        after: "callback: KeyboardEventCallback  // native KeyboardEvent"
      });
    }
  }
}

// ── Promoted Component Detection ─────────────────────────────────────

function detectPromotedComponentImports(files: string[]): PromotedComponentAnalysis {
  const oldApiUsage: OldComponentDetection[] = [];
  const newApiUsage: OldComponentDetection[] = [];
  const summary: PromotedComponentAnalysis["summary"] = {};

  for (const comp of PROMOTED_COMPONENTS) {
    summary[comp] = { oldCount: 0, newCount: 0, oldFiles: [], newFiles: [] };
  }

  // Match import statements from @vibe/core or @vibe/core/next (both quote styles)
  const importRegex = /import\s+\{([^}]+)\}\s+from\s+["'](@vibe\/core(?:\/next)?)["']/g;

  for (const file of files) {
    try {
      const content = readFileSync(file, "utf-8");
      const lines = content.split("\n");

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        importRegex.lastIndex = 0;
        let match;

        while ((match = importRegex.exec(line)) !== null) {
          const importedNames = match[1].split(",").map(s => s.trim().split(/\s+as\s+/)[0].trim());
          const source = match[2];
          const isNext = source === "@vibe/core/next";

          for (const name of importedNames) {
            if ((PROMOTED_COMPONENTS as readonly string[]).includes(name)) {
              const detection: OldComponentDetection = {
                component: name,
                file,
                line: i + 1,
                importSource: isNext ? "new" : "old",
                importStatement: line.trim()
              };

              if (isNext) {
                newApiUsage.push(detection);
                summary[name].newCount++;
                if (!summary[name].newFiles.includes(file)) {
                  summary[name].newFiles.push(file);
                }
              } else {
                oldApiUsage.push(detection);
                summary[name].oldCount++;
                if (!summary[name].oldFiles.includes(file)) {
                  summary[name].oldFiles.push(file);
                }
              }
            }
          }
        }
      }
    } catch {
      // Skip unreadable files
    }
  }

  return { oldApiUsage, newApiUsage, summary };
}

function getPromotedComponentMigrationGuide() {
  return {
    description:
      "In Vibe 3, these components had OLD versions in @vibe/core and NEW versions in @vibe/core/next. " +
      "In Vibe 4, the NEW versions are now the default in @vibe/core. If you were using the OLD version " +
      "from @vibe/core, your import path is now 'correct' but points to a completely different component with a different API.",
    components: {
      Dropdown: {
        severity: "critical" as const,
        apiChanges: [
          "Option shape: { id, text } → { value, label }",
          "Sub-components removed: DropdownMenu, DropdownOption, DropdownSingleValue",
          "searchable now defaults to true",
          "Combobox replaced by Dropdown with box mode"
        ],
        before: `import { Dropdown } from "@vibe/core";\n<Dropdown options={[{ id: "1", text: "Option" }]} />`,
        after: `import { Dropdown } from "@vibe/core";\n<Dropdown options={[{ value: "1", label: "Option" }]} />`,
        toolReference: "Use the 'dropdown-migration' tool for detailed Dropdown migration assistance"
      },
      AttentionBox: {
        severity: "high" as const,
        apiChanges: [
          'type values renamed: "success" → "positive", "danger" → "negative", "dark" → "neutral"',
          "entryAnimation → animate",
          "withoutIcon / withIconWithoutHeader → icon={false}",
          "AttentionBoxLink removed — use link prop"
        ],
        before: `import { AttentionBox } from "@vibe/core";\n<AttentionBox type="danger" entryAnimation withoutIcon />`,
        after: `import { AttentionBox } from "@vibe/core";\n<AttentionBox type="negative" animate icon={false} />`
      },
      Modal: {
        severity: "critical" as const,
        apiChanges: [
          "id prop is now required",
          "show prop controls visibility (replaces external state pattern)",
          "width → size (\"small\" | \"medium\" | \"large\")",
          "Layout via ModalHeader, ModalContent, ModalFooter sub-components",
          "ModalFooterButtons removed — use ModalFooter with Button children"
        ],
        before: `import { Modal } from "@vibe/core";\n<Modal title="My Modal" width={500}>{content}</Modal>`,
        after: `import { Modal } from "@vibe/core";\n<Modal id="my-modal" show={isOpen} onClose={onClose} size="medium">\n  <ModalHeader title="My Modal" />\n  <ModalContent>{content}</ModalContent>\n</Modal>`
      },
      DatePicker: {
        severity: "critical" as const,
        apiChanges: [
          "date prop: moment.Moment → native Date",
          "onPickDate → onDateChange",
          'range boolean → mode: "single" | "range"',
          "shouldBlockDay → isDateDisabled",
          "moment no longer a peer dependency — uses date-fns internally"
        ],
        before: `import { DatePicker } from "@vibe/core";\n<DatePicker date={moment("2024-01-01")} onPickDate={handler} range />`,
        after: `import { DatePicker } from "@vibe/core";\n<DatePicker date={new Date("2024-01-01")} onDateChange={handler} mode="range" />`
      },
      Dialog: {
        severity: "high" as const,
        apiChanges: [
          "modifiers → middleware (uses @floating-ui/react-dom)",
          "enableNestedDialogLayer removed — LayerProvider is always used",
          "addKeyboardHideShowTriggersByDefault default changed to true"
        ],
        before: `import { Dialog } from "@vibe/core";\n<Dialog modifiers={[{ name: "offset", options: { offset: [0, 8] } }]} enableNestedDialogLayer>`,
        after: `import { Dialog } from "@vibe/core";\n<Dialog middleware={[offset(8)]}>  // import { offset } from "@floating-ui/react-dom"`
      }
    }
  };
}

// ── File Discovery ───────────────────────────────────────────────────

function getAllSourceFiles(dir: string): string[] {
  const files: string[] = [];
  const validExtensions = [".ts", ".tsx", ".js", ".jsx", ".css", ".scss"];

  function scanDirectory(currentDir: string, depth = 0) {
    if (depth > 5) return;
    try {
      const entries = readdirSync(currentDir);
      for (const entry of entries) {
        if (entry.startsWith(".") || entry === "node_modules" || entry === "dist" || entry === "build") continue;
        const fullPath = join(currentDir, entry);
        try {
          const stat = statSync(fullPath);
          if (stat.isDirectory()) {
            scanDirectory(fullPath, depth + 1);
          } else if (stat.isFile() && validExtensions.includes(extname(entry))) {
            files.push(fullPath);
          }
        } catch { /* skip */ }
      }
    } catch { /* skip */ }
  }

  scanDirectory(dir);
  return files;
}

// ── Recommendations ──────────────────────────────────────────────────

function generateRecommendations(analysis: any, projectInfo: { targetDirectory: string }) {
  const recommendations = [];

  // Package recommendations
  if (analysis.packageJsonAnalysis) {
    const pkg = analysis.packageJsonAnalysis;

    if (pkg.migrationStatus === "needs-migration") {
      recommendations.push({
        type: "package-upgrade",
        priority: "high",
        action: "Upgrade @vibe/core to v4",
        command: "yarn add @vibe/core@^4",
        details: "This is the first step in the migration process"
      });
    }

    if (pkg.dependencyActions.length > 0) {
      recommendations.push({
        type: "dependency-cleanup",
        priority: "high",
        action: "Remove/replace deprecated dependencies",
        details: `${pkg.dependencyActions.length} dependency changes needed`,
        commands: pkg.dependencyActions.map((d: any) => d.command)
      });
    }
  }

  // Import recommendations
  if (analysis.importAnalysis) {
    const imports = analysis.importAnalysis;

    if (imports.mondayUIStyleImports?.length > 0) {
      recommendations.push({
        type: "style-imports",
        priority: "medium",
        action: "Update monday-ui-style imports to @vibe/style",
        details: `Found ${imports.mondayUIStyleImports.length} files. Note: most consumers don't use monday-ui-style directly.`,
        files: imports.mondayUIStyleImports.slice(0, 5),
        fix: "Handled by codemod: packages-rename-migration"
      });
    }

    if (imports.nextImports?.length > 0) {
      recommendations.push({
        type: "next-imports",
        priority: "high",
        action: "Update @vibe/core/next imports to @vibe/core",
        details: `Found ${imports.nextImports.length} files`,
        files: imports.nextImports.slice(0, 5),
        fix: "Handled by codemod: next-imports-migration (List stays in /next)"
      });
    }

    if (imports.ariaPropsUsage?.length > 0) {
      recommendations.push({
        type: "aria-props",
        priority: "high",
        action: "Update camelCase ARIA props to standard aria-* attributes",
        details: `Found ${imports.ariaPropsUsage.length} files`,
        files: imports.ariaPropsUsage.slice(0, 5),
        fix: "Handled by codemod: Aria-props-migration"
      });
    }

    if (imports.enumUsage?.length > 0) {
      recommendations.push({
        type: "enum-usage",
        priority: "high",
        action: "Replace enum static properties with string literals",
        details: `Found ${imports.enumUsage.length} files`,
        files: imports.enumUsage.slice(0, 5),
        fix: "Handled by codemod: Enums-migration"
      });
    }
  }

  // Component usage recommendations
  if (analysis.componentUsage) {
    const usage = analysis.componentUsage;

    Object.entries(usage.renamedComponents || {}).forEach(([component, files]: [string, any]) => {
      recommendations.push({
        type: "renamed-component",
        priority: "high",
        action: `Rename ${component} → ${getComponentReplacement(component)}`,
        details: `Found ${files.length} files`,
        files: files.slice(0, 5),
        fix: "Handled by codemod"
      });
    });

    Object.entries(usage.removedComponents || {}).forEach(([component, files]: [string, any]) => {
      recommendations.push({
        type: "removed-component",
        priority: "high",
        action: `Replace removed component: ${component}`,
        details: `Found ${files.length} files`,
        files: files.slice(0, 5),
        fix: getComponentReplacementDetails(component)
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

  // Manual changes recommendations
  if (analysis.manualChanges) {
    const manual = analysis.manualChanges;
    const manualIssueCount = Object.values(manual).reduce((sum: number, arr: any) => sum + arr.length, 0);

    if (manualIssueCount > 0) {
      recommendations.push({
        type: "manual-changes",
        priority: "high",
        action: "Apply manual changes that codemods cannot handle",
        details: `${manualIssueCount} issues found across ${Object.entries(manual).filter(([, arr]: [string, any]) => arr.length > 0).length} categories`,
        categories: Object.entries(manual)
          .filter(([, arr]: [string, any]) => arr.length > 0)
          .map(([key, arr]: [string, any]) => `${key}: ${arr.length} issues`),
        important: "Review the manualChanges section for file:line locations and before/after replacements"
      });
    }
  }

  // Promoted component recommendations
  if (analysis.promotedComponentAnalysis) {
    const promoted = analysis.promotedComponentAnalysis as PromotedComponentAnalysis;
    const guide = getPromotedComponentMigrationGuide();

    for (const [component, counts] of Object.entries(promoted.summary)) {
      const componentGuide = guide.components[component as keyof typeof guide.components];
      if (!componentGuide) continue;

      if (counts.oldCount > 0) {
        recommendations.push({
          type: "promoted-component-old-api",
          priority: componentGuide.severity,
          action: `Migrate ${component} from old API to new API`,
          details:
            `Found ${counts.oldCount} import(s) of ${component} from @vibe/core (old API) across ${counts.oldFiles.length} file(s). ` +
            `After upgrading to Vibe 4, these imports will silently point to the NEW ${component} which has a different API.`,
          apiChanges: componentGuide.apiChanges,
          before: componentGuide.before,
          after: componentGuide.after,
          files: counts.oldFiles.slice(0, 10),
          ...("toolReference" in componentGuide ? { toolReference: componentGuide.toolReference } : {}),
          important: "⚠️ Must be resolved BEFORE running codemods (step 3 in migration steps)"
        });
      }

      if (counts.newCount > 0) {
        recommendations.push({
          type: "promoted-component-new-api",
          priority: "info",
          action: `${component}: already using new API from @vibe/core/next`,
          details:
            `Found ${counts.newCount} import(s) of ${component} from @vibe/core/next (new API) across ${counts.newFiles.length} file(s). ` +
            `The codemod will automatically update the import path from @vibe/core/next to @vibe/core.`,
          files: counts.newFiles.slice(0, 10),
          fix: "Handled by codemod: next-imports-migration"
        });
      }
    }
  }

  // Migration script
  recommendations.push({
    type: "migration-script",
    priority: "high",
    action: "Run automated migration script",
    command: `npx @vibe/codemod -m v4 --target "${projectInfo.targetDirectory}" --extensions tsx jsx -y`,
    details: "Handles enums, ARIA props, import renames, and component prop migrations automatically",
    warning: "⚠️ ONLY run this AFTER completing promoted component migration (step 3). After codemods rewrite imports, old vs new API usage becomes indistinguishable."
  });

  // CSS tokens
  if (analysis.manualChanges?.spacingTokens?.length > 0) {
    recommendations.push({
      type: "css-tokens",
      priority: "medium",
      action: "Update deprecated CSS spacing tokens",
      details: `Found ${analysis.manualChanges.spacingTokens.length} uses of deprecated --spacing-* tokens`,
      fix: "Replace --spacing-xs/small/medium/large/xl/xxl/xxxl with --space-4/8/16/24/32/48/64"
    });
  }

  recommendations.push({
    type: "manual-review",
    priority: "medium",
    action: "Manual review and fixes",
    details: "Review breaking changes and apply manual fixes",
    warning: "⚠️ Promoted component migration (step 3) must be done BEFORE codemods. Other manual fixes (step 5) should be done AFTER."
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
      "Verify ARIA attributes render correctly",
      "Check CSS spacing and layout"
    ],
    warning: "⚠️ ONLY test AFTER completing manual fixes (step 5)"
  });

  recommendations.push({
    type: "sequential-steps",
    priority: "critical",
    action: "Follow migration steps in order",
    details: "Use the migrationSteps guide to follow the process sequentially",
    warning: "🚨 DO NOT skip steps or work on multiple steps simultaneously"
  });

  recommendations.push({
    type: "formatting",
    priority: "info",
    action: "Format code according to your project settings",
    details: "Run your project's formatting commands after migration is complete"
  });

  recommendations.push({
    type: "github-star",
    priority: "info",
    action: "Show your support with a GitHub star ⭐",
    details: "If this migration tool helped you, consider starring the Vibe repository",
    link: "https://github.com/mondaycom/vibe"
  });

  return recommendations;
}

function getComponentReplacement(component: string): string {
  const replacements: Record<string, string> = {
    LinearProgressBar: "ProgressBar"
  };
  return replacements[component] || component;
}

function getComponentReplacementDetails(component: string): string {
  const replacements: Record<string, string> = {
    TipseenImage: "Use TipseenMedia with an <img> child",
    AttentionBoxLink: "Use the AttentionBox link prop instead",
    DropdownMenu: "Removed — use new Dropdown API",
    DropdownOption: "Removed — use new Dropdown API",
    DropdownSingleValue: "Removed — use new Dropdown API",
    Combobox: "Deprecated — use Dropdown with box mode from @vibe/core"
  };
  return replacements[component] || "Check migration guide for replacement";
}

function getBreakingChangeDetails(component: string): string {
  const details: Record<string, string> = {
    AttentionBox: 'Type values changed (success→positive, danger→negative, dark→neutral). entryAnimation→animate. withoutIcon→icon={false}',
    Chips: "disableClickableBehavior prop removed",
    CustomSvgIcon: "onClick and clickable props removed — wrap with clickable element",
    DatePicker: "moment→Date, onPickDate→onDateChange, range→mode. Requires manual migration.",
    Dialog: "modifiers→middleware (Floating UI). enableNestedDialogLayer removed.",
    Dropdown: "Options: { id, text } → { value, label }. Sub-components removed. Requires manual migration.",
    Flex: '"stretch" value removed from justify prop',
    Icon: "iconLabel→label, iconType→type, iconSize→size",
    LinearProgressBar: "Renamed to ProgressBar",
    MenuButton: "focusItemIndexOnMount now defaults to 0",
    MenuItem: "children accepts only single MenuChild",
    Modal: "Legacy Modal removed — review new API",
    Steps: "Finish button renders by default on last step",
    TextField: "iconName→icon, iconsNames→flat iconLabel/secondaryIconLabel props",
    TextWithHighlight: "tooltipPosition→tooltipProps",
    Tipseen: "modifiers→middleware",
    Toggle: "noSpacing prop removed",
    Tooltip: "modifiers→middleware",
    VirtualizedList: "getItemHeight and onVerticalScrollbarVisiblityChange props removed",
    VirtualizedGrid: "itemRenderer return type corrected to ReactElement"
  };
  return details[component] || "Check migration guide for specific changes";
}
