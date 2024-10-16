import transform from "../Enums-migration";
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
    "should update enum"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Button kind={Button.kinds.SECONDARY} size={Button.sizes.SMALL} />`),
    prependImport(`<Button kind="secondary" size="small" />`),
    "should update enum"
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
    "should not change component is not imported from vibe"
  );
});
