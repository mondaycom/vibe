import { ReactElement } from "react";

export type CloseMenuOption = {
  propagate?: boolean;
};

export type MenuChild = ReactElement & {
  type?: {
    isSelectable?: boolean;
    isMenuChild?: boolean;
    isMenu?: boolean;
    supportFocusOnMount?: boolean;
  };
};
