import React from 'react';
import PropTypes from 'prop-types';
import './unstyled-list-item.scss';

const UnstyledListItem = ({ children }) => <li className="vibe-sb-comps-unstyled-list-item">{children}</li>;

UnstyledListItem.propTypes = {
  children: PropTypes.element,
};

UnstyledListItem.defaultProps = {
  children: null,
};

export default UnstyledListItem;
