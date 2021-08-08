import cx from "classnames";
import "./TipseenImage.scss";

const BASE_CSS_CLASS = "monday-style-tipseen-image";
const TipseenImage = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={cx(BASE_CSS_CLASS, className)} />;
};

export default TipseenImage;
