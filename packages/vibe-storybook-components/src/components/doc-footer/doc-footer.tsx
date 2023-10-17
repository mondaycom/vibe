import { FC } from 'react';
import SectionName from '../section-name/section-name';
import styles from './doc-footer.module.scss';

type DocFooterProps = {
  feedbackFormLink: string;
};

const DocFooter: FC<DocFooterProps> = ({ feedbackFormLink }) => (
  <div className={styles.docFooter}>
    <SectionName>Feedback</SectionName>
    <div className={styles.text}>
      Help us improve this pattern by providing feedback, asking questions, and leaving any other comments on
      <a href={feedbackFormLink} className={styles.link}>
        this form
      </a>
    </div>
  </div>
);

export default DocFooter;
