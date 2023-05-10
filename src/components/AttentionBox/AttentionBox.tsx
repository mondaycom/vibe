import React, { useMemo } from "react";
import cx from "classnames";
import Icon from "../Icon/Icon";
import IconButton from "../IconButton/IconButton";
import CloseSmall from "../Icon/Icons/components/CloseSmall";
import AlertIcon from "../Icon/Icons/components/Alert";
import { IconType } from "../Icon/IconConstants";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { AttentionBoxType } from "./AttentionBoxConstants";
import { SubIcon, VibeComponentProps } from "../../types";
import Heading from "../Heading/Heading";
import Flex from "../Flex/Flex";
import { ElementContent } from "../../types/ElementContent";
import "./AttentionBox.scss";

const ATTENTION_BOX_CSS_BASE_CLASS = "monday-style-attention-box-component";

interface AttentionBoxProps extends VibeComponentProps {
  className?: string;
  // Backward compatibility for props naming
  componentClassName?: string;
  // Will remove when releasing version 2 as BREAKING CHANGES
  withIconWithoutHeader?: boolean;
  /** we support 5 types of attention boxes */
  type?: AttentionBoxType;
  /** Icon classname for icon font or SVG Icon Component for SVG Type */
  icon?: SubIcon;
  iconType?: IconType.SVG | IconType.ICON_FONT;
  title?: string;
  text?: string;
  children?: ElementContent;
  withoutIcon?: boolean;
  onClose?: (event: React.MouseEvent) => void;
  compact?: boolean;
}

const AttentionBox: React.FC<AttentionBoxProps> & {
  types?: typeof AttentionBoxType;
  iconTypes?: typeof IconType;
} = ({
  className,
  // Backward compatibility for props naming
  componentClassName,
  // Will remove when releasing version 2 as BREAKING CHANGES
  withIconWithoutHeader = false,
  type = AttentionBox.types.PRIMARY,
  icon = AlertIcon,
  iconType = Icon.type.SVG,
  title,
  text,
  children,
  withoutIcon = false,
  onClose,
  compact = false
}) => {
  const iconLabel = useMemo(() => {
    if (type === AttentionBoxType.DANGER) {
      return "alert";
    }

    if (type === AttentionBoxType.SUCCESS) {
      return "success";
    }

    return "attention";
  }, [type]);

  const overrideClassName = backwardCompatibilityForProperties([className, componentClassName]);
  const classNameWithType = `${ATTENTION_BOX_CSS_BASE_CLASS}--type-${type}`;

  return (
    <aside
      className={cx(
        ATTENTION_BOX_CSS_BASE_CLASS,
        classNameWithType,
        { compact: compact, "with-close": onClose },
        overrideClassName
      )}
      role="alert"
    >
      <Flex
        justify={Flex.justify.START}
        align={Flex.align.CENTER}
        className={cx(`${ATTENTION_BOX_CSS_BASE_CLASS}__title-container`, `${classNameWithType}__title-container`)}
      >
        {title && !withoutIcon && (
          <Icon
            iconType={iconType}
            ariaHidden
            clickable={false}
            icon={icon}
            className={cx(
              `${ATTENTION_BOX_CSS_BASE_CLASS}__title-container__icon`,
              `${classNameWithType}__title-container__icon`
            )}
            ignoreFocusStyle
            iconSize="24"
            iconLabel={iconLabel}
          />
        )}
        {title && (
          <Heading value={title} type={Heading.types.h5} className={`${ATTENTION_BOX_CSS_BASE_CLASS}__title`} />
        )}
      </Flex>
      <div
        className={cx(`${ATTENTION_BOX_CSS_BASE_CLASS}__text`, `${classNameWithType}__text`, {
          [`${ATTENTION_BOX_CSS_BASE_CLASS}_text--compact`]: compact
        })}
      >
        {!title && compact && !withoutIcon && withIconWithoutHeader && (
          <Icon
            iconType={iconType}
            iconSize={18}
            ariaHidden
            clickable={false}
            icon={icon}
            className={cx(
              `${ATTENTION_BOX_CSS_BASE_CLASS}__title-container__icon`,
              `${classNameWithType}__title-container__icon`
            )}
            ignoreFocusStyle
            iconLabel={iconLabel}
          />
        )}
        {text || children}
      </div>
      {onClose && (
        <IconButton
          size={IconButton?.sizes?.SMALL}
          color={IconButton.colors.ON_PRIMARY_COLOR}
          className={cx(`${ATTENTION_BOX_CSS_BASE_CLASS}__close-icon`)}
          wrapperClassName={cx(`${ATTENTION_BOX_CSS_BASE_CLASS}__close-icon--wrapper`, {
            [`${ATTENTION_BOX_CSS_BASE_CLASS}__close-icon--compact`]: compact
          })}
          ariaLabel="Close"
          icon={CloseSmall}
          onClick={onClose}
        />
      )}
    </aside>
  );
};

Object.assign(AttentionBox, {
  types: AttentionBoxType,
  iconTypes: IconType
});

export default AttentionBox;
