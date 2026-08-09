import transform from "../Flex-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

describe("Flex component migration", () => {
  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { Flex } from "@vibe/core";
<Flex justify="stretch" />
    `,
    `
import { Flex } from "@vibe/core";
<Flex />
    `,
    "should remove justify prop when value is stretch"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { Flex, FlexJustify } from "@vibe/core";
<Flex justify={FlexJustify.STRETCH} />
    `,
    `
import { Flex, FlexJustify } from "@vibe/core";
<Flex />
    `,
    "should remove justify prop when value is FlexJustify.STRETCH"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { Flex } from "@vibe/core";
<Flex justify="start" />
    `,
    `
import { Flex } from "@vibe/core";
<Flex justify="start" />
    `,
    "should not change justify prop for valid values"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { Flex } from "@vibe/core";
<Flex justify="stretch" gap="medium" />
    `,
    `
import { Flex } from "@vibe/core";
<Flex gap="medium" />
    `,
    "should remove only the justify prop when value is stretch, leaving other props intact"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { Flex } from "another-library";
<Flex justify="stretch" />
    `,
    `
import { Flex } from "another-library";
<Flex justify="stretch" />
    `,
    "should not change Flex not imported from @vibe/core"
  );
});
