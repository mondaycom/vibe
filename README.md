# monday.com UI styles

> This package includes all of the styling foundations of monday.com
> Theme definition, colors, shadows, dimensions, icons, etc.

Although we are using React in our product this library will try to stay framework agnostic, we are exposing here the foundations of our design system so they could be used regardless the framework/environment you are using.

## Installation

```
npm install monday-ui-style --save
```

## Usage

**Styles**: Import the css file in order to have the css variables exposed on the root level

```scss
@import "~monday-ui-style/dist/index.min.css";
```

or if you want to import it in you JS files

```javascript
import "monday-ui-style/dist/index.min.css";
```

**Icons**: We expose each icon's SVG from the dist files so you could use them in your app.

```javascript
import IconName from "monday-ui-style/src/Icons/IconName.svg";
```

## Icons

### Adding a new icon

When adding a new icon please make sure that there isn't a similar icon - if so either replace the icon or make sure that we need another version of it

### Icon colors

We want to support the ability for the svg icon to adapt the css `color` attribute therefore we when adding an icon
all of the colors in the SVG should be `currentColor`.

In some rare occasions when you want to preserve a color within the icon please consider the following:

- `currentColor` might change according to position and theming
- this is an open source library so brand colors might change
- please be aware that we will add a monochrome version of that icon as well

### Metadata file

We are maintaining a metadata file on the icons, it helps our icon library to be more readable and search able when you want to search for a relevant icon

When adding a new icon please run `npm run plop` and fill in the relevant information

## New icon request

If you want us to create a non existing monday.com style icon open a PR with please see the [guidelines](ICON_REQUEST.md)
