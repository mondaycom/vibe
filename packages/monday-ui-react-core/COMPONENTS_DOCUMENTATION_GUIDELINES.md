# Components documentation best practices
This guide provides essential best practices for documenting components using Storybook. 
This doc is still work in progress and will constantly be updated.

1. Always use live component instances instead of displaying Vibe's components as pictures. Pictures will not be updated according to design changes, theme changes, and bug fixes.
2. Examples should be minimal and simple to use, without unnecessary props that don't serve the purpose of demonstrating the use case. For example, demonstrating a single variation prop for the button component size:
```js
<Canvas>
    <Story name="Sizes">
        <Button size={Button.sizes.LARGE}>Large</Button>
        <Button size={Button.sizes.MEDIUM}>Medium</Button>
        <Button size={Button.sizes.SMALL}>Small</Button>
    </Story>
</Canvas>
```

3. Use the `<Story/>` layout component to layout the example and its title and avoid adding titles in the story itself in order to maintain a clear and simple story code. For example, instead of writing this:
```diff
- <Canvas>
-   <Story name="Sizes">
-       <Flex direction={Flex.directions.ROW} gap={Flex.gaps.SMALL}>
-           <StoryDescription description="Large" vertical align={Flex.align.START}>
-               <Button size={Button.sizes.LARGE}>Large</Button>
-           </StoryDescription>
-           <StoryDescription description="Medium" vertical align={Flex.align.START}>
-               <Button size={Button.sizes.MEDIUM}>Medium</Button>
-           </StoryDescription>
-           <StoryDescription description="Small" vertical align={Flex.align.START}>
-               <Button size={Button.sizes.SMALL}>Small</Button>
-           </StoryDescription>
-       </Flex>
-   </Story>
- </Canvas>
Do this:
```diff
+ <Canvas>
+     <Story name="Sizes">
+         <Button size={Button.sizes.LARGE}>Large</Button>
+         <Button size={Button.sizes.MEDIUM}>Medium</Button>
+         <Button size={Button.sizes.SMALL}>Small</Button>
+     </Story>
+ </Canvas>

4. The default `<Story/>` layout provides a solution for both a single component example and multiple components example. In case of multiple components example where the `<Story/>` layout is insufficient, you may use **only** Vibe's `<Flex/>` layout component. Any other custom layout solution is forbidden. 
```js
<Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.MEDIUM}>
  <Steps type={Steps.types.NUMBERS} steps={steps} activeStepIndex={2} />
  <Steps type={Steps.types.GALLERY} steps={steps} activeStepIndex={2} />
</Flex>
```

4. If you need to add titles to the component states displayed in a story, please use the `<StoryDescription/>` component, as shown in the code example below:
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
6. If custom styles are needed for some demonstration, use **inline styles only**. Inline styles make the styles visible within the story, without the need for external CSS files or class definitions.
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
9. As a general rule of thumb - Never apply custom styles in a story example to make a component look good. If you need to do it, it probably means there's an issue with the component itself.
