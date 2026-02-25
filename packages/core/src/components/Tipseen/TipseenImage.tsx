import cx from "classnames";
import React from "react";
import styles from "./TipseenImage.module.scss";
import TipseenMedia from "./TipseenMedia/TipseenMedia";

export interface TipseenImageProps {
  /**
   * The source URL of the image.
   */
  src?: string | undefined;
  /**
   * The alternative text for the image, used for accessibility.
   */
  alt?: string;
  /**
   * Class name applied to the image element.
   */
  className?: string;
  /**
   * Class name applied to the TipseenMedia container.
   */
  tipseenMediaClassName?: string;
}

const TipseenImage: React.FC<TipseenImageProps> = ({ src, alt, className, tipseenMediaClassName }) => {
  return (
   // TODO future breaking change where we remove the TipseenMedia component and we remove TipseenImage?
   (<TipseenMedia className={tipseenMediaClassName}>
    <img src={src} alt={alt} className={cx(styles.tipseenImage, className)} />
   </TipseenMedia>)
  );
};

export default TipseenImage;
