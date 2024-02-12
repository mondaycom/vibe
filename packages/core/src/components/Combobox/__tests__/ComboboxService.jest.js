import * as ComboboxService from "../ComboboxService";

const OPTIONS = [
  { id: "1", label: "Test", categoryId: "category1" },
  { id: "2", label: "Test2", categoryId: "category2" },
  { id: "3", label: "Test3", categoryId: "category3" }
];
const CATEGORIES = {
  category1: { id: "category1" },
  category2: { id: "category2", label: "category2" },
  category3: { id: "category3", label: "category3" }
};
const EMPTY_FILTER_VALUE = "";

describe("ComboboxService", () => {
  it("orders the options by categories", () => {
    const result = ComboboxService.getOptionsByCategories(OPTIONS, CATEGORIES, EMPTY_FILTER_VALUE);
    const expectedResult = {
      category1: [{ id: "1", label: "Test", categoryId: "category1" }],
      category2: [{ id: "2", label: "Test2", categoryId: "category2" }],
      category3: [{ id: "3", label: "Test3", categoryId: "category3" }]
    };
    expect(result).toEqual(expectedResult);
  });

  describe("onlyShowOnSearch category param", () => {
    beforeAll(() => {
      CATEGORIES.category3.onlyShowOnSearch = true;
    });

    afterAll(() => {
      delete CATEGORIES.category3.onlyShowOnSearch;
    });

    describe("no filter value", () => {
      it("skips categories with onlyShowOnSearch", () => {
        const result = ComboboxService.getOptionsByCategories(OPTIONS, CATEGORIES, EMPTY_FILTER_VALUE);
        const expectedResult = {
          category1: [{ id: "1", label: "Test", categoryId: "category1" }],
          category2: [{ id: "2", label: "Test2", categoryId: "category2" }]
        };
        expect(result).toEqual(expectedResult);
      });
    });

    describe("with filter value", () => {
      it("keeps categories with onlyShowOnSearch", () => {
        const result = ComboboxService.getOptionsByCategories(OPTIONS, CATEGORIES, "cat");
        const expectedResult = {
          category1: [{ id: "1", label: "Test", categoryId: "category1" }],
          category2: [{ id: "2", label: "Test2", categoryId: "category2" }],
          category3: [{ id: "3", label: "Test3", categoryId: "category3" }]
        };
        expect(result).toEqual(expectedResult);
      });
    });
  });

  it("keeps the categories order", () => {
    const optionsWithMessyOrder = [
      { id: "3", label: "Test3", categoryId: "category3" },
      { id: "1", label: "Test", categoryId: "category1" },
      { id: "2", label: "Test2", categoryId: "category2" }
    ];

    const result = ComboboxService.getOptionsByCategories(optionsWithMessyOrder, CATEGORIES, EMPTY_FILTER_VALUE);
    const expectedResult = {
      category1: [{ id: "1", label: "Test", categoryId: "category1" }],
      category2: [{ id: "2", label: "Test2", categoryId: "category2" }],
      category3: [{ id: "3", label: "Test3", categoryId: "category3" }]
    };
    expect(result).toEqual(expectedResult);
  });
});
