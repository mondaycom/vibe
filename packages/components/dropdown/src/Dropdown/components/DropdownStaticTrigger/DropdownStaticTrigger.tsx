import React from "react";
import { useDropdownContext } from "../../context/DropdownContext";
import SingleSelectTrigger from "../Trigger/SingleSelectTrigger";
import MultiSelectTrigger from "../Trigger/MultiSelectTrigger";

const DropdownStaticTrigger = () => {
  const { multi } = useDropdownContext();

  return <div className="">{multi ? <MultiSelectTrigger /> : <SingleSelectTrigger />}</div>;
};

export default DropdownStaticTrigger;
