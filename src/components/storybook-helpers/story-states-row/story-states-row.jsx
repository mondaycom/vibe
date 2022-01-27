import React, { PureComponent } from "react";
import FlexLayout from "../flex-layout/flex-layout";
import ComponentStateDescription from "../component-state-description/ComponentStateDescription";

export default class StoryStateRow extends PureComponent {
  render() {
    const { children, centerize, componentDescription, componentClassName } = this.props;
    const childComp = componentDescription
      ? [<ComponentStateDescription key="description" title={componentDescription} />, children]
      : children;
    return (
      <FlexLayout centerize={centerize} direction="row" className={componentClassName}>
        {childComp}
      </FlexLayout>
    );
  }
}
