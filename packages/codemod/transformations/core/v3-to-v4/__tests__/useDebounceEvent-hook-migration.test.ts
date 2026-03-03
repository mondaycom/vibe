import transform from "../useDebounceEvent-hook-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `import { useDebounceEvent } from "@vibe/core";\n${source}`;
}

describe("useDebounceEvent hook migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`
      const { inputValue, onEventChanged, clearValue, updateValue } = useDebounceEvent({
        delay: 200,
        onChange: handleChange,
        initialStateValue: value,
        trim: true
      });
    `),
    prependImport(`
      const {
        onEventChanged,
        clearValue
      } = useDebounceEvent({
        delay: 200,
        onChange: handleChange,
        trim: true
      });
    `),
    "should remove initialStateValue, inputValue, and updateValue"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`
      const { inputValue, onEventChanged, clearValue } = useDebounceEvent({
        delay: 100,
        onChange: handler,
        initialStateValue: ""
      });
    `),
    prependImport(`
      const {
        onEventChanged,
        clearValue
      } = useDebounceEvent({
        delay: 100,
        onChange: handler
      });
    `),
    "should remove initialStateValue and inputValue when updateValue is not used"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`
      const { onEventChanged, clearValue } = useDebounceEvent({
        delay: 100,
        onChange: handler
      });
    `),
    prependImport(`
      const { onEventChanged, clearValue } = useDebounceEvent({
        delay: 100,
        onChange: handler
      });
    `),
    "should not modify when no deprecated params or returns are used"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { useDebounceEvent } from "other-library";
      const { inputValue, onEventChanged } = useDebounceEvent({
        initialStateValue: "test",
        onChange: handler
      });
    `,
    `
      import { useDebounceEvent } from "other-library";
      const { inputValue, onEventChanged } = useDebounceEvent({
        initialStateValue: "test",
        onChange: handler
      });
    `,
    "should not modify when imported from a different library"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`
      const { inputValue, onEventChanged } = useDebounceEvent({
        initialStateValue: someVariable,
        onChange: handler,
        delay: 300
      });
    `),
    prependImport(`
      const {
        onEventChanged
      } = useDebounceEvent({
        onChange: handler,
        delay: 300
      });
    `),
    "should handle initialStateValue with variable reference"
  );
});
