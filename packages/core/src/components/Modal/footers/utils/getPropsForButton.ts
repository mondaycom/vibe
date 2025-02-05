import { ModalFooterActionProps } from "../ModalFooterBase/ModalFooterBase.types";
import cx from "classnames";

export function getPropsForButton(button?: ModalFooterActionProps, buttonClassName?: string) {
  if (!button) return undefined;
  const { tooltipProps, className, ...rest } = button;
  return {
    ...rest,
    className: tooltipProps?.content ? className : cx(className, buttonClassName),
    tooltipProps: tooltipProps?.content
      ? { ...tooltipProps, referenceWrapperClassName: cx(tooltipProps.referenceWrapperClassName, buttonClassName) }
      : undefined
  };
}
