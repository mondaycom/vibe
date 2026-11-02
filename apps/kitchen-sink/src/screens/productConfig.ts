export type ConfigProductName = "work_management" | "dev" | "service" | "crm";

export function initProduct(productName: ConfigProductName) {
  document.body.classList.add(productName);
}
