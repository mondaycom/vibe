import transform from "../tab-panels-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { TabPanels } from "monday-ui-react-core";
    ${source}
  `;
}

describe("TabPanels component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`<TabPanels renderOnlyActiveTab />`),
    prependImport(`<TabPanels />`),
    "should remove 'renderOnlyActiveTab' prop"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<TabPanels renderOnlyActiveTab={true} />`),
    prependImport(`<TabPanels />`),
    "should remove 'renderOnlyActiveTab' prop"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      `
      <>
        <TabPanels renderOnlyActiveTab data-testid="tab1" />
        <TabPanels renderOnlyActiveTab data-testid="tab2" />
      </>`
    ),
    prependImport(`
      <>
        <TabPanels data-testid="tab1" />
        <TabPanels data-testid="tab2" />
      </>`),
    "should handle multiple instances of TabPanels each with 'renderOnlyActiveTab'"
  );

  defineInlineTest(
    transform,
    {},
    `<TabPanels renderOnlyActiveTab />`,
    `<TabPanels renderOnlyActiveTab />`,
    "should not change when no import even if 'renderOnlyActiveTab' prop exists"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<OtherComponent renderOnlyActiveTab />`),
    prependImport(`<OtherComponent renderOnlyActiveTab />`),
    "should not affect other components with 'renderOnlyActiveTab'"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { TabPanels } from "other-library";
      <TabPanels renderOnlyActiveTab />
    `,
    `
      import { TabPanels } from "other-library";
      <TabPanels renderOnlyActiveTab />
    `,
    "should not change when 'TabPanels' is not imported from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as TabPanels } from "other-library";
      <TabPanels renderOnlyActiveTab />
    `,
    `
      import { OtherComponent as TabPanels } from "other-library";
      <TabPanels renderOnlyActiveTab />
    `,
    "should not change when 'TabPanels' is an alias for another component that is not from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as TabPanels } from "monday-ui-react-core";
      <TabPanels renderOnlyActiveTab />
    `,
    `
      import { OtherComponent as TabPanels } from "monday-ui-react-core";
      <TabPanels renderOnlyActiveTab />
    `,
    "should not change when 'TabPanels' is an alias for another component from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { TabPanels as VibeComponent } from "monday-ui-react-core";
      <VibeComponent renderOnlyActiveTab />
    `,
    `
      import { TabPanels as VibeComponent } from "monday-ui-react-core";
      <VibeComponent />
    `,
    "should change when 'TabPanels' is imported with alias from vibe"
  );
});
