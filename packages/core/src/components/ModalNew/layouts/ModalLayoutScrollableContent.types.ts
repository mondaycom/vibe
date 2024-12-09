import { ReactNode, UIEventHandler } from "react";

export interface ModalLayoutScrollableContentProps {
  /**
   * Callback fired when the content is scrolled.
   */
  onScroll?: UIEventHandler<HTMLDivElement>;
  /**
   * Additional class name.
   */
  className?: string;
  /**
   * Scrollable content.
   */
  children: ReactNode;
}
