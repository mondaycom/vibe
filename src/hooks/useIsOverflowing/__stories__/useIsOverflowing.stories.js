// import { useRef, useState } from "@storybook/addons";
// import useIsOverflowing from "../useIsOverflowing";
// import { EditableInput, Flex, Tooltip } from "../../../components";
// import styles from "./useIsOverflowing.stories.module.scss";

import { Tip } from "vibe-storybook-components";

export default {
  title: "Hooks/useIsOverflowing"
};

// TODO Storybook 7 migration: story is under maintenance - hooks issue
export const Overview = {
  render: () => {
    return (
      <Tip emoji={"🔨"} title={"Story is under maintenance"} type={Tip.types.WARNING}>
        We will fix the story as soon as possible! Sorry for the inconvenience.
      </Tip>
    );
    // const ComponentWithOverflow = ({ text }) => {
    //   const ref = useRef(null);
    //
    //   const isOverflowing = useIsOverflowing({
    //     ref
    //   });
    //
    //   return (
    //     <Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.MEDIUM} align={Flex.align.START}>
    //       <div>Is overflowing: {isOverflowing.toString()}</div>
    //       <Tooltip content={isOverflowing ? text : undefined}>
    //         <div ref={ref} className={styles.textContainer}>
    //           {text}
    //         </div>
    //       </Tooltip>
    //     </Flex>
    //   );
    // };
    //
    // const [text, setText] = useState("");
    //
    // return (
    //   <Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.SMALL} align={Flex.align.START}>
    //     <EditableInput onChange={setText} placeholder="Type text here" className={styles.input} />
    //     <ComponentWithOverflow text={text} />
    //   </Flex>
    // );
  },

  name: "Overview"
};
