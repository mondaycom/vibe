import React, { FC } from "react";
import cx from "classnames";
import IconButton from "../../IconButton/IconButton";
import { CloseSmall } from "@vibe/icons";
import Icon from "../../Icon/Icon";
import VibeComponentProps from "../../../types/VibeComponentProps";
import { NOOP } from "../../../utils/function-utils";
import { ElementContent } from "src/types/ElementContent";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";
import Text from "../../Text/Text";
import Heading from "../../Heading/Heading";
import Flex from "../../Flex/Flex";
import styles from "./LegacyModalHeader.module.scss";
import { SubIcon } from "../../../types/SubIcon";

interface BaseLegacyModalHeaderProps extends VibeComponentProps {
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
   * Class name for the title
   */
  titleClassName?: string;
  /**
   * closes the Modal. No need to provide it, it is being provided by the modal
   */
  closeModal?: () => void;
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
}

interface LegacyModalHeaderWithOnlyTitle extends BaseLegacyModalHeaderProps {
  title: ElementContent;
  children?: never;
}

interface LegacyModalHeaderWithOnlyChildren extends BaseLegacyModalHeaderProps {
  title?: never;
  children: ElementContent;
}

export type LegacyModalHeaderProps = LegacyModalHeaderWithOnlyTitle | LegacyModalHeaderWithOnlyChildren;

const LegacyModalHeader: FC<LegacyModalHeaderProps> = ({
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
        <Flex align="start" gap="small" className={titleClassName}>
          {icon && (
            <Icon
              className={cx(styles.icon, iconClassName)}
              icon={icon}
              iconType="svg"
              iconSize={iconSize}
              ignoreFocusStyle
            />
          )}
          <Heading id={id} maxLines={2}>
            {title}
          </Heading>
        </Flex>
      )}
      {description && (
        <Text type="text2" maxLines={2} className={cx(styles.description, descriptionClassName)}>
          {description}
        </Text>
      )}

      <div className={cx(styles.closeButton)}>
        <IconButton
          key="xxs"
          onClick={closeModal}
          ariaLabel={closeButtonAriaLabel}
          icon={CloseSmall}
          kind="tertiary"
          size="small"
        />
      </div>
    </div>
  );
};

Object.assign(LegacyModalHeader, {
  displayName: "ModalHeader"
});

export default LegacyModalHeader;
