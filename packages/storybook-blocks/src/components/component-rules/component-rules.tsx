import React, { useMemo } from 'react';
import cx from 'classnames';
import ComponentRule from '../component-rule/component-rule';
import { ElementContent } from '../../types';
import styles from './component-rules.module.scss';

interface ComponentRulesProps {
  rules: {
    positive: {
      component: ElementContent;
      description: string | ElementContent;
    };
    negative: {
      component: ElementContent;
      description: string | ElementContent;
    };
    className?: string;
    componentContainerClassName?: string;
  }[];
  className?: string;
}

const ComponentRules: React.FC<ComponentRulesProps> = ({ rules = [], className }) => {
  const componentRulesElements = useMemo(
    () =>
      rules.map((rule, index) => {
        const key = `rule-${index}`;

        return (
          <section className={cx(styles.pair, className)} key={key}>
            <ComponentRule
              component={rule.positive.component}
              description={rule.positive.description}
              className={rule.className}
              componentContainerClassName={rule.componentContainerClassName}
              isRecommended
            />
            <ComponentRule
              component={rule.negative.component}
              description={rule.negative.description}
              className={rule.className}
              componentContainerClassName={rule.componentContainerClassName}
              isRecommended={false}
            />
          </section>
        );
      }),
    [className, rules],
  );

  return <article className={styles.componentRules}>{componentRulesElements}</article>;
};

export default ComponentRules;
