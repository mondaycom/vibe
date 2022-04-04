import cx from "classnames";
import { InformationBox } from "../../../components/information-box/information-box";
import { Link } from "../../../components";
import { elementColorsNames } from "utils/colors-vars-map";
import "./contributor.scss";
import { Flex, IconButton } from "components";
import { Email } from "../../../../components/Icon/Icons";

const BASE_CLASS = "monday-storybook-welcome-contributor";

export const Contributor = ({ imgSrc, className, fullName, title, email }) => {
  const contributorTitle = (
    <Flex justify={Flex.justify.SPACE_BETWEEN}>
      <h4 className="monday-storybook-information-box_title">{fullName}</h4>
      {email && (
        <Link href={`mailto:${email}`}>
          <IconButton icon={Email} kind={IconButton.kinds.TERTIARY} ariaLabel={`Contact ${fullName}`} />
        </Link>
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
