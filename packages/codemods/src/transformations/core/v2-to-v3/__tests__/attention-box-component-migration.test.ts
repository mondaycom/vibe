import { describe } from "vitest";
import transform from "../attention-box-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { AttentionBox } from "monday-ui-react-core";
    ${source}
  `;
}

describe("AttentionBox component prop migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`<AttentionBox componentClassName="old-class" />`),
    prependImport(`<AttentionBox className="old-class" />`),
    "should update 'componentClassName' to 'className'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<div><AttentionBox componentClassName="old-class" /></div>`),
    prependImport(`<div><AttentionBox className="old-class" /></div>`),
    "should update 'componentClassName' to 'className' in a nested structure"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<AttentionBox componentClassName="old-class" type="info" />`),
    prependImport(`<AttentionBox className="old-class" type="info" />`),
    "should update 'componentClassName' to 'className' while maintaining other props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      `
      <>
        <AttentionBox componentClassName="old-class" />
        <AttentionBox componentClassName="another-class" />
      </>`
    ),
    prependImport(`
      <>
        <AttentionBox className="old-class" />
        <AttentionBox className="another-class" />
      </>`),
    "should handle multiple instances of AttentionBox each with 'componentClassName'"
  );

  defineInlineTest(
    transform,
    {},
    `<AttentionBox componentClassName="old-class" />`, // No import for AttentionBox
    `<AttentionBox componentClassName="old-class" />`,
    "should not change when no import even if 'componentClassName' prop exists"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<OtherComponent componentClassName="old-class" />`),
    prependImport(`<OtherComponent componentClassName="old-class" />`),
    "should not affect other components with 'componentClassName'"
  );
});
