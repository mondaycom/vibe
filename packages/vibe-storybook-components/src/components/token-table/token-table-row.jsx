import React from 'react';

export const TableRow = ({ data }) => (
  <tr>
    {data.map((item, index) => (
      <td key={index}>{item}</td>
    ))}
  </tr>
);
