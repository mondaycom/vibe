import transform from "../aria-props-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { Button } from "@vibe/core";
    ${source}
  `;
}

function prependLinkImport(source: string): string {
  return `
    import { Link } from "@vibe/core";
    ${source}
  `;
}

function prependMultiImport(source: string): string {
  return `
    import { Button, IconButton, Search } from "@vibe/core";
    ${source}
  `;
}

describe("Aria props migration", () => {
  describe("ariaLabel", () => {
    defineInlineTest(
      transform,
      {},
      prependImport(`<Button ariaLabel="Click me">test</Button>`),
      prependImport(`<Button aria-label="Click me">test</Button>`),
      "should update 'ariaLabel' to 'aria-label'"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(`<Button ariaLabel={label}>test</Button>`),
      prependImport(`<Button aria-label={label}>test</Button>`),
      "should update 'ariaLabel' to 'aria-label' with expression value"
    );
  });

  describe("ariaHidden", () => {
    defineInlineTest(
      transform,
      {},
      `
        import { Icon } from "@vibe/core";
        <Icon ariaHidden={true} />
      `,
      `
        import { Icon } from "@vibe/core";
        <Icon aria-hidden={true} />
      `,
      "should update 'ariaHidden' to 'aria-hidden'"
    );
  });

  describe("ariaExpanded", () => {
    defineInlineTest(
      transform,
      {},
      prependImport(`<Button ariaExpanded={isOpen}>test</Button>`),
      prependImport(`<Button aria-expanded={isOpen}>test</Button>`),
      "should update 'ariaExpanded' to 'aria-expanded'"
    );
  });

  describe("ariaControls", () => {
    defineInlineTest(
      transform,
      {},
      prependImport(`<Button ariaControls="panel-1">test</Button>`),
      prependImport(`<Button aria-controls="panel-1">test</Button>`),
      "should update 'ariaControls' to 'aria-controls'"
    );
  });

  describe("ariaHasPopup", () => {
    defineInlineTest(
      transform,
      {},
      prependImport(`<Button ariaHasPopup={true}>test</Button>`),
      prependImport(`<Button aria-haspopup={true}>test</Button>`),
      "should update 'ariaHasPopup' to 'aria-haspopup'"
    );
  });

  describe("ariaLabeledBy (misspelled)", () => {
    defineInlineTest(
      transform,
      {},
      prependImport(`<Button ariaLabeledBy="label-id">test</Button>`),
      prependImport(`<Button aria-labelledby="label-id">test</Button>`),
      "should update 'ariaLabeledBy' to 'aria-labelledby' (fixing spelling)"
    );
  });

  describe("ariaLabelledBy", () => {
    defineInlineTest(
      transform,
      {},
      `
        import { Checkbox } from "@vibe/core";
        <Checkbox ariaLabelledBy="label-id" />
      `,
      `
        import { Checkbox } from "@vibe/core";
        <Checkbox aria-labelledby="label-id" />
      `,
      "should update 'ariaLabelledBy' to 'aria-labelledby'"
    );
  });

  describe("ariaDescribedBy", () => {
    defineInlineTest(
      transform,
      {},
      `
        import { List } from "@vibe/core";
        <List ariaDescribedBy="desc-id" />
      `,
      `
        import { List } from "@vibe/core";
        <List aria-describedby="desc-id" />
      `,
      "should update 'ariaDescribedBy' to 'aria-describedby'"
    );
  });

  describe("Link ariaLabelDescription", () => {
    defineInlineTest(
      transform,
      {},
      prependLinkImport(`<Link ariaLabelDescription="Go to page" href="/page" />`),
      prependLinkImport(`<Link aria-label="Go to page" href="/page" />`),
      "should update Link 'ariaLabelDescription' to 'aria-label'"
    );
  });

  describe("multiple props on same element", () => {
    defineInlineTest(
      transform,
      {},
      prependImport(`<Button ariaLabel="Click" ariaExpanded={isOpen} ariaControls="panel">test</Button>`),
      prependImport(`<Button aria-label="Click" aria-expanded={isOpen} aria-controls="panel">test</Button>`),
      "should update multiple aria props on the same element"
    );
  });

  describe("multiple components", () => {
    defineInlineTest(
      transform,
      {},
      prependMultiImport(`
        <div>
          <Button ariaLabel="Click">test</Button>
          <IconButton ariaLabel="Icon" ariaHasPopup={true} />
          <Search ariaExpanded={true} ariaHasPopup="listbox" />
        </div>
      `),
      prependMultiImport(`
        <div>
          <Button aria-label="Click">test</Button>
          <IconButton aria-label="Icon" aria-haspopup={true} />
          <Search aria-expanded={true} aria-haspopup="listbox" />
        </div>
      `),
      "should update aria props across multiple different components"
    );
  });

  describe("no import - no change", () => {
    defineInlineTest(
      transform,
      {},
      `<Button ariaLabel="Click">test</Button>`,
      `<Button ariaLabel="Click">test</Button>`,
      "should not change when no vibe import exists"
    );
  });

  describe("other library - no change", () => {
    defineInlineTest(
      transform,
      {},
      `
        import { Button } from "other-library";
        <Button ariaLabel="Click">test</Button>
      `,
      `
        import { Button } from "other-library";
        <Button ariaLabel="Click">test</Button>
      `,
      "should not change when component is imported from another library"
    );
  });

  describe("aliased import", () => {
    defineInlineTest(
      transform,
      {},
      `
        import { Button as MyButton } from "@vibe/core";
        <MyButton ariaLabel="Click">test</MyButton>
      `,
      `
        import { Button as MyButton } from "@vibe/core";
        <MyButton aria-label="Click">test</MyButton>
      `,
      "should handle aliased imports"
    );
  });

  describe("legacy import path", () => {
    defineInlineTest(
      transform,
      {},
      `
        import { Button } from "monday-ui-react-core";
        <Button ariaLabel="Click">test</Button>
      `,
      `
        import { Button } from "monday-ui-react-core";
        <Button aria-label="Click">test</Button>
      `,
      "should handle legacy import path"
    );
  });

  describe("both old and new props with same value", () => {
    defineInlineTest(
      transform,
      {},
      prependImport(`<Button ariaLabel="Click" aria-label="Click">test</Button>`),
      prependImport(`<Button aria-label="Click">test</Button>`),
      "should remove old prop when both exist with same value"
    );
  });

  describe("both old and new props with different values", () => {
    defineInlineTest(
      transform,
      {},
      prependImport(`<Button ariaLabel="Old" aria-label="New">test</Button>`),
      prependImport(`<Button ariaLabel="Old" aria-label="New">test</Button>`),
      "should not change when both old and new props exist with different values"
    );
  });
});
