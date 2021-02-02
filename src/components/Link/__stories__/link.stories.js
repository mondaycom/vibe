import React from "react";
import { text, select } from "@storybook/addon-knobs";
import Link from "../Link";
import "./link-story.scss";
import DescriptionLabel from "../../storybook-helpers/description-label/description-label";
import StoryLine from "../../../StoryBookComponents/StoryLink/StoryLine";
import { FlexLayout } from "../../storybook-helpers";
import { LINK_TARGET } from "../LinkConsts";
import { withPerformance } from "storybook-addon-performance";

export const Sandbox = () => (
  <div className="width-35">
    <Link
      id="Knobs"
      href={text("href", "https://www.monday.com")}
      text={text("text", "Read More")}
      icon={text("icon", "fa fa-star")}
      iconPosition={select(
        "Icon Position",
        {
          Start: Link.position.START,
          End: Link.position.END
        },
        Link.position.START
      )}
      target={select(
        "target",
        {
          "New Window": Link.target.NEW_WINDOW,
          Parent: Link.target.PARENT,
          Self: Link.target.SELF,
          Top: Link.target.TOP
        },
        Link.target.NEW_WINDOW
      )}
    />
  </div>
);

export const States = () => {
  return (
    <div className="links-list">
      <DescriptionLabel>
        When adding links please make sure to pass a short but descriptive <code>ariaLabelDescription</code> prop in
        order to better support screen readers
      </DescriptionLabel>
      <FlexLayout>
        <StoryLine title="Start Icon">
          <Link
            id="normal"
            text="Read more"
            iconPosition={Link.position.START}
            href="https://www.monday.com"
            icon="fa fa-info"
            ariaLabelDescription="Read more about monday,con"
          />
        </StoryLine>
      </FlexLayout>
      <FlexLayout>
        <StoryLine title="End Icon">
          <Link
            id="end"
            text="Read more"
            iconPosition={Link.position.END}
            href="https://www.monday.com"
            icon="fa fa-link"
            ariaLabelDescription="Read more about monday,con"
          />
        </StoryLine>
      </FlexLayout>
      <FlexLayout>
        <StoryLine title="Icon only">
          <Link
            id="just-icon"
            href="https://www.monday.com"
            iconPosition={Link.position.START}
            icon="fa fa-star"
            ariaLabelDescription="Read more about monday,con"
          />
        </StoryLine>
      </FlexLayout>
    </div>
  );
};

export const RTLSupport = () => {
  return (
    <div>
      <FlexLayout>
        <StoryLine title="Start Icon" wrapperClassName="links-story-trl">
          <Link
            id="normal-rtl"
            text="קרא עוד"
            iconPosition={Link.position.START}
            href="https://www.monday.com"
            icon="fa fa-info"
            ariaLabelDescription="Read more about monday,con"
          />
        </StoryLine>
      </FlexLayout>
      <FlexLayout>
        <StoryLine title="End Icon" wrapperClassName="links-story-trl">
          <Link
            id="end-rtl"
            text="اقرأ أكثر"
            iconPosition={Link.position.END}
            href="https://www.monday.com"
            icon="fa fa-link"
            ariaLabelDescription="Read more about monday,con"
          />
        </StoryLine>
      </FlexLayout>
    </div>
  );
};

export default {
  title: "Components|Link",
  component: Link,
  decorators: [withPerformance]
};
