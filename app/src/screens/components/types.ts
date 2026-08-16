export type StatusType =
  | "Done"
  | "Working on it"
  | "Stuck"
  | "Waiting"
  | "Sync with other team"
  | "";
export type PriorityType = "High" | "Medium" | "Low" | "Critical" | "";

export interface Item {
  id: string;
  name: string;
  person?: string; // image URL
  personName?: string; // owner label (avatar tooltip / aria-label)
  /** Agent glass tile variants stacked before the user avatar in the Owner column. */
  agents?: (1 | 2 | 3 | 4)[];
  status: StatusType;
  date: string;
  priority: PriorityType;
}

export interface Group {
  id: string;
  title: string;
  color: string; // Hex color for the group side stripe
  items: Item[];
}

export type ColumnId = "task" | "owner" | "status" | "priority" | "eta";

export interface ColumnWidths {
  task: number;
  owner: number;
  status: number;
  priority: number;
  eta: number;
}
