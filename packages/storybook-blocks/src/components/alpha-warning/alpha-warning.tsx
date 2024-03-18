import { FC } from 'react';
import Tip from '../tip/tip';

const AlphaWarning: FC = () => (
  <Tip emoji="🚧" title="Alpha component" type={Tip.types.WARNING}>
    This component is currently being developed and is ready for exploratory usage. Please note that there may be
    breaking changes in future minor version updates and use with caution.
  </Tip>
);

export default AlphaWarning;
