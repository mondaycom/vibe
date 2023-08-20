import React, { FC } from "react";
import cx from "classnames";
import IconButton from "../../IconButton/IconButton";
import CloseSmall from "../../Icon/Icons/components/CloseSmall";
import Icon, { IconSubComponentProps } from "../../Icon/Icon";
import VibeComponentProps from "../../../types/VibeComponentProps";
import { NOOP } from "../../../utils/function-utils";
import { ElementContent } from "src/types/ElementContent";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";
import Text from "../../Text/Text";
import Heading from "../../Heading/Heading";
import styles from "./ModalHeader.module.scss";

export interface ModalHeaderProps extends VibeComponentProps {
  /**
   * Heading of the modal - using string is a recommended standard, as it provides well-defined styles. Using it with JSX content should be according to design guidelines.
   */
  title: ElementContent;
  /**
   * Description of the modal - pure string description is a recommended standard, use JSX ability only if there is a need to add links
   */
  description?: ElementContent;
  /**
   * Icon to be rendered before the title
   */
  icon?: string | React.FunctionComponent<IconSubComponentProps> | null;
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
   * Should close button be hidden or not
   */
  hideCloseButton?: boolean;
}

const ModalHeader: FC<ModalHeaderProps> = ({
  className,
  title,
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
    <div className={cx(styles.container, className)}>
      <Heading
        id={id}
        maxLines={2}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.MODAL_HEADER, id)}
        className={titleClassName}
      >
        {icon && (
          <span className={cx(styles.icon, iconClassName)}>
            <Icon icon={icon} iconType={Icon.type.SVG} iconSize={iconSize} ignoreFocusStyle clickable={false} />
          </span>
        )}
        {title}
      </Heading>

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
