import React from "react";
import { LiveProvider } from "react-live";
import LivePreview from "../../../../components/live-preview/LivePreview";
import useApplyDecorators from "../../hooks/useApplyDecorators";
import { LiveContentProps } from "./LiveContent.types";
import styles from "./LiveContent.module.scss";
import * as VibeComponents from "../../../../../components";
import * as VibeHooks from "../../../../../hooks";
import * as VibeIcons from "../../../../../components/Icon/Icons";
import * as VibeComponentsNext from "../../../../../next";

const vibeScope = { ...VibeComponents, VibeIcons, VibeNext: VibeComponentsNext, ...VibeHooks };
const reactCommonHooksScope = {
  useState: React.useState,
  useEffect: React.useEffect,
  useCallback: React.useCallback,
  useMemo: React.useMemo,
  useRef: React.useRef
};

const LiveContent = ({ code, scope, decorators, context }: LiveContentProps) => {
  const content: React.JSX.Element = (
    <>
      <div className={styles.modifiedVersionIndicator}>Modified Version</div>
      <LiveProvider code={code} scope={{ ...vibeScope, ...reactCommonHooksScope, ...scope }} enableTypeScript>
        <LivePreview />
      </LiveProvider>
    </>
  );

  return <>{useApplyDecorators(decorators || [], content, context)}</>;
};

export default LiveContent;
