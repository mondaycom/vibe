import React, { useState } from "react";
import { iconsMetaData } from "monday-ui-style/src/Icons/iconsMetaData";
import SearchComponent from "../../Search/Search";
import * as AllIcons from "../Icons";
import FlexLayout from "../../storybook-helpers/flex-layout/flex-layout";
import DescriptionLabel from "../../storybook-helpers/description-label/description-label";

export const IconsList = () => {
  const [filterData, setFilterData] = useState("");

  return (
    <section className="icons-story">
      <div className="icon-story-description">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "16px 0"
          }}
        >
          <SearchComponent
            value={filterData}
            onChange={setFilterData}
            id="icons_search"
            placeholder="Search for icons"
            wrapperClassName="icon-story-search-component"
          />
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {iconsMetaData.reduce((acc, icon) => {
          if (!icon.tags.toLowerCase().includes(filterData.toLowerCase())) {
            return acc;
          }
          const Component = AllIcons[icon.file.split(".")[0]];
          acc.push(<IconComponent {...icon} Component={Component} />);
          return acc;
        }, [])}
      </div>
    </section>
  );
};

function IconComponent({ name, Component }) {
  return (
    <FlexLayout className="icon-story-component">
      <div style={{ width: "26px", height: "26px" }}>
        <Component size="26" />
      </div>
      <DescriptionLabel className="icon-story-name">{name}</DescriptionLabel>
    </FlexLayout>
  );
}
