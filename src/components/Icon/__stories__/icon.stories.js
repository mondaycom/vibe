import React from "react";
import { iconsMetaData } from "monday-ui-style/src/Icons/iconsMetaData";
import Icon from "../Icon";
import DescriptionLabel from "../../storybook-helpers/description-label/description-label";
import FlexLayout from "../../storybook-helpers/flex-layout/flex-layout";
import * as AllIcons from "../Icons";
import "./IconStory.scss";
import Bolt from "../Icons/components/Bolt";
import CustomSvgIcon from "../CustomSvgIcon";
import Link from "../../Link/Link";

export const Icons = () => {
  return (
    <>
      <FlexLayout className="main-icon-story">
        <div className="single-icon-wrapper" style={{ color: "var(--primary-color)" }}>
          <Icon
            iconType={Icon.type.SVG}
            icon={Bolt}
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
  return (
    <section className="icons-story">
      <div className="icon-story-description">
        Each icon is exported as a react component under the{" "}
        <code>dist/icons</code> folder. Just import the icon by it's name as
        shown in the list below
        <br />
        <code>import Bolt from "monday-ui-react-core/dist/icons/Bolt";</code>
        <br />
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {iconsMetaData.map(icon => {
          const Component = AllIcons[icon.file.split(".")[0]];
          return <IconComponent {...icon} Component={Component} />;
        })}
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
