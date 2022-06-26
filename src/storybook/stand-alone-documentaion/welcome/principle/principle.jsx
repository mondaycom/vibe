import { InformationBox } from "../../../components/information-box/information-box";
import { BEMClass } from "helpers/bem-helper";
import "./principle.scss";

const BASE_CLASS = `monday-storybook-principle`;
const bemHelper = BEMClass(BASE_CLASS);

export const Principle = ({ imgSrc, title, description }) => {
  const principleVisualElement = <img className={bemHelper({ element: "visual-element" })} src={imgSrc} alt="" />;
  return (
    <div className={bemHelper({ element: "container" })}>
      <InformationBox component={principleVisualElement} title={title} description={description} />
    </div>
  );
};
