# Contribution Guide

Hi there! We're really excited that you're interested in contributing to Vibe. Before submitting your contribution, please make sure to take a moment and read through the following guidelines:

## Issue reporting

If you found a bug, please [open an issue](https://github.com/mondaycom/vibe/issues/new). Before creating new features or changing existing ones, or for general questions, please make sure to open a [discussion](https://github.com/mondaycom/vibe/discussions) first.

## Development Setup

To start working locally, run the following commands in the root directory:

```bash
nvm use
yarn install
```

Storybook is used as the project's development environment. You can use it to preview your changes and test components in isolation. To start Storybook, run:

```bash
yarn storybook
```

### Testing

There are several layers of testing, such as unit/component tests, integration, a11y, and end-to-end tests. Every new feature or bug fix should be covered by tests, depending on the type of change.

Please make sure to run tests before submitting your PR:

```bash
yarn test
```

If snapshot tests fail, and you are sure that the changes are intentional, update them by running:

```bash
yarn test:update
```

### Linting and formatting

We use [Prettier](https://prettier.io/) for code formatting. Please, make sure to use it in your editor to keep the codebase consistent.

To run linting and formatting checks, use:

```bash
yarn lint
```

### Commits

The project is using [Conventional Commits](https://www.conventionalcommits.org/) to standardize the commit messages, and release new versions automatically according to [Semantic Versioning](https://semver.org/).

Please make sure to follow the convention for creating Pull Requests and commits.

## Opening a Pull Request

When opening a PR, please make sure to:

- Create a PR title based on the [Conventional Commits](https://www.conventionalcommits.org/) format
- Add a description of the changes you're making, including the motivation for these changes, and any additional context
- Link to any related issues or discussions
- Make sure that all checks are passed

After submitting your PR, the maintainers will review your changes and provide feedback. If everything is good, your PR will be merged. We really appreciate your contribution to Vibe! 🚀
