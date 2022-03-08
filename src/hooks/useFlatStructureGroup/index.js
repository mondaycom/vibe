import { useCallback } from "react";

export function useFlatStructureGroup({ optionsCount }) {
  const groupsContainerProps = { role: "treegrid" };
  const titleProps = useCallback(() => ({ role: "row", "aria-level": 1 }), []);
  const optionProps = useCallback(() => ({ role: "row", "aria-level": 2 }), []);
  return { groupsContainerProps, titleProps, optionProps };
}
