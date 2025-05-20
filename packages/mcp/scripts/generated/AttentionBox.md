# Storybook Code Examples

## Overview

```tsx
<div style={{
  width: "340px"
}}>
      {attentionBoxTemplate({
    onClose: () => {},
    title: "Attention box title",
    text: "Studies show that 100% of people who celebrate birthdays, will eventually die."
  })}
    </div>
```

## States

```tsx
<Flex direction="column" gap="small" align="start">
      <StoryDescription description="Primary">
        <div style={{
      width: "340px"
    }}>
          <AttentionBox title="Enabling SSO Login" text="Will cause all your team lose access to the account until using the correct SSO source." icon={Info} />
        </div>
      </StoryDescription>
      <StoryDescription description="Success">
        <div style={{
      width: "340px"
    }}>
          <AttentionBox title="You're doing great" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." type="success" icon={ThumbsUp} />
        </div>
      </StoryDescription>
      <StoryDescription description="Danger">
        <div style={{
      width: "340px"
    }}>
          <AttentionBox title="Account low on free space" text="Your account is out of free space, free some space to prevent data loss." type="danger" />
        </div>
      </StoryDescription>
      <StoryDescription description="Warning">
        <div style={{
      width: "340px"
    }}>
          <AttentionBox title="Account low on free space" text="Your account is out of free space, free some space to prevent data loss." type="warning" icon={Info} />
        </div>
      </StoryDescription>
      <StoryDescription description="Dark">
        <div style={{
      width: "340px"
    }}>
          <AttentionBox title="What a great idea!" text="You can also make this list sortable by tagging the items with tags column" type="dark" icon={Favorite} />
        </div>
      </StoryDescription>
    </Flex>
```

## AttentionBoxWithLink

```tsx
<AttentionBox compact>
      <Flex justify="space-between" gap="xs" style={{
    minWidth: "320px"
  }}>
        Get your monday.com notifications
        <AttentionBoxLink href="" text="Learn more" />
      </Flex>
    </AttentionBox>
```

## Dismissable

```tsx
const mockOnClose = useCallback(() => null, []);
return <Flex gap="large" align="start">
        <div style={{
    width: "274px"
  }}>
          <AttentionBox title="Regular attention box" text="Dismissable attention box with two lines of content." onClose={mockOnClose} icon={Info} />
        </div>
        <div style={{
    width: "274px"
  }}>
          <AttentionBox text="Attention box in compact mode" onClose={mockOnClose} compact />
        </div>
      </Flex>;
```

## NaturalAttentionBox

```tsx
<Flex direction="column" align="start">
      <Heading type="h3" weight="bold">
        Cross-Account Copier
      </Heading>
      <Text style={{
    margin: "4px 0 10px"
  }}>Copy boards and dashboards to another account</Text>
      <AttentionBox compact withIconWithoutHeader icon={Info} text="First, move the content you want to copy into folder. Only main boards and dashboards can be copied." type="dark" />
    </Flex>
```

## Attention box inside a dialog/combobox

```tsx
const mockOnClose = useCallback(() => null, []);
return <DialogContentContainer style={{
  width: "380px",
  padding: "var(--spacing-medium)"
}}>
        <Flex direction="column" gap="medium" align="initial">
          <Search placeholder="Search by name, role, team, or email" />
          <Text style={{
      paddingInlineStart: "5px",
      marginTop: "4px"
    }}>Suggested people</Text>
          <Flex direction="column" gap="medium" align="start">
            <Flex gap="small">
              <Avatar size="medium" src={person} type="img" />
              <Flex gap="xs">
                <Text>May Kishon </Text>
                <Text color="secondary">(UX/UI Product Designer)</Text>
              </Flex>
            </Flex>
            <Flex gap="small">
              <Icon iconSize="32" icon={Invite} style={{
          padding: "0 6px"
        }} />
              <Text>Invite new board member by email</Text>
            </Flex>
            <AttentionBox text="Hold ⌘ to select more than one person or team" compact onClose={mockOnClose} />
          </Flex>
        </Flex>
      </DialogContentContainer>;
```

## Attention box inside a dialog/combobox

```tsx
const [isOpen, setOpen] = useState(false);
const onClick = useCallback(() => {
  setOpen(true);
}, []);
return <>
        <Flex gap={Flex.gaps.MEDIUM} style={{
    height: "44px"
  }}>
          <Button onClick={onClick} kind={Button.kinds.SECONDARY}>
            Entry animation
          </Button>
          {isOpen && <AttentionBox compact withIconWithoutHeader entryAnimation icon={Info} text="First, move the content you want to copy into folder. Only main boards and dashboards can be copied." onClose={() => setOpen(false)} />}
        </Flex>
      </>;
```

