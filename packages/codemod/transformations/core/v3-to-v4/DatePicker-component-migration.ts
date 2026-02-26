import { ImportSpecifier } from "jscodeshift";
import { NEW_CORE_IMPORT_PATH, NEW_CORE_NEXT_IMPORT_PATH } from "../../../src/consts";
import { wrap, getImports, removeSpecifierFromImport } from "../../../src/utils";
import { TransformationContext } from "../../../types";

const DATEPICKER_SPECIFIERS = new Set([
  "DatePicker",
  "DatePickerProps",
  "RangeDate",
  "Moment",
  "FocusInput",
  "Direction"
]);

/**
 * DatePicker import migration for v3 to v4:
 * Moves DatePicker-related imports from "@vibe/core" to "@vibe/core/next".
 *
 * 1. If all specifiers in the import are DatePicker-related, rename the entire import path.
 * 2. If mixed with other components, split: remove DatePicker specifiers from the original
 *    and add a new import from "@vibe/core/next".
 * 3. Skips files that already import DatePicker from "@vibe/core/next".
 */
function transform({ j, root }: TransformationContext) {
  const coreImports = getImports(root, NEW_CORE_IMPORT_PATH);
  if (!coreImports.length) return;

  // Skip if already importing DatePicker from @vibe/core/next
  const nextImports = getImports(root, NEW_CORE_NEXT_IMPORT_PATH);
  let alreadyHasNextDatePicker = false;
  nextImports.forEach(path => {
    const specifiers = path.node.specifiers || [];
    if (specifiers.some(s => s.type === "ImportSpecifier" && (s as ImportSpecifier).imported.name === "DatePicker")) {
      alreadyHasNextDatePicker = true;
    }
  });
  if (alreadyHasNextDatePicker) return;

  coreImports.forEach(importPath => {
    const specifiers = importPath.node.specifiers || [];
    const importSpecifiers = specifiers.filter(s => s.type === "ImportSpecifier") as ImportSpecifier[];

    const datePickerSpecs = importSpecifiers.filter(s => DATEPICKER_SPECIFIERS.has(s.imported.name));
    if (!datePickerSpecs.length) return;

    const otherSpecs = importSpecifiers.filter(s => !DATEPICKER_SPECIFIERS.has(s.imported.name));

    if (otherSpecs.length === 0) {
      // All specifiers are DatePicker-related — rename the entire import path
      importPath.node.source.value = NEW_CORE_NEXT_IMPORT_PATH;
    } else {
      // Mixed import — remove DatePicker specifiers from original, create new import
      datePickerSpecs.forEach(spec => {
        removeSpecifierFromImport(j, importPath, spec.imported.name);
      });

      // Build new specifiers preserving aliases and type-only imports
      const newSpecifiers = datePickerSpecs.map(spec => {
        const newSpec = j.importSpecifier(
          j.identifier(spec.imported.name),
          j.identifier(spec.local?.name || spec.imported.name)
        );
        if (spec.importKind === "type") {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (newSpec as any).importKind = "type";
        }
        return newSpec;
      });

      const newImport = j.importDeclaration(newSpecifiers, j.literal(NEW_CORE_NEXT_IMPORT_PATH));

      if (importPath.node.importKind === "type" && datePickerSpecs.length > 0) {
        newImport.importKind = "type";
      }

      // Insert new import after the existing core import
      j(importPath).insertAfter(newImport);
    }
  });
}

export default wrap(transform);
