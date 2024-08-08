// Can be used to replace statement: typeof X[keyof typeof X] - extract the corresponding value type
export type ValueOf<T> = T[keyof T];
