import transform from "../breadcrumb-item-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { BreadcrumbItem } from "monday-ui-react-core";
    ${source}
  `;
}

describe("BreadcrumbItem component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`<BreadcrumbItem isDisabled/>`),
    prependImport(`<BreadcrumbItem disabled/>`),
    "should update 'isDisabled' to 'disabled'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<BreadcrumbItem disabled />`),
    prependImport(`<BreadcrumbItem disabled />`),
    "should not change if BreadcrumbItem already uses new prop 'disabled'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<BreadcrumbItem isDisabled disabled />`),
    prependImport(`<BreadcrumbItem disabled />`),
    "should remove 'isDisabled' if both 'isDisabled' and 'disabled' are present"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<OtherComponent isDisabled />`),
    prependImport(`<OtherComponent isDisabled />`),
    "should not change other components even if they have similar props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<BreadcrumbItem isDisabled={true} text="test" />`),
    prependImport(`<BreadcrumbItem disabled={true} text="test" />`),
    "should correctly update props when mixed with other attributes"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<BreadcrumbItem isDisabled={false} />`),
    prependImport(`<BreadcrumbItem disabled={false} />`),
    "should correctly update props when set to false"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { BreadcrumbItem } from "other-library";
      <BreadcrumbItem isDisabled />
    `,
    `
      import { BreadcrumbItem } from "other-library";
      <BreadcrumbItem isDisabled />
    `,
    "should not change when 'BreadcrumbItem' is not imported from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as BreadcrumbItem } from "monday-ui-react-core";
      <BreadcrumbItem isDisabled />
    `,
    `
      import { OtherComponent as BreadcrumbItem } from "monday-ui-react-core";
      <BreadcrumbItem isDisabled />
    `,
    "should not change when 'BreadcrumbItem' is an alias for another component from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { BreadcrumbItem as VibeComponent } from "monday-ui-react-core";
      <VibeComponent isDisabled />
    `,
    `
      import { BreadcrumbItem as VibeComponent } from "monday-ui-react-core";
      <VibeComponent disabled />
    `,
    "should change when 'BreadcrumbItem' is imported with alias from vibe"
  );
});
