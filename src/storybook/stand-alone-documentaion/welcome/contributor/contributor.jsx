import { useMemo } from "react";
import { InformationBox } from "../../../components/information-box/information-box";
import { getElementColor, elementColorsNames } from "../../../../general-stories/colors/colors-vars-map";
import "./contributor.scss";

const BASE_CLASS = "monday-storybook-welcome-contributor";
export const Contributor = ({ imgSrc, color, fullName, title }) => {
  const backgroundColorStyle = useMemo(() => {
    return { backgroundColor: getElementColor(color) };
  }, [color]);

  const contributorVisualImage = (
    <div className={`${BASE_CLASS}_visual-element`} style={backgroundColorStyle}>
      <img src={imgSrc} alt="" className={`${BASE_CLASS}_image`} />
    </div>
  );

  return <InformationBox component={contributorVisualImage} title={fullName} description={title} />;
};

Contributor.colors = elementColorsNames;
