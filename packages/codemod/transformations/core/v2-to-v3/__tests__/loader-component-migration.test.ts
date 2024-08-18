import transform from "../loader-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { Loader } from "monday-ui-react-core";
    ${source}
  `;
}

describe("Loader component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`<Loader svgClassName="old-class" />`),
    prependImport(`<Loader className="old-class" />`),
    "should update 'svgClassName' to 'className'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<div><Loader svgClassName="old-class" /></div>`),
    prependImport(`<div><Loader className="old-class" /></div>`),
    "should update 'svgClassName' to 'className' in a nested structure"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Loader svgClassName="old-class" LoaderColor="dark" />`),
    prependImport(`<Loader className="old-class" LoaderColor="dark" />`),
    "should update 'svgClassName' to 'className' while maintaining other props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      `
      <>
        <Loader svgClassName="old-class" />
        <Loader svgClassName="another-class" />
      </>`
    ),
    prependImport(`
      <>
        <Loader className="old-class" />
        <Loader className="another-class" />
      </>`),
    "should handle multiple instances of Loader each with 'svgClassName'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Loader svgClassName="class-one" className="class-two" />`),
    prependImport(`<Loader svgClassName="class-one" className="class-two" />`),
    "should not change when when both 'svgClassName' and 'className' props exist with different literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Loader svgClassName={styles.something} className="class-two" />`),
    prependImport(`<Loader svgClassName={styles.something} className="class-two" />`),
    "should not change when when both 'svgClassName' and 'className' props exist with different complex and literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Loader svgClassName={styles.classOne} className={styles.classTwo} />`),
    prependImport(`<Loader svgClassName={styles.classOne} className={styles.classTwo} />`),
    "should not change when when both 'svgClassName' and 'className' props exist with different complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Loader svgClassName={styles.classOne} className={styles.classOne} />`),
    prependImport(`<Loader className={styles.classOne} />`),
    "should remove 'svgClassName' when when both 'svgClassName' and 'className' props exist with same complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Loader svgClassName="class-one" className="class-one" />`),
    prependImport(`<Loader className="class-one" />`),
    "should remove 'svgClassName' when when both 'svgClassName' and 'className' props exist with same literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Loader svgClassName={"class-one"} className="class-one" />`),
    prependImport(`<Loader className="class-one" />`),
    "should remove 'svgClassName' when when both 'svgClassName' and 'className' props exist with same literal values while one is inside an expression"
  );

  defineInlineTest(
    transform,
    {},
    `<Loader svgClassName="old-class" />`,
    `<Loader svgClassName="old-class" />`,
    "should not change when no import even if 'svgClassName' prop exists"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<OtherComponent svgClassName="old-class" />`),
    prependImport(`<OtherComponent svgClassName="old-class" />`),
    "should not affect other components with 'svgClassName'"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { Loader } from "other-library";
      <Loader svgClassName="old-class" />
    `,
    `
      import { Loader } from "other-library";
      <Loader svgClassName="old-class" />
    `,
    "should not change when 'Loader' is not imported from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as Loader } from "other-library";
      <Loader svgClassName="old-class" />
    `,
    `
      import { OtherComponent as Loader } from "other-library";
      <Loader svgClassName="old-class" />
    `,
    "should not change when 'Loader' is an alias for another component that is not from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as Loader } from "monday-ui-react-core";
      <Loader svgClassName="old-class" />
    `,
    `
      import { OtherComponent as Loader } from "monday-ui-react-core";
      <Loader svgClassName="old-class" />
    `,
    "should not change when 'Loader' is an alias for another component from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { Loader as VibeComponent } from "monday-ui-react-core";
      <VibeComponent svgClassName="old-class" />
    `,
    `
      import { Loader as VibeComponent } from "monday-ui-react-core";
      <VibeComponent className="old-class" />
    `,
    "should change when 'Loader' is imported with alias from vibe"
  );
});
