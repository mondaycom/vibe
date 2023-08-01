import React from 'react';
import cx from 'classnames';
import './visual-description.scss';

export const VisualDescription = ({
  title,
  ariaLabel,
  children,
  description,
  code,
  className,
  visualDescriptionClassName,
}) => (
  <div className={cx('vibe-sb-comps-visual-description', className)} aria-label={ariaLabel}>
    <figure className={cx('vibe-sb-comps-visual-description_visual', visualDescriptionClassName)} aria-hidden>
      {children}
    </figure>
    <section className="vibe-sb-comps-visual-description_text">
      <h5 className="vibe-sb-comps-visual-description_title">{title}</h5>
      {description}
      {code && <code>{code}</code>}
    </section>
  </div>
);

export default VisualDescription;
