import React from 'react';
import cx from 'classnames';
import ComponentName from '../../../src/components/component-name/component-name';
import './component-name-decorator.scss';

const ComponentNameDecorator = ({ children, className, withFoundationBackground = false }) => {
  return (
    <ComponentName
      className={cx('vibe-storybook-component-name', className, {
        'vibe-storybook-component-name--foundation': withFoundationBackground,
      })}
    >
      {children}
    </ComponentName>
  );
};

export default ComponentNameDecorator;
