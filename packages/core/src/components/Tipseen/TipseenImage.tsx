import cx from "classnames";
import React from "react";
import styles from "./TipseenImage.module.scss";
import TipseenMedia from "./TipseenMedia/TipseenMedia";

export interface TipseenImageProps {
  // Better be required, but it might be a breaking change
  src?: string | undefined;
  // Better be required, but it might be a breaking change
  alt?: string;
  className?: string;
  tipseenMediaClassName?: string;
}

const TipseenImage: React.FC<TipseenImageProps> = ({ src, alt, className, tipseenMediaClassName }) => {
  return (
    // TODO future breaking change where we remove the TipseenMedia component and we remove TipseenImage?
    <TipseenMedia className={tipseenMediaClassName}>
      <img src={src} alt={alt} className={cx(styles.tipseenImage, className)} />
    </TipseenMedia>
  );
};

export default TipseenImage;
