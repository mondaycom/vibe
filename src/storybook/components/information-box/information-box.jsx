import PropTypes from "prop-types";
import { BEMClass } from "helpers/bem-helper";
import "./information-box.scss";

const BASE_CSS_CLASS = "monday-storybook-information-box";
const bemHelper = BEMClass(BASE_CSS_CLASS);

export const InformationBox = ({ component, title, description }) => {
  const overrideTitle = typeof title === "string" ? <h4>{title}</h4> : title;
  return (
    <section className={BASE_CSS_CLASS}>
      <figure className={bemHelper({ element: "component" })}>{component}</figure>
      {overrideTitle}
      <section className={bemHelper({ element: "description" })}>{description}</section>
    </section>
  );
};

console.log([PropTypes.string, PropTypes.element]);
InformationBox.propTypes = {
  component: PropTypes.element,
  title: PropTypes.oneOf([PropTypes.string, PropTypes.element]),
  description: PropTypes.string
};

InformationBox.defaultProps = {
  component: null,
  title: "",
  description: ""
};
