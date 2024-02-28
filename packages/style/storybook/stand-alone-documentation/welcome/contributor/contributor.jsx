import cx from "classnames";
import { InformationBox, InformationBoxTitle } from "vibe-storybook-components";
import Email from "../helper-components/Icons/Email";
import IconContainer from "../helper-components/Icons/IconContainer";
import "./contributor.scss";

const BASE_CLASS = "monday-storybook-welcome-contributor";

export const Contributor = ({ imgSrc, className, fullName, title, email }) => {
  const contributorTitle = (
    <div className={cx(`${BASE_CLASS}_container`)}>
      <InformationBoxTitle>{fullName}</InformationBoxTitle>
      {email && (
        <a tabIndex="-1" href={`mailto:${email}`}>
          <IconContainer icon={Email} />
        </a>
      )}
    </div>
  );
  const contributorVisualImage = (
    <div className={cx(`${BASE_CLASS}_visual-element`, className)}>
      <img src={imgSrc} alt="" className={`${BASE_CLASS}_image`} />
    </div>
  );
  return <InformationBox component={contributorVisualImage} title={contributorTitle} description={title} />;
};
