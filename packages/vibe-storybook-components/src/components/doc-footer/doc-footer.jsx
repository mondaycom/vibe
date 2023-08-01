import React from 'react';
import { SectionName } from '../section-name/section-name';
import { BEMClass } from '../../helpers/utils/bem-helper';
import './doc-footer.scss';

const CSS_BASE_CLASS = 'vibe-sb-comps-footer';
const bemHelper = BEMClass(CSS_BASE_CLASS);

export const DocFooter = ({ feedbackFormLink }) => (
  <div className={CSS_BASE_CLASS}>
    <SectionName>Feedback</SectionName>
    <div className={bemHelper({ element: 'text' })}>
      Help us improve this pattern by providing feedback, asking questions, and leaving any other comments on
      <a href={feedbackFormLink} className={bemHelper({ element: 'link' })}>
        this form
      </a>
    </div>
  </div>
);

export default DocFooter;
