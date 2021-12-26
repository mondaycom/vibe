import cx from "classnames";
import { InformationBox } from "../../../components/information-box/information-box";
import { elementColorsNames } from "../../../../general-stories/colors/colors-vars-map";
import "./contributor.scss";

const BASE_CLASS = "monday-storybook-welcome-contributor";
export const Contributor = ({ imgSrc, className, fullName, title }) => {
  const contributorVisualImage = (
    <div className={cx(`${BASE_CLASS}_visual-element`, className)}>
      <img src={imgSrc} alt="" className={`${BASE_CLASS}_image`} />
    </div>
  );

  return <InformationBox component={contributorVisualImage} title={fullName} description={title} />;
};

Contributor.colors = elementColorsNames;
