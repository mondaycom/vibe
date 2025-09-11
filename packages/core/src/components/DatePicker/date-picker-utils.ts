const times = (n: number) => {
  if (n <= 0) return [];
  return [...Array(Math.floor(n)).keys()];
};

export const calcNewYearsPage = (firstYearInPage: number, pageSize: number) => {
  return times(pageSize).map(n => firstYearInPage + n);
};
