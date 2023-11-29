// import cx from "classnames";
// import useHover from "../useHover";
import "../../__stories__/general-hooks-stories.scss";
// import styles from "./useHover.stories.module.scss";
import { Tip } from "vibe-storybook-components";

export default {
  title: "Hooks/useHover"
};

// TODO Storybook 7 migration: story is under maintenance - hooks issue
export const Overview = {
  render: () => {
    return (
      <Tip emoji={"🔨"} title={"Story is under maintenance"} type={Tip.types.WARNING}>
        We will fix the story as soon as possible! Sorry for the inconvenience.
      </Tip>
    );
    // const [hoverRef, isHovered] = useHover();
    //
    // return (
    //   <div
    //     ref={hoverRef}
    //     className={cx("hooks-reference-element", styles.container, {
    //       [styles.isHovered]: isHovered
    //     })}
    //   >
    //     {isHovered ? "Boom!" : "Hover me"}
    //   </div>
    // );
  },

  name: "Overview"
};
