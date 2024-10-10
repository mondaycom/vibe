import React, { useCallback, useRef, RefObject, MouseEvent, KeyboardEvent } from "react";
import useClickableProps from "../useClickableProps";
import "./useClickableProps.stories.scss";

interface ClickableProps extends React.HTMLAttributes<HTMLElement> {
  onClick: (event: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>) => void;
  id: string;
  "aria-hidden": boolean;
  "aria-haspopup": boolean;
  "aria-expanded": boolean;
}

export default {
  title: "Hooks/useClickableProps"
};

export const Overview = {
  render: () => {
    const ref: RefObject<HTMLDivElement> = useRef(null);
    const onClick = useCallback(() => alert("click!"), []);

    const clickableProps: ClickableProps = useClickableProps(
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
      <div {...clickableProps} className="monday-storybook-use-clickable-props" ref={ref}>
        I act like a button
      </div>
    );
  },

  name: "Overview"
};
