import PropTypes from "prop-types";
import { useMemo } from "react";
import { BEMClass } from "../../helpers/bem-helper";
import { ComponentRule } from "../component-rule/component-rule";
import "./component-rules.scss";

const CSS_BASE_CLASS = "monday-storybook-component-rules";
const bemHelper = BEMClass(CSS_BASE_CLASS);

export const ComponentRules = ({ rules }) => {
  const componentRulesElements = useMemo(
    () =>
      rules
        .map(rule => (
          <section className={bemHelper({ element: "pair" })}>
            <ComponentRule
              component={rule.positive?.component}
              explanation={rule.positive?.explanation}
              isRecommended
            />
            <ComponentRule
              component={rule.negative?.component}
              explanation={rule.negative?.explanation}
              isRecommended={false}
            />
          </section>
        ))
        .flat(1),
    [rules]
  );

  return <article className={CSS_BASE_CLASS}>{componentRulesElements}</article>;
};

ComponentRules.propTypes = {
  rules: PropTypes.arrayOf(
    PropTypes.shape({
      positive: PropTypes.shape({
        component: PropTypes.element,
        explanation: PropTypes.string
      }),
      negative: PropTypes.shape({
        component: PropTypes.element,
        explanation: PropTypes.string
      })
    })
  )
};

ComponentRules.defaultProps = {
  rules: []
};

ComponentRules.defaultProps = {
  isRecommended: false,
  component: undefined,
  explanation: ""
};
