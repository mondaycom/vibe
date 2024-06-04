# Vibe 3 Changelog

## SplitButton
- We're now accepting instead of static props, inline string, e.g. "bottom-start". We need to change DialogPosition to be a string in its root declaration (this also requires big codemod changes probably)

- Requires codemod for when people used secondaryDialogPosition={SplitButton.secondaryBlaBla}.

- Once changing DialogPosition to be a const, instead of enum, remove DialogPosition double declaration from SplitButton's declaration

