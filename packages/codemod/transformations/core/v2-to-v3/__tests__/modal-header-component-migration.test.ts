import transform from "../modal-header-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";
import { describe } from "vitest";

function prependImport(source: string): string {
  return `
    import { ModalHeader } from "monday-ui-react-core";
    ${source}
  `;
}

describe("ModalHeader component migration", () => {
  describe("hideCloseButton removal", () => {
    defineInlineTest(
      transform,
      {},
      prependImport(`<ModalHeader hideCloseButton={true} />`),
      prependImport(`<ModalHeader />`),
      "should remove 'hideCloseButton' prop when set to true"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(`<ModalHeader hideCloseButton={false} />`),
      prependImport(`<ModalHeader />`),
      "should remove 'hideCloseButton' prop when set to false"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(`<ModalHeader hideCloseButton />`),
      prependImport(`<ModalHeader />`),
      "should remove 'hideCloseButton' prop when it is a shorthand boolean"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(`
        <>
          <ModalHeader hideCloseButton />
          <ModalHeader />
        </>
      `),
      prependImport(`
        <>
          <ModalHeader />
          <ModalHeader />
        </>
      `),
      "should remove 'hideCloseButton' prop from multiple ModalHeader instances"
    );

    defineInlineTest(
      transform,
      {},
      `<ModalHeader hideCloseButton={true} />`,
      `<ModalHeader hideCloseButton={true} />`,
      "should not remove when no import exists even if 'hideCloseButton' prop is present"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(`<ModalHeader hideCloseButton={true} size="large" />`),
      prependImport(`<ModalHeader size="large" />`),
      "should remove 'hideCloseButton' when it exists with other props"
    );

    defineInlineTest(
      transform,
      {},
      `
        import { ModalHeader } from "some-other-library";
        <ModalHeader hideCloseButton={true} />
      `,
      `
        import { ModalHeader } from "some-other-library";
        <ModalHeader hideCloseButton={true} />
      `,
      "should not remove 'hideCloseButton' if ModalHeader is imported from a different library"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(`<ModalHeader />`),
      prependImport(`<ModalHeader />`),
      "should not change the component if 'hideCloseButton' prop isn't provided"
    );

    defineInlineTest(
      transform,
      {},
      `
        import { SomeOtherComponent } from "monday-ui-react-core";
        <SomeOtherComponent hideCloseButton={true} />
      `,
      `
        import { SomeOtherComponent } from "monday-ui-react-core";
        <SomeOtherComponent hideCloseButton={true} />
      `,
      "should not change the component if it's not a ModalHeader even when 'hideCloseButton' prop is provided"
    );

    defineInlineTest(
      transform,
      {},
      `
        import { ModalHeader as VibeComponent } from "monday-ui-react-core";
        <VibeComponent hideCloseButton />
      `,
      `
        import { ModalHeader as VibeComponent } from "monday-ui-react-core";
        <VibeComponent />
      `,
      "should remove 'hideCloseButton' if imported with alias from vibe"
    );
  });
});
