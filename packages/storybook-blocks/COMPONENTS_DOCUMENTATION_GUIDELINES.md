# Components documentation best practices

This guide provides essential best practices for documenting components using Storybook.  
This storybook is currently using Storybook 7, please get acquainted with the [docs](https://storybook.js.org/blog/storybook-7-docs/), if you are not familiar with this version.

This doc is still work in progress and will constantly be updated.
![Work in Progress](https://img.shields.io/badge/status-WIP-orange.svg)

1. Use `UsageGuidelines` component story as an example
2. Each story page must have the following sections
- `Overview` - with basic component example and slim text description.
- `Props` - with `<Controls/>` inside for convenient changing the props of the component
3. Each story might also have optional sections - it depends on the complexity of the component:
- `Usage` - with `<UsageGuidelines>` inside which provides hints about the component
- `Variants` - where different variants/states of the component can be demonstrated
- `Do’s and Don’ts` - with `<ComponentRules>` inside, demonstrating good and bad practices using the component - with corresponding text explanation.
- `Use cases and examples` - to demonstrate different use cases for the component
4. Always use live component instances instead of displaying components as pictures. Pictures will not be updated according to design changes, theme changes, and bug fixes.
5. Examples should be minimal and simple to use, without unnecessary props that don't serve the purpose of demonstrating the use case.
6. The storybook generated code should be easily "copy-paste"-able for seamless integration.
7. If custom styles are needed for some demonstration, use **inline styles only**. Inline styles make the styles visible within the story, without the need for external CSS files or class definitions.

```js
<Canvas>
  <Story name="Stretched">
    <div style={{ width: 100 }}>
      <Paragraph>Paragraph text</Paragraph>
    </div>
  </Story>
</Canvas>
```

8. As a general rule of thumb - Never apply custom styles in a story example to make a component look good. If you need to do it, it probably means there's an issue with the component itself.
