import React from 'react';
import cx from 'classnames';
import './multiple-story-elements-wrapper.scss';

const MultipleStoryElementsWrapper = ({ className, children }) => (
  <div className={cx('monday-storybook_multiple-story-elements-wrapper', className)}>
    <div data-testid="focusTrap" className="monday-storybook_focus-trap" />
    {children}
  </div>
);

export default MultipleStoryElementsWrapper;
