// import useMediaQuery from "..";
import "../../__stories__/general-hooks-stories.scss";
import { Tip } from "vibe-storybook-components";

export default {
  title: "Hooks/useMediaQuery"
};

// TODO Storybook 7 migration: story is under maintenance - hooks issue
export const SingleRule = {
  render: () => {
    return (
      <Tip emoji={"🔨"} title={"Story is under maintenance"} type={Tip.types.WARNING}>
        We will fix the story as soon as possible! Sorry for the inconvenience.
      </Tip>
    );
    // const [mediaQueryIsMatching] = useMediaQuery(["screen and (max-width: 1023px) and (min-width: 768px)"]);
    //
    // return (
    //   <div>
    //     {`media query - "screen and (max-width: 1023px) and (min-width: 768px)" is matching: `}
    //     {mediaQueryIsMatching ? "true" : "false"}
    //   </div>
    // );
  },

  name: "Single Rule"
};

export const MultipleRules = {
  render: () => {
    return (
      <Tip emoji={"🔨"} title={"Story is under maintenance"} type={Tip.types.WARNING}>
        We will fix the story as soon as possible! Sorry for the inconvenience.
      </Tip>
    );
    // const [screenSizeMediaQuery, preferDarkColorScheme] = useMediaQuery([
    //   "screen and (max-width: 1280px) and (min-width: 768px)",
    //   "prefers-color-scheme: dark"
    // ]);
    //
    // return (
    //   <div>
    //     <div>
    //       {`media query - "screen and (max-width: 1280px) and (min-width: 768px)" is matching: `}
    //       {screenSizeMediaQuery ? "true" : "false"}
    //     </div>
    //     <div>media query - prefers-color-scheme: dark is matching: {preferDarkColorScheme ? "true" : "false"}</div>
    //   </div>
    // );
  },

  name: "Multiple Rules"
};
