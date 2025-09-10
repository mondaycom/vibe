import React, { type FC } from "react";
import { InfixKind as InfixKindEnum } from "./SliderConstants";
import { useSliderInfixComponent } from "./SliderInfixHooks";
import cx from "classnames";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { withStaticPropsWithoutForwardRef } from "../../types";
import { type VibeComponentProps } from "@vibe/shared";
import styles from "./SliderInfix.module.scss";
import { type InfixKind } from "./Slider.types";

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

export default withStaticPropsWithoutForwardRef<SliderInfixProps, { kinds: typeof InfixKindEnum }>(SliderInfix, {
  kinds: InfixKindEnum
});
