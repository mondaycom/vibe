export const getOptionsByCategories = (options, categories, filterValue) => {
  return options.reduce((result, option) => {
    const categoryId = option.categoryId;
    // skipping if the option doesn't have a category
    if (!categoryId) return result;
    if (categories[categoryId]?.onlyShowOnSearch && !filterValue) return result;

    if (result[categoryId]) {
      result[categoryId].push(option);
    } else {
      result[categoryId] = [option];
    }

    return result;
  }, {});
};
