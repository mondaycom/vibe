# Storybook Code Examples

## Overview

```tsx
breadcrumbsBarTemplate = (args: BreadcrumbBarProps) => {
  return <BreadcrumbsBar {...args}>
      {args.children &&
    // @ts-ignore
    args.children.map((item: BreadcrumbItemProps) => <BreadcrumbItem key={item.text} text={item.text} icon={item.icon} />)}
    </BreadcrumbsBar>;
}
```

## Text only

```tsx
<BreadcrumbsBar type="indication">
      <BreadcrumbItem text="Workspace" isCurrent />
      <BreadcrumbItem text="Folder" />
      <BreadcrumbItem text="Board" />
      <BreadcrumbItem text="Group" />
    </BreadcrumbsBar>
```

## With icons

```tsx
<BreadcrumbsBar type="navigation">
      <BreadcrumbItem text="Workspace" icon={Workspace} isCurrent />
      <BreadcrumbItem text="Folder" icon={Folder} />
      <BreadcrumbItem text="Board" icon={Board} />
      <BreadcrumbItem text="Group" icon={Group} />
    </BreadcrumbsBar>
```

## Navigatable breadcrumbs

```tsx
<div className="monday-storybook-breadcrumbs-bar_inline-wrapper">
      <Avatar size="medium" src={person3} type="img" />
      <div className="monday-storybook-breadcrumbs-bar_column-wrapper">
        <span className="monday-storybook-breadcrumbs-bar_title">Rotem Dekel</span>
        <BreadcrumbsBar type="navigation">
          <BreadcrumbItem text="User research" icon={Board} />
          <BreadcrumbItem text="Video sessions" icon={Group} />
        </BreadcrumbsBar>
      </div>
    </div>
```

## With Breadcrumb Menu

```tsx
<BreadcrumbsBar type="navigation">
      <BreadcrumbItem text="Board" icon={Board} />
      <BreadcrumbItem text="Group" icon={Group} />
      <BreadcrumbMenu>
        <BreadcrumbMenuItem title="Item 1" onClick={() => alert("Item 1 clicked")} />
        <BreadcrumbMenuItem title="Item 2" link="https://www.monday.com" />
        <BreadcrumbMenuItem title="Item 3" link="https://www.monday.com" />
      </BreadcrumbMenu>
      <BreadcrumbItem text="My Item" icon={Item} isCurrent />
    </BreadcrumbsBar>
```

