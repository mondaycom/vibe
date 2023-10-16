import { useMemo, FC } from 'react';
import cx from 'classnames';
import styles from './section-name.module.scss';

type SectionNameProps = {
  className?: string;
  children: string;
};

const SectionName: FC<SectionNameProps> = ({ className, children, ...props }) => {
  const id = useMemo(
    () => children.toLowerCase().replaceAll('’', '').replaceAll("'", '').split(' ').join('-'),
    [children],
  );

  return (
    <h2 id={id} className={cx(styles.sectionName, className)} {...props}>
      {children}
    </h2>
  );
};

export default SectionName;
