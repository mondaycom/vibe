export const SKELETON_ROWS_AMOUNT = 5;

export enum RowSizes {
  MEDIUM = "medium",
  LARGE = "large"
}

export const RowHeights = {
  [RowSizes.MEDIUM]: 40,
  [RowSizes.LARGE]: 48
};

export type RowSize = typeof RowSizes;
