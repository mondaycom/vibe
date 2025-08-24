export function getBaseId(containerId?: string): string | undefined {
  return containerId;
}

export function getTabId(childId: string | undefined): string | undefined {
  return childId;
}

export function getPanelId(childId: string | undefined): string | undefined {
  return childId;
}

export function getPanelIdFromTab(tabId: string | undefined): string | undefined {
  if (tabId && /-tab-/.test(tabId)) {
    return tabId.replace(/-tab-/, "-panel-");
  }
  return undefined;
}

export function getTabIdFromPanel(panelId: string | undefined): string | undefined {
  if (panelId && /-panel-/.test(panelId)) {
    return panelId.replace(/-panel-/, "-tab-");
  }
  return undefined;
}
