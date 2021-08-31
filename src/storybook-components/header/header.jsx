import { AttentionBox } from "../../components";
import { BEMClass } from "../../helpers/bem-helper";
import "./header.scss";

const CSS_BASE_CLASS = "monday-storybook-header";
const bemHelper = BEMClass(CSS_BASE_CLASS);

export const Header = ({ children }) => {
  return (
    <AttentionBox
      icon={null}
      componentClassName={CSS_BASE_CLASS}
      ariaLevel={1}
      titleClassName={bemHelper({ element: "title" })}
      title={children}
    />
  );
};
