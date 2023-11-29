import { Toggle, Flex } from "../../../components";
import { useCallback, useEffect, useState } from "@storybook/addons";

// TODO storybook 7 migration: temp solution for the hooks issue - replace with the import in the future
// import useSwitch from "../index";
function useSwitch({ isChecked, defaultChecked, onChange, isDisabled } = {}) {
  // if isChecked is empty, set defaultChecked value (default false value)
  const overrideCheckedInitial = isChecked ?? !!defaultChecked;
  const [overrideChecked, setOverrideChecked] = useState(overrideCheckedInitial);

  const overrideOnChange = useCallback(() => {
    if (isDisabled) {
      return;
    }
    const newChecked = !overrideChecked;
    if (isChecked === undefined) {
      setOverrideChecked(newChecked);
    }
    onChange && onChange(newChecked);
  }, [isChecked, isDisabled, onChange, overrideChecked]);

  useEffect(() => {
    if (isChecked !== undefined) {
      setOverrideChecked(isChecked);
    }
  }, [isChecked]);

  return { isChecked: overrideChecked, onChange: overrideOnChange };
}

export default {
  title: "Hooks/useSwitch"
};

// TODO Storybook 7 migration: story is under maintenance - hooks issue
export const Overview = {
  render: () => {
    const { isChecked, onChange } = useSwitch();

    return (
      <Flex direction={Flex.directions.COLUMN} align={Flex.align.START} gap={Flex.gaps.MEDIUM}>
        <Toggle onChange={onChange} isSelected={isChecked} />
        <code>isChecked: {isChecked.toString()}</code>
      </Flex>
    );
  },

  name: "Overview"
};

export const Disabled = {
  render: () => {
    const { isChecked, onChange } = useSwitch({
      isDisabled: true
    });

    return (
      <Flex direction={Flex.directions.COLUMN} align={Flex.align.START} gap={Flex.gaps.MEDIUM}>
        <Toggle onChange={onChange} isSelected={isChecked} />
        <code>isChecked: {isChecked.toString()}</code>
      </Flex>
    );
  },

  name: "Disabled"
};

export const Default = {
  render: () => {
    const defaultChecked = true;

    const { isChecked, onChange } = useSwitch({
      defaultChecked
    });

    return (
      <Flex direction={Flex.directions.COLUMN} align={Flex.align.START} gap={Flex.gaps.MEDIUM}>
        <Toggle onChange={onChange} isSelected={isChecked} />
        <code>isChecked {isChecked.toString()}</code>
        <code>defaultChecked: {defaultChecked.toString()}</code>
      </Flex>
    );
  },

  name: "Default"
};
