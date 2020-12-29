import React, { cloneElement, useEffect, useMemo } from "react";
import { findDOMNode } from "react-dom";
import cx from "classnames";
import { chainFunctions } from "../../../utils/function-utils";

const DialogReference = ({
  children,
  onBlur,
  onClick,
  onFocus,
  onMouseDown,
  onMouseEnter,
  onMouseLeave,
  setReferenceElement
}) => {
  const uniqueClassName = useMemo(() => {
    return `_${Date.now()}`;
  }, []);

  useEffect(() => {
    const element = document.querySelector(`.${uniqueClassName}`);
    setReferenceElement(element);
  }, [setReferenceElement, uniqueClassName]);

  const childrenProps = (children && children.props) || {};

  if (!children) {
    return null;
  }

  return cloneElement(children, {
    className: cx(children.props.className, uniqueClassName),
    onBlur: chainFunctions([childrenProps.onBlur, , onBlur], true),
    onClick: chainFunctions([childrenProps.onClick, onClick], true),
    onFocus: chainFunctions([childrenProps.onFocus, onFocus], true),
    onMouseDown: chainFunctions([childrenProps["onMouseDown"], onMouseDown], true),
    onMouseEnter: chainFunctions([childrenProps["onMouseEnter"], onMouseEnter], true),
    onMouseLeave: chainFunctions([childrenProps["onMouseLeave"], onMouseLeave], true)
  });
};
export default DialogReference;
