import React, { PureComponent } from "react";
import FlexLayout from "../flex-layout/flex-layout";
import {ComponentStateDescription} from "../index";

export default class StoryStateRow extends PureComponent {
  render() {
    const { children, centerize, componentDescription } = this.props;
    const childComp = componentDescription ? [<ComponentStateDescription title={componentDescription} />, children] : children;
    return (
      <FlexLayout centerize={centerize} direction="row">
        {childComp}
      </FlexLayout>
    );
  }
}
