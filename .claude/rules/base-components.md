# Base Components Guide

**Purpose**: Comprehensive guide for base components in `@vibe/core` library (BaseInput, BaseList, BaseListItem, InfoText, FieldLabel). Documents their usage patterns, accessibility requirements, form integration patterns, and what consumers need to provide for optimal accessibility and UX. These components serve as foundational building blocks for complex UI components like dropdowns, text fields, and other form controls. Those components are internal, for developing components in Vibe, and are not intended to be exported from the `@vibe/core` library.

This document outlines the usage patterns, accessibility requirements, and integration guidelines for the foundational base components in the `@vibe/core` library: `BaseInput`, `BaseList`, `BaseListItem`, `InfoText`, and `FieldLabel`.

## Component Overview

### BaseInput

**Purpose**: Low-level input wrapper that provides consistent styling, accessibility, and extensibility for form inputs.

**What it provides out of the box**:

- Consistent visual states (success, error, disabled, readonly)
- Size variants (small, medium, large)
- Left/right element rendering slots
- Basic accessibility attributes (`aria-invalid`, roles)
- Input focus management and styling

**What consumers must provide for optimal experience**:

- Proper `aria-label` or associated `<label>` element
- Error handling and validation feedback
- Appropriate `wrapperRole`/`inputRole` for complex components
- Clear placeholder text when appropriate

### BaseList

**Purpose**: Generic list component for dropdown menus, autocomplete results, and other option lists.

**What it provides out of the box**:

- Grouped options with optional dividers
- Selection and highlighting states
- Scrollable container with max height
- RTL support
- Sticky group titles
- Custom renderers for items and menu content
- "No results" message handling

**What consumers must provide for optimal experience**:

- Proper `menuAriaLabel` for screen readers
- Keyboard navigation handling (via parent component)
- Focus management integration

### BaseListItem

**Purpose**: Individual items within lists with consistent styling and interaction patterns.

**What it provides out of the box**:

- Selection and highlighting visual states
- Disabled and readonly states
- Start/end element slots for icons, avatars, etc.
- Tooltip integration
- Size variants consistent with parent list
- RTL support

**What consumers must provide for optimal experience**:

- Proper `role` attribute (usually "option" or "menuitem")
- Click handlers and keyboard event management
- Meaningful `tooltipProps` when needed

### InfoText

**Purpose**: Helper text component for forms that provides contextual information and validation feedback.

**What it provides out of the box**:

- Consistent styling for helper text
- Error, success, disabled, and readonly states
- Conditional rendering (null when no text provided)
- Proper text sizing and color variants

**What consumers must provide for optimal experience**:

- Proper `id` for `aria-describedby` association with an input

### FieldLabel

**Purpose**: Form label component with consistent styling and accessibility features.

**What it provides out of the box**:

- Icon support with proper positioning
- Required field indicator (asterisk)
- Proper `htmlFor`/`labelFor` association
- Consistent typography and spacing

**What consumers must provide for optimal experience**:

- Proper `htmlFor` or `labelFor` matching input `id`
- Clear, descriptive label text
- Appropriate `required` flag for form validation

## Accessibility Requirements

### BaseInput Accessibility

**MUST implement**:

- `aria-label` or associated `<label>` element
- `aria-invalid` for error states (automatically provided)
- `aria-describedby` linking to helper text
- `aria-labelledby` when using external labels

**SHOULD implement**:

- `aria-required` for required fields
- `wrapperRole` for complex widgets (e.g., "search", "combobox")
- `inputRole` for specialized inputs (e.g., "spinbutton", "combobox")

**Example Integration**:

```typescript
<FieldLabel
  id="email-label"
  labelText="Email Address"
  required={true}
  labelFor="email-input"
/>
<BaseInput
  id="email-input"
  type="email"
  required={true}
  aria-labelledby="email-label"
  aria-describedby="email-info"
  error={hasError}
  placeholder="Enter your email"
/>
<InfoText
  id="email-info"
  text={errorText || "We'll never share your email"}
  error={hasError}
/>
```

### BaseList Accessibility

**SHOULD implement**:

- `aria-activedescendant` for keyboard navigation
- `aria-multiselectable` for multi-select lists
- Proper focus management with parent component

**Example Integration**:

