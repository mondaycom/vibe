import transform from "../Dropdown-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { Dropdown } from "monday-ui-react-core";
    ${source}
  `;
}

describe("Dropdown component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`<Dropdown size={Dropdown.size.MEDIUM} withReadOnlyStyle />`),
    prependImport(`<Dropdown size={Dropdown.sizes.MEDIUM} />`),
    "should update 'size' to 'sizes' and remove 'withReadOnlyStyle'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<div><Dropdown size={Dropdown.size.MEDIUM} withReadOnlyStyle/></div>`),
    prependImport(`<div><Dropdown size={Dropdown.sizes.MEDIUM} /></div>`),
    "should update 'size' to 'sizes' in a nested structure"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Dropdown size={Dropdown.size.MEDIUM} placeholder="test" />`),
    prependImport(`<Dropdown size={Dropdown.sizes.MEDIUM} placeholder="test" />`),
    "should update 'size' to 'sizes' while maintaining other props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      `
      <>
        <Dropdown size={Dropdown.size.MEDIUM} withReadOnlyStyle/>
        <Dropdown size={Dropdown.size.LARGE} />
      </>`
    ),
    prependImport(`
      <>
        <Dropdown size={Dropdown.sizes.MEDIUM} />
        <Dropdown size={Dropdown.sizes.LARGE} />
      </>`),
    "should handle multiple instances of Dropdown each with 'size'"
  );

  defineInlineTest(
    transform,
    {},
    `<Dropdown size={Dropdown.size.MEDIUM} />`,
    `<Dropdown size={Dropdown.size.MEDIUM} />`,
    "should not change when no import even if 'size' prop exists"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<OtherComponent size={Dropdown.size.MEDIUM} withReadOnlyStyle/>`),
    prependImport(`<OtherComponent size={Dropdown.size.MEDIUM} withReadOnlyStyle/>`),
    "should not affect other components with 'size'"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { Dropdown } from "other-library";
      <Dropdown size={Dropdown.size.MEDIUM} />
    `,
    `
      import { Dropdown } from "other-library";
      <Dropdown size={Dropdown.size.MEDIUM} />
    `,
    "should not change when 'Dropdown' is not imported from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as Dropdown } from "other-library";
      <Dropdown size={Dropdown.size.MEDIUM} />
    `,
    `
      import { OtherComponent as Dropdown } from "other-library";
      <Dropdown size={Dropdown.size.MEDIUM} />
    `,
    "should not change when 'Dropdown' is an alias for another component that is not from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as Dropdown } from "monday-ui-react-core";
      <Dropdown size={Dropdown.size.MEDIUM} />
    `,
    `
      import { OtherComponent as Dropdown } from "monday-ui-react-core";
      <Dropdown size={Dropdown.size.MEDIUM} />
    `,
    "should not change when 'Dropdown' is an alias for another component from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { Dropdown as VibeComponent } from "monday-ui-react-core";
      <VibeComponent size={Dropdown.size.MEDIUM} withReadOnlyStyle/>
    `,
    `
      import { Dropdown as VibeComponent } from "monday-ui-react-core";
      <VibeComponent size={Dropdown.sizes.MEDIUM} />
    `,
    "should change when 'Dropdown' is imported with alias from vibe"
  );
});
