import React from "react";
import classes from "./rounded-corner.module.scss";

const tokens = [
  { token: "border-radius-4", value: "4px" },
  { token: "border-radius-8", value: "8px" },
  { token: "border-radius-12", value: "12px" },
  { token: "border-radius-16", value: "16px" }
];

const RoundedCornerScale = () => (
  <div className={classes.scale}>
    {tokens.map(({ token, value }) => (
      <div key={token} className={classes.item}>
        <div className={classes.box} style={{ borderTopLeftRadius: `var(--${token})` }} />
        <span className={classes.token}>--{token}</span>
        <span className={classes.value}>{value}</span>
      </div>
    ))}
  </div>
);

export default RoundedCornerScale;
