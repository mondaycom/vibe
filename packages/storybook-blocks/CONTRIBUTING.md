# Contribution guidelines

This is an **official library** of shared UI **storybook components**. It is used both for internal and external storybook pages development.

This library is open-sourced, and we encourage everyone to use and contribute into it.

## How to contribute

1. Create a fork of this repository
2. Please use the correct node version it is listed in the `.nvmrc` file (you can use `nvm use` in order to switch to the right node version).
3. Install dependencies with `yarn install` command
4. Sync from upstream if needed
5. Run Storybook environment locally with `yarn storybook` command.
6. Make sure all components behave as expected by running all Jest tests locally with 'yarn test'.
7. If there are changes in some of the library snapshot tests, make sure all changes are intentional. If they are, update them with 'yarn test:update'.
8. Commit to your local fork using [Semantic Commit Messages](https://seesparkbox.com/foundry/semantic_commit_messages)
9. Create a PR with title based using [Semantic Commit Messages](https://seesparkbox.com/foundry/semantic_commit_messages)
   For example: `docs: add <ComponentName> story page`
10. Wait for the Design and Code review
11. Enjoy your change after merge!

## Information about the project

### Storybook

As the main development environment and documentation playground, we are using [Storybook](https://storybook.js.org/).
Each component should be developed in isolation in the Storybook environment.
You can read more about our docs implementation best practices [here](COMPONENTS_DOCUMENTATION_GUIDELINES.md).

### Linting

We use [Prettier](https://prettier.io/) with the default community guidelines. Please, make sure that you are formatting your code with prettier.

### Commits

We are using [Semantic commits](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) convention for creating Pull Requests and commits messages inside the Pull Request.

### Releasing [only for maintainers]

To release a new version, you can run the ["Release new version" workflow](https://github.com/mondaycom/vibe/actions/workflows/release.yml).

If you want to run it locally, you can do so with [Github's CLI](https://cli.github.com/):

```
$ gh workflow run "Release new version"
```
