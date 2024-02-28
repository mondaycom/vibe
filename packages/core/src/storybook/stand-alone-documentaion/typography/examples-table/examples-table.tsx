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
      <Text
        type={Text.types.TEXT2}
        element="thead"
        ellipsis={false}
        color={Text.colors.SECONDARY}
        weight={Text.weights.MEDIUM}
        align={Text.align.START}
      >
        <tr>
          <th>Name</th>
          <th>SASS</th>
        </tr>
      </Text>
      <Text type={Text.types.TEXT2} element="tbody" ellipsis={false} align={Text.align.START}>
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
