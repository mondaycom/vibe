# babel-plugin-react-data-testid

[![Build Status](https://travis-ci.com/akameco/babel-plugin-react-data-testid.svg?branch=master)](https://travis-ci.com/akameco/babel-plugin-react-data-testid)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier) <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

> babel plugin for react data-testid attributes

## Install

```
$ npm install --save-dev babel-plugin-react-data-testid
$ yarn add --dev babel-plugin-react-data-testid
```

## Usage

.babelrc.json

```json
{
  "plugins": ["react-data-testid"]
}
```

Before:

```js
function Div() {
  return <div />
}

const Hello = () => <div>hello</div>
```

After:

```js
function Div() {
  return <div data-testid="Div" />
}

const Hello = () => <div data-testid="Hello">hello</div>
```

_Note_: Does not support class components.

### Options

#### attributes

By default attributes with name `data-testid` will be added. You can also define custom attribute names via plugin options in your babel config.

.babelrc.json

```json
{
  "plugins": [["react-data-testid", { "attributes": ["data-cy"] }]]
}
```

```js
function Div() {
  return <div />
}

const Hello = () => <div>hello</div>
```

After:

```js
function Div() {
  return <div data-cy="Div" />
}

const Hello = () => <div data-cy="Hello">hello</div>
```

If you need to add multiple attributes, you can define an attributes array as follows:

```json
{
  "plugins": [
    ["react-data-testid", { "attributes": ["data-testid", "data-cy"] }]
  ]
}
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://akameco.github.io"><img src="https://avatars2.githubusercontent.com/u/4002137?v=4" width="100px;" alt=""/><br /><sub><b>akameco</b></sub></a><br /><a href="https://github.com/akameco/babel-plugin-react-data-testid/commits?author=akameco" title="Code">💻</a> <a href="https://github.com/akameco/babel-plugin-react-data-testid/commits?author=akameco" title="Documentation">📖</a> <a href="#infra-akameco" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/akameco/babel-plugin-react-data-testid/commits?author=akameco" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [akameco](http://akameco.github.io)