```typescript
const { getMenuProps, getItemProps } = useCombobox({
  // ... combobox configuration
});

<BaseList
  options={filteredOptions}
  selectedItems={selectedItems}
  highlightedIndex={highlightedIndex}
  menuAriaLabel="Available options"
  getMenuProps={getMenuProps}
  getItemProps={getItemProps}
  size="medium"
/>;
```

### BaseListItem Accessibility

**MUST implement**:

- Proper `role` attribute ("option" for listbox, "menuitem" for menu)
- `itemProps` with selection and navigation handlers
- `aria-selected` state

**SHOULD implement**:

- `aria-disabled` for disabled items
- Meaningful tooltip content for complex items
- Proper focus management

## Form Integration Patterns

### Complete Form Field Pattern

The base components work together to create accessible, complete form fields:

```typescript
const FormField = ({ label, value, onChange, error, helperText, required, id }) => {
  const labelId = `${id}-label`;
  const infoId = `${id}-info`;

  return (
    <div>
      <FieldLabel id={labelId} labelText={label} required={required} labelFor={id} />
      <BaseInput
        id={id}
        value={value}
        onChange={onChange}
        error={!!error}
        required={required}
        aria-labelledby={labelId}
        aria-describedby={infoId}
      />
      <InfoText id={infoId} text={error || helperText} error={!!error} />
    </div>
  );
};
```

## UI Features and Capabilities

### Visual States

All base components support consistent visual states:

- **Normal**: Default appearance
- **Disabled**: Reduced opacity, no pointer events
- **Readonly**: Subdued appearance, no user interaction

The BaseInput base component support the following visual states:

- **Error**: Red border/text for validation errors
- **Success**: Green border/text for successful validation

### Size Variants

Components support various size variants.

### Theming Support

Components use CSS custom properties for theming:

- Design tokens from Vibe's styling library (`monday-ui-style`)
- Automatic dark/light mode support
- Consistent spacing and typography scales

## Common Patterns and Best Practices

### 1. Use className Prop for Styling Base Components

When styling base components from other components, always use their `className` prop instead of targeting them with CSS selectors like `[data-vibe]` or `[data-testid]`, element selectors, or other attribute selectors. This maintains clear component boundaries and prevents styling conflicts.

```typescript
// ✅ Good - Use className prop
<BaseInput className={styles.myCustomInput} />

// ❌ Bad - Don't target with element or attribute selectors
// In CSS: button { ... } or [data-testid] { ... }
```

### 2. Always Provide Labels

```typescript
// ✅ Good
<FieldLabel labelText="Username" labelFor="username" />
<BaseInput id="username" aria-labelledby="username-label" />

// ❌ Bad
<BaseInput placeholder="Username" /> // Placeholder is not a label
```

### 3. Use InfoText for Contextual Information

```typescript
// ✅ Good
<BaseInput
  id="password"
  type="password"
  aria-describedby="password-info"
/>
<InfoText
  id="password-info"
  text="Must be at least 8 characters"
/>

// ❌ Bad - no contextual information provided
<BaseInput type="password" />
```

### 4. Implement Proper Error Handling

```typescript
// ✅ Good
<BaseInput
  error={!!validationError}
  aria-describedby="field-error"
/>
<InfoText
  id="field-error"
  text={validationError}
  error={!!validationError}
/>

// ❌ Bad - error state not properly communicated
<BaseInput style={{ borderColor: 'red' }} />
```

## Testing Accessibility

1. **Screen Reader**: Ensure proper label associations
2. **Keyboard Navigation**: Test tab order and key handlers
3. **Focus Management**: Verify focus states and trapping
4. **ARIA Attributes**: Check for proper roles and states

## Claude Implementation Notes

When working with base components:

- **Always use `className` prop** for styling base components, never CSS selectors
- **Provide proper accessibility attributes** - labels, descriptions, roles
- **Combine components properly** for complete form fields (FieldLabel + BaseInput + InfoText)
- **Use consistent patterns** for error handling and validation feedback
- **Test accessibility thoroughly** with screen readers and keyboard navigation
- **Remember these are internal components** not exported from `@vibe/core`
- **Follow the established integration patterns** for optimal UX and accessibility
- **Use proper ARIA attributes** for different list and input types
- **Implement focus management** appropriately for complex interactions