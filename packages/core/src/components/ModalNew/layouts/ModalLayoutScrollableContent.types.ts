import { ReactNode, UIEventHandler } from "react";

export interface ModalLayoutScrollableContentProps {
  onScroll?: UIEventHandler<HTMLDivElement>;
  className?: string;
  children: ReactNode;
}
