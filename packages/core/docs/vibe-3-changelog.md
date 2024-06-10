# Vibe 3 Changelog

- Removed `monday-ui-react-core/next` - import `Heading`, `Search`, `EditableHeading` from `monday-ui-react-core` instead.
- Removed `SearchComponent` and `Input` components - use [`Search`](https://style.monday.com/?path=/docs/inputs-search--docs) and [`TextField`](https://style.monday.com/?path=/docs/inputs-textfield--docs) respectively.
- `Search` has changed - follow the [`Search` docs](https://style.monday.com/?path=/docs/inputs-search--docs) for the new API.
- `Text` and `Heading` component API and style changed - use the [typography migration guide](https://style.monday.com/?path=/docs/typography-migration-guide--docs) to migrate.
- `EditableInput` removed, use [`TextField`](https://style.monday.com/?path=/docs/inputs-editabletext--docs) instead

## SplitButton

- We're now accepting instead of static props, inline string, e.g. "bottom-start". We need to change DialogPosition to be a string in its root declaration (this also requires big codemod changes probably)

- Requires codemod for when people used secondaryDialogPosition={SplitButton.secondaryBlaBla}.

- Once changing DialogPosition to be a const, instead of enum, remove DialogPosition double declaration from SplitButton's declaration
