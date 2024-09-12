import transform from "../Avatar-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { Avatar } from "monday-ui-react-core";
    ${source}
  `;
}

describe("Avatar component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`<Avatar isSquare />`),
    prependImport(`<Avatar square />`),
    "should update 'isSquare' to 'square'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Avatar isDisabled />`),
    prependImport(`<Avatar disabled />`),
    "should update 'isDisabled' to 'disabled'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Avatar isSquare isDisabled />`),
    prependImport(`<Avatar square disabled />`),
    "should update both 'isSquare' and 'isDisabled' when both are present"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Avatar square isDisabled />`),
    prependImport(`<Avatar square disabled />`),
    "should update 'isDisabled' even if encountered another new prop from same migration before that"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Avatar isSquare square />`),
    prependImport(`<Avatar square />`),
    "should remove 'isSquare' if both 'isSquare' and 'square' are present"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Avatar disabled />`),
    prependImport(`<Avatar disabled />`),
    "should not change if Avatar already uses new prop 'disabled'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Avatar square />`),
    prependImport(`<Avatar square />`),
    "should not change if Avatar already uses new prop 'square'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Avatar isDisabled disabled />`),
    prependImport(`<Avatar disabled />`),
    "should remove 'isDisabled' if both 'isDisabled' and 'disabled' are present"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`
        <div>
          <Avatar isSquare />
          <Avatar isDisabled />
        </div>
      `),
    prependImport(`
        <div>
          <Avatar square />
          <Avatar disabled />
        </div>
      `),
    "should handle multiple Avatar instances each with props to update"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<OtherComponent isSquare isDisabled />`),
    prependImport(`<OtherComponent isSquare isDisabled />`),
    "should not change other components even if they have similar props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Avatar isSquare={true} isDisabled={true} text="avatar" />`),
    prependImport(`<Avatar square={true} disabled={true} text="avatar" />`),
    "should correctly update props when mixed with other attributes"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Avatar isSquare={false} isDisabled={false} />`),
    prependImport(`<Avatar square={false} disabled={false} />`),
    "should correctly update props when set to false"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent } from "monday-ui-react-core";
      <Avatar isSquare />
    `,
    `
      import { OtherComponent } from "monday-ui-react-core";
      <Avatar isSquare />
    `,
    "should not change when 'Avatar' is not imported from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as Avatar } from "monday-ui-react-core";
      <Avatar isSquare />
    `,
    `
      import { OtherComponent as Avatar } from "monday-ui-react-core";
      <Avatar isSquare />
    `,
    "should not change when 'Avatar' is an alias for another component from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { Avatar as VibeComponent } from "monday-ui-react-core";
      <VibeComponent isSquare />
    `,
    `
      import { Avatar as VibeComponent } from "monday-ui-react-core";
      <VibeComponent square />
    `,
    "should change when 'Avatar' is imported with alias from vibe"
  );
});
