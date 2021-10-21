import { SectionName } from "../section-name/section-name";
import { BEMClass } from "../../../helpers/bem-helper";
import "./doc-footer.scss";

const CSS_BASE_CLASS = "monday-storybook-footer";
const bemHelper = BEMClass(CSS_BASE_CLASS);

export const DocFooter = () => (
  <div className={CSS_BASE_CLASS}>
    <SectionName>Feedback</SectionName>
    <div className={bemHelper({ element: "text" })}>
      Help us improve this pattern by providing feedback, asking questions, and leaving any other comments on
      <a
        href="https://forms.monday.com/forms/213ebddcb0d423ae5b6178fb6e8f7b3d?r=use1"
        className={bemHelper({ element: "link" })}
      >
        this form
      </a>
    </div>
  </div>
);
