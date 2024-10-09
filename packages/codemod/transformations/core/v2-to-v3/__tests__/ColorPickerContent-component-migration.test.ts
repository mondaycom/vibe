import transform from "../ColorPickerContent-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { ColorPickerContent } from "monday-ui-react-core";
    ${source}
  `;
}

describe("ColorPickerContent component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`<ColorPickerContent colorStyle={ColorPickerContent.COLOR_STYLES.MEDIUM} />`),
    prependImport(`<ColorPickerContent colorStyle={ColorPickerContent.colorStyles.MEDIUM} />`),
    "should update 'COLOR_STYLES' to 'colorStyle'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<div><ColorPickerContent colorStyle={ColorPickerContent.COLOR_STYLES.MEDIUM} /></div>`),
    prependImport(`<div><ColorPickerContent colorStyle={ColorPickerContent.colorStyles.MEDIUM} /></div>`),
    "should update 'COLOR_STYLES' to 'colorStyles' in a nested structure"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<ColorPickerContent colorStyle={ColorPickerContent.COLOR_STYLES.MEDIUM} placeholder="test" />`),
    prependImport(`<ColorPickerContent colorStyle={ColorPickerContent.colorStyles.MEDIUM} placeholder="test" />`),
    "should update 'COLOR_STYLES' to 'colorStyles' while maintaining other props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      `
      <>
        <ColorPickerContent colorStyle={ColorPickerContent.COLOR_STYLES.MEDIUM} />
        <ColorPickerContent colorStyle={ColorPickerContent.COLOR_STYLES.LARGE} />
      </>`
    ),
    prependImport(`
      <>
        <ColorPickerContent colorStyle={ColorPickerContent.colorStyles.MEDIUM} />
        <ColorPickerContent colorStyle={ColorPickerContent.colorStyles.LARGE} />
      </>`),
    "should handle multiple instances of ColorPickerContent each with 'COLOR_STYLES'"
  );

  defineInlineTest(
    transform,
    {},
    `<ColorPickerContent colorStyle={ColorPickerContent.COLOR_STYLES.MEDIUM} />`,
    `<ColorPickerContent colorStyle={ColorPickerContent.COLOR_STYLES.MEDIUM} />`,
    "should not change when no import even if 'COLOR_STYLES' prop exists"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<OtherComponent colorStyle={ColorPickerContent.COLOR_STYLES.MEDIUM} />`),
    prependImport(`<OtherComponent colorStyle={ColorPickerContent.COLOR_STYLES.MEDIUM} />`),
    "should not affect other components with 'COLOR_STYLES'"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { ColorPickerContent } from "other-library";
      <ColorPickerContent colorStyle={ColorPickerContent.COLOR_STYLES.MEDIUM} />
    `,
    `
      import { ColorPickerContent } from "other-library";
      <ColorPickerContent colorStyle={ColorPickerContent.COLOR_STYLES.MEDIUM} />
    `,
    "should not change when 'ColorPickerContent' is not imported from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as ColorPickerContent } from "other-library";
      <ColorPickerContent colorStyle={ColorPickerContent.COLOR_STYLES.MEDIUM} />
    `,
    `
      import { OtherComponent as ColorPickerContent } from "other-library";
      <ColorPickerContent colorStyle={ColorPickerContent.COLOR_STYLES.MEDIUM} />
    `,
    "should not change when 'ColorPickerContent' is an alias for another component that is not from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as ColorPickerContent } from "monday-ui-react-core";
      <ColorPickerContent colorStyle={ColorPickerContent.COLOR_STYLES.MEDIUM} />
    `,
    `
      import { OtherComponent as ColorPickerContent } from "monday-ui-react-core";
      <ColorPickerContent colorStyle={ColorPickerContent.COLOR_STYLES.MEDIUM} />
    `,
    "should not change when 'ColorPickerContent' is an alias for another component from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { ColorPickerContent as VibeComponent } from "monday-ui-react-core";
      <VibeComponent colorStyle={ColorPickerContent.COLOR_STYLES.MEDIUM} />
    `,
    `
      import { ColorPickerContent as VibeComponent } from "monday-ui-react-core";
      <VibeComponent colorStyle={ColorPickerContent.colorStyles.MEDIUM} />
    `,
    "should change when 'ColorPickerContent' is imported with alias from vibe"
  );
});
