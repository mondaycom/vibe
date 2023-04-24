/* eslint-disable react/jsx-props-no-spreading */
import cx from "classnames";
import { ComponentDefaultTestId, getTestId } from "../../../../tests/test-ids-utils";
import React from "react";
import { components } from "react-select";
import Tooltip from "../../../Tooltip/Tooltip";
import { ChildrenContent } from "../ChildrenContent/ChildrenContent";
import styles from "./option.module.scss";

const Option = ({ Renderer, data, children, optionWrapperClassName, id, "data-testid": dataTestId, ...props }) => {
  const tooltipProps = data.tooltipProps || {};
  return (
    <Tooltip {...tooltipProps} position={Tooltip.positions.RIGHT}>
      {Renderer ? (
        <components.Option
          {...props}
          id={id}
          data-testid={dataTestId || getTestId(ComponentDefaultTestId.DROPDOWN_OPTION, id)}
          className={cx(styles.dropdownWrapperOptionReset, optionWrapperClassName)}
        >
          <Renderer {...data} />
        </components.Option>
      ) : (
        <components.Option
          {...props}
          id={id}
          data-testid={dataTestId || getTestId(ComponentDefaultTestId.DROPDOWN_OPTION, id)}
          className={cx(styles.dropdownWrapperOptionReset, optionWrapperClassName)}
        >
          <ChildrenContent data={data}>{children}</ChildrenContent>
        </components.Option>
      )}
    </Tooltip>
  );
};

export default Option;
