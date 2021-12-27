import React from "react";
import PropTypes from "prop-types";
import { Code } from "@storybook/components"; // eslint-disable-line import/no-extraneous-dependencies
import classes from "./index.module.scss";

export const FunctionArgument = ({ children, name, type, description, default: defaultValue, required }) => (
  <li className={classes.argument}>
    {name && <code className={classes["argument-name"]}>{name}</code>}
    <code className={classes["argument-type"]}>{type}</code>
    {required && <span className={classes.required}>*</span>}
    {description && <> - {description}</>}
    {defaultValue && (
      <>
        {" "}
        Defaults to: <Code>{defaultValue}</Code>
      </>
    )}
    {children && <ul>{children}</ul>}
  </li>
);

export const FunctionArguments = ({ children }) => {
  return <ul>{children}</ul>;
};

FunctionArguments.propTypes = {
  children: PropTypes.oneOfType([FunctionArgument, PropTypes.arrayOf(FunctionArgument)])
};

FunctionArguments.defaultProps = {
  children: []
};
