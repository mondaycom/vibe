import PropTypes from "prop-types";
import { useMemo } from "react";
import { ComponentRule } from "..";
import "./component-rules.scss";

export const ComponentRules = ({ rules }) => {
  const componentRulesElements = useMemo(
    () =>
      rules
        .map(rule => [
          <ComponentRule component={rule.positive?.component} explanation={rule.positive?.explanation} isRecommended />,
          <ComponentRule
            component={rule.negative?.component}
            explanation={rule.negative?.explanation}
            isRecommended={false}
          />
        ])
        .flat(1),
    [rules]
  );

  return <article className="monday-storybook-component-rules">{componentRulesElements}</article>;
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
