import transform from "../FieldLabel-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

describe("FieldLabel component migration", () => {
  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { FieldLabel } from "@vibe/core";
<FieldLabel labelText="Name" iconLabel="icon description" />
    `,
    `
import { FieldLabel } from "@vibe/core";
<FieldLabel labelText="Name" />
    `,
    "should remove iconLabel prop"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { FieldLabel } from "@vibe/core";
<FieldLabel labelText="Name" iconLabel={someVariable} icon={MyIcon} required />
    `,
    `
import { FieldLabel } from "@vibe/core";
<FieldLabel labelText="Name" icon={MyIcon} required />
    `,
    "should remove iconLabel prop leaving other props intact"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { FieldLabel } from "@vibe/core";
<FieldLabel labelText="Name" />
    `,
    `
import { FieldLabel } from "@vibe/core";
<FieldLabel labelText="Name" />
    `,
    "should not change FieldLabel without iconLabel prop"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { FieldLabel } from "another-library";
<FieldLabel labelText="Name" iconLabel="icon description" />
    `,
    `
import { FieldLabel } from "another-library";
<FieldLabel labelText="Name" iconLabel="icon description" />
    `,
    "should not change FieldLabel not imported from @vibe/core"
  );
});
