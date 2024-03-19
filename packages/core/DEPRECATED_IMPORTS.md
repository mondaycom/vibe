# Deprecated Imports

## Importing components

The following approach was recommended at the time to import components.
This would import a specific component with `CommonJS`.
It is no longer recommended and will be removed in the upcoming major version release.
Instead, you should import directly from the root of the library as described in the main readme

```javascript
import Button from "monday-ui-react-core/dist/Button";
```

## Loading CSS tokens and classes

The following approach was recommended at the time to load all CSS tokens and global class names of all components.
As from version 2, this is no longer needed the components inject their styles. Unless
- you are still using older package versions
- you are using [Webpack Storybook](https://storybook.js.org/docs/react/configure/styling-and-css)
- you are using other bundlers that require you to import CSS files directly

In these cases you should import the `dist/main.css` file at the root level of your application (`preview` file for Storybook)


```javascript
import "monday-ui-react-core/dist/main.css";
```
