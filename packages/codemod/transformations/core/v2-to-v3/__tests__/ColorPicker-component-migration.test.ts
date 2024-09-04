import transform from "../ColorPicker-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { ColorPicker } from "monday-ui-react-core";
    ${source}
  `;
}

describe("ColorPicker component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`<ColorPicker colorStyle={ColorPicker.COLOR_STYLES.MEDIUM} />`),
    prependImport(`<ColorPicker colorStyle={ColorPicker.colorStyles.MEDIUM} />`),
    "should update 'COLOR_STYLES' to 'colorStyle'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<div><ColorPicker colorStyle={ColorPicker.COLOR_STYLES.MEDIUM} /></div>`),
    prependImport(`<div><ColorPicker colorStyle={ColorPicker.colorStyles.MEDIUM} /></div>`),
    "should update 'COLOR_STYLES' to 'colorStyles' in a nested structure"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<ColorPicker colorStyle={ColorPicker.COLOR_STYLES.MEDIUM} placeholder="test" />`),
    prependImport(`<ColorPicker colorStyle={ColorPicker.colorStyles.MEDIUM} placeholder="test" />`),
    "should update 'COLOR_STYLES' to 'colorStyles' while maintaining other props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      `
      <>
        <ColorPicker colorStyle={ColorPicker.COLOR_STYLES.MEDIUM} />
        <ColorPicker colorStyle={ColorPicker.COLOR_STYLES.LARGE} />
      </>`
    ),
    prependImport(`
      <>
        <ColorPicker colorStyle={ColorPicker.colorStyles.MEDIUM} />
        <ColorPicker colorStyle={ColorPicker.colorStyles.LARGE} />
      </>`),
    "should handle multiple instances of ColorPicker each with 'COLOR_STYLES'"
  );

  defineInlineTest(
    transform,
    {},
    `<ColorPicker colorStyle={ColorPicker.COLOR_STYLES.MEDIUM} />`,
    `<ColorPicker colorStyle={ColorPicker.COLOR_STYLES.MEDIUM} />`,
    "should not change when no import even if 'COLOR_STYLES' prop exists"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<OtherComponent colorStyle={ColorPicker.COLOR_STYLES.MEDIUM} />`),
    prependImport(`<OtherComponent colorStyle={ColorPicker.COLOR_STYLES.MEDIUM} />`),
    "should not affect other components with 'COLOR_STYLES'"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { ColorPicker } from "other-library";
      <ColorPicker colorStyle={ColorPicker.COLOR_STYLES.MEDIUM} />
    `,
    `
      import { ColorPicker } from "other-library";
      <ColorPicker colorStyle={ColorPicker.COLOR_STYLES.MEDIUM} />
    `,
    "should not change when 'ColorPicker' is not imported from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as ColorPicker } from "other-library";
      <ColorPicker colorStyle={ColorPicker.COLOR_STYLES.MEDIUM} />
    `,
    `
      import { OtherComponent as ColorPicker } from "other-library";
      <ColorPicker colorStyle={ColorPicker.COLOR_STYLES.MEDIUM} />
    `,
    "should not change when 'ColorPicker' is an alias for another component that is not from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as ColorPicker } from "monday-ui-react-core";
      <ColorPicker colorStyle={ColorPicker.COLOR_STYLES.MEDIUM} />
    `,
    `
      import { OtherComponent as ColorPicker } from "monday-ui-react-core";
      <ColorPicker colorStyle={ColorPicker.COLOR_STYLES.MEDIUM} />
    `,
    "should not change when 'ColorPicker' is an alias for another component from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { ColorPicker as VibeComponent } from "monday-ui-react-core";
      <VibeComponent colorStyle={ColorPicker.COLOR_STYLES.MEDIUM} />
    `,
    `
      import { ColorPicker as VibeComponent } from "monday-ui-react-core";
      <VibeComponent colorStyle={ColorPicker.colorStyles.MEDIUM} />
    `,
    "should change when 'ColorPicker' is imported with alias from vibe"
  );
});
