# Documentation best practices
This doc is still work in progress and will constantly be updated.

1. Keep the examples in the stories minimal, without using unnecessary props that don't serve the purpose of demonstrating the story unless the Vibe's designers specifically request it.
2. Whenever possible, avoid adding titles to the variants displayed within the story to maintain clear and simpler story code.
3. When laying out components, utilize Vibe's Flex component instead of implementing your own flex layout using CSS. Refer to the code example below for clarification.
```js
<Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.MEDIUM}>
          <Steps type={Steps.types.NUMBERS} steps={steps} activeStepIndex={2} />
          <Steps type={Steps.types.GALLERY} steps={steps} activeStepIndex={2} />
          <Steps
            steps={steps}
            type={Steps.types.GALLERY}
            activeStepIndex={2}
            areNavigationButtonsHidden
            className="monday-storybook-steps_padding"
          />
</Flex>
```

4. If you need to add titles to the component states displayed in a story, make use of the VisualDescription component, as shown in the code example provided.
```js
<Flex direction={Flex.directions.ROW} gap={Flex.gaps.SMALL}>
      <StoryDescription description="Xs" vertical align={Flex.align.START}>
        <div className="monday-storybook-loader_size-variants_container">
          <Loader size={Loader.sizes.XS} />
        </div>
      </StoryDescription>
      <StoryDescription description="Small" vertical align={Flex.align.START}>
        <div className="monday-storybook-loader_size-variants_container">
          <Loader size={Loader.sizes.SMALL} />
        </div>
      </StoryDescription>
      <StoryDescription description="Medium" vertical align={Flex.align.START}>
        <div className="monday-storybook-loader_size-variants_container">
          <Loader size={Loader.sizes.MEDIUM} />
        </div>
      </StoryDescription>
      <StoryDescription description="Large" vertical align={Flex.align.START}>
        <div className="monday-storybook-loader_size-variants_container">
          <Loader size={Loader.sizes.LARGE} />
        </div>
      </StoryDescription>
    </Flex>
```

5. Always use live component instances instead of displaying Vibe's components as pictures. Images will not be updated according to design changes, theme changes, and bug fixes.
6. For better story readability, it's best to use inline styles instead of class names when applying styles that are specific to the story itself. This avoids confusion for readers who might question the purpose of the class names in achieving the displayed result. Inline styles make the styles visible within the story, without the need for external CSS files or class definitions.
```js
<Canvas>
  <Story name="Stretched">
    <div style={{ width: "100%" }}>
      <TabList tabType="stretched">
        <Tab>First</Tab>
        <Tab>Second</Tab>
      </TabList>
    </div>
  </Story>
</Canvas>
```
7. To keep our storybook code examples clear and simple, avoid using internal components in stories. Code duplication is acceptable if it means excluding internal components. This prevents confusion among developers using our components API. Frequent reliance on internal components for documentation suggests that the API lacks easy solutions for common use cases.
