const { lint } = require("stylelint");
const path = require("path");

const config = {
  plugins: [path.resolve(__dirname, "../index.js")],
  customSyntax: "postcss-scss",
  rules: {
    "monday-ui-style/use-new-spacing-tokens": [true, { severity: "warning" }]
  }
};

const configWithError = {
  ...config,
  rules: {
    "monday-ui-style/use-new-spacing-tokens": true // Default severity is error
  }
};

describe("monday-ui-style/use-new-spacing-tokens", () => {
  it("should warn for legacy spacing tokens by default", async () => {
    const result = await lint({
      code: `
        .element {
          margin: var(--spacing-small);
          padding: var(--spacing-medium);
        }
      `,
      config
    });

    expect(result.errored).toBe(false);
    expect(result.results[0].warnings).toHaveLength(2);
    expect(result.results[0].warnings[0].severity).toBe("warning");
    expect(result.results[0].warnings[0].text).toContain("var(--spacing-small)");
    expect(result.results[0].warnings[0].text).toContain("var(--space-8)");
  });

  it("should error when configured with error severity", async () => {
    const result = await lint({
      code: `
        .element {
          margin: var(--spacing-small);
        }
      `,
      config: configWithError
    });

    expect(result.errored).toBe(true);
    expect(result.results[0].warnings[0].severity).toBe("error");
  });

  it("should auto-fix legacy spacing tokens", async () => {
    const result = await lint({
      code: `
        .element {
          margin: var(--spacing-small);
          padding: var(--spacing-medium) var(--spacing-xs);
          gap: var(--spacing-large);
        }
      `,
      config,
      fix: true
    });

    const fixedCode = result.output;
    expect(fixedCode).toContain("var(--space-8)");
    expect(fixedCode).toContain("var(--space-16)");
    expect(fixedCode).toContain("var(--space-4)");
    expect(fixedCode).toContain("var(--space-24)");
    expect(fixedCode).not.toContain("var(--spacing-");
  });

  it("should not auto-fix when fix flag is not passed", async () => {
    const result = await lint({
      code: `
        .element {
          margin: var(--spacing-small);
        }
      `,
      config,
      fix: false
    });

    // When not fixing, warnings should be reported
    expect(result.results[0].warnings).toHaveLength(1);
    expect(result.results[0].warnings[0].severity).toBe("warning");
  });

  it("should handle complex values with multiple tokens", async () => {
    const result = await lint({
      code: `
        .element {
          padding: var(--spacing-small) var(--spacing-medium) var(--spacing-large) var(--spacing-xs);
        }
      `,
      config,
      fix: true
    });

    const fixedCode = result.output;
    expect(fixedCode).toContain("var(--space-8) var(--space-16) var(--space-24) var(--space-4)");
  });

  it("should not affect non-legacy spacing tokens", async () => {
    const result = await lint({
      code: `
        .element {
          margin: var(--space-8);
          padding: var(--primary-color);
          gap: 16px;
        }
      `,
      config
    });

    expect(result.results[0].warnings).toHaveLength(0);
  });

  it("should handle all legacy token mappings", async () => {
    const legacyTokens = [
      "var(--spacing-xs)",
      "var(--spacing-small)",
      "var(--spacing-medium)",
      "var(--spacing-large)",
      "var(--spacing-xl)",
      "var(--spacing-xxl)",
      "var(--spacing-xxxl)"
    ];

    const expectedTokens = [
      "var(--space-4)",
      "var(--space-8)",
      "var(--space-16)",
      "var(--space-24)",
      "var(--space-32)",
      "var(--space-48)",
      "var(--space-64)"
    ];

    for (let i = 0; i < legacyTokens.length; i++) {
      const result = await lint({
        code: `.element { margin: ${legacyTokens[i]}; }`,
        config,
        fix: true
      });

      expect(result.output).toContain(expectedTokens[i]);
      expect(result.output).not.toContain(legacyTokens[i]);
    }
  });
});
