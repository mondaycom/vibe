import cx from "classnames";
import PropTypes from "prop-types";
import CoreLink from "../../../components/Link/Link";
import "./link.scss";
import { BEMClass } from "../../../helpers/bem-helper";

const BASE_CLASS = "monday-storybook-link";
const bemHelper = BEMClass(BASE_CLASS);

export const Link = ({ children, href, size }) => (
  <CoreLink
    text={children}
    href={href}
    componentClassName={cx(BASE_CLASS, {
      [bemHelper({ state: "small" })]: size === Link.sizes.SMALL,
      [bemHelper({ state: "medium" })]: size === Link.sizes.MEDIUM
    })}
  />
);

Link.sizes = {
  SMALL: "small",
  MEDIUM: "medium"
};

Link.defaultProps = {
  children: undefined,
  href: undefined,
  size: Link.sizes.SMALL
};

Link.propTypes = {
  children: PropTypes.string,
  href: PropTypes.string,
  size: PropTypes.oneOf([Link.sizes.SMALL, Link.sizes.MEDIUM])
};
