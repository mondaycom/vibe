import transform from "../link-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `
    import { Link } from "monday-ui-react-core";
    ${source}
  `;
}

describe("Link component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`<Link target={Link.target.SELF} componentClassName="class" />`),
    prependImport(`<Link target={Link.targets.SELF} className="class" />`),
    "should update 'target' to 'targets' and 'componentClassName' to 'className'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<div><Link target={Link.target.SELF} componentClassName="old-class" /></div>`),
    prependImport(`<div><Link target={Link.targets.SELF} className="old-class" /></div>`),
    "should update 'target' to 'targets' and 'componentClassName' to 'className' in a nested structure"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Link target={Link.target.SELF} componentClassName="old-class" text="test" />`),
    prependImport(`<Link target={Link.targets.SELF} className="old-class" text="test" />`),
    "should update 'target' to 'targets' and 'componentClassName' to 'className' while maintaining other props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      `
      <>
        <Link target={Link.target.SELF} componentClassName="old-class" />
        <Link componentClassName="another-class" />
      </>`
    ),
    prependImport(`
      <>
        <Link target={Link.targets.SELF} className="old-class" />
        <Link className="another-class" />
      </>`),
    "should handle multiple instances of Link each with 'componentClassName'"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Link componentClassName="class-one" className="class-two" />`),
    prependImport(`<Link componentClassName="class-one" className="class-two" />`),
    "should not change when when both 'componentClassName' and 'className' props exist with different literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Link componentClassName={styles.something} className="class-two" />`),
    prependImport(`<Link componentClassName={styles.something} className="class-two" />`),
    "should not change when when both 'componentClassName' and 'className' props exist with different complex and literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Link componentClassName={styles.classOne} className={styles.classTwo} />`),
    prependImport(`<Link componentClassName={styles.classOne} className={styles.classTwo} />`),
    "should not change when when both 'componentClassName' and 'className' props exist with different complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Link componentClassName={styles.classOne} className={styles.classOne} />`),
    prependImport(`<Link className={styles.classOne} />`),
    "should remove 'componentClassName' when when both 'componentClassName' and 'className' props exist with same complex values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Link componentClassName="class-one" className="class-one" />`),
    prependImport(`<Link className="class-one" />`),
    "should remove 'componentClassName' when when both 'componentClassName' and 'className' props exist with same literal values"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<Link componentClassName={"class-one"} className="class-one" />`),
    prependImport(`<Link className="class-one" />`),
    "should remove 'componentClassName' when when both 'componentClassName' and 'className' props exist with same literal values while one is inside an expression"
  );

  defineInlineTest(
    transform,
    {},
    `<Link componentClassName="old-class" />`,
    `<Link componentClassName="old-class" />`,
    "should not change when no import even if 'componentClassName' prop exists"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`<OtherComponent componentClassName="old-class" />`),
    prependImport(`<OtherComponent componentClassName="old-class" />`),
    "should not affect other components with 'componentClassName'"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { Link } from "other-library";
      <Link componentClassName="old-class" />
    `,
    `
      import { Link } from "other-library";
      <Link componentClassName="old-class" />
    `,
    "should not change when 'Link' is not imported from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as Link } from "other-library";
      <Link componentClassName="old-class" />
    `,
    `
      import { OtherComponent as Link } from "other-library";
      <Link componentClassName="old-class" />
    `,
    "should not change when 'Link' is an alias for another component that is not from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { OtherComponent as Link } from "monday-ui-react-core";
      <Link componentClassName="old-class" />
    `,
    `
      import { OtherComponent as Link } from "monday-ui-react-core";
      <Link componentClassName="old-class" />
    `,
    "should not change when 'Link' is an alias for another component from vibe"
  );

  defineInlineTest(
    transform,
    {},
    `
      import { Link as VibeComponent } from "monday-ui-react-core";
      <VibeComponent componentClassName="old-class" />
    `,
    `
      import { Link as VibeComponent } from "monday-ui-react-core";
      <VibeComponent className="old-class" />
    `,
    "should change when 'Link' is imported with alias from vibe"
  );
});
