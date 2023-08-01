import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { BEMClass } from '../../helpers/utils/bem-helper';
import { ComponentRule } from '../component-rule/component-rule';
import './component-rules.scss';

const CSS_BASE_CLASS = 'vibe-sb-comps-component-rules';
const bemHelper = BEMClass(CSS_BASE_CLASS);

export const ComponentRules = ({ rules, className }) => {
  const componentRulesElements = useMemo(
    () =>
      rules.map((rule, index) => {
        const key = `rule-${index}`;

        return (
          <section className={cx(bemHelper({ element: 'pair' }), className)} key={key}>
            <ComponentRule
              component={rule.positive?.component}
              description={rule.positive?.description}
              className={rule.className}
              componentContainerClassName={rule.componentContainerClassName}
              isRecommended
            />
            <ComponentRule
              component={rule.negative?.component}
              description={rule.negative?.description}
              className={rule.className}
              componentContainerClassName={rule.componentContainerClassName}
              isRecommended={false}
            />
          </section>
        );
      }),
    [className, rules],
  );

  return <article className={CSS_BASE_CLASS}>{componentRulesElements}</article>;
};

ComponentRules.propTypes = {
  rules: PropTypes.arrayOf(
    PropTypes.shape({
      positive: PropTypes.shape({
        component: PropTypes.element,
        description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      }),
      negative: PropTypes.shape({
        component: PropTypes.element,
        description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      }),
      className: PropTypes.string,
      componentContainerClassName: PropTypes.string,
    }),
  ),
};

ComponentRules.defaultProps = {
  rules: [],
};

export default ComponentRules;
