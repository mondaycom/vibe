import { FC } from "react";
import { Link } from "vibe-storybook-components";
import AttentionBox from "../../../components/AttentionBox/AttentionBox";
import Tip from "../tip/tip";

type DeprecatedWarningProps = {
  alternativeName: string;
  alternativeLink?: string;
};
export const DeprecatedWarning: FC<DeprecatedWarningProps> = ({ alternativeName, alternativeLink }) => (
  <Tip emoji="🚨" title="Deprecated component" type={AttentionBox.types.DANGER}>
    <>
      This is a legacy component and will be deprecated in the next Vibe major version. Please consider using the
      <Link href={alternativeLink} size={Link.sizes.SMALL}>
        {alternativeName}
      </Link>
      component for your needs instead.
    </>
  </Tip>
);

export default DeprecatedWarning;
