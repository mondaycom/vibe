import React from "react";
import cx from "classnames";
import useHover from "../useHover";
import "../../__stories__/general-hooks-stories.scss";
import styles from "./useHover.stories.module.scss";

export default {
  title: "Hooks/useHover"
};

export const Overview = {
  render: () => {
    const [hoverRef, isHovered] = useHover();

    return (
      <div
        ref={hoverRef}
        className={cx("hooks-reference-element", styles.container, {
          [styles.isHovered]: isHovered
        })}
      >
        {isHovered ? "Boom!" : "Hover me"}
      </div>
    );
  },

  name: "Overview"
};
