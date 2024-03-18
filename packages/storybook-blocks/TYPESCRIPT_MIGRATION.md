# Typescript migration process

We are happy to announce that we are in the middle of migrating our repository from Javascript to Typescript.
While starting migrating components on your own, please pay attention to the following things:

### Conversion process

1. Please convert all the sub-components which the component is built from it in the same PR. You can ignore independent vibe components and migrate them to a different PR.
2. There is no need to convert the component stories in the stage (MDX file and js files which are related), if there are any.

### Types and interfaces

1. If you want to add any general types or interfaces relevant to more than one component during the conversion, please add them to `src/types`.
2. If your component is an extension of another component, you can extend its props interface directly.
3. Your component should be extending `React.FC` type
4. If your component exposes static enums on the component, those should be added to the interface and be assigned to the component itself.

```tsx
const Tip: React.FC<TipProps> & { types?: typeof TipTypes };
```

```diff
- Object.assign(Tip, {
-  types: TipTypes,
-});
+ export default withStaticProps(Tip, {
+  types: TipTypes,
+ });
```

### Props

1. Please set the default props of the component to be part of the component signature and delete the component `propsTypes` and `defaultProps`.
2. If one of the props e.g. `children` should be either string, either react node(s), consider using `ElementContent` type.
