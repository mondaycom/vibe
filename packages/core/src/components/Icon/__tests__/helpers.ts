export type Helpers<S extends string, D extends string> = string extends S
  ? string[]
  : S extends ""
  ? []
  : S extends `${infer T}${D}${infer U}`
  ? [T, ...Helpers<U, D>]
  : [S];

export type ArrayLastElement<T extends unknown[]> = T extends [...unknown[], infer R] ? R : never;
