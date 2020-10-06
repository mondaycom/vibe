# Monday UI React Core
>[monday.com](monday.com) React components library - [Storybook](style.monday.beer)

## Installation
Install the component library
```
$ npm install @mondaydotcomorg/monday-ui-react-core
```

## Usage
You can either ` import { Button } from "@mondaydotcomorg/monday-ui-react-core";`

or you might want to import directly the component ` import Button from "@mondaydotcomorg/monday-ui-react-core/dist/Button";`   

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
We support theming from the library to the component level using css variables - for more info on theming please read the THEME_README.md file

