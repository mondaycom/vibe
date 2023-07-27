import AttentionBox from "../../../components/AttentionBox/AttentionBox";
import Tip from "../tip/tip";

export const AlphaWarning = () => (
  <Tip emoji="🚧" title="Alpha component" type={AttentionBox.types.WARNING}>
    This component is currently being developed and is ready for exploratory usage. Please note that there may be
    breaking changes in future minor version updates and use with caution.
  </Tip>
);

export default AlphaWarning;
