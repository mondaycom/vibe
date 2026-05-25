import transform from "../Dialog-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `import { Dialog } from "@vibe/core";\n${source}`;
}

describe("Dialog component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport("const element = <Dialog enableNestedDialogLayer content={<div />}><button>Ref</button></Dialog>;"),
    prependImport("const element = <Dialog content={<div />}><button>Ref</button></Dialog>;"),
    "should remove enableNestedDialogLayer boolean prop"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      "const element = <Dialog enableNestedDialogLayer={true} content={<div />}><button>Ref</button></Dialog>;"
    ),
    prependImport("const element = <Dialog content={<div />}><button>Ref</button></Dialog>;"),
    "should remove enableNestedDialogLayer with explicit true value"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      "const element = <Dialog enableNestedDialogLayer={false} content={<div />}><button>Ref</button></Dialog>;"
    ),
    prependImport("const element = <Dialog content={<div />}><button>Ref</button></Dialog>;"),
    "should remove enableNestedDialogLayer with false value"
  );

  defineInlineTest(
    transform,
    {},
    prependImport("const element = <Dialog content={<div />}><button>Ref</button></Dialog>;"),
    prependImport("const element = <Dialog content={<div />}><button>Ref</button></Dialog>;"),
    "should not modify Dialog without enableNestedDialogLayer prop"
  );
});
