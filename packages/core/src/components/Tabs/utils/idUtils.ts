export function getBaseId(containerId?: string): string {
  return containerId || "tab-list";
}

export function getTabId(childId: string | undefined, containerId: string | undefined, index: number): string {
  return childId || `${getBaseId(containerId)}-tab-${index}`;
}

export function getPanelId(childId: string | undefined, containerId: string | undefined, index: number): string {
  return childId || `${getBaseId(containerId)}-panel-${index}`;
}

export function getTabIdFromPanel(panelId: string, containerId: string | undefined, index: number): string {
  if (/-panel-/.test(panelId)) {
    return panelId.replace(/-panel-/, "-tab-");
  }
  return `${getBaseId(containerId)}-tab-${index}`;
}
