import React from 'react';
import PropTypes from 'prop-types';
import './anchor-list-item.scss';

export const AnchorListItem = ({ children }) => <li className="vibe-sb-comps-anchor-list-item">{children}</li>;
AnchorListItem.propTypes = {
  children: PropTypes.element,
};

AnchorListItem.defaultProps = {
  children: null,
};

export default AnchorListItem;
