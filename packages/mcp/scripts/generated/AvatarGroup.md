# Storybook Code Examples

## Overview

```tsx
avatarGroupTemplate = ({
  persons,
  ...args
}: AvatarGroupTemplateProps) => {
  return <AvatarGroup size="large" max={3} {...args}>
      <Avatar type="img" src={persons.person2} ariaLabel="Sophia Johnson" />
      <Avatar type="img" src={persons.person3} ariaLabel="Marco DiAngelo" />
      <Avatar type="img" src={persons.person4} ariaLabel="Liam Caldwell" />
      <Avatar type="img" src={persons.person1} ariaLabel="Julia Martinez" />
      <Avatar type="img" src={persons.person2} ariaLabel="Sophia Johnson" />
      <Avatar type="img" src={persons.person3} ariaLabel="Marco DiAngelo" />
      <Avatar type="img" src={persons.person4} ariaLabel="Liam Caldwell" />
      <Avatar type="img" src={persons.person1} ariaLabel="Julia Martinez" />
      <Avatar type="img" src={persons.person2} ariaLabel="Sophia Johnson" />
      <Avatar type="img" src={persons.person3} ariaLabel="Marco DiAngelo" />
      <Avatar type="img" src={persons.person4} ariaLabel="Liam Caldwell" />
      <Avatar type="img" src={persons.person1} ariaLabel="Julia Martinez" />
      <Avatar type="text" text="MR" ariaLabel="Mark Roytstein" />
    </AvatarGroup>;
}
```

## Size

```tsx
<Flex direction="column" gap="large" align="start">
      <StoryDescription description="Large" vertical align={StoryDescription.align.START}>
        <AvatarGroup size="large" type="img" max={4}>
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
        </AvatarGroup>
      </StoryDescription>
      <StoryDescription description="Medium" vertical align={StoryDescription.align.START}>
        <AvatarGroup size="medium" type="img" max={4}>
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
        </AvatarGroup>
      </StoryDescription>
      <StoryDescription description="Small" vertical align={StoryDescription.align.START}>
        <AvatarGroup size="small" type="img" max={4}>
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
        </AvatarGroup>
      </StoryDescription>
      <StoryDescription description="XS" vertical align={StoryDescription.align.START}>
        <AvatarGroup size="xs" type="img" max={4}>
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
        </AvatarGroup>
      </StoryDescription>
    </Flex>
```

## ColorVariants

```tsx
<Flex direction="column" gap="large" align="start">
      <StoryDescription description="Light" vertical align={StoryDescription.align.START}>
        <AvatarGroup size="large" type="img" max={4} counterProps={{
      color: "light"
    }}>
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
        </AvatarGroup>
      </StoryDescription>
      <StoryDescription description="Dark" vertical align={StoryDescription.align.START}>
        <AvatarGroup size="large" type="img" max={4} counterProps={{
      color: "dark"
    }}>
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
        </AvatarGroup>
      </StoryDescription>
    </Flex>
```

## MaxAvatarsToDisplay

```tsx
const [max, setMax] = useState(4);
return <Flex direction="column" gap="medium" align="start" style={{
  width: "100%"
}}>
        <Slider size="small" min={1} max={14} defaultValue={max} onChange={value => setMax((value as number))} valueText={`${max}`} />
        <AvatarGroup size="large" max={max}>
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
          <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
          <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
          <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
          <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
        </AvatarGroup>
      </Flex>;
```

## HoverVsClickable

```tsx
const getDummyAvatarsProps = useCallback((numItems: number) => {
  const avatarsProps = [{
    type: Avatar.types.IMG,
    src: person1,
    ariaLabel: "Julia Martinez"
  }, {
    type: Avatar.types.IMG,
    src: person2,
    ariaLabel: "Sophia Johnson"
  }, {
    type: Avatar.types.IMG,
    src: person3,
    ariaLabel: "Marco DiAngelo"
  }, {
    type: Avatar.types.IMG,
    src: person4,
    ariaLabel: "Liam Caldwell"
  }];
  const result = [];
  for (let i = 0; i < numItems; i++) {
    result.push(avatarsProps[i % avatarsProps.length]);
  }
  return result;
}, []);
return <Flex direction="row" gap="large">
        <StoryDescription description="Counter hover" vertical align={StoryDescription.align.START}>
          <AvatarGroup size="large" max={4} counterTooltipCustomProps={{
      position: "bottom"
    }}>
            {getDummyAvatarsProps(14).map(avatarProps => <Avatar {...avatarProps} />)}
          </AvatarGroup>
        </StoryDescription>
        <StoryDescription description="Counter click" vertical align={StoryDescription.align.START}>
          <Flex>
            <AvatarGroup size="large" max={4}>
              {getDummyAvatarsProps(14).map((avatarProps, index) => <Avatar {...avatarProps} onClick={() => {}} id={String(index)} />)}
            </AvatarGroup>
          </Flex>
        </StoryDescription>
      </Flex>;
```

## Disabled

```tsx
return <AvatarGroup size="large" max={4} disabled>
        <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
        <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
        <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
        <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
        <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
        <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
        <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
        <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
        <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
        <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
        <Avatar type="img" src={person3} ariaLabel="Marco DiAngelo" />
        <Avatar type="img" src={person4} ariaLabel="Liam Caldwell" />
        <Avatar type="img" src={person1} ariaLabel="Julia Martinez" />
        <Avatar type="img" src={person2} ariaLabel="Sophia Johnson" />
      </AvatarGroup>;
```

