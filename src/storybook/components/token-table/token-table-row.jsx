export const TableRow = ({ data }) => {
  return (
    <tr>
      {data.map((item, index) => {
        return <td key={index}>{item}</td>;
      })}
    </tr>
  );
};
