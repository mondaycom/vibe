import { times } from "es-toolkit/compat";

export const calcNewYearsPage = (firstYearInPage: number, pageSize: number) => {
  return times(pageSize, n => firstYearInPage + n);
};
