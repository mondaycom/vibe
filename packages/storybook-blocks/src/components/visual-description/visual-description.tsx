import React from 'react';
import cx from 'classnames';
import styles from './visual-description.module.scss';

interface VisualDescriptionProps {
  title: string;
  ariaLabel: string;
  children: React.ReactNode;
  description: string;
  code?: string;
  className?: string;
  visualDescriptionClassName?: string;
}

const VisualDescription: React.FC<VisualDescriptionProps> = ({
  title,
  ariaLabel,
  children,
  description,
  code,
  className,
  visualDescriptionClassName,
}) => (
  <div className={cx(styles.visualDescription, className)} aria-label={ariaLabel}>
    <figure className={cx(styles.visualDescriptionVisual, visualDescriptionClassName)} aria-hidden>
      {children}
    </figure>
    <section className={styles.visualDescriptionText}>
      <h5 className={styles.visualDescriptionTitle}>{title}</h5>
      {description}
      {code && <code>{code}</code>}
    </section>
  </div>
);

export default VisualDescription;
