# monday.com UI styles
This package includes all of the styling foundations of monday.com
Theme definition, colors, shadows, dimensions, icons, etc.

## Installation
```
npm install monday-ui-style
```

## Usage
We are building the icons using [Wix's svg2react-icon](https://github.com/wix/svg2react-icon) npm package it is generating a React component for each icon
``` javascript
import { IconName } from "monday-ui-style/dist/Icons"
import IconName from "monday-ui-style/dist/Icons/IconName"
```

## Adding a new icon
When adding a new icon please make sure of the following
- We don't have a similar icon - if so either replace the icon or make sure that we need another version of it
- Make sure to switch all fill/stroke.. colors to `currentColor`as we want to inherit the color of the font (we are not doing so automatically to leave the option to preserve svg with colors) 
- Update the [metadata file](./src/Icons/iconsMetaData.js) for that icon


### New icon request
If you want us to create a non existing monday.com style icon open a PR with please see the [guidelines](ICON_REQUEST.md)

