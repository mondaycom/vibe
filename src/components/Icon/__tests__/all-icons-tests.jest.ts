import { exposeIcons } from "../../../utils/icon-utils";
import * as allIcons from "../Icons";

function arrayLast(arr: Array<string>) {
  if (!arr) return null;
  return arr[arr.length - 1];
}

describe("All icons", () => {
  it("should contains all icons", () => {
    // @ts-ignore - TS can't understand that exposeIcons keys are the same as allIcons because we did not convert it yet
    // (We will deal with it in different pr)
    // Type '{}' is missing the following properties from type 'Record"Academy" | "Activity" | "Add" | ... and 226 more.
    const allIconFiles: Record<keyof typeof allIcons, string> = exposeIcons();
    const missingIcons: Array<string> = [];
    Object.keys(allIconFiles).forEach(iconPath => {
      // @ts-ignore - TS can't understand that exposeIcons keys are the same as allIcons because we did not convert it yet
      // (We will deal with it in different pr)
      const iconName: keyof typeof allIcons = arrayLast(iconPath.split("/"));
      /**
       * TS thinks allIcons is an array but its an object which contains all icons and that's why it's work when iconName is string
       */
      if (!allIcons[iconName]) {
        missingIcons.push(iconName);
      }
    });
    // Make sure all icons are also exported in allIcons
    if (missingIcons.length > 0) {
      console.error("Missing exported icons in components/Icon/Icons/index.js", missingIcons);
    }
    expect(missingIcons).toEqual([]);
  });
});
