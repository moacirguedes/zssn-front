import React from 'react';
import './styles.css';

const Row = ({survivor}) =>
  <tr className=
    {survivor['infected?'] ?
      'Table__row-infected' :
      'Table__row-noninfected'
    }
  >
    <td className="Table__cell">{survivor['name']}</td>
    <td className="Table__cell Center">{survivor['age']}</td>
    <td className="Table__cell Center">{survivor['gender']}</td>
    <td className="Table__cell">{survivor['lonlat']}</td>
    <td className="Table__cell Center">
      {survivor['infected?'] ? 'True' : 'False'}
    </td>
  </tr>

export default Row;
