# Storybook Code Examples

## Size

```tsx
<Flex gap="medium">
      <Avatar size="xs" src={person1} type="img" ariaLabel="Julia Martinez" />
      <Avatar size="small" src={person1} type="img" ariaLabel="Julia Martinez" />
      <Avatar size="medium" src={person1} type="img" ariaLabel="Julia Martinez" />
      <Avatar size="large" src={person1} type="img" ariaLabel="Julia Martinez" />
    </Flex>
```

## Disable

```tsx
<Flex gap="medium">
      <Avatar size="xs" src={person1} type="img" disabled />
      <Avatar size="small" src={person1} type="img" disabled />
      <Avatar size="medium" src={person1} type="img" disabled />
      <Avatar size="large" src={person1} type="img" disabled />
    </Flex>
```

## AvatarWithText

```tsx
<Flex gap="medium">
      <Avatar size="xs" type="text" text="RM" backgroundColor="lipstick" ariaLabel="Ron Meir" />
      <Avatar size="small" type="text" text="RM" backgroundColor="lipstick" ariaLabel="Ron Meir" />
      <Avatar size="medium" type="text" text="RM" backgroundColor="lipstick" ariaLabel="Ron Meir" />
      <Avatar size="large" type="text" text="RM" backgroundColor="done-green" ariaLabel="Ron Meir" />
    </Flex>
```

## SquareAvatar

```tsx
<Flex gap="medium">
      <Avatar size="xs" type="text" text="R" backgroundColor="bright-blue" square ariaLabel="Ron" />
      <Avatar size="small" type="text" text="R" backgroundColor="bright-blue" square ariaLabel="Ron" />
      <Avatar size="medium" type="icon" icon={WhatsNew} backgroundColor="aquamarine" square ariaLabel="Present" />
      <Avatar size="large" type="text" text="RM" backgroundColor="working_orange" square ariaLabel="Ron Meir" />
    </Flex>
```

## AvatarWithRightBadge

```tsx
<Flex gap="medium">
      <Avatar size="large" type="img" src={person1} bottomRightBadgeProps={{
    src: guest
  }} ariaLabel="Julia Martinez" />
      <Avatar size="large" type="img" src={person1} bottomRightBadgeProps={{
    src: owner
  }} ariaLabel="Julia Martinez" />
    </Flex>
```

## AvatarWithLeftBadge

```tsx
<Flex gap="medium">
      <Avatar size="large" type="img" src={person1} bottomLeftBadgeProps={{
    src: home
  }} ariaLabel="Julia Martinez" />
      <Avatar size="large" type="img" src={person1} bottomLeftBadgeProps={{
    src: minus
  }} ariaLabel="Julia Martinez" />
    </Flex>
```

## AvatarWithTooltip

```tsx
<Flex direction="row" gap="large" align="start">
      <StoryDescription description="Aria label tooltip" vertical align={StoryDescription.align.START}>
        <Avatar size="large" type="img" src={person1} ariaLabel={"Julia Martinez"} />
      </StoryDescription>
      <StoryDescription description="Text tooltip" vertical align={StoryDescription.align.START}>
        <Avatar size="large" type="img" src={person1} tooltipProps={{
      content: "Julia Martinez"
    }} ariaLabel={"Julia Martinez"} />
      </StoryDescription>
      <StoryDescription description="JSX tooltip" vertical align={StoryDescription.align.START}>
        <Avatar size="large" type="img" src={person1} tooltipProps={{
      content: <b>Julia Martinez</b>,
      position: "bottom"
    }} ariaLabel={"Julia Martinez"} />
      </StoryDescription>
    </Flex>
```

## ClickableAvatar

```tsx
const [count, setCount] = useState(0);
const incrementCount = useCallback(() => {
  setCount(prevState => prevState + 1);
}, []);
return <Flex>
        <Flex direction="column" gap="medium">
          <Avatar size="large" type="img" src={person1} ariaLabel="Julia Martinez" onClick={incrementCount} />
          <Counter count={count} />
        </Flex>
      </Flex>;
```

## MultipleAvatars

```tsx
<AvatarGroup max={2} size="large">
      <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
      <Avatar type="img" src={person2} ariaLabel="Marco DiAngelo" />
      <Avatar type="img" src={person3} ariaLabel="Liam Caldwell" />
    </AvatarGroup>
```

