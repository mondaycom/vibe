import camelCase from "lodash/camelCase";
import cx from "classnames";
import React, { forwardRef, useMemo, useRef } from "react";
import useMergeRefs from "../../hooks/useMergeRefs";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import CloseSmall from "../Icon/Icons/components/CloseSmall";
import { IMAGE_POSITIONS } from "./BannerConstants";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import VibeComponentProps from "../../types/VibeComponentProps";
import styles from "./Banner.module.scss";

export interface BannerProps extends VibeComponentProps {
  /**
   * custom style
   */
  className?: string;

  /**
   * image alt attribute
   */
  imageAlt?: string;

  /**
   * image source
   */
  imageSrc?: string;

  /**
   * determines the image position
   */
  imagePosition?: IMAGE_POSITIONS;
  /**
   * image custom style
   */
  imageClassName?: string;

  /**
   * title custom render
   */
  renderTitle?: (value: string) => string | React.ReactNode;

  /**
   * subtitle custom render
   */
  renderSubtitle?: (value: string) => string | React.ReactNode;

  /**
   * title value
   */
  title?: string;

  /**
   * sub title value
   */
  subtitle?: string;

  /**
   * Add X button to the component when initialized and called when the button is clicked
   */
  onClose?: (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void;

  /**
   * Change to "Right to Left" if set to `true`. Defaults to "Left to Right"
   */
  rtl?: boolean;

  /**
   * Set the banner's aria label
   */
  ariaLabel?: string;
}

/**
 * Default `renderTitle` and `renderSubtitle` function
 */
const PRESERVE_VALUE = (value: string) => value;

const Banner: React.ForwardRefExoticComponent<BannerProps & React.RefAttributes<unknown>> & {
  imagePosition?: typeof IMAGE_POSITIONS;
} = forwardRef<unknown, BannerProps>(
  (
    {
      className = "",
      imageAlt = "",
      imageSrc = "",
      imagePosition = IMAGE_POSITIONS.LEFT,
      imageClassName = "",
      renderTitle = PRESERVE_VALUE,
      renderSubtitle = PRESERVE_VALUE,
      title = "",
      subtitle = "",
      onClose = null,
      rtl = false,
      ariaLabel = "Banner",
      id,
      "data-testid": dataTestId
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    const renderedTitle = useMemo(() => {
      const computedTitle = renderTitle(title);
      if (!computedTitle) return null;
      return <h2 className={cx(styles.bannerTitle, "banner--title")}>{computedTitle}</h2>;
    }, [title, renderTitle]);

    const renderedSubtitle = useMemo(() => {
      const computedSubtitle = renderSubtitle(subtitle);
      if (!computedSubtitle) return null;
      return <h3 className={cx(styles.bannerSubtitle, "banner--subtitle")}>{computedSubtitle}</h3>;
    }, [subtitle, renderSubtitle]);

    const renderImage = useMemo(() => {
      if (!imageSrc) return null;
      return <img src={imageSrc} alt={imageAlt} className={cx(styles.bannerImage, "banner--image", imageClassName)} />;
    }, [imageAlt, imageSrc, imageClassName]);

    const renderCloseButton = useMemo(() => {
      if (!onClose) return null;

      return (
        <Button
          onClick={onClose}
          className={cx(styles.bannerClose, "banner--close")}
          size={Button.sizes.SMALL}
          kind={Button.kinds.TERTIARY}
          color={Button.colors.PRIMARY}
          ariaLabel="Close"
        >
          <Icon iconType={Icon.type.SVG} clickable={false} icon={CloseSmall} iconSize="16px" ignoreFocusStyle />
        </Button>
      );
    }, [onClose]);

    return (
      <aside
        ref={mergedRef}
        className={cx(className, styles.banner, "banner", {
          [styles.rtl]: rtl,
          ["rtl"]: rtl
        })}
        aria-label={ariaLabel}
      >
        <div
          id={id}
          data-testid={dataTestId || getTestId(ELEMENT_TYPES.BANNER, id)}
          className={cx(
            styles.bannerContent,
            "banner--content",
            getStyle(styles, camelCase("image-position__" + imagePosition)),
            `image-position__${imagePosition}`,
            {
              [styles.closeButtonSpacing]: !!renderCloseButton,
              ["close-button-spacing"]: !!renderCloseButton
            }
          )}
        >
          {renderCloseButton}
          {renderedTitle}
          {renderedSubtitle}
          {renderImage}
        </div>
      </aside>
    );
  }
);

Banner.imagePosition = IMAGE_POSITIONS;

export default Banner;
