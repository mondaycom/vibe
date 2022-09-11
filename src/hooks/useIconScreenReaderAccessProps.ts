import { useMemo } from "react";
import { getIconScreenReaderAccessProps } from "../helpers/screenReaderAccessHelper";

export default function useIconScreenReaderAccessProps({
  isClickable,
  label,
  isDecorationOnly
}: {
  isClickable: boolean;
  label: string;
  isDecorationOnly: boolean;
}) {
  const screenReaderAccessProps = useMemo(
    () =>
      getIconScreenReaderAccessProps({
        isClickable,
        label,
        isDecorationOnly
      }),
    [isClickable, label, isDecorationOnly]
  );
  return screenReaderAccessProps;
}
