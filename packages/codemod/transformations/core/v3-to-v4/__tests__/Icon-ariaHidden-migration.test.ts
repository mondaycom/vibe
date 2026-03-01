import transform from "../Icon-ariaHidden-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

describe("Icon ariaHidden migration", () => {
  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { Icon } from "@vibe/core";
<Icon icon={Bolt} label="my icon" />
    `,
    `
import { Icon } from "@vibe/core";
<Icon icon={Bolt} label="my icon" ariaHidden={false} />
    `,
    "should add ariaHidden={false} when label exists but ariaHidden does not"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { Icon } from "@vibe/core";
<Icon icon={Bolt} label="my icon" ariaHidden={false} />
    `,
    `
import { Icon } from "@vibe/core";
<Icon icon={Bolt} label="my icon" ariaHidden={false} />
    `,
    "should not change when ariaHidden already exists"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { Icon } from "@vibe/core";
<Icon icon={Bolt} label="my icon" ariaHidden={true} />
    `,
    `
import { Icon } from "@vibe/core";
<Icon icon={Bolt} label="my icon" ariaHidden={true} />
    `,
    "should not change when ariaHidden is true"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { Icon } from "@vibe/core";
<Icon icon={Bolt} />
    `,
    `
import { Icon } from "@vibe/core";
<Icon icon={Bolt} />
    `,
    "should not change when there is no label"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { Icon } from "@vibe/core";
<Icon icon={Bolt} label={dynamicLabel} />
    `,
    `
import { Icon } from "@vibe/core";
<Icon icon={Bolt} label={dynamicLabel} ariaHidden={false} />
    `,
    "should add ariaHidden={false} with dynamic label"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { Icon } from "@vibe/core";
<><Icon icon={Bolt} label="first" />
<Icon icon={Check} label="second" />
<Icon icon={Close} /></>
    `,
    `
import { Icon } from "@vibe/core";
<><Icon icon={Bolt} label="first" ariaHidden={false} />
<Icon icon={Check} label="second" ariaHidden={false} />
<Icon icon={Close} /></>
    `,
    "should handle multiple icons correctly"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { Icon as VibeIcon } from "@vibe/core";
<VibeIcon icon={Bolt} label="aliased icon" />
    `,
    `
import { Icon as VibeIcon } from "@vibe/core";
<VibeIcon icon={Bolt} label="aliased icon" ariaHidden={false} />
    `,
    "should handle aliased imports"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { Icon } from "another-library";
<Icon icon={Bolt} label="not vibe" />
    `,
    `
import { Icon } from "another-library";
<Icon icon={Bolt} label="not vibe" />
    `,
    "should not change Icon not imported from @vibe/core"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { CustomSvgIcon } from "@vibe/core";
<CustomSvgIcon src="/icon.svg" ariaLabel="my svg icon" />
    `,
    `
import { CustomSvgIcon } from "@vibe/core";
<CustomSvgIcon src="/icon.svg" ariaLabel="my svg icon" ariaHidden={false} />
    `,
    "should add ariaHidden={false} to CustomSvgIcon with ariaLabel"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { CustomSvgIcon } from "@vibe/core";
<CustomSvgIcon src="/icon.svg" />
    `,
    `
import { CustomSvgIcon } from "@vibe/core";
<CustomSvgIcon src="/icon.svg" />
    `,
    "should not change CustomSvgIcon without ariaLabel"
  );
});
