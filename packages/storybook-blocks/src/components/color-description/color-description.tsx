import { FC } from 'react';
import cx from 'classnames';
import VisualDescription from '../visual-description/visual-description';
import styles from './color-description.module.scss';

type ColorDescriptionProps = {
  colorName: string;
  description: string;
  withBorder: boolean;
};

const ColorDescription: FC<ColorDescriptionProps> = ({ colorName, description, withBorder }) => {
  const color = (
    <div
      className={cx(styles.colorDescription, {
        [styles.withBorder]: withBorder,
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
