import { FC } from 'react';
import Link from '../link/link';
import Tip from '../tip/tip';
import { ElementContent } from '../../types';

interface DeprecatedWarningProps {
  alternativeName: string;
  alternativeLink: string;
  additionalContent: ElementContent;
}

const DeprecatedWarning: FC<DeprecatedWarningProps> = ({ alternativeName, alternativeLink, additionalContent }) => (
  <Tip emoji="🚨" title="Deprecated component" type={Tip.types.DANGER}>
    <>
      This is a legacy component and will be deprecated in the next major version. Please consider using the
      <Link href={alternativeLink} size={Link.sizes.SMALL}>
        {alternativeName}
      </Link>
      component for your needs instead.
      {additionalContent}
    </>
  </Tip>
);

export default DeprecatedWarning;
