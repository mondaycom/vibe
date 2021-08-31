import cx from "classnames";
import CoreAttentionBox from "../../components/AttentionBox/AttentionBox";
import "./tip.scss";

export const Tip = ({ className, children }) => {
  return (
    <CoreAttentionBox
      icon={null}
      type={CoreAttentionBox.types.DARK}
      componentClassName={cx("monday-storybook-tip", className)}
      title="🤓 Tip"
      text={children}
    />
  );
};
