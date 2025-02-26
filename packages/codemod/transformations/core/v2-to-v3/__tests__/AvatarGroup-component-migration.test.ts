import transform from "../AvatarGroup-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { AvatarGroup } from "monday-ui-react-core";
    ${source}
  `;
}

describe("AvatarGroup component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`<AvatarGroup removePadding />`),
    prependImport(`<AvatarGroup />`),
    "should remove 'removePadding' prop"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<AvatarGroup removePadding={true} />`),
    prependImport(`<AvatarGroup />`),
    "should remove 'removePadding' prop"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      `
      <>
        <AvatarGroup removePadding data-testid="tab1" />
        <AvatarGroup removePadding data-testid="tab2" />
      </>`
    ),
    prependImport(`
      <>
        <AvatarGroup data-testid="tab1" />
        <AvatarGroup data-testid="tab2" />
      </>`),
    "should handle multiple instances of AvatarGroup each with 'removePadding'"
  );

  defineInlineTest(
    transform,
    {},
    `<AvatarGroup removePadding />`,
    `<AvatarGroup removePadding />`,
    "should not change when no import even if 'removePadding' prop exists"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<OtherComponent removePadding />`),
    prependImport(`<OtherComponent removePadding />`),
    "should not affect other components with 'removePadding'"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { AvatarGroup } from "other-library";
      <AvatarGroup removePadding />
    `,
    `
      import { AvatarGroup } from "other-library";
      <AvatarGroup removePadding />
    `,
    "should not change when 'AvatarGroup' is not imported from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as AvatarGroup } from "other-library";
      <AvatarGroup removePadding />
    `,
    `
      import { OtherComponent as AvatarGroup } from "other-library";
      <AvatarGroup removePadding />
    `,
    "should not change when 'AvatarGroup' is an alias for another component that is not from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as AvatarGroup } from "monday-ui-react-core";
      <AvatarGroup removePadding />
    `,
    `
      import { OtherComponent as AvatarGroup } from "monday-ui-react-core";
      <AvatarGroup removePadding />
    `,
    "should not change when 'AvatarGroup' is an alias for another component from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { AvatarGroup as VibeComponent } from "monday-ui-react-core";
      <VibeComponent removePadding />
    `,
    `
      import { AvatarGroup as VibeComponent } from "monday-ui-react-core";
      <VibeComponent />
    `,
    "should change when 'AvatarGroup' is imported with alias from vibe"
  );
});
