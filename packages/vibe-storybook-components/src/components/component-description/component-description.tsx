import { FC } from 'react';
import { ElementContent } from '../../types';

type ComponentDescriptionProps = {
  description?: string;
  children?: ElementContent;
};

const ComponentDescription: FC<ComponentDescriptionProps> = ({ description = '', children = null }) => (
  <div>
    <span>{description}</span>
    {children}
  </div>
);

export default ComponentDescription;
