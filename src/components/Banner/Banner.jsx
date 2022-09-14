import { camelCase } from "lodash";
import cx from "classnames";
import React, { forwardRef, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import useMergeRefs from "../../hooks/useMergeRefs";
import Button from "../../components/Button/Button";
import Icon from "../../components/Icon/Icon";
import CloseSmall from "../../components/Icon/Icons/components/CloseSmall";
import { IMAGE_POSITIONS } from "./BannerConstants";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import styles from "./Banner.module.scss";

const PRESERVE_VALUE = value => value;

const Banner = forwardRef(
  (
    {
      className,
      ariaLabel,
      imageAlt,
      imageSrc,
      renderTitle,
      renderSubtitle,
      title,
      subtitle,
      imageClassName,
      imagePosition,
      onClose,
      rtl,
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

Banner.propTypes = {
  /**
   * custom style
   */
  className: PropTypes.string,
  /**
   * image alt attribute
   */
  imageAlt: PropTypes.string,
  /**
   * image source
   */
  imageSrc: PropTypes.string,
  /**
   * determines the image position
   */
  imagePosition: PropTypes.oneOf([
    Banner.imagePosition.LEFT,
    Banner.imagePosition.RIGHT,
    Banner.imagePosition.BOTTOM,
    Banner.imagePosition.TOP
  ]),
  /**
   * image custom style
   */
  imageClassName: PropTypes.string,
  /**
   * title custom render
   */
  renderTitle: PropTypes.func,
  /**
   * subtitle custom render
   */
  renderSubtitle: PropTypes.func,
  /**
   * title value
   */
  title: PropTypes.string,
  /**
   * sub title value
   */
  subtitle: PropTypes.string,
  /**
   * Add X button to the component when initialized and called when the button is clicked
   */
  onClose: PropTypes.func,
  /**
   * Change to "Right to Left" if set to `true`. Defaults to "Left to Right"
   */
  rtl: PropTypes.bool,
  /**
   * Set the banner's aria label
   */
  ariaLabel: PropTypes.string
};

Banner.defaultProps = {
  className: "",
  imagePosition: IMAGE_POSITIONS.LEFT,
  imageAlt: "",
  imageSrc: "",
  renderTitle: PRESERVE_VALUE,
  renderSubtitle: PRESERVE_VALUE,
  title: "",
  subtitle: "",
  imageClassName: "",
  rtl: false,
  onClose: null,
  ariaLabel: "Banner"
};

export default Banner;
