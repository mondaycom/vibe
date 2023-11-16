import { FC } from 'react';
import InformationBoxTitle from '../information-box-title/information-box-title';
import { ElementContent, withStaticProps } from '../../types';
import { LinkTarget } from '../link/LinkConstants';
import styles from './information-box.module.scss';

type InformationBoxProps = {
  component?: ElementContent;
  title?: ElementContent;
  description?: string;
  href?: string;
  linkTarget?: LinkTarget;
};

const InformationBox: FC<InformationBoxProps> & { linkTargets?: typeof LinkTarget } = ({
  component = null,
  title = '',
  description = '',
  href,
  linkTarget,
}) => {
  const overrideTitle =
    typeof title === 'string' ? (
      <InformationBoxTitle href={href} linkTarget={linkTarget}>
        {title}
      </InformationBoxTitle>
    ) : (
      title
    );

  return (
    <section className={styles.informationBox}>
      {component && <figure className={styles.component}>{component}</figure>}
      {overrideTitle}
      <section className={styles.description}>{description}</section>
    </section>
  );
};

export default withStaticProps(InformationBox, { linkTargets: LinkTarget });
