import cx from "classnames";
import { InformationBox } from "../../../components/information-box/information-box";
import { elementColorsNames } from "../../../../utils/colors-vars-map";
import "./contributor.scss";
import {Flex} from "components";

const BASE_CLASS = "monday-storybook-welcome-contributor";

export const Contributor = ({ imgSrc, className, fullName, title }) => {
  const contributerTitle = `<Flex Justify.><h4>{fullName}</h4></Flex>`;
  const contributorVisualImage = (
    <div className={cx(`${BASE_CLASS}_visual-element`, className)}>
      <img src={imgSrc} alt="" className={`${BASE_CLASS}_image`} />
    </div>
  );
  return <InformationBox component={contributorVisualImage} title={contributerTitle} href={href} description={title} />;
};

Contributor.colors = elementColorsNames;
