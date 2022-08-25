import { ELEMENT_TYPES, getTestId } from "../../../../utils/test-utils";
import cx from "classnames";
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { components } from "react-select";
import Tooltip from "../../../Tooltip/Tooltip";
import styles from "./option.module.scss";

const Option = ({ Renderer, data, id, "data-testid": dataTestId, ...props }) => {
  const tooltipProps = data.tooltipProps || {};
  return (
    <Tooltip {...tooltipProps} position={Tooltip.positions.RIGHT}>
      {Renderer ? (
        <components.Option
          {...props}
          className={cx(styles.dropdownWrapperOptionReset, "dropdown-wrapper__option--reset")}
          data-testid={dataTestId || getTestId(ELEMENT_TYPES.DROPDOWN_OPTION, id)}
        >
          <Renderer {...data} />
        </components.Option>
      ) : (
        <components.Option
          {...props}
          className={cx(styles.dropdownWrapperOptionReset, "dropdown-wrapper__option--reset")}
          data-testid={dataTestId || getTestId(ELEMENT_TYPES.DROPDOWN_OPTION, id)}
        />
      )}
    </Tooltip>
  );
};

export default Option;
