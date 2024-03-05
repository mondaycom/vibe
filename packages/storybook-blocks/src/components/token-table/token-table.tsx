import { FC } from 'react';
import TableRow from './token-table-row';
import TableHeadItem from './token-table-head-item';
import styles from './token-table.module.scss';

type TableBody = {
  id: string;
  items: string[];
};

type TokenTableProps = {
  theadData: string[];
  tbodyData: TableBody[];
};

const TokenTable: FC<TokenTableProps> = ({ theadData, tbodyData }) => (
  <div className={styles.tableWrapper}>
    <table className={styles.table}>
      <thead>
        <tr>
          {theadData.map(h => (
            <TableHeadItem key={h} item={h} />
          ))}
        </tr>
      </thead>
      <tbody>
        {tbodyData.map(item => (
          <TableRow key={item.id} data={item.items} />
        ))}
      </tbody>
    </table>
  </div>
);

export default TokenTable;
