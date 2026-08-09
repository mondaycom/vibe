import transform from "../VirtualizedList-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `import { VirtualizedList } from "@vibe/core";\n${source}`;
}

describe("VirtualizedList component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport("<VirtualizedList items={items} getItemHeight={item => item.height} itemRenderer={renderer} />"),
    prependImport("<VirtualizedList items={items} getItemSize={item => item.height} itemRenderer={renderer} />"),
    "should rename getItemHeight prop to getItemSize"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      "<VirtualizedList items={items} getItemSize={item => item.height} onVerticalScrollbarVisiblityChange={cb} itemRenderer={renderer} />"
    ),
    prependImport(
      "<VirtualizedList items={items} getItemSize={item => item.height} onLayoutDirectionScrollbarVisibilityChange={cb} itemRenderer={renderer} />"
    ),
    "should rename onVerticalScrollbarVisiblityChange prop to onLayoutDirectionScrollbarVisibilityChange"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(
      "<VirtualizedList items={items} getItemHeight={item => item.height} onVerticalScrollbarVisiblityChange={cb} itemRenderer={renderer} />"
    ),
    prependImport(
      "<VirtualizedList items={items} getItemSize={item => item.height} onLayoutDirectionScrollbarVisibilityChange={cb} itemRenderer={renderer} />"
    ),
    "should rename both deprecated props at once"
  );

  defineInlineTest(
    transform,
    {},
    prependImport("<VirtualizedList items={items} getItemSize={item => item.height} itemRenderer={renderer} />"),
    prependImport("<VirtualizedList items={items} getItemSize={item => item.height} itemRenderer={renderer} />"),
    "should not change VirtualizedList without deprecated props"
  );

  defineInlineTest(
    transform,
    {},
    `import { VirtualizedList as VList } from "@vibe/core";
<VList items={items} getItemHeight={item => item.height} itemRenderer={renderer} />`,
    `import { VirtualizedList as VList } from "@vibe/core";
<VList items={items} getItemSize={item => item.height} itemRenderer={renderer} />`,
    "should work with aliased imports"
  );

  defineInlineTest(
    transform,
    {},
    "<VirtualizedList items={items} getItemHeight={item => item.height} itemRenderer={renderer} />",
    "<VirtualizedList items={items} getItemHeight={item => item.height} itemRenderer={renderer} />",
    "should not transform VirtualizedList without import from @vibe/core"
  );
});
