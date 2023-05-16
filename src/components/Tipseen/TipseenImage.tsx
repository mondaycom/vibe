import cx from "classnames";
import { FC } from "react";
import styles from "./TipseenImage.module.scss";

interface TipseenImageProps {
  // Better be required, but it might be a breaking change
  src?: string | undefined;
  // Better be required, but it might be a breaking change
  alt?: string;
  className?: string;
}

const TipseenImage: FC<TipseenImageProps> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={cx(styles.tipseenImage, className)} />;
};

export default TipseenImage;
