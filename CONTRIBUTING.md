#Contribution guidelines
This is an **official library** of shared UI components for Monday builders. It is used both for internal and external Monday apps development.

This library is open-sourced, and we encourage everyone to use and contribute into it.

## How to contribute

1. Create a fork of this repository
2. Please use the correct node version it is listed in the `.nvmrc` file (you can use `nvm use` in order to switch to the right node version).
3. Install dependencies with `npm install` command
4. Sync from upstream if needed
5. Run Storybook environment locally with `npm run storybook` command
6. Commit to your local fork using [Semantic Commit Messages](https://seesparkbox.com/foundry/semantic_commit_messages)
7. Create a PR with title based using [Semantic Commit Messages](https://seesparkbox.com/foundry/semantic_commit_messages)
   For example: `feat: add new TextArea component`
7. Go over the [checklist](PULL_REQUEST_TEMPLATE.md) in the PR and make sure that all checks are passed
8. Wait for the Design and Code review
9. Enjoy your change after merge!

## Information about the project

### Plop

Every new component in this repository should be created using [plops](https://plopjs.com/) with `npm run plop` command.
Plop will automatically generate all required files for your new component. Plop template will always be up to date and by using it, you can be sure that your component will be created with the latest recommended structure.

### Storybook

As the main development environment and documentation playground we are using [Storybook](https://storybook.js.org/).
Each component should be developed in isolation in the Storybook environment.

### Theming

Every component should support theming, you can find more information about it [here](THEME_README.md)

### Tests and coverage

All the guidelines about testing your new component or changes to the existing one you can find [here](TESTING_README.md)

### Linting

We are using [Prettier](https://prettier.io/) with the default community guidelines. Please, make sure that you are formatting your code with prettier.

### Commits

We are using [Semantic commits](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) convention for creating Pull Requests and commits messages inside of the Pull Request.

### Releasing

To release a new version, you can run the ["Release new version" workflow](https://github.com/mondaycom/monday-ui-react-core/actions/workflows/release.yml).

If you want to run it locally, you can do so with [Github's CLI](https://cli.github.com/):

```
$ gh workflow run "Release new version"
```
