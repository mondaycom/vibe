import { userEvent } from "@storybook/testing-library";
import {
  getByRole,
  getByText,
  clickElement,
  hoverElement,
  waitForElementVisible,
  interactionSuite,
  resetFocus
} from "../../../../__tests__/interactions-helper";
import { expect } from "@storybook/jest";

const TWO_DEPTHS_MENU_TEXTS = {
  TOP_MENU_SUB_MENU_ITEM: "With Sub menu",
  SUB_MENU_ITEM: "Sub Sub menu",
  SUB_SUB_MENU_ITEM: "Sub sub item",
  TOP_MENU_NON_SUB_MENU_ITEM: "Another item"
};
const showSubSubMenusOnHover = async canvas => {
  const menuElement = getMenuElement(canvas);

  const topMenuItem = getByText(menuElement, TWO_DEPTHS_MENU_TEXTS.TOP_MENU_SUB_MENU_ITEM);
  await userEvent.hover(topMenuItem);

  const innerMenuItem = getByText(menuElement, TWO_DEPTHS_MENU_TEXTS.SUB_MENU_ITEM);
  await userEvent.hover(innerMenuItem);

  // validate showing sub sub item
  const optionToSelect = await waitForElementVisible(() =>
    getByText(menuElement, TWO_DEPTHS_MENU_TEXTS.SUB_SUB_MENU_ITEM)
  );
  await clickElement(optionToSelect);
  expect(document.activeElement).toContainElement(optionToSelect);

  //close the sub-menus on hovering the top-level menu
  await userEvent.hover(getByText(menuElement, TWO_DEPTHS_MENU_TEXTS.TOP_MENU_NON_SUB_MENU_ITEM));
  expect(canvas.queryByText(TWO_DEPTHS_MENU_TEXTS.SUB_MENU_ITEM)).not.toBeInTheDocument();
  expect(canvas.queryByText(TWO_DEPTHS_MENU_TEXTS.SUB_SUB_MENU_ITEM)).not.toBeInTheDocument();
};

// const showSubSubMenusWithKeyboard = async canvas => {
//   await hoverMenuElementByText(canvas, "With Sub menu");
//   // const menuElement = await getByRole(canvas, "menu");
//   // Click the sub menu
//   let optionToSelect = getByText(menuElement, "With Sub menu");
//   await hoverElement(optionToSelect);
//   // Click the sub sub menu
//   optionToSelect = getByText(menuElement, "Sub Sub menu");
//   await hoverElement(optionToSelect);
//   // validate showing sub sub item
//   optionToSelect = await waitForElementVisible(() => getMenuElementByText(canvas, "Sub sub item"));
//   await clickElement(optionToSelect);
// };

export const menuWithTwoDepthsSuite = interactionSuite({
  tests: [showSubSubMenusOnHover],
  afterEach: async () => {
    await resetFocus();
  }
});

function getMenuElement(canvas) {
  return getByRole(canvas, "menu");
}

async function hoverMenuElementByText(canvas, text) {
  const toHover = await getMenuElementByText(canvas, text);
  await hoverElement(toHover);
}
