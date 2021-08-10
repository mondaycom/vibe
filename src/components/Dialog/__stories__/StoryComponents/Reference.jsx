import React from "react";
import "./Reference.scss";
import Button from "../../../Button/Button";

const ReferenceComponent = ({ title }) => {
  return (
    <div>
      <Button>{title}</Button>
    </div>
  );
};
ReferenceComponent.propTypes = {};
ReferenceComponent.defaultProps = {};
export default ReferenceComponent;
