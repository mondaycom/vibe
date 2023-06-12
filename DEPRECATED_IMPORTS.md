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
As from version 2, this is no longer needed the components inject their styles.
If you are still using older versions, this import should be placed at the root level of your application.

```javascript
import "monday-ui-react-core/dist/main.css";
```
