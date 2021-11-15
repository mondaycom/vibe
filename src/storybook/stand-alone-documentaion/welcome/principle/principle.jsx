import { InformationBox } from "../../../components/information-box/information-box";
import "./principle.scss";

const PRINCIPLE_VISUAL_ELEMENT = `monday-storybook-principle`;

export const Principle = ({ imgSrc, title, description }) => (
  <InformationBox
    component={
      <div className={`${PRINCIPLE_VISUAL_ELEMENT}_visual-element`}>
        <img className={`${PRINCIPLE_VISUAL_ELEMENT}_image`} src={imgSrc} alt="" />
      </div>
    }
    title={title}
    description={description}
  />
);
