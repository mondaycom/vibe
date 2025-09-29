import React from "react";
import { StorybookLink, Tip } from "vibe-storybook-components";

export const TipDevTipPopover = () => (
  <Tip title="Dev tip">
    For more details about dropdowns APIs for displaying correctly inside{" "}
    <StorybookLink page="Components/Dialog/Dialog" size={StorybookLink.sizes.SMALL}>
      Dialogs,
    </StorybookLink>{" "}
    <StorybookLink page="Components/Modal" size={StorybookLink.sizes.SMALL}>
      Modals
    </StorybookLink>{" "}
    and other popovers click{" "}
    <StorybookLink
      page="Technical patterns/Dropdowns inside pop overs"
      story="Modal with damaged dropdown"
      size={StorybookLink.sizes.SMALL}
    >
      here
    </StorybookLink>
    .
  </Tip>
);

export const fakeFetchUsers = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      const users = [
        { id: "1", name: "Yossi Saadi" },
        { id: "2", name: "Shahar Zilberman" },
        { id: "3", name: "Tal Koren" },
        { id: "4", name: "Meirav Ron" },
        { id: "5", name: "Yael Bein" }
      ];

      resolve({ json: () => Promise.resolve(users) });
    }, 1000);
  });
};

export const generateItems = (itemsCount = 100) => {
  const items = [];
  for (let i = 0; i < itemsCount; i++) {
    items.push({ value: i, label: `Item ${i}` });
  }
  return items;
};
