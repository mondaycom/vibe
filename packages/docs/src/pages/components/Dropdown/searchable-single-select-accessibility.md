# Searchable Single Select — Accessibility

A single reference for the accessibility behavior and the props that affect it for the **searchable single select** Dropdown (`searchable` + single value).

---

## The core behavior: the selected value lives inside the input

When an option is selected, its label is set as the **value of the `<input role="combobox">`**. It is not painted as a separate visual layer on top of an empty field.

This matters because assistive technologies read the input's value, not whatever is layered around it. With the value in the input:

- Tabbing to a combobox that already has a selection announces *"Team, Engineering, combobox"* — not *"Team, combobox, blank"*.
- The current value is exposed on mount for `defaultValue` / controlled `value`, not only after interaction.

> Previously the input was force-cleared after selection and the label was shown as an overlay. Screen readers announced the field as blank, which failed WCAG 4.1.2. Keeping the value in the input is the fix.

### What happens on open / reopen / type

| Action | Behavior |
|---|---|
| Select an option | Label is placed in the input; menu closes (default) |
| Reopen with a selection | The **full** option list is shown; the selected option is marked `aria-selected="true"` and highlighted (`aria-activedescendant`) |
| Start typing | The list filters by the typed text |
| Clear text | The full list returns |

Showing the full list on reopen (rather than filtering down to the single selected label) is intentional: it lets users browse and change their choice, and avoids a screen reader announcing *"1 of 1"* when more options exist.

---

## WCAG criteria addressed

| Criterion | Level | How it applies |
|---|---|---|
| **4.1.2 Name, Role, Value** | A | The combobox role, its accessible name, and its **current value** are all programmatically determinable. This is the criterion the selected-value-in-input behavior satisfies. |
| **1.3.1 Info and Relationships** | A | The label, helper text, and error state are programmatically associated with the input (not just visually adjacent). |
| **3.3.2 Labels or Instructions** | A | A persistent `label` (and `helperText`) tells the user what the field is for. |
| **3.3.1 Error Identification** | A | `error` + a descriptive `helperText` identify and describe the problem in text, not by color alone. |
| **2.1.1 Keyboard** | A | Fully operable with the keyboard (see below). |
| **4.1.3 Status Messages** | AA | Results / "no options" feedback is exposed to assistive tech without moving focus. |

---

## Keyboard interaction

| Key | Result |
|---|---|
| `Tab` | Move focus to the combobox input |
| `↓` / `↑` | Open the menu / move the highlight between options |
| `Enter` | Select the highlighted option |
| `Esc` | Close the menu (input reverts to the selected value) |
| Type text | Filter the option list |
| `Tab` (on clear button) | Move to the clear button, `Enter`/`Space` clears the selection |

---

## Screen reader output

- The input has `role="combobox"`, `aria-expanded`, and its **value reflects the selection**.
- Each option has `aria-selected="true | false"`; the active option is referenced by `aria-activedescendant`.
- On open after a selection, the highlight lands on the selected option, so it is announced as *"…, selected"*.
- An empty result set announces the `noOptionsMessage` text.

---

## Accessibility-relevant props

Layout props such as `size` are omitted — they do not affect accessibility. The props below do.

### Naming — give the field an accessible name (required for 4.1.2)

| Prop | Purpose | Notes |
|---|---|---|
| `label` | Visible text label, programmatically associated with the input (`aria-labelledby`). | **Preferred.** Visible to everyone and announced by screen readers. |
| `aria-label` | Accessible name when there is **no** visible `label`. | Use only when a visible label is not possible. |
| `inputAriaLabel` | Accessible name applied specifically to the inner search input. | Useful when the input needs a name distinct from the field label. |
| `menuAriaLabel` | Accessible name for the option list (`listbox`). | Helps orient users when the menu opens. |
| `clearAriaLabel` | Accessible name for the clear (✕) button. | **Important.** Without it the clear button is an icon-only control with no name — a 4.1.2 failure. Always set it when `clearable`. |

### State — communicate status to assistive tech

| Prop | Purpose | Notes |
|---|---|---|
| `required` | Marks the field required (`aria-required`) and shows the visual indicator. | Pair with form-level validation. |
| `error` | Puts the field in an error state (`aria-invalid`). | **Always pair with `helperText`** describing the error — color alone is not sufficient (1.4.1). |
| `helperText` | Descriptive text associated via `aria-describedby`. | Use for instructions and for the error message text. |
| `disabled` | Non-interactive, not focusable; communicated to AT. | Removes the field from the tab order. |
| `readOnly` | Value is shown and announced but not editable. | Prefer over `disabled` when the user still needs to read the value. |

### Feedback

| Prop | Purpose | Notes |
|---|---|---|
| `noOptionsMessage` | Text announced when a search yields no results. | Give a meaningful message (e.g. "No teams found") rather than leaving it empty. |

### Placeholder is not a label

| Prop | Purpose | Notes |
|---|---|---|
| `placeholder` | Hint text shown when the field is empty. | **Not a substitute for `label`.** It disappears once a value is present and is not a reliable accessible name. Always provide `label` or `aria-label` in addition. |

---

## Do / Don't

**Do**
- Provide a `label` (or `aria-label`) on every dropdown.
- Set `clearAriaLabel` whenever the field is clearable.
- Pair `error` with a descriptive `helperText`.
- Provide a meaningful `noOptionsMessage`.

**Don't**
- Rely on `placeholder` as the field's name.
- Convey the error state with color/`error` only, with no text.
- Assume the visual selection is enough — the value must live in the input (this is handled by the component).
