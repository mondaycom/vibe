# babel-plugin-codemod-react-css-modules

Converts React components using imported CSS stylesheets to equivalent CSS Modules syntax.

## Example

Given this (simpilified) CSS file and React component:

```css
/* button.css */
.button {
	flex: 1;
	background-color: #eee;
	color: #222;
}
```

```ts
/* button.tsx */
import "./button.css";

export default ({ children }) => <div className="button">{children}</div>;
```

It will product the following, _modified_ component:

```ts
/* button.tsx */
import * as styles from "./button.css";

export default ({ children }) => (
	<div className={styles["button"]}>{children}</div>
);
```

## Usage

Running the following command will `codemod` all files in `dir/` (**Make sure they're checked into source control!**):

```bash
npx codemod -p babel-plugin-codemod-react-css-modules dir/
```

You can also pass options to the plugin like so

```bash
npx codemod \
	-p babel-plugin-codemod-react-css-modules \
	-o react-css-modules='{ "importIdentifier": "css" }' \
	path/to/file
```

Or store them in a file e.g. `options.json` and reference them using the `@` syntax:

```bash
npx codemod \
	-p babel-plugin-codemod-react-css-modules \
	-o react-css-modules=@options.json \
	path/to/file
```

For a list of valid options see [`src/index.ts:PluginOptions`](/src/index.ts#L9)

## More examples

## FAQ

### It missed some classes in my component?

The plugin will attempt to convert any string literals specifically that have a value within the list of CSS class names of the imported `.css` file.

It will also attempt to process strings within variables referenced in the `className` expression e.g. `className={className}` will result in the scoped `className` variable being recursively processed as outlined above.

This logic is scoped to only affect statements within JSX `className` declarations, which might not pick up 100% of edge cases. In particular, it won't pick up stuff like... `className={"button--"+variant}`, since the full class name wouldn't be known until runtime. You'll need to handle this case manually

### It missed some classes in my CSS?

This plugin uses `postcss` and the `postcss-modules` plugin to get a list of valid CSS class names from the imported `.css` file. If it isn't picking up one of your classes, you might need to include a custom `postcss` plugin to handle your CSS. See below for details.

### It broke all my UI!

You'll need to modify your `webpack` or other bundling environment to load the CSS files using the `CSS Modules` specification for this to work once the codemod is done.

`css-loader` supports `CSS Modules` out the box, or if you prefer you can use `postcss-loader` and the `postcss-modules` plugin instead.

### Can I pass in custom PostCSS plugins?

Yes, the plugin will look for your `postcss.config.js` file (or similar) thanks to it using the `postcss-load-config` module.

### Does it support SCSS/LESS/Preprocessors?

Yes, see above.

### Can I customize the name identifier used for the CSS import?

Yes, see `PluginOptions` in [`src/index.ts`](/src/index.ts#L9)
