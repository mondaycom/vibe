import React from "react";
import Heading from "../../../components/LegacyHeading/LegacyHeading";
import { comingSoon } from "./assets";
import classes from "./coming-soon.module.scss";

export const ComingSoon = () => (
  <div className={classes["coming-soon-container"]}>
    <img className={classes["coming-soon-image"]} src={comingSoon} alt="" />
    <Heading type={Heading.types.h3} ellipsis={false} className={classes["coming-soon-title"]} value="Coming soon..." />
  </div>
);

export default ComingSoon;
