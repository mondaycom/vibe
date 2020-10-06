export function loadComponentsStories() {
  return [
    require("./button/button.stories.mdx"),
    require("./TextField/__stories__/textField.stories.mdx"),
    require("./Search/__stories__/search.stories.mdx"),
    require("./Loader/__stories__/loader.stories.mdx"),
    require("./Dialog/__stories__/dialog.stories.mdx"),
    require("./Tooltip/__stories__/tooltip.stories.js"),
    require("./Button-WIP/__stories__/ButtonWIP.stories"),
    require("./FormattedNumber/__stories__/formattedNumber.stories")
  ];
}
