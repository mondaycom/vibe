# DropdownNew Accessibility Guide

## Overview

This document outlines the accessibility features and testing requirements for the new Dropdown component.

## Accessibility Features

### ✅ **Implemented Features**

1. **Single Combobox Role**: Only one element has `role="combobox"` to avoid confusion
2. **Proper ARIA Labels**: All interactive elements have appropriate labels
3. **Keyboard Navigation**: Full keyboard support with arrow keys, Enter, Escape
4. **Screen Reader Support**: Proper announcements for state changes
5. **Focus Management**: Clear focus indication and logical tab order
6. **Unique IDs**: Each dropdown instance has unique identifiers
7. **Semantic HTML**: Proper list structure with `<ul>` and `<li>` elements

### 🔧 **ARIA Attributes**

- `role="combobox"` - Applied to the main interactive element
- `aria-expanded` - Indicates whether the dropdown is open/closed
- `aria-haspopup="listbox"` - Indicates the dropdown has a popup menu
- `aria-controls` - References the ID of the dropdown menu
- `aria-labelledby` - References the label element ID
- `aria-label` - Provides accessible names for icon buttons
- `aria-describedby` - References help text or error messages

### ⌨️ **Keyboard Support**

| Key               | Action                                       |
| ----------------- | -------------------------------------------- |
| `Enter` / `Space` | Opens dropdown or selects highlighted option |
| `Escape`          | Closes dropdown                              |
| `Arrow Down`      | Moves focus to next option                   |
| `Arrow Up`        | Moves focus to previous option               |
| `Home`            | Moves focus to first option                  |
| `End`             | Moves focus to last option                   |
| `Tab`             | Moves focus to next focusable element        |
| `Shift + Tab`     | Moves focus to previous focusable element    |

## Testing Checklist

### 🔍 **Manual Testing**

#### **Keyboard Navigation**

- [ ] Can open dropdown with Enter/Space
- [ ] Can navigate options with arrow keys
- [ ] Can select option with Enter
- [ ] Can close with Escape
- [ ] Tab order is logical
- [ ] Focus is visible on all interactive elements

#### **Screen Reader Testing**

- [ ] Dropdown announces its purpose and state
- [ ] Selected values are announced
- [ ] Option changes are announced during navigation
- [ ] Clear button announces its action
- [ ] Helper text and errors are read

#### **Visual Testing**

- [ ] Focus indicators are visible and consistent
- [ ] Error states are clearly indicated
- [ ] Disabled states are visually distinct
- [ ] High contrast mode works properly

### 🧪 **Automated Testing**

#### **ARIA Compliance**

- [ ] No duplicate IDs in DOM
- [ ] All interactive elements have accessible names
- [ ] ARIA relationships are properly established
- [ ] Role attributes are correctly applied

#### **Structure Validation**

- [ ] List items are properly nested within lists
- [ ] Container elements use appropriate HTML tags
- [ ] No invalid HTML structures

## Usage Examples

### Basic Accessible Dropdown

```tsx
<Dropdown
  label="Select an option"
  placeholder="Choose..."
  options={options}
  ariaLabel="Product selection"
  onChange={handleChange}
/>
```

### With Helper Text

```tsx
<Dropdown
  label="Priority Level"
  helperText="Select the priority for this task"
  ariaDescribedBy="priority-help"
  options={priorityOptions}
  required
/>
```

### Searchable with Custom Labels

```tsx
<Dropdown
  searchable
  label="Search users"
  inputAriaLabel="Search for users"
  menuAriaLabel="Available users"
  placeholder="Type to search..."
  options={users}
/>
```

## Common Issues and Solutions

### Issue: Multiple Combobox Roles

**Problem**: Two elements have `role="combobox"`
**Solution**: Ensure only the main input/trigger has this role

### Issue: Missing ARIA Labels

**Problem**: Icon buttons lack accessible names
**Solution**: Add `aria-label` or `aria-labelledby` attributes

### Issue: Improper List Structure

**Problem**: `<li>` elements without parent `<ul>`
**Solution**: Use proper HTML structure or avoid list semantics

### Issue: Focus Management

**Problem**: Multiple elements receive focus
**Solution**: Coordinate focus between input and trigger elements

## Best Practices

1. **Always provide labels**: Use `label` prop or `ariaLabel` when no visible label
2. **Use helper text**: Provide context with `helperText` for complex dropdowns
3. **Handle errors gracefully**: Use `error` prop with descriptive messages
4. **Test with screen readers**: Verify announcements make sense
5. **Validate keyboard navigation**: Ensure all actions are keyboard accessible

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## References

- [WAI-ARIA Combobox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN ARIA Documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
