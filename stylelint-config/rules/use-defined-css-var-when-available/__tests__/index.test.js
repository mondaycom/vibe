const { lint } = require("stylelint");
const path = require("path");
const fs = require("fs");

const config = {
  plugins: [path.resolve(__dirname, "../index.js")],
  customSyntax: "postcss-scss",
  rules: {
    "monday-ui-style/use-defined-css-var-when-available": true,
  },
};

describe("monday-ui-style/use-defined-css-var-when-available", () => {
  // since we run tests that actually perform code fixes, the fixtures are expected to change
  const fixturesContentBeforeTests = new Map();

  beforeAll(() => {
    const allFiles = fs.readdirSync(path.resolve(__dirname, "fixtures"));

    allFiles.forEach((fixture) => {
      const fixturePath = path.resolve(__dirname, "fixtures", fixture);
      const fixtureContent = fs.readFileSync(fixturePath).toString();
      fixturesContentBeforeTests.set(fixturePath, fixtureContent);
    });
  });

  afterEach(() => {
    for (const [filePath, content] of fixturesContentBeforeTests) {
      try {
        fs.writeFileSync(filePath, content, { encoding: "utf-8" });
      } catch (e) {
        console.error(
          `Failed resetting file content for file: ${filePath}. This may result in changes that should have been reverted automatically. You will need to manually revert this, sorry.`
        );
        throw e;
      }
    }
  });

  it("warns for values that can be replaced with single CSS vars", async () => {
    const {
      results: [{ warnings }],
    } = await lint({
      files: path.resolve(__dirname, "./fixtures/contains-values-with-single-replacement.scss"),
      config,
    });

    expect(warnings).toHaveLength(2);
    const [firstWarning, secondWarning] = warnings;

    expect(firstWarning.text).toBe(
      `Expected \"16px\" to be \"var(--spacing-medium)\" (monday-ui-style/use-defined-css-var-when-available)`
    );
    expect(firstWarning.line).toBe(3);
    expect(firstWarning.column).toBe(15);

    expect(secondWarning.text).toBe(
      `Expected \"16px\" to be \"var(--border-radius-big)\" (monday-ui-style/use-defined-css-var-when-available)`
    );
    expect(secondWarning.line).toBe(7);
    expect(secondWarning.column).toBe(18);
  });

  it("fixes values that can be replaced with single CSS vars", async () => {
    const { results } = await lint({
      files: path.resolve(__dirname, "./fixtures/contains-values-with-single-replacement.scss"),
      config,
      fix: true,
    });
    const file = results[0]._postcssResult.opts.from;
    const expectedOutputAfterFix = `
.some-class {
  width: 16px;
  margin-top: var(--spacing-medium);
}

#id {
  border-radius: var(--border-radius-big) 14px;
}`.trim();

    const contentAfterFix = fs.readFileSync(file).toString();

    expect(contentAfterFix).toEqual(expectedOutputAfterFix);
  });

  it("warns for values that can be replaced with multiple CSS vars", async () => {
    const {
      results: [{ warnings }],
    } = await lint({
      files: path.resolve(__dirname, "./fixtures/contains-values-with-multiple-replacements.scss"),
      config,
    });

    expect(warnings).toHaveLength(1);
    const [firstWarning] = warnings;

    expect(firstWarning.text).toBe(
      `Expected "14px" to be one of vars: 
--font-size-20
--font-size-general-label
--font-size-subtext
 (monday-ui-style/use-defined-css-var-when-available)`
    );
    expect(firstWarning.line).toBe(3);
    expect(firstWarning.column).toBe(14);
  });

  it("does not perform fixes when there are multiple var replacements", async () => {
    const { results } = await lint({
      files: path.resolve(__dirname, "./fixtures/contains-values-with-multiple-replacements.scss"),
      config,
      fix: true,
    });
    const originalContent = results[0]._postcssResult.css;
    const file = results[0]._postcssResult.opts.from;
    const expectedOutputAfterFix = originalContent;

    const contentAfterFix = fs.readFileSync(file).toString();

    expect(contentAfterFix).toEqual(expectedOutputAfterFix);
  });
});
