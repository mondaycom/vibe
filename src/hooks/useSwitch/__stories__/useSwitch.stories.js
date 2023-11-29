// import useSwitch from "../index";
// import { Toggle, Flex } from "../../../components";
import { Tip } from "vibe-storybook-components";

export default {
  title: "Hooks/useSwitch"
};

// TODO Storybook 7 migration: story is under maintenance - hooks issue
export const Overview = {
  render: () => {
    return (
      <Tip emoji={"🔨"} title={"Story is under maintenance"} type={Tip.types.WARNING}>
        We will fix the story as soon as possible! Sorry for the inconvenience.
      </Tip>
    );
    // const { isChecked, onChange } = useSwitch();
    //
    // return (
    //   <Flex direction={Flex.directions.COLUMN} align={Flex.align.START} gap={Flex.gaps.MEDIUM}>
    //     <Toggle onChange={onChange} isSelected={isChecked} />
    //     <code>isChecked: {isChecked.toString()}</code>
    //   </Flex>
    // );
  },

  name: "Overview"
};

export const Disabled = {
  render: () => {
    return (
      <Tip emoji={"🔨"} title={"Story is under maintenance"} type={Tip.types.WARNING}>
        We will fix the story as soon as possible! Sorry for the inconvenience.
      </Tip>
    );
    // const { isChecked, onChange } = useSwitch({
    //   isDisabled: true
    // });
    //
    // return (
    //   <Flex direction={Flex.directions.COLUMN} align={Flex.align.START} gap={Flex.gaps.MEDIUM}>
    //     <Toggle onChange={onChange} isSelected={isChecked} />
    //     <code>isChecked: {isChecked.toString()}</code>
    //   </Flex>
    // );
  },

  name: "Disabled"
};

export const Default = {
  render: () => {
    return (
      <Tip emoji={"🔨"} title={"Story is under maintenance"} type={Tip.types.WARNING}>
        We will fix the story as soon as possible! Sorry for the inconvenience.
      </Tip>
    );
    // const defaultChecked = true;
    //
    // const { isChecked, onChange } = useSwitch({
    //   defaultChecked
    // });
    //
    // return (
    //   <Flex direction={Flex.directions.COLUMN} align={Flex.align.START} gap={Flex.gaps.MEDIUM}>
    //     <Toggle onChange={onChange} isSelected={isChecked} />
    //     <code>isChecked {isChecked.toString()}</code>
    //     <code>defaultChecked: {defaultChecked.toString()}</code>
    //   </Flex>
    // );
  },

  name: "Default"
};
