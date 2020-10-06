import React, { PureComponent } from "react";
import FlexLayout from "../flex-layout/flex-layout";

export default class StoryStateRow extends PureComponent {
  render() {
    const { children, centerize } = this.props;
    return (
      <FlexLayout centerize={centerize} direction="row">
        {children}
      </FlexLayout>
    );
  }
}
