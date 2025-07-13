import React, { useState, useEffect, useRef } from "react";
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
  const [LastGoodElement, setLastGoodElement] = useState<typeof Element | null>(null);
  const errorRef = useRef(error);

  useEffect(() => {
    errorRef.current = error;
  }, [error]);

  useEffect(() => {
    if (Element && !error) {
      const timeoutId = setTimeout(() => {
        if (!errorRef.current) {
          setLastGoodElement(() => Element);
        }
      }, 10); // just enough for react-live to catch runtime errors

      return () => clearTimeout(timeoutId);
    }
  }, [Element, error]);

  return (
    <>
      {error ? (
        <>
          {LastGoodElement && <LastGoodElement />}
          <div className={styles.overlay}>
            <pre className={styles.errorMessage}>{error}</pre>
          </div>
        </>
      ) : (
        Element && <Element />
      )}
    </>
  );
};
export default withLive(LivePreview);
