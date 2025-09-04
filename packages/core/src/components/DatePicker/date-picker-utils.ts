const times = (n: number) => {
  return [...Array(n).keys()];
};

export const calcNewYearsPage = (firstYearInPage: number, pageSize: number) => {
  return times(pageSize).map(n => firstYearInPage + n);
};
