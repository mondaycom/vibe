import { useMemo } from "react";
import PropTypes from "prop-types";
import { BEMClass } from "../../../helpers/bem-helper";
import "./usage-guideline.scss";

const CSS_BASE_CLASS = "monday-storybook-usage-guidelines";
const bemHelper = BEMClass(CSS_BASE_CLASS);

export const UsageGuidelines = ({ guidelines }) => {
  const guidelinesElements = useMemo(
    () =>
      guidelines.map((guideline, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <span id={index} key={index} className={bemHelper({ element: "guideline" })}>
          <span className={bemHelper({ element: "icon" })}>➡️</span>
          {guideline}
        </span>
      )),
    [guidelines]
  );

  return <article className={CSS_BASE_CLASS}>{guidelinesElements}</article>;
};

UsageGuidelines.propTypes = {
  guidelines: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.element]))
};

UsageGuidelines.defaultProps = {
  guidelines: []
};
