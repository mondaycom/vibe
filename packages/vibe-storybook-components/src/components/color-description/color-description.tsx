import { FC } from 'react';
import cx from 'classnames';
import VisualDescription from '../visual-description/visual-description';
import './color-description.scss';

type ColorDescriptionProps = {
  colorName: string;
  description: string;
  withBorder: boolean;
};

const ColorDescription: FC<ColorDescriptionProps> = ({ colorName, description, withBorder }) => {
  const color = (
    <div
      className={cx('vibe-sb-comps-color-description', {
        'vibe-sb-comps-color-description--with-border': withBorder,
      })}
      style={{ backgroundColor: `var(--${colorName})` }}
    />
  );

  return (
    <VisualDescription title={colorName} description={description} ariaLabel={description}>
      {color}
    </VisualDescription>
  );
};

export default ColorDescription;