## LastSeenUsers

```tsx
<Flex direction="row" gap="medium">
      <div>Last seen</div>
      <AvatarGroup size="medium" max={4} counterProps={{
    color: "dark"
  }} type="img">
        <Avatar src={person1} ariaLabel="Julia Martinez" />
        <Avatar src={person2} ariaLabel="Sophia Johnson" />
        <Avatar src={person3} ariaLabel="Marco DiAngelo" />
        <Avatar src={person4} ariaLabel="Liam Caldwell" />
        <Avatar src={person1} ariaLabel="Julia Martinez" />
        <Avatar src={person2} ariaLabel="Sophia Johnson" />
        <Avatar src={person3} ariaLabel="Marco DiAngelo" />
        <Avatar src={person4} ariaLabel="Liam Caldwell" />
        <Avatar src={person1} ariaLabel="Julia Martinez" />
        <Avatar src={person2} ariaLabel="Sophia Johnson" />
        <Avatar src={person3} ariaLabel="Marco DiAngelo" />
        <Avatar src={person4} ariaLabel="Liam Caldwell" />
        <Avatar src={person1} ariaLabel="Julia Martinez" />
        <Avatar src={person2} ariaLabel="Sophia Johnson" />
      </AvatarGroup>
    </Flex>
```

## CustomCounter

```tsx
<AvatarGroup size="large" type="img" max={4} counterProps={{
  count: 100500,
  color: "dark",
  prefix: "",
  maxDigits: 5
}}>
      <Avatar src={person1} ariaLabel="Julia Martinez" />
      <Avatar src={person2} ariaLabel="Sophia Johnson" />
      <Avatar src={person3} ariaLabel="Marco DiAngelo" />
      <Avatar src={person4} ariaLabel="Liam Caldwell" />
    </AvatarGroup>
```

## GridTooltip

```tsx
<AvatarGroup size="large" type="img" max={4}>
      <Avatar src={person1} />
      <Avatar src={person2} />
      <Avatar src={person3} />
      <Avatar src={person4} />
      <Avatar src={person1} />
      <Avatar src={person2} />
      <Avatar src={person3} />
      <Avatar src={person4} />
      <Avatar src={person1} />
      <Avatar src={person2} />
      <Avatar src={person3} />
      <Avatar src={person4} />
      <Avatar src={person1} />
      <Avatar src={person2} />
      <Avatar src={person3} />
      <Avatar src={person4} />
    </AvatarGroup>
```

## CounterCustomTooltipContent

```tsx
<AvatarGroup size="large" type="img" max={4} counterTooltipCustomProps={{
  content: "... and plenty more employees"
}}>
      <Avatar src={person1} ariaLabel="Julia Martinez" />
      <Avatar src={person2} ariaLabel="Sophia Johnson" />
      <Avatar src={person3} ariaLabel="Marco DiAngelo" />
      <Avatar src={person4} ariaLabel="Liam Caldwell" />
      <Avatar src={person1} ariaLabel="Julia Martinez" />
      <Avatar src={person2} ariaLabel="Sophia Johnson" />
      <Avatar src={person3} ariaLabel="Marco DiAngelo" />
      <Avatar src={person4} ariaLabel="Liam Caldwell" />
    </AvatarGroup>
```

## VirtualizedList

```tsx
const avatars = [<Avatar src={person1} ariaLabel="Julia Martinez" />, <Avatar src={person2} ariaLabel="Sophia Johnson" />, <Avatar src={person3} ariaLabel="Marco DiAngelo" />, <Avatar src={person4} ariaLabel="Liam Caldwell" />];
const getDummyAvatars = (multiplier: number) => {
  let result: typeof avatars = [];
  for (let i = 0; i < multiplier; ++i) {
    result = result.concat(avatars);
  }
  return result;
};
return <AvatarGroup size="large" max={4} counterTooltipIsVirtualizedList type="img">
        {getDummyAvatars(334)}
      </AvatarGroup>;
```

## DisplayingTeams

```tsx
<Table columns={[{
  id: "name",
  title: "Name"
}, {
  id: "email",
  title: "Email"
}, {
  id: "title",
  title: "Title"
}, {
  id: "teams",
  title: "Teams"
}]} errorState={<div />} emptyState={<div />}>
      <TableHeader>
        <TableHeaderCell title="Name" />
        <TableHeaderCell title="Email" />
        <TableHeaderCell title="Title" />
        <TableHeaderCell title="Teams" />
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <Flex direction="row" gap="small">
              <Avatar type="img" src={person1} size="medium" ariaLabel="Julia Martinez" />
              Julia Martinez
            </Flex>
          </TableCell>
          <TableCell>julia@martinez.com</TableCell>
          <TableCell>Developer</TableCell>
          <TableCell>
            <AvatarGroup size="medium" max={2} counterProps={{
          ariaLabelItemsName: "teams"
        }}>
              <Avatar type="text" text="T1" backgroundColor="peach" ariaLabel="Team 1" />
              <Avatar type="text" text="T2" backgroundColor="bubble" ariaLabel="Team 2" />
              <Avatar type="text" text="T3" backgroundColor="berry" ariaLabel="Team 3" />
            </AvatarGroup>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
```

