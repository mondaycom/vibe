import React, { FC } from "react";
import cx from "classnames";
import IconButton from "../../IconButton/IconButton";
import CloseSmall from "../../Icon/Icons/components/CloseSmall";
import Icon from "../../Icon/Icon";
import VibeComponentProps from "../../../types/VibeComponentProps";
import { NOOP } from "../../../utils/function-utils";
import { ElementContent } from "src/types/ElementContent";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";
import Text from "../../Text/Text";
import Heading from "../../Heading/Heading";
import Flex from "../../Flex/Flex";
import styles from "./ModalHeader.module.scss";
import { SubIcon } from "../../../types/SubIcon";

interface BaseModalHeaderProps extends VibeComponentProps {
  /**
   * Description of the modal - pure string description is a recommended standard, use JSX ability only if there is a need to add links
   */
  description?: ElementContent;
  /**
   * Icon to be rendered before the title
   */
  // icon?: string | React.FunctionComponent<IconSubComponentProps> | null;
  icon?: SubIcon;
  /**
   * Class name for the wrapper
   */
  className?: string;
  /**
   * Class name for the title
   */
  titleClassName?: string;
  /**
   * closes the Modal. No need to provide it, it is being provided by the modal
   */
  closeModal?: () => void;
  /**  /**
   * ID for the title, needed for accessibility. No need to provide it, it is being provided by the modal
   */
  id?: string;
  /**
   * Class name for the description
   */
  descriptionClassName?: string;
  /**
   * Size of the icon
   */
  iconSize?: number;
  /**
   * class name for the icon
   */
  iconClassName?: string;
  /**
   * Aria label for the close button
   */
  closeButtonAriaLabel?: string;
  /**
   * @deprecated
   */
  hideCloseButton?: boolean;
}

interface ModalHeaderWithOnlyTitle extends BaseModalHeaderProps {
  title: ElementContent;
  children?: never;
}

interface ModalHeaderWithOnlyChildren extends BaseModalHeaderProps {
  title?: never;
  children: ElementContent;
}

export type ModalHeaderProps = ModalHeaderWithOnlyTitle | ModalHeaderWithOnlyChildren;

const ModalHeader: FC<ModalHeaderProps> = ({
  className,
  title,
  children,
  titleClassName,
  description = "",
  descriptionClassName,
  icon,
  closeModal = NOOP,
  iconSize = 24,
  iconClassName,
  // TODO remove hideCloseButton on the next breaking changes
  // eslint-disable-next-line
  hideCloseButton,
  closeButtonAriaLabel = "close",
  id,
  "data-testid": dataTestId
}) => {
  return (
    <div
      className={cx(styles.container, className)}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.MODAL_HEADER, id)}
    >
      {children ? (
        children
      ) : (
        <Flex align={Flex.align.START} gap={Flex.gaps.SMALL} className={titleClassName}>
          {icon && (
            <Icon
              className={cx(styles.icon, iconClassName)}
              icon={icon}
              iconType={Icon.type.SVG}
              iconSize={iconSize}
              ignoreFocusStyle
              clickable={false}
            />
          )}
          <Heading id={id} maxLines={2}>
            {title}
          </Heading>
        </Flex>
      )}
      {description && (
        <Text type={Text.types.TEXT2} maxLines={2} className={cx(styles.description, descriptionClassName)}>
          {description}
        </Text>
      )}

      <div className={cx(styles.closeButton)}>
        <IconButton
          key="xxs"
          onClick={closeModal}
          ariaLabel={closeButtonAriaLabel}
          icon={CloseSmall}
          kind={IconButton.kinds.TERTIARY}
          size={IconButton.sizes.SMALL}
        />
      </div>
    </div>
  );
};

Object.assign(ModalHeader, {
  displayName: "ModalHeader"
});

export default ModalHeader;
