# Vibe Storybook Components

![image](https://user-images.githubusercontent.com/60314759/147566893-63c5209a-8b83-4f32-af61-8b4c350ec770.png)

[monday.com](https://www.monday.com) Collection of Storybook components, with which [Vibe](https://github.com/mondaycom/vibe) storybook is built - [style.monday.com](https://style.monday.com).

## Installation

Install the component library

```
$ npm install vibe-storybook-components
```

## Usage

**Styles**: Import the library's styles in your storybook `preview.js` file:

```javascript
import 'vibe-storybook-components/index.css';
```

**Components**:
There are 2 ways to use the components:

1. Import the components from the library's main entry, like this:

```javascript
import { ComponentName } from 'vibe-storybook-components';
```

and then use in a story like this:

```mdxjs
<ComponentName>Button</ComponentName>
```

2. Import and map the components once in the storybook's `preview.js` file, like this:

```javascript
import { ComponentName } from 'vibe-storybook-components';
```

```javascript
import { ComponentName } from 'vibe-storybook-components';
...
addParameters({
  docs: {
    components: {
      h1: ComponentName,
      ComponentName
    },
  },
});
```

and then use in the storybook's markdown files like this:

```mdxjs
# Button
```

or like this

```mdxjs
<h1>Button</h1>
```

or like this without a corresponding import

```mdxjs
<ComponentName>Button</ComponentName>
```

### Styling

Most of the components have a `className` prop that can be used to style them. The className prop is a string that is added to the component's class list. The className prop is not required, but it's recommended to use it for styling.

## Storybook

![Work in Progress](https://img.shields.io/badge/status-WIP-orange.svg)  
<b>[Storybook content is in active development.]</b>

To run the storybook locally run this command:

```
yarn storybook
```

the storybook will hosted on http://localhost:6005

## Developing locally with your consumer application

When developing locally we are using a npm functionality called yarn link, this allows us to
work locally on our package and use it in a different project without publishing.
This functionality basically overrides the npm mapping between package name to its repo, and points it to where the package is located locally.

### Troubleshooting local development

- If you are using NVM, make sure both packages are using the same version.
- Because we are using react hooks and having react as a peerDependency - if you want to develop locally and encounter issues with "invalid hook call" [See this github thread](https://github.com/facebook/react/issues/13991). The quick fix is in your webpack config file alias react to resolve the node_modules path

go to the project's directory and run:

```
nvm use
yarn unlink
yarn link
npm start
```
