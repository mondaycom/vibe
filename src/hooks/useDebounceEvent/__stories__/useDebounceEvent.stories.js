// import { useState } from "@storybook/addons";
// import useDebounceEvent from "..";
import { Tip } from "vibe-storybook-components";
import "../../__stories__/general-hooks-stories.scss";

export default {
  title: "Hooks/useDebounceEvent"
};

// TODO Storybook 7 migration: story is under maintenance - hooks issue
export const Overview = {
  render: () => {
    return (
      <Tip emoji={"🔨"} title={"Story is under maintenance"} type={Tip.types.WARNING}>
        We will fix the story as soon as possible! Sorry for the inconvenience.
      </Tip>
    );
    // const { inputValue, onEventChanged } = useDebounceEvent({
    //   delay: 100
    // });
    //
    // return <input type="text" value={inputValue} onChange={onEventChanged} />;
  },

  name: "Overview"
};

export const PassingAnInitialValue = {
  render: () => {
    return (
      <Tip emoji={"🔨"} title={"Story is under maintenance"} type={Tip.types.WARNING}>
        We will fix the story as soon as possible! Sorry for the inconvenience.
      </Tip>
    );
    // const { inputValue, onEventChanged } = useDebounceEvent({
    //   initialStateValue: "bla bla bla"
    // });
    //
    // return <input type="text" value={inputValue} onChange={onEventChanged} />;
  },

  name: "Passing an initial value"
};

export const PassingAnOnChangeHandler = {
  render: () => {
    return (
      <Tip emoji={"🔨"} title={"Story is under maintenance"} type={Tip.types.WARNING}>
        We will fix the story as soon as possible! Sorry for the inconvenience.
      </Tip>
    );
    // const [length, setLength] = useState(0);
    //
    // const { inputValue, onEventChanged } = useDebounceEvent({
    //   onChange: value => setLength(value.length)
    // });
    //
    // return (
    //   <>
    //     <input type="text" value={inputValue} onChange={onEventChanged} />
    //     {<span>Input has {length} characters</span>}
    //   </>
    // );
  },

  name: "Passing an `onChange` handler"
};

export const WithTrim = {
  render: () => {
    return (
      <Tip emoji={"🔨"} title={"Story is under maintenance"} type={Tip.types.WARNING}>
        We will fix the story as soon as possible! Sorry for the inconvenience.
      </Tip>
    );
    // const { inputValue, onEventChanged } = useDebounceEvent({
    //   trim: true
    // });
    //
    // return <input type="text" value={inputValue} onChange={onEventChanged} />;
  },

  name: "With trim"
};
