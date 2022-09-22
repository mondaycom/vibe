import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import cx from "classnames";
import React from "react";
import PropTypes from "prop-types";
import { INFIX_KIND } from "./SliderConstants";
import { useSliderInfixComponent } from "./SliderInfixHooks";
import styles from "./SliderInfix.module.scss";

const SliderInfix = ({ kind, id, "data-testid": dataTestId }) => {
  const [isShow, modificator, InfixComponent, inlineStyle] = useSliderInfixComponent(kind);
  return (
    isShow && (
      <div
        className={cx(styles.sliderInfix, "monday-slider__infix", {
          [styles[modificator]]: modificator,
          [`monday-slider__infix--${modificator}`]: modificator,
          [styles[kind]]: kind,
          [`monday-slider__infix--${kind}`]: kind
        })}
        style={inlineStyle}
        id={id}
        data-testid={dataTestId || getTestId(ELEMENT_TYPES.SLIDER_INFIX, id)}
      >
        {InfixComponent}
      </div>
    )
  );
};

SliderInfix.kinds = INFIX_KIND;

SliderInfix.propTypes = {
  /**
   * kind (type/mode) of Infix prefix/postfix
   * Infix - additional inserted by Consumer - component/string/number etc.
   */
  kind: PropTypes.oneOf(Object.values(SliderInfix.kinds))
};

SliderInfix.defaultProps = {
  kind: SliderInfix.kinds.PREFIX
};

export default SliderInfix;
