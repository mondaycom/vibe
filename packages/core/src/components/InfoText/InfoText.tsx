import React, { forwardRef } from "react";
import cx from "classnames";
import { InfoTextProps } from "./InfoText.types";
import Text from "../Text/Text";
import styles from "./InfoText.module.scss";

const InfoText = forwardRef(
  ({ id, text, error, success, disabled, readOnly }: InfoTextProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    if (!text) {
      return null;
    }

    return (
      <Text
        id={id}
        ref={ref}
        className={cx(styles.infoText, {
          [styles.error]: error,
          [styles.success]: success,
          [styles.disabled]: disabled,
          [styles.readOnly]: readOnly
        })}
        type="text2"
      >
        {text}
      </Text>
    );
  }
);

InfoText.displayName = "InfoText";

export default InfoText;
