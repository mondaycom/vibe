import transform from "../Icon-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `import { Icon } from "@vibe/core";\n${source}`;
}

describe("Icon component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport('const element = <Icon icon={Home} iconLabel="Home" iconType="svg" iconSize={24} />;'),
    prependImport('const element = <Icon icon={Home} label="Home" type="svg" size={24} />;'),
    "should rename iconLabel, iconType, and iconSize props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport('const element = <Icon icon={Search} iconLabel="Search" />;'),
    prependImport('const element = <Icon icon={Search} label="Search" />;'),
    "should rename only iconLabel prop when other props are not present"
  );

  defineInlineTest(
    transform,
    {},
    prependImport('const element = <Icon icon={Close} iconType="font" iconSize="16px" />;'),
    prependImport('const element = <Icon icon={Close} type="font" size="16px" />;'),
    "should rename iconType and iconSize props when iconLabel is not present"
  );

  defineInlineTest(
    transform,
    {},
    prependImport("const element = <Icon icon={MyIcon} />;"),
    prependImport("const element = <Icon icon={MyIcon} />;"),
    "should not change Icon without deprecated props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`
      const element = (
        <Icon
          icon={StarFilled}
          iconLabel={dynamicLabel}
          iconType="svg"
          iconSize={size === "small" ? 16 : 24}
          className="my-icon"
        />
      );
    `),
    prependImport(`
      const element = (
        <Icon
          icon={StarFilled}
          label={dynamicLabel}
          type="svg"
          size={size === "small" ? 16 : 24}
          className="my-icon"
        />
      );
    `),
    "should handle complex prop expressions"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`
      function MyComponent() {
        return (
          <div>
            <Icon icon={Home} iconLabel="Home" />
            <Icon icon={Settings} iconType="font" iconSize={20} />
          </div>
        );
      }
    `),
    prependImport(`
      function MyComponent() {
        return (
          (<div>
            <Icon icon={Home} label="Home" />
            <Icon icon={Settings} type="font" size={20} />
          </div>)
        );
      }
    `),
    "should handle multiple Icon components"
  );

  defineInlineTest(
    transform,
    {},
    `import { Icon as VibeIcon } from "@vibe/core";
     const element = <VibeIcon icon={Home} iconLabel="Home" iconType="svg" />;`,
    `import { Icon as VibeIcon } from "@vibe/core";
     const element = <VibeIcon icon={Home} label="Home" type="svg" />;`,
    "should work with aliased imports"
  );

  defineInlineTest(
    transform,
    {},
    'const element = <Icon icon={Home} iconLabel="Home" />;',
    'const element = <Icon icon={Home} iconLabel="Home" />;',
    "should not transform Icon without import from @vibe/core"
  );
});
