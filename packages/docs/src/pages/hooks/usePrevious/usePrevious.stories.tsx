import React, { useState } from "react";
import { usePrevious, Button, Counter, Flex } from "@vibe/core";
import styles from "./usePrevious.stories.module.scss";

export default {
  title: "Hooks/usePrevious"
};

export const Overview = {
  render: () => {
    const [count, setCount] = useState(1);
    const prevCount = usePrevious(count);

    const incrementButtonOnClick = () => {
      setCount(prevValue => prevValue + 1);
    };

    return (
      <Flex direction="column">
        <Flex className={styles.counterContainer} direction="column">
          <div className={styles.counterLabel}>Current</div>
          <Counter count={count} />
        </Flex>
        <Flex className={styles.counterContainer} direction="column">
          <div className={styles.counterLabel}>Previous</div>
          <Counter count={prevCount} />
        </Flex>
        <Button onClick={incrementButtonOnClick}>Increment</Button>
      </Flex>
    );
  },

  name: "Overview"
};
