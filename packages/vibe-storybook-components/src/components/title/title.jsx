import React from 'react';
import cx from 'classnames';
import './title.scss';

export const Title = ({ className, ...props }) => <h3 className={cx('vibe-sb-comps-title', className)} {...props} />;

export default Title;
