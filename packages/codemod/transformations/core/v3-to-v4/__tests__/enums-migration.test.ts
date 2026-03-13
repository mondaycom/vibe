import transform from "../enums-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { Button } from "@vibe/core";
    ${source}
  `;
}

describe("Enums migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`<Button kind={Button.kinds.PRIMARY}/>`),
    prependImport(`<Button kind="primary"/>`),
    "should replace enum value with string literal"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Button kind={Button.kinds.SECONDARY} size={Button.sizes.SMALL} />`),
    prependImport(`<Button kind="secondary" size="small" />`),
    "should replace multiple enum values on the same element"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { Button } from "another-library";
      <Button size={Button.sizes.SMALL} />
    `,
    `
      import { Button } from "another-library";
      <Button size={Button.sizes.SMALL} />
    `,
    "should not change components not imported from @vibe/core"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Button kind="primary" />`),
    prependImport(`<Button kind="primary" />`),
    "should not modify props that are already string literals"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { Dropdown } from "@vibe/core";
      <Dropdown size={Dropdown.sizes.SMALL} />
    `,
    `
      import { Dropdown } from "@vibe/core";
      <Dropdown size="small" />
    `,
    "should replace enum values on other components"
  );
});
