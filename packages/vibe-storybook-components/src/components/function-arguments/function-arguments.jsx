import React from 'react';
import PropTypes from 'prop-types';
import FunctionArgument from './function-argument';

const FunctionArguments = ({ children }) => <ul>{children}</ul>;

FunctionArguments.propTypes = {
  children: PropTypes.oneOfType([FunctionArgument, PropTypes.arrayOf(FunctionArgument)]),
};

FunctionArguments.defaultProps = {
  children: [],
};

export default FunctionArguments;
