export type SplitString<S extends string, D extends string> = string extends S
  ? string[]
  : S extends ""
  ? []
  : S extends `${infer T}${D}${infer U}`
  ? [T, ...SplitString<U, D>]
  : [S];
