import { FC } from 'react';
import { ElementContent } from '../../types';

type FunctionArgumentsProps = {
  children: ElementContent;
};

const FunctionArguments: FC<FunctionArgumentsProps> = ({ children = [] }) => <ul>{children}</ul>;

export default FunctionArguments;
