import transform from "../Modal-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";
import { describe } from "vitest";

function prependImport(source: string): string {
  return `
    import { Modal } from "monday-ui-react-core";
    ${source}
  `;
}

describe("Modal component migration", () => {
  describe("hideCloseButton removal", () => {
    defineInlineTest(
      transform,
      {},
      prependImport(`<Modal hideCloseButton={true} />`),
      prependImport(`<Modal />`),
      "should remove 'hideCloseButton' prop when set to true"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(`<Modal hideCloseButton={false} />`),
      prependImport(`<Modal />`),
      "should remove 'hideCloseButton' prop when set to false"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(`<Modal hideCloseButton />`),
      prependImport(`<Modal />`),
      "should remove 'hideCloseButton' prop when it is a shorthand boolean"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(`
        <>
          <Modal hideCloseButton />
          <Modal />
        </>
      `),
      prependImport(`
        <>
          <Modal />
          <Modal />
        </>
      `),
      "should remove 'hideCloseButton' prop from multiple Modal instances"
    );

    defineInlineTest(
      transform,
      {},
      `<Modal hideCloseButton={true} />`,
      `<Modal hideCloseButton={true} />`,
      "should not remove when no import exists even if 'hideCloseButton' prop is present"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(`<Modal hideCloseButton={true} size="large" />`),
      prependImport(`<Modal size="large" />`),
      "should remove 'hideCloseButton' when it exists with other props"
    );

    defineInlineTest(
      transform,
      {},
      `
        import { Modal } from "some-other-library";
        <Modal hideCloseButton={true} />
      `,
      `
        import { Modal } from "some-other-library";
        <Modal hideCloseButton={true} />
      `,
      "should not remove 'hideCloseButton' if Modal is imported from a different library"
    );

    defineInlineTest(
      transform,
      {},
      prependImport(`<Modal />`),
      prependImport(`<Modal />`),
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
      "should not change the component if it's not a Modal even when 'hideCloseButton' prop is provided"
    );

    defineInlineTest(
      transform,
      {},
      `
        import { Modal as VibeComponent } from "monday-ui-react-core";
        <VibeComponent hideCloseButton />
      `,
      `
        import { Modal as VibeComponent } from "monday-ui-react-core";
        <VibeComponent />
      `,
      "should remove 'hideCloseButton' if imported with alias from vibe"
    );
  });
});
