import { defineInlineTest } from "jscodeshift/dist/testUtils";
import transform from "../Dialog-component-migration";

describe("Dialog component migration", () => {
  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { Dialog } from "@vibe/core";
<Dialog enableNestedDialogLayer content={<div>Content</div>}>
  <button>Trigger</button>
</Dialog>
    `,
    `
import { Dialog } from "@vibe/core";
<Dialog content={<div>Content</div>}>
  <button>Trigger</button>
</Dialog>
    `,
    "should remove enableNestedDialogLayer prop"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { Dialog } from "@vibe/core";
<Dialog enableNestedDialogLayer={true} content={<div>Content</div>}>
  <button>Trigger</button>
</Dialog>
    `,
    `
import { Dialog } from "@vibe/core";
<Dialog content={<div>Content</div>}>
  <button>Trigger</button>
</Dialog>
    `,
    "should remove enableNestedDialogLayer={true} prop"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { Dialog } from "@vibe/core";
<Dialog enableNestedDialogLayer={false} content={<div>Content</div>}>
  <button>Trigger</button>
</Dialog>
    `,
    `
import { Dialog } from "@vibe/core";
<Dialog content={<div>Content</div>}>
  <button>Trigger</button>
</Dialog>
    `,
    "should remove enableNestedDialogLayer={false} prop"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { Dialog } from "@vibe/core";
<Dialog content={<div>Content</div>}>
  <button>Trigger</button>
</Dialog>
    `,
    `
import { Dialog } from "@vibe/core";
<Dialog content={<div>Content</div>}>
  <button>Trigger</button>
</Dialog>
    `,
    "should not change Dialog without enableNestedDialogLayer prop"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { Dialog as MyDialog } from "@vibe/core";
<MyDialog enableNestedDialogLayer content={<div>Content</div>}>
  <button>Trigger</button>
</MyDialog>
    `,
    `
import { Dialog as MyDialog } from "@vibe/core";
<MyDialog content={<div>Content</div>}>
  <button>Trigger</button>
</MyDialog>
    `,
    "should handle aliased Dialog imports"
  );

  defineInlineTest(
    { default: transform, parser: "tsx" },
    {},
    `
import { Button } from "@vibe/core";
<Button enableNestedDialogLayer>Click</Button>
    `,
    `
import { Button } from "@vibe/core";
<Button enableNestedDialogLayer>Click</Button>
    `,
    "should not affect non-Dialog components"
  );
});
