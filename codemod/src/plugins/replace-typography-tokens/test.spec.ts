import postcss from "postcss";
import { replaceTypographyTokensPlugin } from "./index";
import { rootToString } from "../../tests-helpers/root-to-string";

describe("replaceTypographyTokensPlugin", () => {
  it("should replace font token with vibe-heading", async () => {
    const inputCSS = `
      .some-class {
        font: var(--font-h1);
      }
    `;

    const expected = postcss.parse(`
    @import '~monday-ui-style/dist/mixins';
    
      .some-class {
        @include vibe-heading(h1, normal);
      }
    `);

    const result = await postcss([replaceTypographyTokensPlugin]).process(inputCSS, { from: undefined });
    expect(rootToString(result.root)).toEqual(rootToString(expected));
  });

  it("should replace font token with vibe-text", async () => {
    const inputCSS = `
      .some-class {
        font: var(--paragraph-h6);
      }
    `;

    const expected = postcss.parse(`
    @import '~monday-ui-style/dist/mixins';
    
     .some-class {
        @include vibe-text(text-1, normal);
      }
    `);

    const result = await postcss([replaceTypographyTokensPlugin]).process(inputCSS, { from: undefined });
    expect(rootToString(result.root)).toEqual(rootToString(expected));
  });

  it("should replace subtoken declarations with the correct mixin", async () => {
    const inputCSS = `
      .some-other-class {
        font-size: var(--font-size-h1);
        font-weight: var(--font-weight-bold);
        line-height: var(--font-line-height-h1);
      }
    `;
    const expected = postcss.parse(`
    @import '~monday-ui-style/dist/mixins';
    
     .some-other-class {
        @include vibe-title(h1, normal);
      }
    `);

    const result = await postcss([replaceTypographyTokensPlugin]).process(inputCSS, { from: undefined });
    expect(rootToString(result.root)).toEqual(rootToString(expected));
  });
  it("should not replace subtoken declarations if font size is missing", async () => {
    const inputCSS = `
      .some-other-class {
        font-weight: var(--font-weight-bold);
        line-height: var(--font-line-height-h1);
      }
    `;

    const expected = postcss.parse(`
     .some-other-class {
        font-weight: var(--font-weight-bold);
        line-height: var(--font-line-height-h1);
      }
    `);

    const result = await postcss([replaceTypographyTokensPlugin]).process(inputCSS, { from: undefined });
    expect(rootToString(result.root)).toEqual(rootToString(expected));
  });

  it("should not replace subtoken declarations if font weight is missing", async () => {
    const inputCSS = `
      .some-other-class {
        font-size: var(--font-size-h1);
        line-height: var(--font-line-height-h1);
      }
    `;

    const expected = postcss.parse(`
     .some-other-class {
        font-size: var(--font-size-h1);
        line-height: var(--font-line-height-h1);
      }
    `);

    const result = await postcss([replaceTypographyTokensPlugin]).process(inputCSS, { from: undefined });
    expect(rootToString(result.root)).toEqual(rootToString(expected));
  });

  it("should not replace subtoken declarations if line height is missing", async () => {
    const inputCSS = `
      .some-other-class {
        font-size: var(--font-size-h1);
        font-weight: var(--font-weight-bold);
      }
    `;

    const expected = postcss.parse(`
     .some-other-class {
        font-size: var(--font-size-h1);
        font-weight: var(--font-weight-bold);
      }
    `);

    const result = await postcss([replaceTypographyTokensPlugin]).process(inputCSS, { from: undefined });
    expect(rootToString(result.root)).toEqual(rootToString(expected));
  });
});
