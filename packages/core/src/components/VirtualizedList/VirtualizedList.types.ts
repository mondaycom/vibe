export type VirtualizedListItem = {
  value?: string | Record<string, unknown>;
  height?: number;
  width?: number;
  id?: string;
  offsetTop?: number;
};

export {
  type Layout as VirtualizedListLayout,
  type ScrollDirection as VirtualizedListScrollDirection
} from "react-window";
