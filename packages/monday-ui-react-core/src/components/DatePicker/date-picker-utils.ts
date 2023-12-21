import { times } from "lodash-es";

export const calcNewYearsPage = (firstYearInPage: number, pageSize: number) => {
  return times(pageSize, n => firstYearInPage + n);
};
