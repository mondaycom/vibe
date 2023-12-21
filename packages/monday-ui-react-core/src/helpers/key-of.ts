export const keysOf = <O extends Record<string, any>>(o: O): (keyof O)[] => {
  return Object.keys(o) as any;
};
