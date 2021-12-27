import PropTypes from "prop-types";
import { BEMClass } from "../../../helpers/bem-helper";
import "./information-box.scss";

const BASE_CSS_CLASS = "monday-storybook-information-box";
const bemHelper = BEMClass(BASE_CSS_CLASS);

export const InformationBox = ({ component, title, description }) => {
  return (
    <section className={BASE_CSS_CLASS}>
      <figure className={bemHelper({ element: "component" })}>{component}</figure>
      <h5 className={bemHelper({ element: "title" })}>{title}</h5>
      <section className={bemHelper({ element: "description" })}>{description}</section>
    </section>
  );
};

InformationBox.propTypes = {
  component: PropTypes.element,
  title: PropTypes.string,
  description: PropTypes.string
};

InformationBox.defaultProps = {
  component: null,
  title: "",
  description: ""
};
