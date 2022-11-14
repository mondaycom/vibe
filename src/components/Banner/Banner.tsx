import React, { useRef, forwardRef, useMemo } from "react";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import CloseSmall from "../Icon/Icons/components/CloseSmall";
import { IMAGE_POSITIONS } from "./BannerConstants";
import "./Banner.scss";
import VibeComponentProps from "../../types/VibeComponentProps";

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
      ariaLabel = "Banner"
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    const renderedTitle = useMemo(() => {
      const computedTitle = renderTitle(title);
      if (!computedTitle) return null;
      return <h2 className="banner--title">{computedTitle}</h2>;
    }, [title, renderTitle]);

    const renderedSubtitle = useMemo(() => {
      const computedSubtitle = renderSubtitle(subtitle);
      if (!computedSubtitle) return null;
      return <h3 className="banner--subtitle">{computedSubtitle}</h3>;
    }, [subtitle, renderSubtitle]);

    const renderImage = useMemo(() => {
      if (!imageSrc) return null;
      return <img src={imageSrc} alt={imageAlt} className={cx("banner--image", imageClassName)} />;
    }, [imageAlt, imageSrc, imageClassName]);

    const renderCloseButton = useMemo(() => {
      if (!onClose) return null;

      return (
        <Button
          onClick={onClose}
          className="banner--close"
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
      <aside ref={mergedRef} className={cx(className, "banner", { rtl })} aria-label={ariaLabel}>
        <div
          className={cx("banner--content", `image-position__${imagePosition}`, {
            "close-button-spacing": !!renderCloseButton
          })}
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
