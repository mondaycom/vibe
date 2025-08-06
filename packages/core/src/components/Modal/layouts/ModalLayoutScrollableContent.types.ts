import { type ReactNode, type UIEventHandler } from "react";

export interface ModalLayoutScrollableContentProps {
  /**
   * Callback fired when the content is scrolled.
   */
  onScroll?: UIEventHandler<HTMLDivElement>;
  /**
   * Class name applied to the scrollable content container.
   */
  className?: string;
  /**
   * The scrollable content.
   */
  children: ReactNode;
}
