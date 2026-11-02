export type NavItemIcon = "home" | "board" | "doc" | "apps" | "star";

export type NavTreeNode =
  | {
      type: "item";
      id: string;
      label: string;
      icon: NavItemIcon;
      /** Optional trailing label text (e.g. "New") */
      badge?: string;
    }
  | {
      type: "folder";
      id: string;
      label: string;
      color?: string;
      defaultExpanded?: boolean;
      children: NavTreeNode[];
    };

export const DEFAULT_SELECTED_NAV_ID = "marketing-campaign";

export const WORKSPACE_NAV_TREE: NavTreeNode[] = [
  {
    type: "item",
    id: "workspace-home",
    label: "Workspace home",
    icon: "home",
  },
  {
    type: "folder",
    id: "workspace-apps",
    label: "Workspace apps",
    defaultExpanded: false,
    children: [],
  },
  {
    type: "item",
    id: "marketing-campaign",
    label: "Marketing campaign",
    icon: "board",
    badge: "New",
  },
  {
    type: "item",
    id: "designers-meeting",
    label: "Team weekly meeting",
    icon: "board",
  },
  {
    type: "folder",
    id: "forms-processes",
    label: "Forms & Processes",
    color: "#784bd1",
    defaultExpanded: true,
    children: [
      {
        type: "folder",
        id: "migrations",
        label: "Migrations and deprecations",
        color: "#ff5ac4",
        defaultExpanded: true,
        children: [
          {
            type: "item",
            id: "vibe-asset-deprecation",
            label: "Asset deprecation template",
            icon: "board",
          },
          {
            type: "item",
            id: "dropdown-deprecation",
            label: "Dropdown deprecation",
            icon: "doc",
          },
          {
            type: "item",
            id: "modal-deprecation",
            label: "Modal deprecation",
            icon: "doc",
          },
        ],
      },
      {
        type: "folder",
        id: "icons",
        label: "Icons",
        color: "#df2f4a",
        defaultExpanded: true,
        children: [
          {
            type: "item",
            id: "new-icon-vibe-request",
            label: "New icon to Vibe - request form",
            icon: "board",
          },
          {
            type: "item",
            id: "vibe-feedback",
            label: "Icons catalog instructions",
            icon: "doc",
          },
          {
            type: "item",
            id: "approved-icon-workflow",
            label: "Approved icon workflow",
            icon: "board",
          },
        ],
      },
    ],
  },
];

function collectDefaultExpanded(
  nodes: NavTreeNode[],
  acc: Record<string, boolean> = {},
): Record<string, boolean> {
  for (const node of nodes) {
    if (node.type === "folder") {
      if (node.defaultExpanded) {
        acc[node.id] = true;
      }
      collectDefaultExpanded(node.children, acc);
    }
  }
  return acc;
}

export const DEFAULT_EXPANDED_FOLDERS =
  collectDefaultExpanded(WORKSPACE_NAV_TREE);
