# ezcorp.com UI styles

> EZDS Design System's styling foundations: Theme definition, colors, shadows, dimensions, etc.

## Installation

```bash
npm install @ezds/web
# or
yarn add @ezds/web
```

## Usage

**Styles**: Import the css file in order to have the css variables exposed on the root level

```scss
@import "~@ezds/web/dist/index.min.css";
```

or if you want to import it in your JS files

```javascript
import "@ezds/web/dist/index.min.css";
```

**Mixins and functions**: We export multiple SCSS mixins and function helpers that can be used in your application if you use SASS. All helpers can be imported as demonstrated below.

```scss
@import "~@ezds/web/dist/mixins";
@import "~@ezds/web/dist/functions";
```

## Stylelint rules

It is recommended to extend our [Stylelint](https://stylelint.io/) config in order to ensure proper usage of this library.  
To use the supplied config, add `@ezds/web/stylelint-config` as a [Stylelint config extension](https://stylelint.io/user-guide/configure/#extends):

```js
// Your .stylelintrc
{
  ...
  "extends": "@ezds/web/stylelint-config",
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
  - `ezds-text($type, $weight)`
  - `ezds-heading($type, $weight)`
  - `line-clamp($lines)`
  - `ellipsis`
