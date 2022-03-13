import {
  getByRole,
  getByText,
  clickElement,
  hoverElement,
  testFunctionWrapper,
  delay
} from "../../../../__tests__/interactions-helper";

export const showSubMenus = testFunctionWrapper(async canvas => {
  const menuElement = await getByRole(canvas, "menu");
  // Click the sub menu
  let optionToSelect = getByText(menuElement, "With Sub menu");
  await hoverElement(optionToSelect);
  // Click the sub sub menu
  optionToSelect = getByText(menuElement, "Sub Sub menu");
  await hoverElement(optionToSelect);
  // validate showing sub sub item
  await delay(1);
  optionToSelect = getByText(menuElement, "Sub sub item");
  await clickElement(optionToSelect);
});
