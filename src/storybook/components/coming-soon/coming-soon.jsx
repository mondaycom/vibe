import { comingSoon } from "./assets";
import Heading from "../../../components/Heading/Heading";
import classes from "./coming-soon.module.scss";

export const ComingSoon = () => (
  <div className={classes["coming-soon-container"]}>
    <img className={classes["coming-soon-image"]} src={comingSoon} alt="" />
    <Heading
      type={Heading.types.h2}
      ellipsis={false}
      className={classes["coming-soon-title"]}
      value="We are working hard to build this page, it will be avilabile soon!"
    />
  </div>
);
