# Vibe 2 Migration

## What's changed?

- CSS modules migration - all components are now using CSS modules instead of global CSS classes, this allows us to have better encapsulation and fewer conflicts with other CSS classes.
- Global CSS classnames are no longer exposed, so you can't override or apply them anymore.
- `data-testid` attributes were added, so you can target components by them instead of global class names.

## Why migrate?

Version 1 won't receive new features, only critical bug fixes - so if you want to use new features you should migrate to version 2.

## How to migrate?

### Remove overrides of Vibe's global CSS classes

Remove overrides of Vibe's global CSS classes (mostly prefixed with `monday-style-`). Some of them could be replaced with corresponding className props.  
Before:

```diff
- .monday-style-button {
-   margin-left: var(--spacing-small);
- }
- <Button>Click me</button>
```

After:

```diff
+ .click-me-button {
+     margin-left: var(--spacing-small);
+ }
+ <Button className="click-me-button">Click me</Button>
```

### Remove direct usages of Vibe's global CSS classes

Before:

```diff
- <button className="monday-style-button ...">Click me</button>
```

After:

```diff
+ <Button>Click me</Button>
```

### Fix jests selectors

Fix tests selectors to use `data-testid` instead of global CSS classes.  
Before:

```diff
- document.querySelector('monday-style-button').click();
```

After:

```diff
+ <Button data-testid="my-button"/>
+ document.querySelector(['data-testid="my-button"']).click();
```

### Jest snapshot tests config

If you use jest snapshot testing, fix `jest.config.js` to use `moduleNameMapper` for package entry with mocked classnames - so they won't change names during snapshot testing.

```diff
+ moduleNameMapper: {
+     "monday-ui-react-core": "monday-ui-react-core/dist/mocked_classnames_esm/src/index.js"
+ }
```

### Component's imports

CommonJS imports for components and hooks from the `dist` are going to be deprecated soon, so, please, consider using ESM type of imports.  
Before:

```diff
- import Button from "monday-ui-react-core/dist/Button";
```

After:

```diff
+ import { Button } from "monday-ui-react-core";
```

### Replace main.css import with tokens import

Previously `main.css` contained all the style definitions + `monday-ui-style` tokens and was required to import, now instead of this you should just load `monday-ui-style` tokens via separate endpoint.

Before:

```diff
- import "monday-ui-react-core/dist/main.css";
```

After:

```diff
+ import "monday-ui-react-core/tokens";
```
