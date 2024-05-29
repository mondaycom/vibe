import React from "react";
import useMediaQuery from "..";
import "../../__stories__/general-hooks-stories.scss";

export default {
  title: "Hooks/useMediaQuery"
};

export const SingleRule = {
  render: () => {
    const [mediaQueryIsMatching] = useMediaQuery(["screen and (max-width: 1023px) and (min-width: 768px)"]);

    return (
      <div>
        {`media query - "screen and (max-width: 1023px) and (min-width: 768px)" is matching: `}
        {mediaQueryIsMatching ? "true" : "false"}
      </div>
    );
  },

  name: "Single Rule"
};

export const MultipleRules = {
  render: () => {
    const [screenSizeMediaQuery, preferDarkColorScheme] = useMediaQuery([
      "screen and (max-width: 1280px) and (min-width: 768px)",
      "prefers-color-scheme: dark"
    ]);

    return (
      <div>
        <div>
          {`media query - "screen and (max-width: 1280px) and (min-width: 768px)" is matching: `}
          {screenSizeMediaQuery ? "true" : "false"}
        </div>
        <div>media query - prefers-color-scheme: dark is matching: {preferDarkColorScheme ? "true" : "false"}</div>
      </div>
    );
  },

  name: "Multiple Rules"
};
