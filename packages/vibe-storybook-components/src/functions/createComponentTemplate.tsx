import { ComponentType, ReactElement } from 'react';

type ArgsType = {
  [key: string]: unknown;
};

export function createComponentTemplate(ComponentClass: ComponentType) {
  // eslint-disable-next-line react/display-name
  return (args: ArgsType): ReactElement => <ComponentClass {...args} />;
}

export default createComponentTemplate;
