import cx from 'classnames';
import React, { forwardRef, useCallback } from 'react';
import { NOOP } from '../../utils/function-utils';
import { LinkTarget } from './LinkConsts';
import { VibeComponentProps, VibeComponent } from '../../types';
import { withStaticProps } from '../../../types';
import styles from './Link.module.scss';

interface LinkProps extends VibeComponentProps {
  /**
   * Class name for overriding link text styles
   */
  textClassName?: string;
  /** Specifies the location (URL) of the external resource */
  href?: string;
  /** The link text */
  text?: string;
  /** Defines the relationship between a linked resource and the current document */
  rel?: string;
  /** onClick function - MouseEvent */
  onClick?: (event: React.MouseEvent) => void;
  /** Specifies where to open the linked document */
  target?: LinkTarget;
  /** Aria label description */
  ariaLabelDescription?: string;
  /** element id to describe the counter accordingly */
  ariaLabeledBy?: string;
  /** disable navigation */
  disableNavigation?: boolean;
  /** inherit text size */
  inheritFontSize?: boolean;
  /** if the link is in part of other text content */
  inlineText?: boolean;
}

const Link: VibeComponent<LinkProps, HTMLAnchorElement> & {
  targets?: typeof LinkTarget;
  target?: typeof LinkTarget;
} = forwardRef(
  (
    {
      className,
      textClassName,
      href = '',
      text = '',
      rel = 'noreferrer',
      onClick = NOOP,
      target = Link.targets?.NEW_WINDOW,
      ariaLabelDescription = '',
      id = '',
      ariaLabeledBy = '',
      disableNavigation = false,
      inheritFontSize = false,
      inlineText = false,
    },
    ref: React.ForwardedRef<HTMLAnchorElement>,
  ) => {
    const onClickWrapper = useCallback(
      (e: React.MouseEvent<HTMLElement>) => {
        if (disableNavigation) {
          e.preventDefault();
        }
        onClick && onClick(e);
      },
      [disableNavigation, onClick],
    );

    return (
      <a
        id={id}
        href={href}
        rel={rel}
        ref={ref}
        onClick={onClickWrapper}
        target={target}
        className={cx(styles.link, className, {
          [styles.inheritFontSize]: inheritFontSize,
          [styles.inlineText]: inlineText,
        })}
        aria-label={ariaLabelDescription}
        aria-labelledby={ariaLabeledBy}
      >
        <span className={cx(styles.text, textClassName)}>{text}</span>
      </a>
    );
  },
);

export default withStaticProps(Link, {
  target: LinkTarget,
  targets: LinkTarget,
});
