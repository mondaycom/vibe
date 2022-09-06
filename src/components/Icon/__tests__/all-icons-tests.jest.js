"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const icon_utils_1 = require("../../../utils/icon-utils");
const allIcons = require("../Icons");
function arrayLast(arr) {
    if (!arr)
        return null;
    return arr[arr.length - 1];
}
describe("All icons", () => {
    it("should contains all icons", () => {
        const allIconFiles = (0, icon_utils_1.exposeIcons)();
        const missingIcons = [];
        Object.keys(allIconFiles).forEach(iconPath => {
            const iconName = arrayLast(iconPath.split("/"));
            /**
             * TS thinks allIcons is an array but its an object which contains all icons and that's why it's work when iconName is string
             */
            // @ts-ignore
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
