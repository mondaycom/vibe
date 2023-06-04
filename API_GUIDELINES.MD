# API Guidelines
This doc is still work in progress and will constantly be updated.

## Component's Mandatory Props
Every Vibe component must extend the `VibeProps` interface and include the following props: `className`, `id`, and `data-testid`.

### className
Every component supports a `className` prop, allowing developers to add a custom class name to the outermost wrapper element. This feature is useful for layout and positioning purposes without overriding the component's inner styles.

### id
Each component supports an `id` prop, providing the ability to set a unique identifier for the component.

### data-testid`s
When testing the application code that uses vibe components, it is necessary to retrieve elements. for that, `data-testid`s are used (TODO - add a link to a guide about how to test).

Each component in the library should exposes a `data-testid` which is set on the root element of the component.
In case a `data-testid` was not provided, the library will provide a default one, here's an example:

```tsx
const SomeComponent = () => {
  return ( 
    <div data-testid={`${props['data-testid']} || getTestId(ComponentDefaultTestId.SomeComponent, id)`}/>
      ...
    </div>
  );
}
```

Inner parts of the component would also get a data-testid, which its parent component would usually prefix with its own name. for example:
```tsx
const SomeComponent = () => {
  return ( 
    <div data-testid={`${props['data-testid']} || getTestId(ComponentDefaultTestId.SomeComponent, id)`}/>
      <InnerComponent data-testid={`${props['data-testid']-inner-component`}>
    </div>
  );
}
```

## Props Conventions
Our props conventions are as follows:

1. **Boolean Props**: We do not prefix boolean props with "is" to ensure more readable shorthand boolean prop usage. For example, instead of `isEnabled={true}`, you can simply use `enabled`.

2. **Enum Props**: If a component has multiple visual states, we use an enum prop named `type`. Similarly, if a component has multiple sizes, we use an enum prop named `size`.

3. **Child Component Prop**: If a component only accepts a string as a child component, we avoid using the `children` prop. Instead, use a separate prop called `text`.

4. **Icon Support**: For components supporting a single icon, use the `icon` prop. In cases where there are two icons, such as one at the beginning and another at the end, use `startIcon` and `endIcon`. If multiple icons are supported, each icon has its own prop with a short name describing its purpose, like `searchIcon`. All icon props have a type of `SubIcon`.

Here's an example of implementing the `Avatar` component with an optional `icon` prop:

```typescript
import { SubIcon, VibeComponentProps } from "../../types";

export interface AvatarProps extends VibeComponentProps {
    icon?: SubIcon;
}
```
