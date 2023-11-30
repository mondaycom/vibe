# Typescript migration process
We are happy to announce that we are in the middle of migrating our repository from Javascript to Typescript.
While starting migrating components on your own, please pay attention to the following things:

### Conversion process
1. Please convert all the sub-components which the component is built from it in the same PR. You can ignore independent vibe components and migrate them to a different PR.
2. Please convert the component tests. There is no need to convert the component stories in the stage (MDX file and js files which are related).

### Types and interfaces
1. If you want to add any general types or interfaces relevant to more than one component during the conversion, please add them to `src/types`.
2. Please ensure your component props interface extends `VibeComponentProps` or another type that extends `VibeComponentProps`. If your component does not support one of the props written in the VibeComponentProps interface, please add it (`id`, `className`, `data-testid`…)
For example,

```tsx
import React, { forwardRef } from "react";
import { VibeComponentProps, VibeComponent } from "../../types";
export interface SomeComponentProps extends VibeComponentProps {
  someCustomProp: string;
}

const SomeComponent: VibeComponent<SomeComponentProps, HTMLDivElement> = forwardRef((props, ref) => {
  return <div {...props} ref={ref}/>
});
```

3. If your component is clickable, please also consider using `VibeBaseButtonComponentProps`. If some of the aria props are not relevant to the element that you are migrating, it's also OK not to use them (for example, in the menu button, some of the props are not relevant because the menu will always open a pop-up).
4. If your component is an extension of another component (like `IconButton` is an extension of the button), you can extend its props interface directly.
5. If your component exposes static enums on the component, those should be added to the interface and be assigned to the component itself.

```tsx
const ColorPicker: VibeComponent<ColorPickerProps> & { colorShapes?: COLOR_SHAPES_VALUES;} = forwardRef(...);
```
```diff
- ColorPicker.colorShapes = COLOR_SHAPES;
- export default ColorPicker;
+ export default withStaticProps(ColorPicker, {
+    colorShapes: COLOR_SHAPES
+ });
```

### Props
1. If your component has a prop that is already exist in  `VibeComponentProps` but but with different naming, please do the following:
   1. Add support in the component to use for the prop with the new naming. You can see an example in the `<Chips/>` component.
   2. Keep the old naming but mark the prop as deprecated.
```tsx
  /**
  * Deprecated, there is no need to use this prop for implementing clickable chips. Please use onClick for this purpose.
  * @deprecated
  */
  clickable?: boolean;
```
2. Please set the default props of the component to be part of the component signature and delete the component `propsTypes` and `defaultProps`. 

### Component's stories
1. After migrating the component and all related files, please also edit the component `*.mdx` story file the following way:
   1. Replace the `ArgsTable` with the `Controls` component.
   2. Check the call to the function `createStoryMetaSettingsDecorator()` at the start of the mdx file. If there are props enums that are missing from there, please add them.


```diff
- <ArgsTable of={ColorPicker} />
+ <PropsTable />
```

### Publish files
1. Please go over the [published-js-components.js](./webpack/published-js-components.js) file and move all the paths of the converted components to the [published-ts-components.js](./webpack/published-ts-components.js) file.
   For example, when converting the `Avatar` component from JS to TS, then [published-ts-components.js](./webpack/published-ts-components.js) should contain the following line: `Avatar: "components/Avatar/Avatar"`.
2. Make sure that the path of the migrated component does not contain an extension. For example: your component path should looks like this: `components/Avatar/Avatar` and not like this: `components/Avatar/Avatar.tsx`.
