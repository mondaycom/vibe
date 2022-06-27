# monday.com UI styles

> This package includes all of the styling foundations of monday.com
> Theme definition, colors, shadows, dimensions, icons, etc.

Although we use React in our product this library will try to stay framework agnostic, we expose here the foundations of our design system so they can be used regardless the framework/environment you are using.

## Installation

```
npm install monday-ui-style --save
```

## Usage

**Styles**: Import the css file in order to have the css variables exposed on the root level

```scss
@import "~monday-ui-style/dist/index.min.css";
```

or if you want to import it in your JS files

```javascript
import "monday-ui-style/dist/index.min.css";
```

**Icons**: We expose each icon's SVG from the dist files so you can use them in your app.

```javascript
import IconName from "monday-ui-style/src/Icons/IconName.svg";
```

## Icons

### Adding a new icon

In order to add a new icon you will need to [fork the repo and open a PR](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork)

When adding a new icon please make sure that there isn't a similar icon - if so, either replace the icon or make sure that we need another version of it

### Metadata file

We maintain a metadata file for each icon, it helps our icon library be more readable and searchable when searching for a relevant icons

How to add a new icon?
Add the icon in SVG format under the src/Icons folder (size 20x20)
then run `npm run generate-meta` and fill in the relevant information (you can add multiple icons and run the command once)

### Icon colors

We want to support the ability for the svg icon to adapt the css `color` attribute, therefore we when adding an icon
all of the colors in the SVG should be `currentColor`.

In some rare occasions when you want to preserve a color within the icon please consider the following:

- `currentColor` might change according to position and theming
- this is an open source library so brand colors might change
- please be aware that we will add a monochrome version of that icon as well

## New icon request

If you want us to create a non existing monday.com style icon open a PR with please see the [guidelines](ICON_REQUEST.md)

## Stylelint rules

It is recommended to extend our [Stylelint](https://stylelint.io/) config in order to ensure proper usage of this library.  
To use the supplied config, add `monday-ui-style/stylelint-config` as a [Stylelint config extension](https://stylelint.io/user-guide/configure/#extends):

```js
// Your .stylelintrc
{
  ...
  "extends": "monday-ui-style/stylelint-config",
  ...
}
```
