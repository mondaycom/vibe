import { FC } from 'react';

type TableHeadItemProps = {
  item: string;
};

const TableHeadItem: FC<TableHeadItemProps> = ({ item }) => <th title={item}>{item}</th>;

export default TableHeadItem;
