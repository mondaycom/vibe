# monday.com UI styles
This package includes all of the styling foundations of monday.com
Theme definition, colors, shadows, dimensions, icons, etc.

Although we are using React this library will try to stay framework agnostic, we are exposing here the foundations of our design system so they could be used regardless the framework/environment you are using. 

## Installation
```
npm install monday-ui-style
```

## Usage
__Styles__: Import the css file in order to have the css variables exposed on the root level
``` scss
@import "~monday-ui-style/dist/index.min.css";
```

__Icons__: We expose each icon's SVG from the dist files so you could use them in your app.
``` javascript
import IconName from "monday-ui-style/src/Icons/IconName.svg";
```


## Adding a new icon
When adding a new icon please make sure of the following
- We don't have a similar icon - if so either replace the icon or make sure that we need another version of it
- Make sure to switch all fill/stroke.. colors to `currentColor`as we want to inherit the color of the font (we are not doing so automatically to leave the option to preserve svg with colors) 
- Update the [metadata file](./src/Icons/iconsMetaData.js) for that icon


### New icon request
If you want us to create a non existing monday.com style icon open a PR with please see the [guidelines](ICON_REQUEST.md)

