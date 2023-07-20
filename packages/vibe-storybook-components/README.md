# Vibe Storybook Components

![image](https://user-images.githubusercontent.com/60314759/147566893-63c5209a-8b83-4f32-af61-8b4c350ec770.png)

[monday.com](https://www.monday.com) Collection of Storybook components, with which [monday-ui-react-core](https://github.com/mondaycom/monday-ui-react-core) storybook is built - [style.monday.com](https://style.monday.com).

## Installation

Install the component library

```
$ npm install vibe-storybook-components
```

## Usage

All the package content is imported from the library's root entry:

```javascript
import { ComponentName } from "vibe-storybook-components";
```

After that these components can be used in your storybook: either directly in story files
```mdxjs
<ComponentName>Button</ComponentName>
```
or in the storybook `preview.js` file
```js
addParameters({
    docs: {
        components: {
            h1: ComponentName
        }
    }
});
```
so that they can be used in the storybook's markdown files like this:
```mdxjs
# Button
```

### Styling

Most of the components have a `className` prop that can be used to style them. The className prop is a string that is added to the component's class list. The className prop is not required, but it's recommended to use it for styling.

## Storybook

![Work in Progress](https://img.shields.io/badge/status-WIP-orange.svg)  
<b>[Storybook content is in active development.]</b>  

To run the storybook locally run this command:

```
yarn run storybook
```
