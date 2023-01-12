import cx from "classnames";
import { VibeComponentProps } from "../../types";
import { FC } from "react";
import styles from "./TipseenImage.module.scss";

const BASE_CSS_CLASS = "monday-style-tipseen-image";

interface TipseenImageProps extends VibeComponentProps {
  // Better be required, but it might be a breaking change
  src?: string | undefined;
  // Better be required, but it might be a breaking change
  alt?: string;
}

const TipseenImage: FC<TipseenImageProps> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={cx(styles.tipseenImage, BASE_CSS_CLASS, className)} />;
};

export default TipseenImage;
