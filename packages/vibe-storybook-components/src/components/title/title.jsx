import React from 'react';
import cx from 'classnames';
import './title.scss';

const Title = ({ className, ...props }) => <h3 className={cx('vibe-sb-comps-title', className)} {...props} />;

export default Title;
