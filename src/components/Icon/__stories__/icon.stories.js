import React, { useState } from "react";
import { iconsMetaData } from "monday-ui-style/src/Icons/iconsMetaData";
import Icon from "../Icon";
import DescriptionLabel from "../../storybook-helpers/description-label/description-label";
import FlexLayout from "../../storybook-helpers/flex-layout/flex-layout";
import * as AllIcons from "../Icons";
import "./IconStory.scss";
import DoubleCheck from "../Icons/components/DoubleCheck";
import CustomSvgIcon from "../CustomSvgIcon";
import Link from "../../Link/Link";
import SearchComponent from "../../Search/Search";
import Search from "../../Search/Search";

export const Icons = () => {
  return (
    <>
      <FlexLayout className="main-icon-story">
        <div
          className="single-icon-wrapper"
          style={{ color: "var(--positive-color)" }}
        >
          <Icon
            iconType={Icon.type.SVG}
            icon={DoubleCheck}
            iconLabel="my bolt svg icon"
            clickable
            iconSize={16}
          />
        </div>
        <DescriptionLabel>SVG Icon</DescriptionLabel>
      </FlexLayout>
      <FlexLayout className="main-icon-story">
        <div
          className="single-icon-wrapper"
          style={{ color: "var(--color-egg_yolk)" }}
        >
          <Icon
            iconType={Icon.type.ICON_FONT}
            iconLabel="my font awesome start icon"
            icon="fa fa-star"
            clickable
          />
        </div>
        <DescriptionLabel>Font Icon</DescriptionLabel>
      </FlexLayout>
      <FlexLayout className="main-icon-story">
        <div className="single-icon-wrapper">
          <CustomSvgIcon
            src="https://cdn.worldvectorlogo.com/logos/monday-1.svg"
            clickable
            className="icon-story-custom-icon"
          />
        </div>
        <DescriptionLabel className="icon-story-inline-style">
          Custom SVG Icon -{" "}
          <Link
            componentClassName={"icon-story-link"}
            href="https://github.com/gilbarbara/react-inlinesvg"
            text="react-inlinesvg"
          />
        </DescriptionLabel>
      </FlexLayout>
    </>
  );
};

export const IconsList = () => {
  const [filterData, setFilterData] = useState("");

  return (
    <section className="icons-story">
      <div className="icon-story-description">
        Each icon is exported as a react component under the{" "}
        <code>dist/icons</code> folder. Just import the icon by it's name as
        shown in the list below
        <br />
        <code>
          import DoubleCheck from "monday-ui-react-core/dist/icons/DoubleCheck";
        </code>
        <br />
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
            iconName="fa-search"
            secondaryIconName="fa-close"
            id="icons_search"
            placeholder="Search for icons"
            wrapperClassName="icon-story-search-component"
          />
        </div>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {iconsMetaData.reduce((acc, icon) => {
          if (
            !icon.description.toLowerCase().includes(filterData.toLowerCase())
          ) {
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
      <div style={{ width: "16px", height: "16px" }}>
        <Component size={14} />
      </div>
      <DescriptionLabel className="icon-story-name">{name}</DescriptionLabel>
    </FlexLayout>
  );
}

export default {
  title: "Components/Icon",
  component: Icon
};
