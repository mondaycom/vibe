import transform from "../Tipseen-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { Tipseen } from "monday-ui-react-core";
    ${source}
  `;
}

describe("Tipseen component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`<Tipseen isCloseButtonHidden/>`),
    prependImport(`<Tipseen hideCloseButton/>`),
    "should update 'isCloseButtonHidden' to 'hideCloseButton'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Tipseen hideCloseButton />`),
    prependImport(`<Tipseen hideCloseButton />`),
    "should not change if Tipseen already uses new prop 'hideCloseButton'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Tipseen isCloseButtonHidden hideCloseButton />`),
    prependImport(`<Tipseen hideCloseButton />`),
    "should remove 'isCloseButtonHidden' if both 'isCloseButtonHidden' and 'hideCloseButton' are present"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<OtherComponent isCloseButtonHidden />`),
    prependImport(`<OtherComponent isCloseButtonHidden />`),
    "should not change other components even if they have similar props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Tipseen isCloseButtonHidden={true} text="test" />`),
    prependImport(`<Tipseen hideCloseButton={true} text="test" />`),
    "should correctly update props when mixed with other attributes"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Tipseen isCloseButtonHidden={false} />`),
    prependImport(`<Tipseen hideCloseButton={false} />`),
    "should correctly update props when set to false"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { Tipseen } from "other-library";
      <Tipseen isCloseButtonHidden />
    `,
    `
      import { Tipseen } from "other-library";
      <Tipseen isCloseButtonHidden />
    `,
    "should not change when 'Tipseen' is not imported from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as Tipseen } from "monday-ui-react-core";
      <Tipseen isCloseButtonHidden />
    `,
    `
      import { OtherComponent as Tipseen } from "monday-ui-react-core";
      <Tipseen isCloseButtonHidden />
    `,
    "should not change when 'Tipseen' is an alias for another component from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { Tipseen as VibeComponent } from "monday-ui-react-core";
      <VibeComponent isCloseButtonHidden />
    `,
    `
      import { Tipseen as VibeComponent } from "monday-ui-react-core";
      <VibeComponent hideCloseButton />
    `,
    "should change when 'Tipseen' is imported with alias from vibe"
  );
});
