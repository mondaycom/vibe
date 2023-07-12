# Contribution Guidelines

This is an **official library** of shared UI components for Monday builders. It is used for both internal and external Monday app development.

This library is open source, and we encourage everyone to use and contribute to it.

## How to Contribute

1. Create a fork of this repository.
2. Please use the correct node version listed in the `.nvmrc` file (you can use `nvm use` to switch to the right node version).
3. Install dependencies with the `npm install` command.
4. Sync from upstream if needed.
5. Run the Storybook environment locally with the `npm run storybook` command.
6. Ensure that all components behave as expected by running all Jest tests locally with `npm run test`.
7. If there are changes in any of the library's snapshot tests, make sure all changes are intentional. If they are, update them with `npm run test:update`.
8. Commit to your local fork using [Semantic Commit Messages](https://seesparkbox.com/foundry/semantic_commit_messages).
9. Create a pull request (PR) with a title based on [Semantic Commit Messages](https://seesparkbox.com/foundry/semantic_commit_messages). For example: `feat: add new TextArea component`.
10. Go through the [checklist](PULL_REQUEST_TEMPLATE.md) in the PR and ensure that all checks pass.
11. Wait for the Design and Code review.
12. Enjoy your change after it is merged!

## Information About the Project

### Creating New Files in the Library
Our code generator, Plop, is designed to simplify the creation of frequently used boilerplate code. To utilize it, execute the command `npm run plop`. If you want to learn more about Plop, you can find additional information [here](https://plopjs.com/).
Currently, our Plop code generator supports the creation of the following:
1. Tests
2. Component story documentation pages
3. Hook story documentation pages
4. Entirely new components, including tests and story pages

We strongly recommend utilizing our Plop code generator within this repository to generate any of the mentioned items. Doing so ensures that your code will be created with the latest recommended structure, providing a solid foundation for your development tasks.

### API
If you add new features or abilities to an existing component, please ensure that your props' naming follows our conventions and best practices. Read more about it [here](./API_GUIDELINES.MD).

### Storybook
As the main development environment and documentation playground, we use [Storybook](https://storybook.js.org/).
Each component should be developed in isolation in the Storybook environment.
You can read more about our implementation best practices for documentation [here](COMPONENTS_DOCUMENTATION_GUIDELINES.md).

### Theming
Every component should support theming. You can find more information about it [here](THEME_README.md).

### Tests and Coverage
All the guidelines about testing your new component or changes to the existing one can be found [here](TESTING_README.md).

### Linting
We use [Prettier](https://prettier.io/) with the default community guidelines. Please make sure that you format your code with Prettier.

### Commits
We use the [Semantic Commits](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) convention for creating pull requests and commit messages within the pull request.

### Releasing
To release a new version, you can run the ["Release new version" workflow](https://github.com/mondaycom/monday-ui-react-core/actions/workflows/release.yml).

If you want to run it locally, you can do so with [Github's CLI](https://cli.github.com/):

```
$ gh workflow run "Release new version"
```
