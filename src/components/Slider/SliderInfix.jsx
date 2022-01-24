import React from "react";
import PropTypes from "prop-types";
import { INFIX_KIND } from "./SliderConstants";
import { bem } from "./SliderHelpers";
import { useSliderInfixComponent } from "./SliderInfixHooks";

const SliderInfix = ({ kind }) => {
  const [isShow, modificators, InfixComponent, inlineStyle] = useSliderInfixComponent(kind);
  return (
    isShow && (
      <div className={bem("infix", [...modificators, kind])} style={inlineStyle}>
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
