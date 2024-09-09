import transform from "../Dialog-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { Dialog } from "monday-ui-react-core";
    ${source}
  `;
}

describe("Dialog component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`<Dialog shoudlCallbackOnMount />`),
    prependImport(`<Dialog shouldCallbackOnMount />`),
    "should update 'shoudlCallbackOnMount' to 'shouldCallbackOnMount'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<div><Dialog shoudlCallbackOnMount /></div>`),
    prependImport(`<div><Dialog shouldCallbackOnMount /></div>`),
    "should update 'shoudlCallbackOnMount' to 'shouldCallbackOnMount' in a nested structure"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Dialog shoudlCallbackOnMount  isOpen />`),
    prependImport(`<Dialog shouldCallbackOnMount  isOpen />`),
    "should update new props while maintaining other props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      `
      <>
        <Dialog shoudlCallbackOnMount />
        <Dialog shoudlCallbackOnMount  />
      </>`
    ),
    prependImport(`
      <>
        <Dialog shouldCallbackOnMount />
        <Dialog shouldCallbackOnMount  />
      </>`),
    "should handle multiple instances of Dialog each with 'shoudlCallbackOnMount'"
  );

  defineInlineTest(
    transform,
    {},
    `<Dialog shoudlCallbackOnMount />`,
    `<Dialog shoudlCallbackOnMount />`,
    "should not change when no import even if 'shoudlCallbackOnMount' prop exists"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<OtherComponent shoudlCallbackOnMount />`),
    prependImport(`<OtherComponent shoudlCallbackOnMount />`),
    "should not affect other components with 'shoudlCallbackOnMount'"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { Dialog } from "other-library";
      <Dialog shoudlCallbackOnMount />
    `,
    `
      import { Dialog } from "other-library";
      <Dialog shoudlCallbackOnMount />
    `,
    "should not change when 'Dialog' is not imported from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as Dialog } from "other-library";
      <Dialog shoudlCallbackOnMount  />
    `,
    `
      import { OtherComponent as Dialog } from "other-library";
      <Dialog shoudlCallbackOnMount  />
    `,
    "should not change when 'Dialog' is an alias for another component that is not from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as Dialog } from "monday-ui-react-core";
      <Dialog shoudlCallbackOnMount  />
    `,
    `
      import { OtherComponent as Dialog } from "monday-ui-react-core";
      <Dialog shoudlCallbackOnMount  />
    `,
    "should not change when 'Dialog' is an alias for another component from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { Dialog as VibeComponent } from "monday-ui-react-core";
      <VibeComponent shoudlCallbackOnMount  />
    `,
    `
      import { Dialog as VibeComponent } from "monday-ui-react-core";
      <VibeComponent shouldCallbackOnMount  />
    `,
    "should change when 'Dialog' is imported with alias from vibe"
  );
});
