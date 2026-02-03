# Vibe Design System

Modern React component library organized as a monorepo with comprehensive design system.

## Core Principles

- **Research-driven development**: Study existing components before implementing
- **Accessibility first**: WCAG AA compliance required
- **Modern React patterns**: forwardRef, hooks, TypeScript
- **Design system integration**: Use existing Vibe components and tokens

## Quick Reference

- **Main library**: `@vibe/core` at `packages/core/`
- **Component pattern**: Extend `VibeComponentProps`, include `[data-vibe]` attribute
- **Prop values**: Use string literals, not static properties

Context-specific rules in `.claude/rules/` activate automatically when working on relevant files.
