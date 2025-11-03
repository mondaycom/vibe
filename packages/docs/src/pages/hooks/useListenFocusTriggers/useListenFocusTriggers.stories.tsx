import React, { useCallback, useRef, useState } from "react";
import { useListenFocusTriggers, Button, Flex } from "@vibe/core";

export default {
  title: "Hooks/useListenFocusTriggers"
};

export const Overview = {
  render: () => {
    const [text, setText] = useState<string>("-");
    const ref = useRef<HTMLButtonElement>(null);

    const onFocusByMouse = useCallback((_event: FocusEvent) => {
      setText("mouse");
    }, []);

    const onFocusByKeyboard = useCallback((_event: FocusEvent) => {
      setText("keyboard");
    }, []);

    useListenFocusTriggers({
      ref: ref,
      onFocusByMouse: onFocusByMouse,
      onFocusByKeyboard: onFocusByKeyboard
    });

    return (
      <Flex direction="column" gap="medium" align="start">
        <Button ref={ref}>Focus target</Button>
        <div>Received focus by: {text}</div>
      </Flex>
    );
  },

  name: "Overview"
};
