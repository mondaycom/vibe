import { CatalogTemplate } from "./Catalog/Catalog.stories.templates";

export default {
  title: "Catalog",
  tags: ["internal"]
};

export const Catalog = {
  render: () => <CatalogTemplate />,
  name: "Catalog",
  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    }
  }
};
