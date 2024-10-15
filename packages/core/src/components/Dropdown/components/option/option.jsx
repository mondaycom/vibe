import cx from "classnames";
import React, { useEffect } from "react";
import * as ReactSelectPackage from "react-select";
import Tooltip from "../../../Tooltip/Tooltip";
import { ChildrenContent } from "../ChildrenContent/ChildrenContent";
import styles from "./option.module.scss";

const { components } = ReactSelectPackage;

const Option = ({ Renderer, data, children, setFocusedOptionId, optionWrapperClassName, ...props }) => {
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

  useEffect(() => {
    if (props.isFocused) {
      setFocusedOptionId(props.innerProps.id);
    }
  }, [props.isFocused, props.innerProps.id, setFocusedOptionId]);

  return (
    <Tooltip {...tooltipProps} position="right">
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
