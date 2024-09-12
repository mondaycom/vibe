import transform from "../DialogContent-container-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { DialogContentContainer } from "monday-ui-react-core";
    ${source}
  `;
}

describe("DialogContentContainer component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`<DialogContentContainer size={DialogContentContainer.sizes.MEDIUM} />`),
    prependImport(`<DialogContentContainer size={DialogContentContainer.sizes.SMALL} />`),
    "should update medium to small"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<div><DialogContentContainer size={DialogContentContainer.sizes.MEDIUM} /></div>`),
    prependImport(`<div><DialogContentContainer size={DialogContentContainer.sizes.SMALL} /></div>`),
    "should update medium' to small in a nested structure"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<DialogContentContainer size={DialogContentContainer.sizes.MEDIUM} id="test" />`),
    prependImport(`<DialogContentContainer size={DialogContentContainer.sizes.SMALL} id="test" />`),
    "should update medium' to small' while maintaining other props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      `
      <>
        <DialogContentContainer size={DialogContentContainer.sizes.MEDIUM} />
        <DialogContentContainer size={DialogContentContainer.sizes.LARGE}/>
      </>`
    ),
    prependImport(`
      <>
        <DialogContentContainer size={DialogContentContainer.sizes.SMALL} />
        <DialogContentContainer size={DialogContentContainer.sizes.LARGE}/>
      </>`),
    "should handle multiple instances of DialogContentContainer"
  );

  defineInlineTest(
    transform,
    {},
    `<DialogContentContainer size={DialogContentContainer.sizes.MEDIUM} />`,
    `<DialogContentContainer size={DialogContentContainer.sizes.MEDIUM} />`,
    "should not change when no import even if 'border' prop exists"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<OtherComponent size={DialogContentContainer.sizes.MEDIUM} />`),
    prependImport(`<OtherComponent size={DialogContentContainer.sizes.MEDIUM} />`),
    "should not affect other components with border={DialogContentContainer.borders.DEFAULT}"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { DialogContentContainer } from "other-library";
      <DialogContentContainer size={DialogContentContainer.sizes.MEDIUM} />
    `,
    `
      import { DialogContentContainer } from "other-library";
      <DialogContentContainer size={DialogContentContainer.sizes.MEDIUM} />
    `,
    "should not change when 'DialogContentContainer' is not imported from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as DialogContentContainer } from "other-library";
       <DialogContentContainer size={DialogContentContainer.sizes.MEDIUM} />
    `,
    `
      import { OtherComponent as DialogContentContainer } from "other-library";
       <DialogContentContainer size={DialogContentContainer.sizes.MEDIUM} />
    `,
    "should not change when 'DialogContentContainer' is an alias for another component that is not from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as DialogContentContainer } from "monday-ui-react-core";
      <DialogContentContainer size={DialogContentContainer.sizes.MEDIUM} />
    `,
    `
      import { OtherComponent as DialogContentContainer } from "monday-ui-react-core";
      <DialogContentContainer size={DialogContentContainer.sizes.MEDIUM} />
    `,
    "should not change when 'DialogContentContainer' is an alias for another component from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { DialogContentContainer as VibeComponent } from "monday-ui-react-core";
      <VibeComponent size={DialogContentContainer.sizes.MEDIUM} />
    `,
    `
      import { DialogContentContainer as VibeComponent } from "monday-ui-react-core";
      <VibeComponent size={DialogContentContainer.sizes.SMALL} />
    `,
    "should change when 'DialogContentContainer' is imported with alias from vibe"
  );
});
