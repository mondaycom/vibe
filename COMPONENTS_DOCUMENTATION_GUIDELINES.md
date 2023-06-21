# Components documentation best practices
This guide provides essential best practices for documenting components using Storybook. 
This doc is still work in progress and will constantly be updated.

1. Always use live component instances instead of displaying Vibe's components as pictures. Pictures will not be updated according to design changes, theme changes, and bug fixes.
2. Keep the examples in the stories minimal, without using unnecessary props that don't serve the purpose of demonstrating the story unless the Vibe's designers specifically request it.  For example, this minimal story does not contain not necessary props:
```js
<Canvas>
    <Story name="Sizes">
        <Button size={Button.sizes.LARGE}>Large</Button>
        <Button size={Button.sizes.MEDIUM}>Medium</Button>
        <Button size={Button.sizes.SMALL}>Small</Button>
    </Story>
</Canvas>
```

3. Whenever possible, avoid adding titles to the variants displayed within the story to maintain clear and simpler story code. For example, instead of writing this:
```js
<Canvas>
  <Story name="Sizes">
      <Flex direction={Flex.directions.ROW} gap={Flex.gaps.SMALL}>
          <StoryDescription description="Large" vertical align={Flex.align.START}>
              <Button size={Button.sizes.LARGE}>Large</Button>
          </StoryDescription>
          <StoryDescription description="Medium" vertical align={Flex.align.START}>
              <Button size={Button.sizes.MEDIUM}>Medium</Button>
          </StoryDescription>
          <StoryDescription description="Small" vertical align={Flex.align.START}>
              <Button size={Button.sizes.SMALL}>Small</Button>
          </StoryDescription>
      </Flex>
  </Story>
</Canvas>
```
Do this:
```js
<Canvas>
    <Story name="Sizes">
        <Button size={Button.sizes.LARGE}>Large</Button>
        <Button size={Button.sizes.MEDIUM}>Medium</Button>
        <Button size={Button.sizes.SMALL}>Small</Button>
    </Story>
</Canvas>
```

4. When laying out components, utilize Vibe's Flex component instead of implementing your own flex layout using CSS. Refer to the code example below for clarification. **Please use Flex only when displaying multiple examples** in a story and only if the default story layout and gaps do not match the documentation design without using Flex as a wrapper.
```js
<Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.MEDIUM}>
  <Steps type={Steps.types.NUMBERS} steps={steps} activeStepIndex={2} />
  <Steps type={Steps.types.GALLERY} steps={steps} activeStepIndex={2} />
</Flex>
```

4. If you need to add titles to the component states displayed in a story, please use the VisualDescription component, as shown in the code example below:
```js
<Flex direction={Flex.directions.ROW}>
    <StoryDescription description="Xs">
      <Loader size={Loader.sizes.XS} />
    </StoryDescription>
    <StoryDescription description="Small">
      <Loader size={Loader.sizes.SMALL} />
    </StoryDescription>
</Flex>
```
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
7. Avoid documenting wrapped components that are not exported to external users, as they are not available, and create an un-copyable example. If such cases, code duplication **is acceptable**. 

Instead of writing this:
```js
<Canvas>
  <Story name="Default">
    <Tipseen
      content={
          <TipsenStoryookContentExample />
      }
    >
      <TipsenStoryookContainerExample />
    </Tipseen>
  </Story>
</Canvas>
```

Do this:
```js
<Canvas>
  <Story name="Default">
    <Tipseen
      content={
        <TipseenContent title="This is a title">
          Popover message will appear here loremipsum dolor samet…
        </TipseenContent>
      }
    >
      <div/>
    </Tipseen>
  </Story>
</Canvas>
```

8. The storybook generated code should be easily "copy-paste"-able for seamless integration. Avoid adding internal additions that require additional modifications for successful copy-pasting.
