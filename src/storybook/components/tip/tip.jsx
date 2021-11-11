import PropTypes from "prop-types";
import cx from "classnames";
import CoreAttentionBox from "../../../components/AttentionBox/AttentionBox";
import "./tip.scss";

export const Tip = ({ className, title, children }) => {
  return (
    <CoreAttentionBox
      icon={null}
      type={CoreAttentionBox.types.DARK}
      componentClassName={cx("monday-storybook-tip", className)}
      title={(
        <span>
          <span style={{ marginRight: 4 }}>🤓</span> {title}
        </span>
      )}
      text={children}
    />
  );
};

Tip.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOf(PropTypes.string, PropTypes.element),
  className: PropTypes.string
};

Tip.defaultProps = {
  title: "Tip",
  // The content of the tip
  children: undefined,
  className: ""
};
