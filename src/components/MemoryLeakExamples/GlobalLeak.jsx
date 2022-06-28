import React from "react";
import { getUid } from "./utils";
import Button from "../Button/Button";

window.x = [];

export function GlobalLeak() {
  const handleClickOnAdd = () => {
    const uid = getUid();
    for (let i = 0; i < 10; i++) {
      x.push(`${uid} - ${i}` + new Array(100000000).join("x"));
    }
    console.log("add X", uid, x.length);
  };

  const handleClickOnClear = () => {
    window.x = [];
    console.log("clear X", x.length);
  };

  return (
    <>
      <Button onClick={handleClickOnAdd}>Add</Button>
      <Button onClick={handleClickOnClear} kind={Button.kinds.SECONDARY}>
        Clear
      </Button>
    </>
  );
}
