# CSS modules migration

We are in the middle of migrating all our components in this package to [CSS modules](https://github.com/css-modules/css-modules).
This is because we aspire to make all our components classes and animation names scoped locally by default - this way we can make sure that all our components are encapsulated and don't override each other's styles, besides that CSS modules provide type-safety.

## How to migrate your component to CSS modules:

To migrate your component to CSS modules, you'll need to:

- Rename your `.scss` file to `.module.scss`
- Rename all your classes and animations to be camelCase instead of kebab-case
- Import your styles object into your `.js` or `.jsx` file as follows:

```
import styles from "YourStyleFile.module.scss"
```

- Use `classnames` package if you need to combine multiple classes:

```
import cx from "classnames";
```

- Use your styles object like so:

```
<Component className={cx(styles.componentClass, styles.anotherComponentClass)}/>
```
