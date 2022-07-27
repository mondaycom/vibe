import cx from "classnames";
import { InformationBox } from "../../../components/information-box/information-box";
import { InformationBoxTitle } from "../../../components/information-box-title/information-box-title";
import { elementColorsNames } from "../../../../utils/colors-vars-map";
import { Flex, IconButton } from "../../../../components";
import { Email } from "../../../../components/Icon/Icons";
import "./contributor.scss";

const BASE_CLASS = "monday-storybook-welcome-contributor";

export const Contributor = ({ imgSrc, className, fullName, title, email }) => {
  const contributorTitle = (
    <Flex justify={Flex.justify.SPACE_BETWEEN}>
      <InformationBoxTitle>{fullName}</InformationBoxTitle>
      {email && (
        <a tabIndex="-1" href={`mailto:${email}`}>
          <IconButton icon={Email} kind={IconButton.kinds.TERTIARY} ariaLabel={`Contact ${fullName}`} />
        </a>
      )}
    </Flex>
  );
  const contributorVisualImage = (
    <div className={cx(`${BASE_CLASS}_visual-element`, className)}>
      <img src={imgSrc} alt="" className={`${BASE_CLASS}_image`} />
    </div>
  );
  return <InformationBox component={contributorVisualImage} title={contributorTitle} description={title} />;
};

Contributor.colors = elementColorsNames;
