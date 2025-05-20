# Storybook Code Examples

## Size variants

```tsx
<Flex direction="row" gap="small">
      <StoryDescription description="Xs" vertical align={StoryDescription.align.START}>
        <div className="monday-storybook-loader_size-variants_container">
          <Loader size="xs" />
        </div>
      </StoryDescription>
      <StoryDescription description="Small" vertical align={StoryDescription.align.START}>
        <div className="monday-storybook-loader_size-variants_container">
          <Loader size="small" />
        </div>
      </StoryDescription>
      <StoryDescription description="Medium" vertical align={StoryDescription.align.START}>
        <div className="monday-storybook-loader_size-variants_container">
          <Loader size="medium" />
        </div>
      </StoryDescription>
      <StoryDescription description="Large" vertical align={StoryDescription.align.START}>
        <div className="monday-storybook-loader_size-variants_container">
          <Loader size="large" />
        </div>
      </StoryDescription>
    </Flex>
```

## Color variants

```tsx
<Flex direction="row" gap="small">
      <StoryDescription description="Primary" vertical align={StoryDescription.align.START}>
        <Loader size="medium" color="primary" />
      </StoryDescription>
      <StoryDescription description="Secondary" vertical align={StoryDescription.align.START}>
        <Loader size="medium" color="secondary" />
      </StoryDescription>
      <StoryDescription description="Dark" vertical align={StoryDescription.align.START}>
        <Loader size="medium" color="dark" />
      </StoryDescription>
      <StoryDescription description="OnPrimary" vertical align={StoryDescription.align.START}>
        <Flex direction="row">
          <div className="monday-storybook-loader_color-variants_on-primary--color-black">
            <Loader size="medium" color="onPrimary" />
          </div>
          <div className="monday-storybook-loader_color-variants_on-primary--color-negative">
            <Loader size="medium" color="onPrimary" />
          </div>
          <div className="monday-storybook-loader_color-variants_on-primary--color-positive">
            <Loader size="medium" color="onPrimary" />
          </div>
          <div className="monday-storybook-loader_color-variants_on-primary--color-primary">
            <Loader size="medium" color="onPrimary" />
          </div>
        </Flex>
      </StoryDescription>
    </Flex>
```

## Custom colors

```tsx
<div style={{
  color: "var(--color-dark-red)"
}}>
      <Loader size="medium" />
    </div>
```

## Visual variants

```tsx
<Flex direction="row" gap="small">
      <StoryDescription description="Casual" vertical align={StoryDescription.align.START}>
        <div>
          <Loader size="medium" />
        </div>
      </StoryDescription>
      <StoryDescription description="With background" vertical align={StoryDescription.align.START} headerStyle={{
    width: "fitContent"
  }}>
        <div>
          <Loader size="medium" hasBackground />
        </div>
      </StoryDescription>
    </Flex>
```

## Loader in text field

```tsx
<DialogContentContainer>
      <Search loading placeholder="Board name" />
    </DialogContentContainer>
```

## Loader in button

```tsx
const [loading, setLoading] = useState(false);
const onClick = useCallback(() => {
  setLoading(true);
}, [setLoading]);
return <Button loading={loading} onClick={onClick}>
        Click here for loading
      </Button>;
```

