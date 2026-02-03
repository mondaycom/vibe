# Web Accessibility Guidelines

**Purpose**: Provides general web accessibility guidelines for developing components in the `@vibe/core` library (under `packages/core/`). This rule covers adherence to WCAG, use of semantic HTML, correct ARIA attribute application, ensuring keyboard navigability, proper focus management, and context-appropriate labeling for form inputs within components.

This document outlines general web accessibility guidelines to ensure our components are usable by everyone, including people with disabilities. Adherence to these guidelines is crucial for creating inclusive digital experiences. This document is only relevant for the "@vibe/core" library, which is at "packages/core" directory.

## 1. WCAG Compliance

- **Follow WCAG:** Always strive to meet the Web Content Accessibility Guidelines (WCAG) at the AA level. Refer to the latest official WCAG documentation known to you for specific success criteria and techniques.

## 2. Semantic HTML

- **Use HTML Semantically:** Utilize HTML elements according to their intended purpose. For example, use `<nav>` for navigation links, `<button>` for interactive buttons, `<article>` for self-contained content, etc.
- **Structure Content Logically:** Ensure a logical document structure using lists (`<ul>`, `<ol>`, `<dl>`), and other structural elements. This aids screen reader users in understanding the page layout and navigating content.

## 3. ARIA (Accessible Rich Internet Applications)

- **Use ARIA When Necessary:** Employ ARIA attributes to enhance the accessibility of custom components or dynamic content where semantic HTML alone is insufficient.
- **Don't Abuse ARIA:** Avoid redundant or incorrect ARIA attributes. Remember the first rule of ARIA use: "No ARIA is better than bad ARIA." If an HTML element inherently provides the necessary semantics (e.g., `<button>`), do not add an ARIA role like `role="button"`.
- **Valid ARIA:** Ensure all ARIA attributes and roles are used according to their specifications. Incorrect ARIA can create more barriers than it solves.

## 4. Keyboard Navigation

- **Ensure Keyboard Accessibility:** All interactive elements (links, buttons, form controls, custom components) **must** be operable via a keyboard.
- **Logical Tab Order:** The tab order should be logical and intuitive, typically following the visual flow of the page.
- **Visible Focus Indicators:** Ensure that keyboard focus is clearly visible on all focusable elements.
- **Custom Component Navigation:** For custom components (e.g., carousels, tabs, menus), implement standard keyboard interaction patterns (e.g., arrow keys for navigating within a component, Enter/Space to activate). Use Vibe's custom hooks for navigation where applicable.

## 5. Focus Management

- **Manage Focus Appropriately:** For dynamic content changes, such as opening modals, pop-ups, or expanding sections, manage focus programmatically.
  - When a modal dialog opens, focus should move to an element within the dialog.
  - When the dialog closes, focus should return to the element that triggered its opening.
- **Avoid Focus Traps:** Ensure that keyboard users cannot get trapped within a component or section of the page, unless it is a component like the modal component which needs to trap focus according to WCAG.

## 6. Form Input Labeling (Component Library Context)

- **Associate Labels with Inputs:** All form inputs (`<input>`, `<textarea>`, `<select>`) should generally have associated labels to describe their purpose.
- **Component Flexibility:** Since these are guidelines for a component library (`@vibe/core`):
  - **Provide Mechanisms for Labeling:** Components that act as form inputs (e.g., `TextField`, `Checkbox`, `Select`) **must** provide a clear and accessible way to associate a label. This can be achieved through:
    - A dedicated `label` prop that renders a visible `<label>` element correctly associated with the input.
    - Props like `aria-label` or `aria-labelledby` to allow consumers to provide accessible names if a visible label is not desired or managed externally.
  - **Guidance for Consumers:** Component documentation should guide users on how to provide accessible names for inputs, emphasizing the importance of labels.
  - **Internal Labels:** If a component's design intrinsically includes a visible textual label (e.g., a button with text), ensure this text serves as its accessible name.
- **No Implicit Labels Without Clear Association:** Avoid situations where an input is visually next to text that _looks_ like a label but isn't programmatically associated.

## Claude Implementation Notes

When implementing components following these accessibility guidelines:

- **Always test with screen readers** and keyboard navigation
- **Verify ARIA attributes** are properly applied and necessary
- **Check focus management** in dynamic components
- **Ensure semantic HTML** is used as the foundation
- **Validate WCAG AA compliance** for all interactive elements
- **Test keyboard navigation patterns** match established conventions
- **Document accessibility features** in component stories and documentation