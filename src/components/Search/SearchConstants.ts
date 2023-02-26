export enum SearchType {
  SQUARE = "square",
  ROUND = "round",
  UNDERLINE = "underline"
}

export enum SearchTypeClass {
  round = "search_component--round",
  underline = "input-component__input--only-underline",
  square = ""
}

export const SearchDefaultIconNames: {
  layout: string;
  primary: string;
  secondary: string;
} = {
  layout: "",
  primary: "Search",
  secondary: "Clear Search"
};
