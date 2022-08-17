import PropTypes from "prop-types";
import { BEMClass } from "../../../helpers/bem-helper";
import { InformationBoxTitle } from "../information-box-title/information-box-title";
import "./information-box.scss";

const BASE_CSS_CLASS = "monday-storybook-information-box";

const bemHelper = BEMClass(BASE_CSS_CLASS);

export const InformationBox = ({ component, title, description }) => {
  const overrideTitle = typeof title === "string" ? <InformationBoxTitle>{title}</InformationBoxTitle> : title;

  return (
    <section className={BASE_CSS_CLASS}>
      {component && <figure className={bemHelper({ element: "component" })}>{component}</figure>}
      {overrideTitle}
      <section className={bemHelper({ element: "description" })}>{description}</section>
    </section>
  );
};

InformationBox.propTypes = {
  component: PropTypes.element,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  description: PropTypes.string
};

InformationBox.defaultProps = {
  component: null,
  title: "",
  description: ""
};
