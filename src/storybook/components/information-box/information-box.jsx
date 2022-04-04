import PropTypes from "prop-types";
import { Link } from "../../components";
import { BEMClass } from "../../../helpers/bem-helper";
import "./information-box.scss";
import { Flex } from "components";

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
