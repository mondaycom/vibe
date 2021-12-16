import { Frame } from "../../../components";
import { BEMClass } from "../../../../helpers/bem-helper";
import { Button, Heading } from "../../../../components";
import { peopleColumn } from "../assets";
import "./card-shadow-example.scss";

const CSS_BASE_CLASS = "monday-storybook-card-shadow-example";
const bemHelper = BEMClass(CSS_BASE_CLASS);

export const CardShadowExample = () => {
  return (
    <Frame className={CSS_BASE_CLASS}>
      <div className={bemHelper({ element: "card" })}>
        <img src={peopleColumn} className={bemHelper({ element: "image" })} alt="" />
        <Heading value="People Column" className={bemHelper({ element: "title" })} type={Heading.types.h4} />
        <span className={bemHelper({ element: "description" })}>Get an instant overview of where things stand</span>
        <Button kind={Button.kinds.SECONDARY} className={bemHelper({ element: "button" })}>
          Add to board
        </Button>
      </div>
    </Frame>
  );
};
