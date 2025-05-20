# Storybook Code Examples

## States

```tsx
<div className="monday-storybook-breadcrumb-item_column-wrapper">
      <div className="monday-storybook-breadcrumb-item_row-wrapper">
        <span>Link</span>
        <BreadcrumbsBar type="navigation">
          <BreadcrumbItem text="Workspace" icon={Workspace} link="https://www.google.com" />
        </BreadcrumbsBar>
      </div>
      <div className="monday-storybook-breadcrumb-item_row-wrapper">
        <span>Function</span>
        <BreadcrumbsBar type="navigation">
          <BreadcrumbItem text="Workspace" icon={Workspace} onClick={() => {
        alert("Hello");
      }} />
        </BreadcrumbsBar>
      </div>
      <div className="monday-storybook-breadcrumb-item_row-wrapper">
        <span>Disabled</span>
        <BreadcrumbsBar type="indication">
          <BreadcrumbItem text="Workspace" icon={Workspace} disabled />
        </BreadcrumbsBar>
      </div>
      <div className="monday-storybook-breadcrumb-item_row-wrapper">
        <span>Current</span>
        <BreadcrumbsBar type="indication">
          <BreadcrumbItem text="Workspace" icon={Workspace} isCurrent />
        </BreadcrumbsBar>
      </div>
    </div>
```

## With icon

```tsx
<div className="monday-storybook-breadcrumb-item_column-wrapper">
      <div className="monday-storybook-breadcrumb-item_row-wrapper">
        <span>With Icon</span>
        <BreadcrumbsBar type="indication">
          <BreadcrumbItem text="Workspace" icon={Workspace} />
        </BreadcrumbsBar>
      </div>
      <div className="monday-storybook-breadcrumb-item_row-wrapper">
        <span>Without Icon</span>
        <BreadcrumbsBar type="indication">
          <BreadcrumbItem text="Workspace" />
        </BreadcrumbsBar>
      </div>
    </div>
```

