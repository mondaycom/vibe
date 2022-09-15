/**
 * Return style by key - solves to fix noImplicitAny errors when referencing modular styles from ts files via index accessor
 * @param styles modular styles object
 * @param key string classname
 */
export function getStyle<StylesType>(styles: StylesType, key: string) {
  return styles[key as keyof typeof styles];
}
