import { defineInlineTest } from "jscodeshift/src/testUtils";
import transform from "../Search-component-import-migration";

describe("SearchComponent component migration", () => {
  defineInlineTest(
    transform,
    {},
    `
        import { SearchComponent } from "monday-ui-react-core";
        <SearchComponent autoFocus placeholder="Search imported regular" />
      `,
    `
        import { Search } from "monday-ui-react-core";
        <Search autoFocus placeholder="Search imported regular" />
      `,
    "should update import and update self-closing jsx accordingly"
  );

  defineInlineTest(
    transform,
    {},
    `
        import { SearchComponent } from "monday-ui-react-core";
        <SearchComponent autoFocus placeholder="Search imported regular"></SearchComponent>
      `,
    `
        import { Search } from "monday-ui-react-core";
        <Search autoFocus placeholder="Search imported regular"></Search>
      `,
    "should update import and update jsx accordingly"
  );

  defineInlineTest(
    transform,
    {},
    `
        import { SearchComponent } from "monday-ui-react-core";
        <>
          <SearchComponent autoFocus placeholder="Search imported regular" />
          <SearchComponent />
          <SearchComponent debounceRate={300} />
        </>
      `,
    `
        import { Search } from "monday-ui-react-core";
        <>
          <Search autoFocus placeholder="Search imported regular" />
          <Search />
          <Search debounceRate={300} />
        </>
      `,
    "should update import and update multiple jsx usages"
  );

  defineInlineTest(
    transform,
    {},
    `
        import { SearchComponent as SC } from "monday-ui-react-core";
        <SC autoFocus placeholder="Search as alias" />
      `,
    `
        import { Search as SC } from "monday-ui-react-core";
        <SC autoFocus placeholder="Search as alias" />
      `,
    "should update import but not update jsx when component is imported with an alias"
  );

  defineInlineTest(
    transform,
    {},
    `
        import { SearchComponent as SC } from "monday-ui-react-core";
        <>
          <SC autoFocus placeholder="Search as alias" />
          <SC />
          <SC debounceRate={300} />
        </>
      `,
    `
        import { Search as SC } from "monday-ui-react-core";
        <>
          <SC autoFocus placeholder="Search as alias" />
          <SC />
          <SC debounceRate={300} />
        </>
      `,
    "should update import but not update any jsx usage when component is imported with an alias"
  );

  defineInlineTest(
    transform,
    {},
    `
        import { Search, SearchComponent } from "monday-ui-react-core";
        <SearchComponent autoFocus placeholder="Search imported regular" />
      `,
    `
        import { Search } from "monday-ui-react-core";
        <SearchComponent autoFocus placeholder="Search imported regular" />
      `,
    "should remove 'SearchComponent' when both 'Search' and 'SearchComponent' are imported from core"
  );

  defineInlineTest(
    transform,
    {},
    `
        import { Search } from "other-component-library";
        import { SearchComponent } from "monday-ui-react-core";
        <SearchComponent autoFocus placeholder="Search imported regular" />
      `,
    `
        import { Search } from "other-component-library";
        import { Search as SearchComponent } from "monday-ui-react-core";
        <SearchComponent autoFocus placeholder="Search imported regular" />
      `,
    "should update 'SearchComponent' with alias when both 'Search' and 'SearchComponent' are imported, and 'Search' is not imported from core"
  );

  defineInlineTest(
    transform,
    {},
    `
        import { OtherComponent } from "monday-ui-react-core";
        <OtherComponent autoFocus placeholder="I'm not Search" />
      `,
    `
        import { OtherComponent } from "monday-ui-react-core";
        <OtherComponent autoFocus placeholder="I'm not Search" />
      `,
    "should not change unrelated imports"
  );

  defineInlineTest(
    transform,
    {},
    `
        import { OtherComponent as SearchComponent } from "monday-ui-react-core";
        <SearchComponent autoFocus placeholder="I'm not Search" />
      `,
    `
        import { OtherComponent as SearchComponent } from "monday-ui-react-core";
        <SearchComponent autoFocus placeholder="I'm not Search" />
      `,
    "should not change unrelated imports that are aliased as SearchComponent"
  );

  defineInlineTest(
    transform,
    {},
    `
        import { Search as SearchComponent } from "monday-ui-react-core/next";
        <SearchComponent autoFocus placeholder="I'm Search" />
      `,
    `
        import { Search as SearchComponent } from "monday-ui-react-core/next";
        <SearchComponent autoFocus placeholder="I'm Search" />
      `,
    "should not change Search from core/next import that is aliased as SearchComponent"
  );

  defineInlineTest(
    transform,
    {},
    `
        import { SearchComponent } from "monday-ui-react-core";
        <SearchComponent autoFocus placeholder="I'm SearchComponent" size={SearchComponent.sizes.other.SMALL} />
      `,
    `
        import { Search } from "monday-ui-react-core";
        <Search autoFocus placeholder="I'm SearchComponent" size={Search.sizes.other.SMALL} />
      `,
    "should change props that uses the namespace of 'SearchComponent' to 'Search'"
  );
});
