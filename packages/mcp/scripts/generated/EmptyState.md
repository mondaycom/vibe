# Storybook Code Examples

## Overview

```tsx
<EmptyState title="The title should be concise and reflect the purpose" description="This optional paragraph should be use to extend the title. Keep it short and to the point. For longer texts add a link below." visual={<img src={emptyStateImage} alt="No items found" width={280} height={184} />} mainAction={{
  text: "Main Action",
  onClick: () => {
    console.log("Main action clicked");
  }
}} supportingAction={{
  text: "Read more",
  href: "#",
  onClick: () => {
    console.log("Supporting action clicked");
  }
}} {...args} />
```

## Default

```tsx
<EmptyState title="Visualize data from multiple boards" description="Use charts, timelines, and other widgets to see your data clearly." visual={<img src={emptyStateImage} alt="No items found" width={280} height={184} />} mainAction={{
  text: "Add your first widget",
  onClick: () => {
    console.log("Main action clicked");
  }
}} supportingAction={{
  text: "Read more",
  href: "#",
  onClick: () => {
    console.log("Supporting action clicked");
  }
}} {...args} />
```

## Without title

```tsx
<EmptyState description="No data available yet. Add some items to get started." visual={<img src={emptyStateImage} alt="No data available" width={280} height={184} />} mainAction={{
  text: "Add item",
  onClick: () => {
    console.log("Main action clicked");
  }
}} supportingAction={{
  text: "Read more",
  href: "#",
  onClick: () => {
    console.log("Supporting action clicked");
  }
}} {...args} />
```

## Compact

```tsx
<EmptyState title="Visualize data from multiple boards" description="Use charts, timelines, and other widgets to see your data clearly." visual={<img src={emptyStateImage} alt="No notifications" width={280} height={184} />} layout="compact" mainAction={{
  text: "Add your first widget",
  onClick: () => {
    console.log("Main action clicked");
  }
}} supportingAction={{
  text: "Read more",
  href: "#",
  onClick: () => {
    console.log("Supporting action clicked");
  }
}} {...args} />
```

## With button supporting action

```tsx
<EmptyState title="No files uploaded" description="Upload files to share with your team members." visual={<img src={emptyStateImage} alt="No files uploaded" width={280} height={184} />} mainAction={{
  kind: "primary",
  text: "Upload files",
  leftIcon: Update,
  onClick: () => {
    console.log("Main action clicked");
  }
}} supportingAction={{
  text: "Import from drive",
  leftIcon: Download,
  onClick: () => {
    console.log("Supporting action clicked");
  }
}} {...args} />
```

## With disabled actions

```tsx
<EmptyState title="Processing data" description="Your data is being processed. This might take a few minutes." visual={<img src={emptyStateImage} alt="Processing data" width={280} height={184} />} mainAction={{
  kind: "secondary",
  text: "Refresh",
  disabled: true,
  loading: true,
  onClick: () => {
    console.log("Main action clicked");
  }
}} supportingAction={{
  text: "Cancel",
  disabled: true,
  onClick: () => {
    console.log("Supporting action clicked");
  }
}} {...args} />
```

## Actions comparison

```tsx
<Flex direction="row" gap="large">
      <EmptyState title="Your favorites are empty" description="Add boards, docs, or dashboards to your favorites for quick access." visual={<img src={emptyStateImage} alt="No items found" width={280} height={184} />} mainAction={{
    kind: "secondary",
    text: "Add favorites",
    onClick: () => {
      console.log("First view - Add item clicked");
    }
  }} />
      <EmptyState title="Your favorites are empty" description="Add boards, docs, or dashboards to your favorites for quick access." visual={<img src={emptyStateImage} alt="No items found" width={280} height={184} />} mainAction={{
    kind: "primary",
    text: "Add favorites",
    onClick: () => {
      console.log("Second view - View details clicked");
    }
  }} {...args} />
    </Flex>
```

## With link only

```tsx
<EmptyState title="This workspace is empty" description='To get started, click the "+" above, then click "add new board".' supportingAction={{
  href: "https://example.com/help",
  text: "Read more"
}} {...args} />
```

## With two buttons

```tsx
<EmptyState title="This workspace is empty" description="Get started by choosing a board template or creating a board from scratch." mainAction={{
  kind: "secondary",
  text: "Browse templates",
  onClick: () => {
    console.log("Main action clicked");
  }
}} supportingAction={{
  kind: "tertiary",
  text: "Start from scratch",
  onClick: () => {
    console.log("Supporting action clicked");
  }
}} {...args} />
```

## With and without title comparison

```tsx
<Flex direction="row" gap="large" justify="space-between" style={{
  width: "100%"
}}>
      <EmptyState title="Create your first Gantt chart" description="Gantt charts keep your projects organized." mainAction={{
    kind: "secondary",
    text: "Connect boards to start",
    onClick: () => {
      console.log("Main action clicked");
    }
  }} />
      <EmptyState description="Create your first Gantt chart" mainAction={{
    kind: "secondary",
    text: "Connect boards to start",
    onClick: () => {
      console.log("Main action clicked");
    }
  }} {...args} />
    </Flex>
```

## With action element props

```tsx
<EmptyState title="No notifications" description="You're all caught up! Check back later for new notifications." visual={<img src={emptyStateImage} alt="No notifications" width={280} height={184} />} mainAction={<Button kind="secondary" onClick={() => {
  console.log("Main action clicked");
}}>
          Check notifications
        </Button>} supportingAction={<Link href="#" text="Manage notification settings" onClick={() => {
  console.log("Supporting action clicked");
}} />} {...args} />
```

