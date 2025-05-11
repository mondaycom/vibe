import React, { useState, useEffect } from "react";
import { withLive } from "react-live";
import styles from "./LivePreview.module.scss";

interface LivePreview {
  live?: {
    // live injects more, currently unneeded, props
    error?: string;
    element?: React.ComponentType;
  };
}

const LivePreview: React.FC<LivePreview> = ({ live = {} }) => {
  const { error, element: Element } = live;
  const [lastGoodElement, setLastGoodElement] = useState<typeof Element | null>(null);

  useEffect(() => {
    if (Element && !error) {
      setLastGoodElement(() => Element);
    }
  }, [Element, error]);

  const ElementToRender = lastGoodElement || Element;

  return (
    <>
      {ElementToRender && <ElementToRender />}
      {error && (
        <div className={styles.overlay}>
          <pre className={styles.errorMessage}>{error}</pre>
        </div>
      )}
    </>
  );
};
export default withLive(LivePreview);
