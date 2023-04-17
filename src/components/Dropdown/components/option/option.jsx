/* eslint-disable react/jsx-props-no-spreading */
import cx from "classnames";
import React from "react";
import { components } from "react-select";
import Tooltip from "../../../Tooltip/Tooltip";
import { ChildrenContent } from "../ChildrenContent/ChildrenContent";
import styles from "./option.module.scss";

const Option = ({ Renderer, data, children, optionWrapperClassName, ...props }) => {
  const tooltipProps = data.tooltipProps || {};
  return (
    <Tooltip {...tooltipProps} position={Tooltip.positions.RIGHT}>
      {Renderer ? (
        <components.Option {...props} className={cx(styles.optionReset, "dropdown-wrapper__option--reset", optionWrapperClassName)}>
          <Renderer {...data} />
        </components.Option>
      ) : (
        <components.Option {...props} className={cx(styles.optionReset, "dropdown-wrapper__option--reset", optionWrapperClassName)}>
          <ChildrenContent data={data}>{children}</ChildrenContent>
        </components.Option>
      )}
    </Tooltip>
  );
};

export default Option;
