import React from 'react';
import cx from 'classnames';
import Check from '../../helpers/components/Icons/Check';
import CloseSmall from '../../helpers/components/Icons/CloseSmall';
import { BEMClass } from '../../helpers/utils/bem-helper';
import { RECOMMENDED_TITLE, NOT_RECOMMENDED_TITLE, COMPONENT_RULE_BASE_CSS_CLASS } from './component-rule-constants';
import './component-rule.scss';
import { ElementContent } from '../../types';

const bemHelper = BEMClass(COMPONENT_RULE_BASE_CSS_CLASS);

interface ComponentRuleProps {
  component: ElementContent;
  description: ElementContent;
  isRecommended: boolean;
  className?: string;
  componentContainerClassName?: string;
}

const ComponentRule: React.FC<ComponentRuleProps> = ({
  component,
  description = '',
  isRecommended = false,
  className,
  componentContainerClassName,
}) => {
  const stateDescription = isRecommended ? 'recommended' : 'not-recommended';
  const titleIcon = isRecommended ? (
    <Check className={bemHelper({ element: 'icon' })} />
  ) : (
    <CloseSmall className={bemHelper({ element: 'icon' })} />
  );
  const title = isRecommended ? RECOMMENDED_TITLE : NOT_RECOMMENDED_TITLE;

  return (
    <section className={cx(COMPONENT_RULE_BASE_CSS_CLASS, bemHelper({ state: stateDescription }), className)}>
      <figure className={cx(bemHelper({ element: 'component' }), componentContainerClassName)}>{component}</figure>
      <h5 className={bemHelper({ element: 'title' })}>
        {titleIcon}
        {title}
      </h5>
      <section className={bemHelper({ element: 'description' })}>{description}</section>
    </section>
  );
};

export default ComponentRule;
