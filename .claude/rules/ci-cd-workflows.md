---
paths:
  - ".github/workflows/**"
  - ".github/actions/**"
---

# CI/CD Workflows (GitHub Actions)

**Purpose**: This rule provides guidance on the CI/CD pipeline, GitHub Actions workflows (defined in .github/workflows/), custom actions (in .github/actions/), versioning strategies, and release processes.

**Apply to**:
- `.github/workflows/**`
- `.github/actions/**`

**Use when**: Query involves CI/CD, build/test issues, release procedures, versioning questions, or if it references files within the .github/workflows or .github/actions directories.

This project uses GitHub Actions for its Continuous Integration (CI) and Continuous Deployment (CD) pipelines.

## Workflow Definitions

The main workflow definitions are located in the `.github/workflows/` directory. Key workflows include:

- `pr.yml`: Runs checks on every Pull Request.
- `test.yml`: A reusable workflow to run unit tests, e2e, bundle size checks, linting, etc. Gets called on PRs and Release.
- `build-and-upload.yml`: Probably handles building artifacts and uploading them.
- `release.yml`: Manages the release process of Vibe v3 (@vibe/core@3) for new versions.
- `release-v2.yml`: Manages the release process of Vibe v2 (monday-ui-react-core@2) for critical bug fixes.
- `prerelease.yml`: Handles pre-release versions.
- `publish-storybook.yml`: Publishes new versions of Storybook. Gets called automatically after release or by calling it manually.
- `chromatic.yml`: Creates a Chromatic build to check for visual regression testing of the library's UI components.

## Custom Actions

The workflows may utilize custom reusable GitHub Actions defined in the `.github/actions/` directory. These custom actions encapsulate specific steps or logic. Notable custom actions include:

- `setup/`: Setting up the environment, installing dependencies.
- `determine-lerna-since-flag/`: Calculates whether we're running on master or on a branch, to determine the "--since" flag value for lerna.
- `check-changed-packages/`: Identifies which packages were modified in a PR to run targeted tests or builds only if changes were found.
- `download-builds/`: Downloads build artifacts. Used in workflows that uses `build-and-upload.yml` to download the uploaded build artifact.
- `git-creds/`: Handles Git credentials setup.

When trying to understand the CI/CD process, refer to these directories and files. The YAML files in `.github/workflows/` define the triggers and jobs and reusable workflows, while the subdirectories in `.github/actions/` contain the logic for custom actions (reusable actions).

## Workflow Structure

### Pull Request Workflow
1. **PR Created**: `pr.yml` triggers
2. **Tests Run**: `test.yml` executes unit tests, e2e, linting
3. **Visual Regression**: `chromatic.yml` checks for UI changes
4. **Build Verification**: Ensures all packages build successfully

### Release Workflow
1. **Release Trigger**: `release.yml` for v3 or `release-v2.yml` for v2
2. **Build and Test**: Full test suite execution
3. **Version Bump**: Lerna handles versioning
4. **Publish**: Packages published to npm
5. **Storybook Update**: `publish-storybook.yml` updates documentation

### Prerelease Workflow
1. **Prerelease Trigger**: `prerelease.yml` for beta/alpha versions
2. **Testing**: Reduced test suite for faster feedback
3. **Publish**: Tagged prerelease versions

## Custom Action Usage

When workflows need to:
- **Set up environment**: Use `setup/` action
- **Determine changed packages**: Use `check-changed-packages/` action
- **Handle Git operations**: Use `git-creds/` action
- **Download artifacts**: Use `download-builds/` action

## Claude Implementation Notes

When working with CI/CD:

- **Check `.github/workflows/`** for workflow definitions
- **Review `.github/actions/`** for custom action implementations
- **Understand the release process** distinction between v2 (legacy) and v3 (current)
- **Use appropriate workflow** for different types of changes
- **Leverage custom actions** for common operations
- **Consider visual regression testing** when making UI changes
- **Follow the established patterns** for new workflows or actions