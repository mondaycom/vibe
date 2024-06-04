import React, { useRef, useState } from "react";
import useIsOverflowing from "../useIsOverflowing";
import { EditableInput, Flex, Tooltip } from "../../../components";
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
        <Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.MEDIUM} align={Flex.align.START}>
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
      <Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.SMALL} align={Flex.align.START}>
        <EditableInput onChange={setText} placeholder="Type text here" className={styles.input} />
        <ComponentWithOverflow text={text} />
      </Flex>
    );
  },

  name: "Overview"
};
