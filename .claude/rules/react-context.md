---
paths:
  - "packages/core/src/components/**/context/*Context.ts"
  - "packages/core/src/components/**/context/*Context.tsx"
---

# Context File Structure and Usage

**Purpose**: This rule outlines the standard practices for creating, structuring, and utilizing React Context, primarily within the `packages/core/` components. It covers the recommended file structure (placing context files in a `context/` subdirectory), established naming conventions for context objects, provider components, and custom consumer hooks, as well as implementation best practices and common patterns to ensure consistency and maintainability.

**Apply to**:
- `packages/core/src/components/**/context/*Context.ts`
- `packages/core/src/components/**/context/*Context.tsx`

**Use when**: Creating new React Contexts or when looking to understand how existing contexts are structured and used.

A typical context setup involves creating a dedicated file (e.g., `ComponentNameContext.ts` or `ComponentNameContext.tsx`) within the component's `context/` sub-directory. This file should:

1. **Define Types**: Define interfaces for the context props/state and the provider component's props.
2. **Create the Context**: Use `React.createContext` to initialize the context. Provide a sensible default value (often `undefined` initially, with proper typing) that matches the context props interface.
3. **Create a Provider Component**: This component will wrap the parts of your application that need access to the context. It takes `children` and the `value` (or props to construct the value) to be provided. It's good practice to memoize the context value using `useMemo` if it's an object, to prevent unnecessary re-renders of consumers.
4. **Create a Custom Consumer Hook**: A custom hook (e.g., `useComponentName`) should be exported to provide easy and type-safe access to the context value. This hook typically calls `useContext` and includes a check to ensure it's used within the corresponding Provider, throwing an error if not.

## Example: `MyComponentContext.ts`

```typescript
import React, { createContext, useContext, useState, useMemo, ReactNode } from "react";

// 1. Define the shape of your context data and Provider props
interface MyComponentContextProps {
  someValue: string;
  updateValue: (value: string) => void;
  // Add other states or functions you want to share
}

interface MyComponentProviderProps {
  children: ReactNode;
  initialValue?: string; // Example: if you want to pass initial state to provider
}

// 2. Create the context with a default value (often undefined, handle null case in hook)
const MyComponentContext = createContext<MyComponentContextProps | undefined>(undefined);

// 3. Create the Provider component
export const MyComponentProvider = ({ children, initialValue = "default" }: MyComponentProviderProps) => {
  const [someValue, setSomeValue] = useState<string>(initialValue);
  const updateValue = useCallback(setSomeValue, []);

  // Memoize the context value to prevent unnecessary re-renders
  // This is crucial if the context value is an object or array
  const contextValue = useMemo(
    () => ({
      someValue,
      updateValue
    }),
    [someValue]
  );

  return <MyComponentContext.Provider value={contextValue}>{children}</MyComponentContext.Provider>;
};

// 4. Create the custom hook for consuming the context
export const useMyComponent = (): MyComponentContextProps => {
  const context = useContext(MyComponentContext);
  if (context === undefined) {
    // This error message helps developers realize they've used the hook outside the provider
    throw new Error("useMyComponent must be used within a MyComponentProvider");
  }
  return context;
};
```

## Using the Context in `MyComponent.tsx`

The Provider should wrap all components that need to access its context.

```typescript
// ... imports
// Assuming your context file is in a 'context' subdirectory
import { MyComponentProvider, useMyComponent } from "./context/MyComponentContext";

// Example of a child component that consumes the context
const DisplayValueComponent = () => {
  const { someValue } = useMyComponent(); // Use the custom hook
  return <p>The current context value is: {someValue}</p>;
};

// Example of a child component that updates the context
const UpdateValueComponent = () => {
  const { updateValue } = useMyComponent();
  return <button onClick={() => updateValue("new value " + Math.random().toFixed(2))}>Update Value</button>;
};

const MyComponent = forwardRef(({}: /* ...props... */ MyComponentProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  return (
    // Wrap the part of the component tree that needs access to this context
    // The Provider can be here or at a higher level in the tree if needed by other components.
    <MyComponentProvider initialValue="hello from MyComponent">
      <div ref={ref} className={styles.myComponentBaseClass}>
        {/* ... other component content ... */}
        <DisplayValueComponent />
        <UpdateValueComponent />
        {/* <SubComponentNeedsContext /> */}
      </div>
    </MyComponentProvider>
  );
});

export default MyComponent;
```

## Key Naming Conventions

Following established naming patterns:

- **Context File**: `ComponentNameContext.ts` or `ComponentNameContext.tsx`
- **Context Object**: `const ComponentNameContext = createContext(...)`
- **Provider Component**: `export const ComponentNameProvider = (...)`
- **Consumer Hook**: `export const useComponentName = () => ...`
- **Context Props Type**: `interface ComponentNameContextProps { ... }`
- **Provider Props Type**: `interface ComponentNameProviderProps { ... }`

## Best Practices

### 1. Always Use Custom Hooks
Never use `useContext` directly in components. Always create and use the custom hook with error checking.

```typescript
// ❌ Bad
const context = useContext(MyComponentContext);

// ✅ Good
const { someValue, updateValue } = useMyComponent();
```

### 2. Memoize Context Values
Always memoize context values when they're objects to prevent unnecessary re-renders:

```typescript
const contextValue = useMemo(
  () => ({
    someValue,
    updateValue
  }),
  [someValue] // Include all dependencies
);
```

### 3. Provide Error Messages
Include helpful error messages when context is used outside provider:

```typescript
export const useMyComponent = (): MyComponentContextProps => {
  const context = useContext(MyComponentContext);
  if (context === undefined) {
    throw new Error("useMyComponent must be used within a MyComponentProvider");
  }
  return context;
};
```

### 4. File Structure
Place context files in dedicated `context/` subdirectory:

```
MyComponent/
├── context/
│   ├── MyComponentContext.ts
│   └── __tests__/
│       └── MyComponentContext.test.ts
├── MyComponent.tsx
├── MyComponent.types.ts
└── MyComponent.module.scss
```

### 5. TypeScript Typing
Use proper TypeScript interfaces and generics:

```typescript
const MyComponentContext = createContext<MyComponentContextProps | undefined>(undefined);
```

## Common Patterns

### State Management Context
For components that need to share complex state:

```typescript
interface StateContextProps {
  state: ComponentState;
  dispatch: React.Dispatch<ComponentAction>;
}

export const StateProvider = ({ children }: StateProviderProps) => {
  const [state, dispatch] = useReducer(componentReducer, initialState);

  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  return <StateContext.Provider value={contextValue}>{children}</StateContext.Provider>;
};
```

### Configuration Context
For components that need to share configuration:

```typescript
interface ConfigContextProps {
  theme: Theme;
  locale: string;
  settings: ComponentSettings;
}

export const ConfigProvider = ({ children, initialConfig }: ConfigProviderProps) => {
  const contextValue = useMemo(() => initialConfig, [initialConfig]);

  return <ConfigContext.Provider value={contextValue}>{children}</ConfigContext.Provider>;
};
```

## Claude Implementation Notes

When implementing React Context following these patterns:

- **Always use the established naming conventions** for consistency
- **Place context files in `context/` subdirectory** of the component
- **Create custom hooks** with proper error handling for consuming context
- **Memoize context values** to prevent unnecessary re-renders
- **Use TypeScript interfaces** for proper typing
- **Include helpful error messages** when context used outside provider
- **Test context behavior** in `__tests__/` subdirectory
- **Follow the file structure pattern** exactly as shown