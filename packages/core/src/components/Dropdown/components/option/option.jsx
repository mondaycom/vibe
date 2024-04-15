import cx from "classnames";
import React from "react";
import { components } from "react-select";
import Tooltip from "../../../Tooltip/Tooltip";
import { ChildrenContent } from "../ChildrenContent/ChildrenContent";
import styles from "./option.module.scss";

const Option = ({ Renderer, data, children, optionWrapperClassName, ...props }) => {
  const tooltipProps = data?.tooltipProps || {};
  const rendererProps = {
    children,
    data,
    ...props,
    innerProps: {
      ...props.innerProps,
      role: "option",
      "aria-selected": props.isSelected
    }
  };

  return (
    <Tooltip {...tooltipProps} position={Tooltip.positions.RIGHT}>
      {Renderer ? (
        <components.Option {...rendererProps} className={cx(styles.optionReset, optionWrapperClassName)}>
          <Renderer {...rendererProps} {...data} /> {/* Spreading data here for a backward compatability */}
        </components.Option>
      ) : (
        <components.Option {...rendererProps} className={cx(styles.optionReset, optionWrapperClassName)}>
          <ChildrenContent data={data}>{children}</ChildrenContent>
        </components.Option>
      )}
    </Tooltip>
  );
};

export default Option;
