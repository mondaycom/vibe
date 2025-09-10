import type React from "react";
import { type SubIcon } from "../../../types";
import { type VibeComponentProps } from "@vibe/shared";

interface WithoutDescription {
  description?: never;
  descriptionIcon?: never;
}

interface WithDescription {
  /**
   * Descriptive text or content below the title.
   * - If you pass a **string**, this will automatically set an internally generated `aria-describedby` on the parent Modal.
   * - If you pass a **ReactNode** (e.g., a complex component), we recommend assigning an **`id`** to that component (or a nested element),
   *   and then pass that same ID in `aria-describedby` to the **Modal** (overriding the internal ID).
   *
   * This ensures that assistive technologies know which element is the modal's descriptive content.
   * @see [WAI-ARIA Authoring Practices for Dialog (Modal)](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/#wai-ariaroles,states,andproperties)
   */
  description: string | React.ReactNode;
  /**
   * Icon to display before the description. Can only be passed when description is supplied.
   */
  descriptionIcon?:
    | SubIcon
    | {
        name: SubIcon;
        className?: string;
      };
}

export type ModalHeaderProps = {
  /**
   * Main heading text of the modal.
   *
   * - If you pass a **string**, `ModalHeader` will generate an internal ID and communicate it to the parent `Modal`
   *   so that `aria-labelledby` is set automatically (unless `Modal` receives `aria-labelledby` prop).
   * - If you pass a **ReactNode** (such as a custom component), **you must**:
   *   1. Assign an **`id`** to that element (or a nested element), and
   *   2. Pass that **same `id`** as the `aria-labelledby` prop to the `Modal`.
   *
   * This ensures that assistive technologies know which element is the modal's title.
   * @see [WAI-ARIA Authoring Practices for Dialog (Modal)](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/#wai-ariaroles,states,andproperties)
   */
  title: string | React.ReactNode;
} & (WithDescription | WithoutDescription) &
  VibeComponentProps;
