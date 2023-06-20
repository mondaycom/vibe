# css-modules-codemod-automation

Converts React components using imported CSS stylesheets to equivalent CSS Modules syntax.

## Usage

There are several options of using this codemod. You can find them all in `package.json`:

1. [Recommended] Run script only against files in the list:
   - Fill the list with files to migrate in `shell_scripts/files_to_run_list.txt`
   - [Hint] File `.whitelist_old.txt` would come in handy - it have a list of all components divided by old PRs - components from 2 old PRs form a prerelease.
   - Modify `ROOT_PATH` variable in `shell_scripts/run_for_files_list.sh` so it would have needed path prefix
   - Run `shell_scripts/run_for_files_list.sh`
2. Run script against directory or specific file

[Hint] For both of the ways there is also a `.whitelist.txt` file - file is containing paths to components which should be ignored during the run.

## Development

If there is a need to debug the script, there is a file called `print.ts`, there you can edit `SHOULD_LOGGING` to be `true`, so every console.log (there are a lot of console logs) - would be displayed.
Methods `printWithCondition` and `printAlways` might be also helpful, if the problem is getting narrowed down.

In general to understand the flow you can track down `index.ts`, which is adding the first visitor, which calls the rest of them. Each visitor is numbered and have it's purpose is documented in the comments.

## Known issues - pay attention

- `data-testid` attribute might be added to a wrong place or not be added at all
- Not all `bemHelpers` cases might be resolved properly
- `CSSTransition` animations require additional attention
- imports are being inserted in a first line, which sometimes hurts `eslint disable` statements, which should come at first line instead
- sometimes components are overriding each other styles - in general it should be removed (as old class names would be removed soon), but for a temp solution `:global` pseudo class might be used

## TODO

- Use `getStyle` when replacing Template literals

## Example

Given this (simplified) CSS file and React component:

```css
/* sample-button.scss */
.button {
  flex: 1;
  background-color: #eee;
  color: #222;
}
```

```ts
/* sample-button.tsx */
import "./sample-button.scss";

export default ({ children }) => <div className="button">{children}</div>;
```

It will product the following, _modified_ component:

```ts
/* sample-button.tsx */
import * as styles from "./sample-button.scss";

export default ({ children }) => <div className={cx("button", styles.button)}>{children}</div>;
```

```css
/* sample-button..module.scss */
.button {
  flex: 1;
  background-color: #eee;
  color: #222;
}
```
