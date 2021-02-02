import React, { PureComponent } from "react";
import cx from "classnames";
import FlexLayout from "../flex-layout/flex-layout";
import DescriptionLabel from "../description-label/description-label";
import "./story-state-column.scss";

export default class StoryStateColumn extends PureComponent {
  render() {
    const { title, children, description, ignore, centerize } = this.props;

    return (
      <FlexLayout className={cx("story-state-column", { ignore })} direction="column" centerize={centerize}>
        <DescriptionLabel>{title}</DescriptionLabel>
        <FlexLayout centerize={true}>{children}</FlexLayout>
        <DescriptionLabel>{description}</DescriptionLabel>
      </FlexLayout>
    );
  }
}
