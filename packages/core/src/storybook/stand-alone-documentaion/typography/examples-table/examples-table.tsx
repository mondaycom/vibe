import React, { FC } from "react";
import Text from "../../../../components/Text/Text";
import styles from "./example-table.module.scss";

interface TableData {
  name: string;
  useFor: string;
  sass: boolean;
}

const ExamplesTable: FC = ({ data }: { data: Array<TableData> }) => {
  return (
    <table className={styles.table}>
      <Text type="text2" element="thead" ellipsis={false} color="secondary" weight="medium" align="start">
        <tr>
          <th>Name</th>
          <th>SASS</th>
        </tr>
      </Text>
      <Text type="text2" element="tbody" ellipsis={false} align="start">
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>
              <code>{item.sass}</code>
            </td>
          </tr>
        ))}
      </Text>
    </table>
  );
};

export default ExamplesTable;
