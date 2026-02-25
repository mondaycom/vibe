import transform from "../CustomSvgIcon-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

describe("CustomSvgIcon component migration", () => {
  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { CustomSvgIcon } from "@vibe/icon";
<CustomSvgIcon src="/icon.svg" onClick={handleClick} />
    `,
    `
import { CustomSvgIcon } from "@vibe/icon";
<CustomSvgIcon src="/icon.svg" />
    `,
    "should remove onClick prop from @vibe/icon import"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { CustomSvgIcon } from "@vibe/icon";
<CustomSvgIcon src="/icon.svg" clickable={true} />
    `,
    `
import { CustomSvgIcon } from "@vibe/icon";
<CustomSvgIcon src="/icon.svg" />
    `,
    "should remove clickable prop"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { CustomSvgIcon } from "@vibe/icon";
<CustomSvgIcon src="/icon.svg" onClick={handleClick} clickable ariaLabel="icon" />
    `,
    `
import { CustomSvgIcon } from "@vibe/icon";
<CustomSvgIcon src="/icon.svg" ariaLabel="icon" />
    `,
    "should remove both onClick and clickable, keeping other props"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { CustomSvgIcon } from "@vibe/icon";
<CustomSvgIcon src="/icon.svg" ariaLabel="icon" />
    `,
    `
import { CustomSvgIcon } from "@vibe/icon";
<CustomSvgIcon src="/icon.svg" ariaLabel="icon" />
    `,
    "should not change CustomSvgIcon without onClick or clickable"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { CustomSvgIcon } from "another-library";
<CustomSvgIcon src="/icon.svg" onClick={handleClick} clickable />
    `,
    `
import { CustomSvgIcon } from "another-library";
<CustomSvgIcon src="/icon.svg" onClick={handleClick} clickable />
    `,
    "should not change CustomSvgIcon not imported from @vibe/icon or @vibe/core"
  );
});
