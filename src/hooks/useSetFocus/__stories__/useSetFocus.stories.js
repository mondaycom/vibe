// import { useRef } from "@storybook/addons";
// import { Button, Flex, InputField } from "../../../components";
// import useSetFocus from "../../useSetFocus/index";
// import styles from "./useSetFocus.stories.module.scss";
import { Tip } from "vibe-storybook-components";

export default {
  title: "Hooks/useSetFocus"
};

// TODO Storybook 7 migration: story is under maintenance - hooks issue
export const Overview = {
  render: () => {
    return (
      <Tip emoji={"🔨"} title={"Story is under maintenance"} type={Tip.types.WARNING}>
        We will fix the story as soon as possible! Sorry for the inconvenience.
      </Tip>
    );
    //
    // const focusCallback = () => {};
    // const blurCallback = () => {};
    // const ref = useRef(null);
    //
    // const { isFocused, focus, blur } = useSetFocus({
    //   ref,
    //   focusCallback,
    //   blurCallback
    // });
    //
    // return (
    //   <Flex direction={Flex.directions.COLUMN}>
    //     <InputField ref={ref} placeholder="Input..." />
    //     <Button onClick={focus} className={styles.controlButton}>
    //       Focus
    //     </Button>
    //     <Button onClick={blur} className={styles.controlButton}>
    //       Blur
    //     </Button>
    //     <div className={styles.focusLabel}>Is focused: {isFocused?.toString()}</div>
    //   </Flex>
    // );
  },

  name: "Overview"
};
