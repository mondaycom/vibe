import React, { useRef } from "react";
import { Button, Flex, InputField } from "../../../components";
import useSetFocus from "../../useSetFocus/index";
import styles from "./useSetFocus.stories.module.scss";

export default {
  title: "Hooks/useSetFocus"
};

export const Overview = {
  render: () => {
    const focusCallback = () => {};
    const blurCallback = () => {};
    const ref = useRef(null);

    const { isFocused, focus, blur } = useSetFocus({
      ref,
      focusCallback,
      blurCallback
    });

    return (
      <Flex direction={Flex.directions.COLUMN}>
        <InputField ref={ref} placeholder="Input..." />
        <Button onClick={focus} className={styles.controlButton}>
          Focus
        </Button>
        <Button onClick={blur} className={styles.controlButton}>
          Blur
        </Button>
        <div className={styles.focusLabel}>Is focused: {isFocused?.toString()}</div>
      </Flex>
    );
  },

  name: "Overview"
};
