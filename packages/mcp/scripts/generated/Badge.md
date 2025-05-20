# Storybook Code Examples

## States

```tsx
<Flex gap="large" style={{
  flex: 1
}} justify="start" align="start">
      <StoryDescription description="Indicator" vertical align={StoryDescription.align.START}>
        <Badge>
          <Button leftIcon={WhatsNew}>{"What's new"}</Button>
        </Badge>
      </StoryDescription>
      <StoryDescription description="Counter" vertical align={StoryDescription.align.START}>
        <Badge type="counter" count={100} maxDigits={2}>
          <Button leftIcon={WhatsNew}>{"What's new"}</Button>
        </Badge>
      </StoryDescription>
    </Flex>
```

## Button

```tsx
<Badge alignment="rectangular">
      <Button leftIcon={ExternalPage}>Button</Button>
    </Badge>
```

## Avatar

```tsx
<Badge alignment="circular">
      <Avatar size="large" src={person} type="img" />
    </Badge>
```

## Inline elements

```tsx
<Flex direction="column" gap="medium" align="start">
      <Badge alignment="outside">
        <Link text="Read more" />
      </Badge>
      <Badge alignment="outside">
        <Link text="What's new" iconPosition="start" icon={WhatsNew} />
      </Badge>
      <Badge alignment="outside">
        <Link text="Learn more" iconPosition="end" icon={ExternalPage} />
      </Badge>
    </Flex>
```

