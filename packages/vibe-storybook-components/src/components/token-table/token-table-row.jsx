import React from 'react';

const TableRow = ({ data }) => (
  <tr>
    {data.map((item, index) => (
      <td key={index}>{item}</td>
    ))}
  </tr>
);

export default TableRow;
