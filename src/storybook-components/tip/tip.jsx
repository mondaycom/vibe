import cx from "classnames";
import CoreAttentionBox from "../../components/AttentionBox/AttentionBox";

export const Tip = ({ className, children }) => {
  return (
    <CoreAttentionBox
      icon={undefined}
      type={CoreAttentionBox.types.DARK}
      componentClassName={cx("monday-storybook-tip", className)}
      title="🤓 Tip"
      text={children}
    />
  );
};
