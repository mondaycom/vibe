export { default as Link, type LinkProps } from "./Link";

// Rename enums to avoid clashing with same-named string-union types.
export {
  LinkTarget as LinkTargetEnum,
  IconPosition as IconPositionEnum
} from "./LinkConsts";

export * from "./Link.types";
