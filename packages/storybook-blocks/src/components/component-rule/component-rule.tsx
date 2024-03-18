import React from 'react';
import cx from 'classnames';
import Check from '../../helpers/components/Icons/Check';
import CloseSmall from '../../helpers/components/Icons/CloseSmall';
import { RECOMMENDED_TITLE, NOT_RECOMMENDED_TITLE } from './component-rule-constants';
import { ElementContent } from '../../types';
import styles from './component-rule.module.scss';

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
  const titleIcon = isRecommended ? <Check className={styles.icon} /> : <CloseSmall className={styles.icon} />;
  const title = isRecommended ? RECOMMENDED_TITLE : NOT_RECOMMENDED_TITLE;

  return (
    <section
      className={cx(
        styles.componentRule,
        {
          [styles.recommended]: isRecommended,
          [styles.notRecommended]: !isRecommended,
        },
        className,
      )}
    >
      <figure className={cx(styles.component, componentContainerClassName)}>{component}</figure>
      <h5 className={styles.title}>
        {titleIcon}
        {title}
      </h5>
      <section className={styles.description}>{description}</section>
    </section>
  );
};

export default ComponentRule;
