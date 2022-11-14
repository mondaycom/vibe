import times from "lodash/times";

export const calcNewYearsPage = (firstYearInPage: number, pageSize: number) => {
  return times(pageSize, n => firstYearInPage + n);
};
