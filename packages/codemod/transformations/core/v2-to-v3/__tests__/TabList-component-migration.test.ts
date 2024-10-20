import transform from "../TabList-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { TabList } from "monday-ui-react-core";
    ${source}
  `;
}

describe("TabList component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`<TabList noPadding />`),
    prependImport(`<TabList />`),
    "should remove 'noPadding' prop"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<TabList noPadding={true} />`),
    prependImport(`<TabList />`),
    "should remove 'noPadding' prop"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      `
      <>
        <TabList noPadding data-testid="tab1" />
        <TabList noPadding data-testid="tab2" />
      </>`
    ),
    prependImport(`
      <>
        <TabList data-testid="tab1" />
        <TabList data-testid="tab2" />
      </>`),
    "should handle multiple instances of TabList each with 'noPadding'"
  );

  defineInlineTest(
    transform,
    {},
    `<TabList noPadding />`,
    `<TabList noPadding />`,
    "should not change when no import even if 'noPadding' prop exists"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<OtherComponent noPadding />`),
    prependImport(`<OtherComponent noPadding />`),
    "should not affect other components with 'noPadding'"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { TabList } from "other-library";
      <TabList noPadding />
    `,
    `
      import { TabList } from "other-library";
      <TabList noPadding />
    `,
    "should not change when 'TabList' is not imported from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as TabList } from "other-library";
      <TabList noPadding />
    `,
    `
      import { OtherComponent as TabList } from "other-library";
      <TabList noPadding />
    `,
    "should not change when 'TabList' is an alias for another component that is not from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as TabList } from "monday-ui-react-core";
      <TabList noPadding />
    `,
    `
      import { OtherComponent as TabList } from "monday-ui-react-core";
      <TabList noPadding />
    `,
    "should not change when 'TabList' is an alias for another component from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { TabList as VibeComponent } from "monday-ui-react-core";
      <VibeComponent noPadding />
    `,
    `
      import { TabList as VibeComponent } from "monday-ui-react-core";
      <VibeComponent />
    `,
    "should change when 'TabList' is imported with alias from vibe"
  );
});
