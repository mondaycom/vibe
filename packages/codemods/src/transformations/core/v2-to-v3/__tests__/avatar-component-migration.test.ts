import transform from "../avatar-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";
import { describe } from "vitest";

function prependImport(source: string): string {
  return `
    import { Avatar } from "monday-ui-react-core";
    ${source}
  `;
}

describe("Avatar component migration", () => {
  describe("Prop updates for Avatar", () => {
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
  });
});
