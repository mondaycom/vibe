import transform from "../TipseenContent-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { TipseenContent } from "monday-ui-react-core";
    ${source}
  `;
}

describe("TipseenContent component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`<TipseenContent isDismissHidden isSubmitHidden/>`),
    prependImport(`<TipseenContent hideDismiss hideSubmit/>`),
    "should update 'isDismissHidden' to 'hideDismiss' & 'isSubmitHidden' to 'hideSubmit'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<div><TipseenContent isDismissHidden /></div>`),
    prependImport(`<div><TipseenContent hideDismiss /></div>`),
    "should update 'isDismissHidden' to 'hideDismiss' in a nested structure"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<TipseenContent isDismissHidden isSubmitHidden title="Content" />`),
    prependImport(`<TipseenContent hideDismiss hideSubmit title="Content" />`),
    "should update new props while maintaining other props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      `
      <>
        <TipseenContent isDismissHidden />
        <TipseenContent isDismissHidden isSubmitHidden />
      </>`
    ),
    prependImport(`
      <>
        <TipseenContent hideDismiss />
        <TipseenContent hideDismiss hideSubmit />
      </>`),
    "should handle multiple instances of TipseenContent each with 'isDismissHidden'"
  );

  defineInlineTest(
    transform,
    {},
    `<TipseenContent isDismissHidden />`,
    `<TipseenContent isDismissHidden />`,
    "should not change when no import even if 'isDismissHidden' prop exists"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<OtherComponent isDismissHidden />`),
    prependImport(`<OtherComponent isDismissHidden />`),
    "should not affect other components with 'isDismissHidden'"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { TipseenContent } from "other-library";
      <TipseenContent isDismissHidden />
    `,
    `
      import { TipseenContent } from "other-library";
      <TipseenContent isDismissHidden />
    `,
    "should not change when 'TipseenContent' is not imported from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as TipseenContent } from "other-library";
      <TipseenContent isDismissHidden isSubmitHidden />
    `,
    `
      import { OtherComponent as TipseenContent } from "other-library";
      <TipseenContent isDismissHidden isSubmitHidden />
    `,
    "should not change when 'TipseenContent' is an alias for another component that is not from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as TipseenContent } from "monday-ui-react-core";
      <TipseenContent isDismissHidden isSubmitHidden />
    `,
    `
      import { OtherComponent as TipseenContent } from "monday-ui-react-core";
      <TipseenContent isDismissHidden isSubmitHidden />
    `,
    "should not change when 'TipseenContent' is an alias for another component from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { TipseenContent as VibeComponent } from "monday-ui-react-core";
      <VibeComponent isDismissHidden isSubmitHidden />
    `,
    `
      import { TipseenContent as VibeComponent } from "monday-ui-react-core";
      <VibeComponent hideDismiss hideSubmit />
    `,
    "should change when 'TipseenContent' is imported with alias from vibe"
  );
});
