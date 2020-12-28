export function loadComponentsStories() {
  return [
    require("./AttentionBox/__stories__/attentionBox.stories.js"),
    require("./Button/__stories__/button.stories.js"),
    require("./Counter/__stories__/counter.stories.js"),
    require("./Checkbox/__stories__/checkbox.stories.js"),
    require("./Icon/__stories__/icon.stories"),
    require("./Label/__stories__/label.stories.js"),
    require("./Link/__stories__/link.stories.js"),
    require("./Loader/__stories__/loader.stories.js"),
    require("./MenuButton/__stories__/menuButton.stories.js"),
    require("./ProgressBars/LinearProgressBar/__stories__/linearProgressBar.stories"),
    require("./RadioButton/__stories__/radioButton.stories.js"),
    require("./Search/__stories__/search.stories.js"),
    require("./TextField/__stories__/textField.stories.js"),
    require("./Tooltip/__stories__/tooltip.stories.js"),
    require("./Menu/MenuItem/__stories__/menuItem.stories.js")
  ];
}

export function loadHelpers() {
  return [require("./FormattedNumber/__stories__/formattedNumber.stories")];
}
