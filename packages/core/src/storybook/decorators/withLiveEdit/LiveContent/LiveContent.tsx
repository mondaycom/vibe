import React from "react";
import { LiveProvider } from "react-live";
import LivePreview from "../../../components/live-preview/LivePreview";
import useApplyDecorators from "../hooks/useApplyDecorators";
import { LiveContentProps } from "./LiveContent.types";
import styles from "./LiveContent.module.scss";

const LiveContent = ({ code, scope, decorators, context }: LiveContentProps) => {
  const content: React.JSX.Element = (
    <>
      <div className={styles.modifiedVersionIndicator}>Modified Version</div>
      <LiveProvider code={code} scope={scope} enableTypeScript>
        <LivePreview />
      </LiveProvider>
    </>
  );

  return <>{useApplyDecorators(decorators || [], content, context)}</>;
};

export default LiveContent;
