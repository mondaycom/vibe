import { ComponentType, ReactElement } from 'react';

type Props = {
  [key: string]: any;
};

export function createComponentTemplate(ComponentClass: ComponentType) {
  // eslint-disable-next-line react/display-name
  return (args: Props): ReactElement => <ComponentClass {...args} />;
}

export default createComponentTemplate;
