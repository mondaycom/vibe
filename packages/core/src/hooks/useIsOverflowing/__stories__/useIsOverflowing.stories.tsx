import React, { useRef, useState } from "react";
import useIsOverflowing from "../useIsOverflowing";
import { Flex, TextField, Tooltip } from "../../../components";
import styles from "./useIsOverflowing.stories.module.scss";

export default {
  title: "Hooks/useIsOverflowing"
};

export const Overview = {
  render: () => {
    const ComponentWithOverflow = ({ text }: { text: string }) => {
      const ref = useRef(null);

      const isOverflowing = useIsOverflowing({
        ref
      });

      return (
        <Flex direction="column" gap="medium" align="start">
          <div>Is overflowing: {isOverflowing.toString()}</div>
          <Tooltip content={isOverflowing ? text : undefined}>
            <div ref={ref} className={styles.textContainer}>
              {text}
            </div>
          </Tooltip>
        </Flex>
      );
    };

    const [text, setText] = useState("");

    return (
      <Flex direction="column" gap="small" align="start">
        <TextField onChange={setText} placeholder="Type text here" className={styles.input} />
        <ComponentWithOverflow text={text} />
      </Flex>
    );
  },

  name: "Overview"
};
