import React from "react";
import Button from "../Button/Button";
import { getUid } from "./utils";

let detachedTree = null;
let detachedTrees = [];

function clearDetachedTree() {
  detachedTree = null;
  detachedTrees = [];
  console.log("clear detachedTrees", detachedTrees.length, detachedTree);
}
function createDetachedTree() {
  const ul = document.createElement("ul");
  for (let i = 0; i < 100; i++) {
    const li = document.createElement("li");
    const uid = getUid();
    li.innerText = `${uid} - ${i} - ${new Array(100000).join("x")}`;
    ul.appendChild(li);
  }
  detachedTree = ul;
  detachedTrees.push(detachedTree);
  console.log("detachedTrees", detachedTrees.length, detachedTree);
}

export function DetachedTreeLeak() {
  const handleClickOnAdd = () => {
    createDetachedTree();
  };

  const handleClickOnClear = () => {
    clearDetachedTree();
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
