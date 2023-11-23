import cx from "classnames";
import useHover from "../useHover";
import "../../__stories__/general-hooks-stories.scss";
import styles from "./useHover.stories.module.scss";

export default {
  title: "Hooks/useHover"
};

export const Overview = {
  render: () => {
    // TODO Storybook 7 migration: story isn't working - in general hooks in stories are not working correctly, as a temp solution importing basic hooks from @storybook addons
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
