// Template for src/{{ComponentName}}/index.ts
// Replace {{ComponentName}}, {{EnumName1}}, {{EnumName2}}, etc. with actual names

export { default as {{ComponentName}}, type {{ComponentName}}Props } from "./{{ComponentName}}";

// If component has deprecated enums, export them with "Enum" suffix
// Example: TooltipPositions -> TooltipPositionsEnum
export {
  {{EnumName1}} as {{EnumName1}}Enum,
  {{EnumName2}} as {{EnumName2}}Enum
} from "./{{ComponentName}}Constants";

// Export all types (string unions)
export * from "./{{ComponentName}}.types";

