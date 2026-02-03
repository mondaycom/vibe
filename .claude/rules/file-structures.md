# File Structure Conventions for @vibe/core

**Purpose**: Outlines file and directory structure conventions within the `@vibe/core` package (located in `packages/core/`), including top-level "src/" and component-specific organization (tests, stories, sub-components, hooks).

This document outlines the typical file and directory structure within the `packages/core` library. Adhering to these conventions helps maintain consistency and predictability across the codebase.

## Top-Level Structure within `packages/core/src`

The `packages/core/src` directory generally contains the following:

- **`components/`**: Houses all UI components. Each component resides in its own subdirectory.
- **`hooks/`**: Contains custom React hooks that are reusable across multiple components.
- **`utils/`**: Includes utility functions that are not specific to any single component or hook.
- **`types/`**: Defines shared TypeScript types and interfaces used throughout the `@vibe/core` library.
- **`constants/`**: Stores constant values used across the library.
- **`styles/`**: Can include global styles or theme-related style files, although most component-specific styling is co-located with the component. It is preferred to not add new code to this directory.
- **`index.ts`**: The main export file for the `@vibe/core` library, re-exporting key modules and components.

## Component-Specific Structure (`packages/core/src/components/ComponentName/`)

Each component within `packages/core/src/components/` should follow a consistent structure:

### Core Files

- **`ComponentName.tsx`**: The main React component file.
- **`ComponentName.types.ts`**: TypeScript type definitions and interfaces specific to the component.
- **`ComponentName.module.scss`**: SCSS module for styling the component.
- **`index.ts`**: Exports the component and related types/interfaces.

### Subdirectories

- **`__tests__/`**: Contains unit and integration tests **only for the main component files** in the root directory.
  - Files within this directory follow the pattern `ComponentName.test.ts`.
  - **DO NOT** place tests for subcomponents, hooks, utils, or context in this directory.
- **`components/`**: For more complex components, this directory can house sub-components that are only used by `ComponentName`.
  - **Each subcomponent should have its own `__tests__/` directory** if tests are needed.
  - Structure: `ComponentName/components/SubComponent/__tests__/SubComponent.test.tsx`
- **`hooks/`**: Custom React hooks that are specific to `ComponentName` and not intended for reuse elsewhere.
  - **Should contain a `__tests__/` subdirectory** if hook tests are needed.
  - Structure: `ComponentName/hooks/__tests__/useHookName.test.ts`
- **`utils/`**: Utility functions specific to `ComponentName`.
  - **Should contain a `__tests__/` subdirectory** if utility tests are needed.
  - Structure: `ComponentName/utils/__tests__/utilityName.test.ts`
- **`context/`**: If a component uses React Context, the context definition, provider, and consumer hook should be placed in this subdirectory (e.g., `ComponentName/context/ComponentNameContext.ts`).
  - **Should contain a `__tests__/` subdirectory** if context tests are needed.
  - Structure: `ComponentName/context/__tests__/ComponentNameContext.test.ts`
- **`consts/`**: Component-specific constant values that are not intended for reuse elsewhere.
  - **DO NOT** place constants files at the root of the component directory.
  - **Use meaningful file names** that describe the purpose, not generic names like `MyComponentConstants.ts` or `consts.ts`.
  - Examples: `ComponentName/consts/variants.ts`, `ComponentName/consts/validate-colors.ts`, `ComponentName/consts/sizes.ts`
  - **Should contain a `__tests__/` subdirectory** if constants tests are needed.
  - Structure: `ComponentName/consts/__tests__/sizes.test.ts`

### General Guidelines

- **Simpler Components**: For simpler components, not all subdirectories (`hooks/`, `utils/`, `components/`, `context/`, `consts/`) are necessary. Files like `ComponentName.tsx`, `ComponentName.types.ts`, `ComponentName.module.scss`, `index.ts`, and directories for tests (`__tests__/`) and stories (`__stories__/`) are sufficient in most of the cases.
- **Reusability**: If a hook, utility, or constant is reusable across multiple components (not potentially reusable, but actually reused in more than one component), it should be placed in the top-level `packages/core/src/hooks/`, `packages/core/src/utils/`, or `packages/core/src/constants/` directories, respectively.
- **Exports**: The `index.ts` file in each component directory should be the primary point of export for that component and its related parts. The main `packages/core/src/index.ts` should then re-export these components.

## Component Structure Examples

### Simple Component Structure
```
MySimpleComponent/
├── MySimpleComponent.tsx
├── MySimpleComponent.types.ts
├── MySimpleComponent.module.scss
├── index.ts
└── __tests__/
    └── MySimpleComponent.test.tsx
```

### Complex Component Structure
```
MyComplexComponent/
├── MyComplexComponent.tsx
├── MyComplexComponent.types.ts
├── MyComplexComponent.module.scss
├── index.ts
├── __tests__/
│   └── MyComplexComponent.test.tsx
├── components/
│   ├── SubComponent/
│   │   ├── SubComponent.tsx
│   │   ├── SubComponent.types.ts
│   │   ├── SubComponent.module.scss
│   │   ├── index.ts
│   │   └── __tests__/
│   │       └── SubComponent.test.tsx
├── hooks/
│   ├── useMyHook.ts
│   └── __tests__/
│       └── useMyHook.test.ts
├── utils/
│   ├── helperFunction.ts
│   └── __tests__/
│       └── helperFunction.test.ts
├── context/
│   ├── MyComplexComponentContext.ts
│   └── __tests__/
│       └── MyComplexComponentContext.test.ts
└── consts/
    ├── variants.ts
    ├── sizes.ts
    └── __tests__/
        ├── variants.test.ts
        └── sizes.test.ts
```

## Claude Implementation Notes

When organizing component file structures:

- **Follow the established directory patterns** exactly as specified
- **Keep tests co-located** with their respective code (hooks, utils, context, etc.)
- **Use meaningful names for constant files** instead of generic names
- **Place reusable code at top-level** (`packages/core/src/hooks/`, `utils/`, `constants/`)
- **Keep component-specific code scoped** to the component directory
- **Always include an `index.ts`** in each component directory as the primary export point
- **Don't create unnecessary subdirectories** for simple components
- **Organize by feature, not file type** within component directories
- **Maintain consistent naming patterns** across all components