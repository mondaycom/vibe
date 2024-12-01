import React from 'react';
import styles from './anchor.module.scss';
import AnchorIcon from './anchor-icon';
import cx from 'classnames';

interface AnchorProps {
  id: string;
  className?: string;
}

export default function Anchor({ id, className }: AnchorProps) {
  const handleClick = () => {
    if (window.parent) {
      // Update the parent window hash to match the clicked anchor
      window.parent.location.hash = `#${id}`;
    }
  };

  return (
    <a onClick={handleClick} href={`#${id}`} className={cx(styles.anchor, className)} target="_self">
      <AnchorIcon />
    </a>
  );
}
