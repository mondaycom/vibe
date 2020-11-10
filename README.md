# Monday UI React Core
>[monday.com](https://www.monday.com) React components library - [Storybook](https://style.monday.com)

## Installation
Install the component library
```
$ npm install monday-ui-react-core
```

## Usage
You can either ` import { Button } from "monday-ui-react-core";`
or you might want to import directly the component ` import Button from "monday-ui-react-core/dist/Button";`   

You also need to import Main CSS file to your project
`import "monday-ui-react-core/dist/main.css"`

## Storybook
We are using storybook in order to develop the components independently from any consumer.
run this to build & run the storybook locally:
```
npm run storybook
```
the storybook will hosted on http://localhost:7007


## Developing locally with your consumer application
When developing locally we are using a npm functionality called npm link, this allows us to 
work locally on our package and use it in a different project without publishing.
This functionality basically overrides the npm mapping between package name to its repo, and points it to where the package is located locally.

### Troubleshooting local development
* If you are using NVM, make sure both packages are using the same version.
* Because we are using react hooks and having react as a peerDependency - if you want to develop locally and encounter issues with "invalid hook call" [See this github thread](https://github.com/facebook/react/issues/13991). The quick fix is in your webpack config file alias react to resolve the node_modules path


  
go to the project's directory and run:
```
nvm use
npm unlink
npm link
npm start
```

## Contributing
We welcome every contributor, please read the [contribution guidelines](CONTRIBUTING.md) before submitting a PR 

## Themes
We support theming from the library to the component level using css variables - for more info on theming please read the [theme guidelines](THEME_README.md) file

## Release
Perform the following steps to **release** a **new version**:
* bump the version in `package.json`
* merge into `origin/master`
* [release](https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/managing-releases-in-a-repository) the new version in the [monday-ui-react-core
](https://github.com/mondaycom/monday-ui-react-core)
