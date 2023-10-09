import React from 'react';
import cx from 'classnames';
import VisualDescription from '../visual-description/visual-description';
import './color-description.scss';

const ColorDescription = ({ colorName, description, withBorder }) => {
  const color = (
    <div
      className={cx('vibe-sb-comps-color-description', {
        'vibe-sb-comps-color-description--with-border': withBorder,
      })}
      style={{ backgroundColor: `var(--${colorName})` }}
    />
  );

  return (
    <VisualDescription title={colorName} description={description}>
      {color}
    </VisualDescription>
  );
};

export default ColorDescription;
