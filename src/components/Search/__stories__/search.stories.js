import React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, number, select } from "@storybook/addon-knobs";
import Search from "../Search";
import SearchStoryLine from "./SearchStoryLine";
import { FlexLayout } from "../../storybook-helpers";

export const Sandbox = () => {
  return (
    <>
      <div style={{ width: "35%", margin: "0 auto" }}>
        <Search
          inputAriaLabel={text("inputAriaLabel", "Search for content")}
          autoFocus={boolean("autoFocus", true)}
          placeholder={text("placeholder", "default placeholder")}
          debounceRate={number("debounceRate", 0)}
          onChange={action("onChange", value => console.log(value))}
          value={text("value", "")}
          iconName={text("Font Awesome icon name", "fa-search")}
          secondaryIconName="fa-close"
          validation={select("validation", {
            None: null,
            Error: { status: "error" },
            Success: { status: "success" }
          })}
          id="Knobs"
          clearOnIconClick={boolean("clearOnIconClick", true)}
          disabled={boolean("disabled", false)}
          size={select("size", { s: "s", md: "md", l: "l" })}
        />
      </div>
    </>
  );
};

export const Sizes = () => {
  return (
    <>
      <FlexLayout>
        <SearchStoryLine title="Small - 32px" size="s">
          <Search
            className=""
            inputAriaLabel="Search for content"
            iconName="fa-search"
            secondaryIconName="fa-close"
            id="size_1"
            placeholder="Placeholder text goes here"
            size="s"
            disabled={false}
            value=""
          />
        </SearchStoryLine>
      </FlexLayout>
      <FlexLayout>
        <SearchStoryLine title="Medium - 40px" size="md">
          <Search
            className=""
            inputAriaLabel="Search for content"
            iconName="fa-search"
            secondaryIconName="fa-close"
            id="size_2"
            placeholder="Placeholder text goes here"
            size="md"
            disabled={false}
            value=""
          />
        </SearchStoryLine>
      </FlexLayout>
      <FlexLayout>
        <SearchStoryLine title="Large - 48 px" size="l">
          <Search
            className=""
            inputAriaLabel="Search for content"
            iconName="fa-search"
            secondaryIconName="fa-close"
            id="size_3"
            placeholder="Placeholder text goes here"
            size="l"
            disabled={false}
            value=""
          />
        </SearchStoryLine>
      </FlexLayout>
    </>
  );
};

export const States = () => {
  return (
    <>
      <FlexLayout>
        <SearchStoryLine title="Empty">
          <Search
            className=""
            inputAriaLabel="Search for content"
            iconName="fa-search"
            secondaryIconName="fa-close"
            id="states_1"
            placeholder="Placeholder text goes here"
            size="md"
            disabled={false}
            value=""
          />
        </SearchStoryLine>
      </FlexLayout>
      <FlexLayout>
        <SearchStoryLine title="Hover">
          <Search
            className="input-component__input--hover"
            inputAriaLabel="Search for content"
            iconName="fa-search"
            secondaryIconName="fa-close"
            id="states_1"
            placeholder="Placeholder text goes here"
            size="md"
            disabled={false}
            value=""
          />
        </SearchStoryLine>
      </FlexLayout>
      <FlexLayout>
        <SearchStoryLine title="Filled">
          <Search
            inputAriaLabel="Search for content"
            iconName="fa-search"
            secondaryIconName="fa-close"
            id="states_1"
            placeholder="Placeholder text goes here"
            size="md"
            disabled={false}
            value="Search Value"
          />
        </SearchStoryLine>
      </FlexLayout>
      <FlexLayout>
        <SearchStoryLine title="Focused">
          <Search
            className="input-component__input--active"
            inputAriaLabel="Search for content"
            iconName="fa-search"
            secondaryIconName="fa-close"
            id="states_1"
            placeholder="Placeholder text goes here"
            size="md"
            disabled={false}
            value=""
          />
        </SearchStoryLine>
      </FlexLayout>
      <FlexLayout>
        <SearchStoryLine title="Disabled" disabled>
          <Search
            className="input-component__input--active"
            inputAriaLabel="Search for content"
            iconName="fa-search"
            secondaryIconName="fa-close"
            id="states_1"
            placeholder="Placeholder text goes here"
            size="md"
            disabled
            value=""
          />
        </SearchStoryLine>
      </FlexLayout>
    </>
  );
};

export default {
  title: "Components/Search",
  component: Search
};
