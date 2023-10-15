import React from 'react';
import PropTypes from 'prop-types';
import InformationBoxTitle from '../information-box-title/information-box-title';
import styles from './information-box.module.scss';

const InformationBox = ({ component, title, description, href }) => {
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

InformationBox.propTypes = {
  component: PropTypes.element,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  description: PropTypes.string,
};

InformationBox.defaultProps = {
  component: null,
  title: '',
  description: '',
};

export default InformationBox;
