# @vibe/codemod

> Vibe Design System's Codemods and CLI tools for automating migrations and transformations

The @vibe/codemod package is designed to automate the migration to the latest version of the Vibe design system. It applies specific transformations to your codebase based on the migration type you choose. The tool can be run interactively or via command-line arguments.

## Usage

To run, use the following command:

```bash
npx @vibe/codemod [options]
```

## Options

### `--migration` (alias: `-m`)

- **Description**: Specifies which migration type to run (e.g., `v3`).
- **Choices**: `v3`
- **Required**: Yes
- **Example**:

  ```bash
  npx @vibe/codemod --migration v3
  ```

### `--target` (alias: `-t`)

- **Description**: Specifies the target directory where the transformations will be applied.
- **Default**: Current working directory (`process.cwd()`)
- **Required**: No
- **Example**:

  ```bash
  npx @vibe/codemod --target /path/to/your/project
  ```

### `--extensions` (alias: `-x`)

- **Description**: Specifies which file extensions to include for the migration.
- **Choices**: `jsx`, `tsx`, `js`, `ts`
- **Default**: `jsx`, `tsx`
- **Required**: No
- **Example**:

  ```bash
  npx @vibe/codemod --extensions jsx tsx
  ```

### `--verbose` (alias: `-v`)

- **Description**: Enables verbose mode. When enabled, detailed logs of the transformation process will be printed.
- **Default**: `false`
- **Example**:

  ```bash
  npx @vibe/codemod --verbose
  ```

## Included Migrations

The following migrations are included in this CLI:

### `v3` Migration

- **Migration Type**: `v3` (`--migration v3`)
- **Description**: This migration transforms components and files to comply with version 3 of @vibe/code.
