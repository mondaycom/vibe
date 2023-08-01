import React from 'react';
import PropTypes from 'prop-types';
import { InformationBoxTitle } from '../information-box-title/information-box-title';
import { BEMClass } from '../../helpers/utils/bem-helper';
import './information-box.scss';

const BASE_CSS_CLASS = 'vibe-sb-comps-information-box';

const bemHelper = BEMClass(BASE_CSS_CLASS);

export const InformationBox = ({ component, title, description, href }) => {
  const overrideTitle =
    typeof title === 'string' ? <InformationBoxTitle href={href}>{title}</InformationBoxTitle> : title;

  return (
    <section className={BASE_CSS_CLASS}>
      {component && <figure className={bemHelper({ element: 'component' })}>{component}</figure>}
      {overrideTitle}
      <section className={bemHelper({ element: 'description' })}>{description}</section>
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
