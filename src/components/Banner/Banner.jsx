import React, { useRef, forwardRef, useMemo } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import { IMAGE_POSITIONS } from "./BannerConstants";
import "./Banner.scss";

const PRESERVE_VALUE = value => value;

const Banner = forwardRef(
  (
    { className, imageAlt, imageSrc, renderTitle, renderSubtitle, title, subtitle, imageClassName, imagePosition },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    const renderedTitle = useMemo(() => {
      const computedTitle = renderTitle(title);
      if (!computedTitle) return null;
      return <h1 className="banner--title">{computedTitle}</h1>;
    }, [title, renderTitle]);

    const renderedSubtitle = useMemo(() => {
      const computedSubtitle = renderSubtitle(subtitle);
      if (!computedSubtitle) return null;
      return <h2 className="banner--subtitle">{computedSubtitle}</h2>;
    }, [subtitle, renderSubtitle]);

    const renderImage = useMemo(() => {
      if (!imageSrc) return null;
      return <img src={imageSrc} alt={imageAlt} className={cx("banner--image", imageClassName)} />;
    }, [imageAlt, imageSrc, imageClassName]);

    return (
      <aside ref={mergedRef} className={cx("banner", className, `image-position__${imagePosition}`)} role="banner">
        {renderedTitle}
        {renderedSubtitle}
        {renderImage}
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
  subtitle: PropTypes.string
};

Banner.defaultProps = {
  className: "",
  imagePosition: IMAGE_POSITIONS.LEFT,
  imageAlt: "Banner main image",
  imageSrc: "",
  renderTitle: PRESERVE_VALUE,
  renderSubtitle: PRESERVE_VALUE
};

export default Banner;
