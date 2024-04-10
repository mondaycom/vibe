# Vibe Design System - Core

[![npm](https://img.shields.io/npm/v/monday-ui-react-core)](https://www.npmjs.com/package/monday-ui-react-core)

![image](https://user-images.githubusercontent.com/60314759/147566893-63c5209a-8b83-4f32-af61-8b4c350ec770.png)

[monday.com](https://www.monday.com) React components library - [Storybook](https://style.monday.com)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| last 4 versions                                                                                                                                                                                                   | last 4 versions                                                                                                                                                                                               | 14+                                                                                                                                                                                                           | last 2 versions                                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                                     | last 2 versions                                                                                                                                                                                           |

## Usage

Components are imported from the library's root entry:

```javascript
import { Button } from "monday-ui-react-core";
```

In order to load all the relevant CSS tokens, you should import the `tokens` file at the root of your application file

```javascript
import "monday-ui-react-core/tokens";
```

_If your project (or it's Storybook) is importing files differently - read more [here](./DEPRECATED_IMPORTS.md)._

### Font installation

We don't import fonts ourselves, we work best with the following fonts -
Poppins, Figtree and Roboto, we recommend adding the following `link` import to your application

```html
<link
  href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
  rel="stylesheet"
/>
```

### Peer dependencies

We are reliant on React and React DOM, we are using them as externals, and we don't package them to the package, so you must have them in your project

## Storybook

We are using storybook in order to develop the components independently of any consumer.
run this to build & run the storybook locally:

```bash
yarn storybook
```

the storybook will be served on `http://localhost:7007`

## Developing locally with your consumer application

When developing locally, we are using a npm functionality called npm link, this allows us to
work locally on our package and use it in a different project without publishing.
This functionality basically overrides the npm mapping between package name to its repo, and points it to where the package is located locally.

### Troubleshooting local development

- If you are using NVM, make sure both packages are using the same version.
- Because we are using react hooks and having react as a peerDependency - if you want to develop locally and encounter issues with "invalid hook call" [see this github thread](https://github.com/facebook/react/issues/13991). The quick fix is in your webpack config file alias react to resolve the node_modules path

Go to the project's directory and run:

```zsh
nvm use
npm unlink
npm link
npm start
```

## Themes

Theming is supported using CSS variables - for more info on theming please read the [theme guidelines](./THEME_README.md) file
