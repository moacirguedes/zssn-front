import React from 'react';
import './styles.css';
import Row from '../row';

const Table = ({survivors}) =>
  <table className="Table">
    <thead>
      <tr className="Table__header-item">
        <th className="Table__header">
          Name
        </th>
        <th className="Table__header">
          Age
        </th>
        <th className="Table__header">
          Gender
        </th>
        <th className="Table__header">
          Location
        </th>
        <th className="Table__header">
          Infected?
        </th>
      </tr>
    </thead>

    <tbody>
      {survivors.map(survivor =>
        <Row
          key={survivor.location}
          survivor={survivor}
        />
      )}
    </tbody>
  </table>

export default Table;
