---
paths:
  - "packages/core/src/components/**"
---

# Naming Conventions for @vibe/core

**Purpose**: Defines naming conventions for files, directories, components, props, variables, types, and CSS classes within the `@vibe/core` package (located in `packages/core/`). Ensures consistency and readability across the codebase for React components and related TypeScript/SCSS files.

This document outlines the naming conventions to be followed when developing within the `@vibe/core` library, located under `packages/core/`. Adhering to these conventions ensures consistency, readability, and maintainability across the codebase.

## General Principles

- **Clarity and Predictability**: Names should be clear, unambiguous, and predictable.
- **Consistency**: Follow established patterns consistently across all files and components.

## File and Directory Naming

### Component Folders

- Each component resides in its own directory within `packages/core/src/components/`.
- Component directory names MUST use `PascalCase`.
  - Example: `packages/core/src/components/MyNewComponent/`

### Component Files

- **Main Component File**: The main React component file MUST be named `ComponentName.tsx`, where `ComponentName` matches the directory name (`PascalCase`).
  - Example: `packages/core/src/components/MyNewComponent/MyNewComponent.tsx`
- **Style Files**: SCSS module files for components MUST be named `ComponentName.module.scss`.
  - Example: `packages/core/src/components/MyNewComponent/MyNewComponent.module.scss`
  - Refer to the styling-conventions.md file for CSS/SCSS specific conventions.
- **Type Definitions**: TypeScript type definitions for a component MUST be placed in a separate file named `ComponentName.types.ts` and not within the main component file.
  - Example: `packages/core/src/components/MyNewComponent/MyNewComponent.types.ts`
- **Constants**: Files exporting constants specific to a component SHOULD be named `ComponentNameConstants.ts`.
  - Example: `packages/core/src/components/MyNewComponent/MyNewComponentConstants.ts`
- **Index File**: Each component directory MUST have an `index.ts` file that exports the main component and any other relevant modules (types, constants, etc.).
  - Example: `packages/core/src/components/MyNewComponent/index.ts`

## Code Naming Conventions

### Component Names

- React component names MUST use `PascalCase`.
  - Example: `const MyNewComponent = (props) => { /* ... */ }`.

### Prop Names

- Prop names for React components MUST use `camelCase`.
  - Example: `<MyNewComponent isLoading={true} userName="DefaultUser" />`.
  - For boolean props, the name SHOULD clearly indicate the positive case.
    - Prefer prefixes like `is` or `has` for clarity (e.g., `isEnabled` or `isVisible` rather than just `enabled`).
    - Common, unambiguous adjective props like `loading`, `active`, `open`, `checked`, or `required` are also acceptable.
    - However, if the HTML attribute is `disabled`, using `disabled` is acceptable for consistency.

#### Prop Values

- **String Literals**: Component prop values should use string literals rather than static properties
  - Example: `<Button size="small" />` instead of `<Button size={Button.sizes.SMALL} />`

### Variable and Function Names

- Local variables and function names SHOULD use `camelCase`.
  - Example: `const itemCount = 5;`.
  - Example: `function calculateTotal() { /* ... */ }`.
- Constants (values that do not change) SHOULD be named in `UPPER_SNAKE_CASE`.
  - Example: `const MAX_USERS = 100;`.

### Type and Interface Names

- TypeScript type aliases and interface names MUST use `PascalCase`.
  - Example: `type UserProfile = { /* ... */ };`.
  - Example: `interface ComponentProps { /* ... */ }`.

### Vibe Standard Types

When working with Vibe components, always use the established standard types for common prop patterns:

- **Icon Props**: Always use `SubIcon` type for any prop that accept icons.
  - Example: `icon?: SubIcon;` instead of generic types like `ReactNode` or custom icon types.
- **Component Props**: Extend `VibeComponentProps` for component props (to get `className`, `id`, `data-testid`).
- **Consistent Typing**: Always check existing similar components to see what Vibe standard types they use before creating custom types.

### CSS Class Names

- CSS class names within `.module.scss` files MUST use `camelCase`.
- Refer to the styling-conventions.md file for more details.

### Context Naming

Context-related files and variables should follow these naming conventions to maintain clarity and consistency, typically residing within a `context/` subdirectory of a component (e.g., `packages/core/src/components/MyComponent/context/`).

- **Context File**: The file containing the context definition, provider, and consumer hook SHOULD be named `ComponentNameContext.ts` or `ComponentNameContext.tsx` (e.g., `ModalContext.tsx`).
- **Context Object**: The context object created by `React.createContext` SHOULD be named `ComponentNameContext` (e.g., `const ModalContext = createContext(...)`).
- **Provider Component**: The React component that provides the context value SHOULD be named `ComponentNameProvider` (e.g., `export const ModalProvider = (...)`).
- **Consumer Hook**: The custom hook for consuming the context SHOULD be named `useComponentName` (e.g., `export const useModal = () => ...`).
- **Context Props Type/Interface**: The type or interface defining the shape of the context value SHOULD be named `ComponentNameContextProps` (e.g., `interface ModalContextProps { ... }`).
- **Provider Props Type/Interface**: The type or interface for the Provider component's props SHOULD be named `ComponentNameProviderProps` (e.g., `interface ModalProviderProps { ... }`).

## Claude Implementation Notes

When following naming conventions:

- **Use PascalCase for all component names, directories, and types**
- **Use camelCase for props, variables, functions, and CSS classes**
- **Use UPPER_SNAKE_CASE for constants**
- **Always use string literals for prop values** instead of static properties
- **Follow established patterns for context naming**
- **Keep type definitions in separate `.types.ts` files**
- **Use meaningful names that describe purpose**
- **Check existing components** for Vibe standard types before creating custom ones
- **Maintain consistency** across the entire codebase