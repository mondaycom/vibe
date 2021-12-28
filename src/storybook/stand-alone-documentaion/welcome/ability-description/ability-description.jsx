import { BEMClass } from "../../../../helpers/bem-helper";
import Link from "../../../../components/Link/Link";
import "./ability-description.scss";

const BASE_CLASS = "monday-storybook-ability-description";
const bemHelper = BEMClass(BASE_CLASS);
export const AbilityDescription = ({ title, children, imageSrc, linkHref }) => {
  return (
    <section className={BASE_CLASS}>
      <img src={imageSrc} alt="" className={bemHelper({ element: "image" })} />
      <h3 className={bemHelper({ element: "title" })}>{title}</h3>
      <span className={bemHelper({ element: "content" })}>{children}</span>
      <Link text="Read more" href={linkHref} />
    </section>
  );
};
