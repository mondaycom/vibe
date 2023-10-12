import { ReactElement } from "react";

export type CloseMenuOption = {
  propagate?: boolean;
};

export type MenuChild = ReactElement & {
  type?: Record<string, unknown>;
};
