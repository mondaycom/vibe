import { TableRow } from "./token-table-row";
import { TableHeadItem } from "./token-table-head-item";
import styles from "./token-table.module.scss";

export const TokenTable = ({ theadData, tbodyData }) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            {theadData.map(h => {
              return <TableHeadItem key={h} item={h} />;
            })}
          </tr>
        </thead>
        <tbody>
          {tbodyData.map(item => {
            return <TableRow key={item.id} data={item.items} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
