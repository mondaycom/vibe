import * as EZDSComponents from "@ezds/core";
import * as EZDSIcons from "@ezds/icons";
import * as EZDSComponentsNext from "@ezds/core/next";
import React from "react";

const EZDSLegacy = Object.fromEntries(Object.entries(EZDSComponents).filter(([key]) => key in EZDSComponentsNext));
const combinedComponents = { ...EZDSComponents, ...EZDSComponentsNext };

export const playgroundEZDSComponents = { ...combinedComponents, EZDSLegacy, EZDSIcons };
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
        src="https://design.ezcorp.com/logo.svg"
        alt="EZDS Logo"
        className="ezds-logo"
      />
      <Flex direction="column" align="center" justify="center" gap="xs">
        <Flex align="center" gap="xs">
          <Icon icon={EZDSIcons.Labs} iconSize="16" />
          <Heading type="h3" align="center">
            Playground
          </Heading>
        </Flex>
        <Text type="text2" ellipsis={false}>
          Craft, Experiment, and Innovate with EZDS.
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

.ezds-logo {
  width: 150px;
  margin-block-end: var(--spacing-large);
  transition: transform 0.3s ease, filter 0.3s ease;
}

.ezds-logo:hover {
  transform: scale(1.02);
  filter: drop-shadow(0 0 32px rgba(80, 52, 255, 0.3));
}

.count-button {
  margin-block: var(--spacing-medium);
}
`;

export const introCode = { jsx, css };
