import React from "react";
/* eslint-disable react/button-has-type */
import useDisableScroll from "..";

export default {
  title: "Hooks/useDisableScroll"
};

export const Overview = {
  render: () => {
    const { disableScroll, enableScroll } = useDisableScroll(".scrollable");

    return (
      <div>
        <button onClick={disableScroll}>Disable Scroll</button>
        <button onClick={enableScroll}>Enable Scroll</button>
        <div
          className="scrollable"
          style={{
            height: "200px",
            width: "500px",
            overflow: "auto"
          }}
        >
          <p>Scrollable Content</p>
          <p>Scrollable Content</p>
          <p>Scrollable Content</p>
          <p>Scrollable Content</p>
          <p>Scrollable Content</p>
          <p>Scrollable Content</p>
          <p>Scrollable Content</p>
          <p>Scrollable Content</p>
          <p>Scrollable Content</p>
          <p>Scrollable Content</p>
          <p>Scrollable Content</p>
          <p>Scrollable Content</p>
          <p>Scrollable Content</p>
          <p>Scrollable Content</p>
          <p>Scrollable Content</p>
          <p>Scrollable Content</p>
        </div>
      </div>
    );
  },

  name: "Overview"
};
