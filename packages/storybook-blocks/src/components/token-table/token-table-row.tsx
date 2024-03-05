import { FC } from 'react';

type TableRowProps = {
  data: string[];
};

const TableRow: FC<TableRowProps> = ({ data }) => (
  <tr>
    {data.map((item, index) => (
      <td key={index}>{item}</td>
    ))}
  </tr>
);

export default TableRow;
