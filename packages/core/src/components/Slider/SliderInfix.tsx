import React, { FC } from "react";
import { InfixKind as InfixKindEnum } from "./SliderConstants";
import { useSliderInfixComponent } from "./SliderInfixHooks";
import cx from "classnames";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { withStaticProps, VibeComponentProps } from "../../types";
import styles from "./SliderInfix.module.scss";
import { InfixKind } from "./Slider.types";

export interface SliderInfixProps extends VibeComponentProps {
  /**
   * Specifies the type of infix (prefix or postfix).
   */
  kind?: InfixKind;
}

const SliderInfix: FC<SliderInfixProps> & { kinds?: typeof InfixKindEnum } = ({ kind = SliderInfix.kinds.PREFIX }) => {
  const [isShow, modificators, InfixComponent, inlineStyle] = useSliderInfixComponent(kind);
  return (
    isShow && (
      <div
        className={cx(
          styles.infix,
          getStyle(styles, kind),
          modificators.map(m => getStyle(styles, m))
        )}
        style={inlineStyle}
      >
        {InfixComponent}
      </div>
    )
  );
};

export default withStaticProps(SliderInfix, {
  kinds: InfixKindEnum
});
