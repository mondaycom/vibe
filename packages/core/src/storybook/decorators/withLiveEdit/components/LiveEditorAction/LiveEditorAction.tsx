import React from "react";
import styles from "./LiveEditorAction.module.scss";
import { LiveEditorActionProps } from "./LiveEditorAction.types";

const LiveEditorAction = ({ onClick, disabled, children }: LiveEditorActionProps) => {
  return (
    <button className={styles.action} type="button" onClick={() => onClick()} disabled={disabled || !onClick}>
      {children}
    </button>
  );
};

export default LiveEditorAction;
