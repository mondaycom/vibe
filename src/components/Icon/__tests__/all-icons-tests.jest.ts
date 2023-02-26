import { ArrayLastElement, SplitString } from "../../../types";
import { keysOf } from "../../../helpers/key-of";
import { exposeIcons } from "../../../utils/icon-utils";
import * as allIcons from "../Icons";

type IconPath = `/icons/${keyof typeof allIcons}`;
type SplittedIconPath = SplitString<IconPath, "/">;

const all = allIcons as Record<keyof typeof allIcons, () => unknown>;

function getNameFromPath(iconPath: IconPath): ArrayLastElement<SplittedIconPath> | null {
  const splittedPath = iconPath.split("/") as SplittedIconPath;
  if (!splittedPath) return null;
  return splittedPath[splittedPath.length - 1] as ArrayLastElement<SplittedIconPath>;
}

describe("All icons", () => {
  it("should contains all icons", () => {
    const allIconFiles = exposeIcons() as Record<IconPath, string>;
    const missingIcons: Array<string> = [];
    keysOf(allIconFiles).forEach(iconPath => {
      const iconName = getNameFromPath(iconPath);

      if (!all[iconName]) {
        missingIcons.push(iconPath);
      }
    });
    // Make sure all icons are also exported in allIcons
    if (missingIcons.length > 0) {
      console.error("Missing exported icons in components/Icon/Icons/index.js", missingIcons);
    }
    expect(missingIcons).toEqual([]);
  });
});
