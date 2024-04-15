# monday.com UI styles

> This package includes all of the styling foundations of monday.com's Vibe Design System
> Theme definition, colors, shadows, dimensions, icons, etc.

## Installation

```
npm install monday-ui-style
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

**Mixins and functions**: We export multiple SCSS mixins and function helpers that can be used in your application if you use SASS. All helpers can be imported as demonstrated below.

```scss
@import "~monday-ui-style/dist/mixins";
@import "~monday-ui-style/dist/functions";
```

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

## Functions

The following SCSS functions are exported:

- `camelize`: camelcase string
- `capitalize`: capitalize string
- `contain`: returns whether `$value` is contained in `$list` as a Boolean
- `map-collect`: merges maps from different scopes into one
- `extract-rgb`: returns a comma separated list of rgb values from a color

## Mixins

The following SCSS mixins are exported:

- Common:
  - `hidden-element`
  - `grid-auto-fit($grid-gap, $grid-column-gap, $grid-row-gap. $grid-cell-min-width, $grid-cell-array-calc, $important)`
  - `scroller($width, $height, $color)`
- States:
  - `disabled`
  - `reset-button`
  - `focus-style($focus-radius)`
- Typography:
  - `vibe-text($type, $weight)`
  - `vibe-heading($type, $weight)`
  - `line-clamp($lines)`
  - `ellipsis`
