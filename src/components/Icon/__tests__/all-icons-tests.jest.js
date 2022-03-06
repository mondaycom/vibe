import { exposeIcons } from "../../../../webpack/published-components";
import * as allIcons from "../Icons";

function arrayLast(arr) {
  if (!arr) return null;
  return arr[arr.length - 1];
}

describe("All icons", () => {
  it("should contains all icons", () => {
    const allIconFiles = exposeIcons();
    const missingIcons = [];
    Object.keys(allIconFiles).forEach(iconPath => {
      const iconName = arrayLast(iconPath.split("/"));
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
