/**
 * Return style by key - used to fix noImplicitAny errors when referencing modular styles from ts files via index accessor
 * @param styles modular styles object
 * @param key string classname
 */
export function getStyle<StylesType>(styles: StylesType, key: string | undefined | null) {
  if (!key) return "";
  return styles[key as keyof typeof styles];
}
