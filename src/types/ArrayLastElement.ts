export type ArrayLastElement<T extends unknown[]> = T extends [...unknown[], infer R] ? R : never;
