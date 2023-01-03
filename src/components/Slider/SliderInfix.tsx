import React, { FC } from "react";
import cx from "classnames";
import { useSliderInfixComponent } from "./SliderInfixHooks";
import { InfixKind } from "./SliderConstants";
import VibeComponentProps from "../../types/VibeComponentProps";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { ComponentDefaultTestId } from "../../tests/constants";
import { getTestId } from "../../tests/test-ids-utils";
import styles from "./SliderInfix.module.scss";

interface SliderInfixProps extends VibeComponentProps {
  /**
   * kind (type/mode) of Infix prefix/postfix
   * Infix - additional inserted by Consumer - component/string/number etc.
   */
  kind?: InfixKind;
}

const SliderInfix: FC<SliderInfixProps> & { kinds?: typeof InfixKind } = ({
  kind = SliderInfix.kinds.PREFIX,
  id,
  "data-testid": dataTestId
}) => {
  const [isShow, modificator, InfixComponent, inlineStyle] = useSliderInfixComponent(kind);
  return (
    isShow && (
      <div
        className={cx(styles.sliderInfix, "monday-slider__infix", {
          [getStyle(styles, modificator)]: modificator,
          [`monday-slider__infix--${modificator}`]: modificator,
          [styles[kind]]: kind,
          [`monday-slider__infix--${kind}`]: kind
        })}
        style={inlineStyle}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.SLIDER_INFIX, id)}
      >
        {InfixComponent}
      </div>
    )
  );
};

Object.assign(SliderInfix, {
  kinds: InfixKind
});

export default SliderInfix;
