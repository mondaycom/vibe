import * as VibeComponents from "../../../components";
import * as VibeIcons from "@vibe/icons";
import * as VibeComponentsNext from "../../../components/next";
import * as VibeHooks from "../../../hooks";
import React from "react";

const VibeLegacy = Object.fromEntries(Object.entries(VibeComponents).filter(([key]) => key in VibeComponentsNext));
const combinedComponents = { ...VibeComponents, ...VibeComponentsNext };

export const playgroundVibeComponents = { ...combinedComponents, VibeLegacy, VibeIcons, ...VibeHooks };
export const playgroundReactCommonHooks = {
  useState: React.useState,
  useEffect: React.useEffect,
  useCallback: React.useCallback,
  useMemo: React.useMemo,
  useRef: React.useRef
};

const jsx = `() => {
  const [timesClicked, setTimesClicked] = useState<number>(0);

  function onButtonClick(): void {
    setTimesClicked(prev => prev + 1);
  }

  return (
    <Flex direction="column" className="playground">
      <img
        src="https://vibe.monday.com/logo.svg"
        alt="Vibe Logo"
        className="vibe-logo"
      />
      <Flex direction="column" align="center" justify="center" gap="xs">
        <Heading type="h3" align="center">
          Playground
        </Heading>
        <Text type="text2" ellipsis={false}>
          Craft, Experiment, and Innovate with Vibe.
        </Text>
      </Flex>
      <Button
        kind="secondary"
        size="small"
        onClick={onButtonClick}
        className="count-button"
      >
        Clicked {timesClicked} time{timesClicked === 1 ? "" : "s"}
      </Button>
      <Text type="text3" ellipsis={false} color="secondary">
        Can't see the editor? Click 'D' on your keyboard
      </Text>
    </Flex>
  );
}`;

const css = `.playground {
  padding-block-start: 40px;
  margin: 0;
  width: 100vw;
}

.vibe-logo {
  width: 150px;
  margin-block-end: var(--spacing-large);
  transition: transform 0.3s ease, filter 0.3s ease;
}

.vibe-logo:hover {
  transform: scale(1.02);
  filter: drop-shadow(0 0 32px rgba(80, 52, 255, 0.3));
}

.count-button {
  margin-block: var(--spacing-medium);
}
`;

export const introCode = { jsx, css };
