import { FC } from 'react';
import InformationBoxTitle from '../information-box-title/information-box-title';
import styles from './information-box.module.scss';
import { ElementContent } from '../../types';

type InformationBoxProps = {
  component?: ElementContent;
  title?: ElementContent;
  description?: string;
  href?: string;
};

const InformationBox: FC<InformationBoxProps> = ({ component = null, title = '', description = '', href }) => {
  const overrideTitle =
    typeof title === 'string' ? <InformationBoxTitle href={href}>{title}</InformationBoxTitle> : title;

  return (
    <section className={styles.informationBox}>
      {component && <figure className={styles.component}>{component}</figure>}
      {overrideTitle}
      <section className={styles.description}>{description}</section>
    </section>
  );
};

export default InformationBox;
