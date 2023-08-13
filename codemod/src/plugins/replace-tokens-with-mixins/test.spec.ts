import postcss from "postcss";
import { replaceTokensWithMixins } from "./index";
import { rootToString } from "../../tests-helpers/root-to-string";

describe("replaceTokensWithMixins", () => {
  it("should replace tokens with mixins and add imports if needed", () => {
    const root = postcss.parse(`
      .test-class {
        color: var(--color-primary);
        font-size: var(--h1);
      }
    `);

    const params = [
      {
        from: "color-primary",
        to: "mixins-with-params",
        params: ["text", "text"],
        importStatement: "styles/mixins/colors"
      },
      {
        from: "h1",
        to: "mixins-without-params",
        params: [],
        importStatement: "styles/mixins/colors"
      }
    ];

    replaceTokensWithMixins(root, params);
    const expected = postcss.parse(`
      @import 'styles/mixins/colors';
      .test-class {
        @include mixins-with-params(text, text);
        @include mixins-without-params();
      }
    `);

    expect(rootToString(root)).toBe(rootToString(expected));
  });
});
