<p align="center">
  <img src="https://user-images.githubusercontent.com/60314759/147566893-63c5209a-8b83-4f32-af61-8b4c350ec770.png" width="300px" alt="Vibe Design System, by monday.com">
  <h1 align="center">Vibe Design System</h1>
</p>

<p align="center">
Official <a href="https://monday.com">monday.com</a> UI resources for application development in React.js
</p>

<p align="center">
  <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@vibe/core">
  <a href="https://bundlephobia.com/package/@vibe/core"><img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/@vibe/core"></a>
  <a href="https://www.npmjs.com/package/@vibe/core"><img alt="NPM Version" src="https://img.shields.io/npm/v/@vibe/core?label=@vibe/core"></a>
  <a href="https://github.com/mondaycom/vibe/stargazers"><img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/mondaycom/vibe"></a>
</p>

<p align="center">
  <a href="https://vibe.monday.com">Documentation</a> •
  <a href="https://vibe.monday.com/?path=/docs/catalog--docs">Catalog</a> •
  <a href="https://vibe.monday.com/?path=/story/playground--playground">Playground</a>
</p>

## Overview

Vibe Design System is a collection of packages designed to streamline your development process and enhance the user experience, by providing a set of components, styles, and guidelines for building applications in React.js.

## Installation

```bash
npm install @vibe/core
# or
yarn add @vibe/core
```

To load all the relevant CSS tokens, import the tokens file in your root application file:

```javascript
import "@vibe/core/tokens";
```

## Usage

Components are imported from the library's root entry:

```javascript
import { Button } from "@vibe/core";
```

## Ecosystem

- [@vibe/core](https://github.com/mondaycom/vibe/blob/master/packages/core/README.md): Core component library
- [@vibe/icons](https://github.com/mondaycom/vibe/blob/master/packages/icons/README.md): Icons library
- [@vibe/testkit](https://github.com/mondaycom/vibe/blob/master/packages/testkit/README.md): Testing utilities for Playwright
- [@vibe/codemod](https://github.com/mondaycom/vibe/blob/master/packages/codemod/README.md): Codemods and CLI tools
- [monday-ui-style](https://github.com/mondaycom/vibe/blob/master/packages/style/README.md): Styling foundations (included in @vibe/core)
- [vibe-storybook-components](https://github.com/mondaycom/vibe/blob/master/packages/storybook-blocks/README.md): Vibe Storybook Blocks
- [storybook-addon-playground](https://github.com/mondaycom/storybook-addon-playground/): A Component Playground Addon for Storybook

## Older Versions

Vibe 2 ([`monday-ui-react-core`](https://www.npmjs.com/package/monday-ui-react-core)) will no longer receive new features or enhancements but will continue to receive critical bug fixes as needed. We highly recommend following the [migration guide](http://vibe.monday.com/?path=/docs/migration-guide--docs) to upgrade to the actively maintained Vibe 3, which includes the latest improvements, new components, and ongoing support.

For version 2 documentation, see [vibe.monday.com/v2](https://vibe.monday.com/v2).

## Contributing

We welcome and encourage every contributor! Please read our [Contribution Guide](http://vibe.monday.com/?path=/docs/contributing--docs).

## Suggestions

If you have any questions or suggestions, please feel free to open a [discussion](https://github.com/mondaycom/vibe/discussions).

Found a bug? Please [open an issue](https://github.com/mondaycom/vibe/issues/new/choose).
