import cx from "classnames";
import { BEMClass } from "helpers/bem-helper";
import { elementColorsNames } from "utils/colors-vars-map";
import { Flex, IconButton } from "components";
import { InformationBox } from "../../../components/information-box/information-box";
import { InformationBoxTitle } from "../../../components/information-box-title/information-box-title";
import { Email } from "../../../../components/Icon/Icons";
import "./contributor.scss";

const BASE_CLASS = "monday-storybook-welcome-contributor";
const bemHelper = BEMClass(BASE_CLASS);

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
    <div className={cx(bemHelper({ element: "visual-element" }), className)}>
      <img src={imgSrc} alt="" className={bemHelper({ element: "image" })} />
    </div>
  );
  return <InformationBox component={contributorVisualImage} title={contributorTitle} description={title} />;
};

Contributor.colors = elementColorsNames;
