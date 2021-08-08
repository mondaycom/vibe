import "./TipseenTitle.scss";

const BASE_CSS_CLASS = "monday-style-tipseen-title";
const TipseenTitle = ({ text }) => {
  return text ? <span className={BASE_CSS_CLASS}>{text}</span> : null;
};

export default TipseenTitle;
