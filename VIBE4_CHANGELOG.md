# Vibe Design System v4 Breaking Changes

This document tracks all breaking changes planned for Vibe Design System v4.0.0.

> **Status**: 🚧 In Development
>
> **Release Target**: TBD
>
> **Migration Guide**: Will be available at [vibe.monday.com](https://vibe.monday.com/?path=/docs/migration-guide--docs) upon release

## Overview

Vibe 4 represents a major evolution of the design system, focusing on:

- Modern React patterns and improved performance
- Enhanced accessibility and design consistency
- Simplified APIs and better developer experience
- Removal of deprecated features and legacy code

## Breaking Changes

<!-- Each breaking change should be documented with:
- Component/Feature affected
- Change description
- Migration path
- Codemod availability
- Related PR/Issue links
-->

### Components

#### Flex

- [x] **Status**: Done
- **Change**: Removed `"stretch"` from the `justify` prop (`FlexJustify` type and `FlexJustify.STRETCH` enum value)
- **Reason**: `justify-content: stretch` is not valid CSS in flexbox, so the value had no effect and no CSS implementation
- **Migration**: Remove `justify="stretch"` or `justify={FlexJustify.STRETCH}` from `<Flex>` usage
- **Codemod**: ✅ Available (`Flex-component-migration`)
- **PR**: TBD

#### Button

- [ ] **Status**: Planning
- **Change**: TBD
- **Reason**: TBD
- **Migration**: TBD
- **Codemod**: 🔄 Planned
- **PR**: TBD

#### Dialog

- [ ] **Status**: Planning
- **Change**: TBD
- **Reason**: TBD
- **Migration**: TBD
- **Codemod**: 🔄 Planned
- **PR**: TBD

#### Toggle

- [x] **Status**: Complete
- **Change**: Remove duplicate `data-testid` from internal MockToggle div element
- **Reason**: `data-testid="toggle"` was set on both the Switch input and the internal visual div, causing ambiguous test queries
- **Migration**: If tests query `[data-testid="toggle"]` and rely on multiple matches, update to expect a single match
- **Codemod**: ❌ Manual (DOM structure change, not a prop API change)
- **PR**: TBD

#### Dropdown

- [x] **Status**: Done
- **Change**: Removed old `Dropdown` component (react-select based) and promoted new Dropdown implementation as the default export
- **Reason**: The old Dropdown was deprecated in favor of a new custom implementation with better accessibility, performance, TypeScript support, and built-in form integration
- **Migration**: Complete API change - see [Dropdown Migration Guide](https://vibe.monday.com/?path=/docs/components-dropdown-migration-guide--docs). Options structure changed from `{ id, text }` to `{ value, label }`. Removed sub-components: `DropdownMenu`, `DropdownOption`, `DropdownSingleValue`. Removed enums: `DROPDOWN_CHIP_COLORS`, `DROPDOWN_MENU_POSITION`, `DROPDOWN_MENU_PLACEMENT`. Removed static properties. If using `@vibe/core/next` import, change to `@vibe/core`.
- **Codemod**: ❌ Manual (complete API change, not automatable)
- **PR**: TBD

<!-- Add more components as breaking changes are identified -->

### APIs and Hooks

#### useClickableProps

- [ ] **Status**: Planning
- **Change**: TBD
- **Reason**: TBD
- **Migration**: TBD
- **Codemod**: 🔄 Planned
- **PR**: TBD

<!-- Add more hooks/APIs as breaking changes are identified -->

### CSS and Styling

#### Design Tokens

- [ ] **Status**: Planning
- **Change**: TBD
- **Reason**: TBD
- **Migration**: TBD
- **Codemod**: ❌ Manual
- **PR**: TBD

<!-- Add styling changes as they are identified -->

### Package Structure

#### Package Exports

- [ ] **Status**: Planning
- **Change**: TBD
- **Reason**: TBD
- **Migration**: TBD
- **Codemod**: 🔄 Planned
- **PR**: TBD

<!-- Add package structure changes as they are identified -->

## Migration Tools

### Automated Codemods

Codemods will be available to automate most of the migration from v3 to v4:

```bash
npx @vibe/codemod --migration v4
```

### Manual Migration Steps

Some changes will require manual migration:

1. **Design Token Updates**: Review and update custom CSS that uses Vibe design tokens
2. **Type Changes**: Update TypeScript types that reference changed interfaces
3. **Custom Component Updates**: Review components that extend or wrap Vibe components

## Timeline

- [ ] **Phase 1**: Breaking changes planning and RFC (Current)
- [ ] **Phase 2**: Implementation and codemod development
- [ ] **Phase 3**: Beta release and testing
- [ ] **Phase 4**: Migration guide and documentation
- [ ] **Phase 5**: Stable release

## Status Legend

- 🔄 **Planned**: Codemod will be created
- ✅ **Available**: Codemod is ready
- ❌ **Manual**: Requires manual migration
- 🚧 **In Progress**: Currently being developed

---

_This document will be updated as breaking changes are finalized._
