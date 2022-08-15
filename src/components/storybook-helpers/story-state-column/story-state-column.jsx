import cx from "classnames";
import React, { PureComponent } from "react";
import FlexLayout from "../flex-layout/flex-layout";
import DescriptionLabel from "../description-label/description-label";
import styles from "./story-state-column.module.scss";

export default class StoryStateColumn extends PureComponent {
  render() {
    const { title, children, description, ignore, centerize } = this.props;

    return (
      <FlexLayout
        className={cx(styles.storyStateColumn, "story-state-column", {
          [styles.ignore]: ignore,
          ["ignore"]: ignore
        })}
        direction="column"
        centerize={centerize}
      >
        <DescriptionLabel>{title}</DescriptionLabel>
        <FlexLayout centerize={true}>{children}</FlexLayout>
        <DescriptionLabel>{description}</DescriptionLabel>
      </FlexLayout>
    );
  }
}
