import { Frame } from "../../../components";
import Icon from "../../../../components/Icon/Icon";
import { BEMClass } from "../../../../helpers/bem-helper";
import Drag from "../../../../components/Icon/Icons/components/Drag";
import "./drag-shadow-example.scss";

const CSS_BASE_CLASS = "monday-storybook-drag-shadow-example";
const bemHelper = BEMClass(CSS_BASE_CLASS);
export const DragShadowExample = () => (
  <Frame className={CSS_BASE_CLASS}>
    <Icon className={bemHelper({ element: "icon" })} icon={Drag} />
    <div className={bemHelper({ element: "drag-example" })}>Drag me</div>
  </Frame>
);
