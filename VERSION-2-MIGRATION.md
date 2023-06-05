# Vibe 2 Migration

## What's changed?

- CSS modules migration - we are now using css modules instead of global css classes, this allows us to have better encapsulation and fewer conflicts with other css classes.
- `data-testid` attributes were added, so you can target components by them instead of global class names.

## Why migrate?

Version 1 won't receive new features, only critical bug fixes - so if you want to use new features you should migrate to version 2.

## How to migrate?

- Remove overrides of Vibe's global css classes (mostly prefixed with `monday-style-`). Some of them could be replaced with corresponding className props.
- Fix tests selectors to use `data-testid` instead of global css classes.
