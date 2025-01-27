import React, { useCallback, useRef } from "react";
import useClickableProps from "../useClickableProps";
import "./useClickableProps.stories.scss";

export default {
  title: "Hooks/useClickableProps"
};

export const Overview = {
  render: () => {
    const ref = useRef(null);
    const onClick = useCallback(() => alert("click!"), []);

    const clickableProps = useClickableProps(
      {
        onClick: onClick,
        id: "clickable-id",
        ariaHidden: false,
        ariaHasPopup: false,
        ariaExpanded: false
      },
      ref
    );

    return (
      <div {...clickableProps} className="monday-storybook-use-clickable-props">
        I act like a button
      </div>
    );
  },

  name: "Overview"
};
