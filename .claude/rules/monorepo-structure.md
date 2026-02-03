# Monorepo Navigation & Structure

**Purpose**: This rule explains the monorepo's structure, including package locations, file organization conventions, creating new packages, details on scripts (both global and package-specific), shared configurations, and the use of tools like Lerna and Yarn Workspaces.

**Apply to**:
- `lerna.json`
- `package.json`

**Use when**: Creating new packages, understanding where packages are located, navigating the file structure, or inquiring about monorepo-level configurations and tooling.

This project is a Lerna monorepo that utilizes Yarn Workspaces for managing packages.

## Package Organization

- **Package Location**: All individual packages are located within the `packages/` directory. When looking for specific package code, navigate to `packages/` and find the relevant sub-directory for that package.

## Yarn Workspaces

- **Dependencies**: Dependencies between packages in this monorepo are managed by Yarn Workspaces. Running `yarn install` at the root of the project will install all dependencies for all packages and link them together.
- **Adding Dependencies**:
  - To a specific package: `yarn workspace <package-name> add <dependency-name>`
  - Dev dependency to specific package: `yarn workspace <package-name> add -D <dependency-name>`
  - To the root (for global tools like Lerna): `yarn add -W <dependency-name>`

## Running Scripts

- **Root Scripts**: Scripts defined in the root `package.json` (like `build`, `lint`, `test`) often use Lerna to run corresponding scripts in each package (e.g., `lerna run build`).
- **All Packages**: You can run a script for all packages using: `yarn workspaces run <script-name>` or `lerna run <script-name>`.
- **Specific Package**: To run a script in a specific package: `yarn workspace <package-name> run <script-name>`.

## Lerna

Lerna is used for tasks like versioning, publishing, and running commands across multiple packages. Key commands:

- `lerna run <script>`: Runs an npm script in each package that contains that script.
- `lerna exec -- <command>`: Executes an arbitrary command in each package.

## Shared Configuration

Look for shared development configurations (e.g., ESLint, Prettier, Stylelint, TypeScript `tsconfig.json`) in the root directory. These often provide a base configuration for all packages, though individual packages might extend or override them.

## Common Package Structure

The monorepo typically contains these packages:

- **`packages/core/`**: Main `@vibe/core` library with components, hooks, utils, types
- **`packages/components/`**: Individual component packages (e.g., `@vibe/tooltip`, `@vibe/dialog`)
- **`packages/icons/`**: Icon library
- **`packages/docs/`**: Documentation and Storybook stories
- **`packages/style/`**: Styling utilities and design tokens

## Claude Implementation Notes

When working with the monorepo:

- **Always navigate to `packages/`** to find specific package code
- **Use `yarn workspace` commands** for package-specific operations
- **Use `lerna run` or `yarn workspaces run`** for cross-package operations
- **Check root directory** for shared configurations
- **Understand the workspace structure** before making changes
- **Use appropriate command scope** (root vs package-specific) for different operations
- **Leverage shared configurations** rather than duplicating in individual packages