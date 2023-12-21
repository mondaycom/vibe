import { IComboboxCategoryMap, IComboboxOption } from "./components/ComboboxConstants";

type OptionsByCategories = {
  [key: string]: Array<IComboboxOption>;
};

export const getOptionsByCategories = (
  options: IComboboxOption[],
  categories: IComboboxCategoryMap,
  filterValue: string
): OptionsByCategories => {
  const optionsByCategories = options.reduce((result: OptionsByCategories, option) => {
    const categoryId = option.categoryId;
    // skipping if the option doesn't have a category
    if (!categoryId) return result;
    if (categories[categoryId]?.onlyShowOnSearch && !filterValue) return result;

    if (result[categoryId]) {
      result[categoryId].push(option);
    } else {
      // eslint-disable-next-line no-param-reassign
      result[categoryId] = [option];
    }

    return result;
  }, {});

  // reorder the keys according to the categories order
  return Object.keys(categories).reduce((result: OptionsByCategories, categoryId) => {
    // eslint-disable-next-line no-param-reassign
    if (optionsByCategories[categoryId]) result[categoryId] = optionsByCategories[categoryId];

    return result;
  }, {});
};

export const defaultFilter = (filterValue: string, options: IComboboxOption[]) =>
  options.filter(
    ({ label }: { label: string }) => !filterValue || label.toLowerCase().includes(filterValue.toLowerCase())
  );
