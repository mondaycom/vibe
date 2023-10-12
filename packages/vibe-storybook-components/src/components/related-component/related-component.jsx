import React from 'react';
import PropTypes from 'prop-types';
import InformationBox from '../information-box/information-box';
import styles from './related-component.module.scss';

const RelatedComponent = ({ component, title, description, href }) => (
  <InformationBox
    component={<div className={styles.relatedComponentComponent}>{component}</div>}
    title={title}
    description={description}
    href={href}
  />
);

RelatedComponent.propTypes = {
  component: PropTypes.element,
  title: PropTypes.string,
  description: PropTypes.string,
};

RelatedComponent.defaultProps = {
  component: null,
  title: '',
  description: '',
};

export default RelatedComponent;
