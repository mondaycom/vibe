import React from "react";
import { withLive } from "react-live";

interface LivePreview {
  live?: {
    // live injects more, currently unneeded, props
    error?: string;
    element?: React.ComponentType;
  };
}

const LivePreview: React.FC<LivePreview> = ({ live = {} }) => {
  const { error, element: Element } = live;
  return <>{error ?? (Element && <Element />)}</>;
};
export default withLive(LivePreview);
