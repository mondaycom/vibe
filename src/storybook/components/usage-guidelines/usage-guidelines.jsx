import { useMemo } from "react";
import PropTypes from "prop-types";
import { BEMClass } from "../../helpers/bem-helper";
import "./usage-guideline.scss";

const CSS_BASE_CLASS = "monday-storybook-usage-guidelines";
const bemHelper = BEMClass(CSS_BASE_CLASS);

export const UsageGuidelines = ({ guidelines }) => {
  const guidelinesElements = useMemo(
    () =>
      guidelines.map((guideline, index) => (
        <span id={index} className={bemHelper({ element: "guideline" })}>
          <div className={bemHelper({ element: "icon" })}>➡️</div>
          {guideline}
        </span>
      )),
    [guidelines]
  );

  return <article className={CSS_BASE_CLASS}>{guidelinesElements}</article>;
};

UsageGuidelines.propTypes = {
  guidelines: PropTypes.arrayOf(PropTypes.string)
};

UsageGuidelines.defaultProps = {
  guidelines: []
};
