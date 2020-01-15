import React from 'react';
import './styles.css';

const Row = (props) =>
  <tr className=
    {props.survivor['infected?'] ?
      'Table__row-infected' :
      'Table__row-noninfected'
    }
  >
    <td className="Table__cell">{props.survivor['name']}</td>
    <td className="Table__cell-center">{props.survivor['age']}</td>
    <td className="Table__cell-center">{props.survivor['gender']}</td>
    <td className="Table__cell">{props.survivor['lonlat']}</td>
    <td className="Table__cell-center">
      {props.survivor['infected?'] ? 'True' : 'False'}
    </td>
  </tr>

export default Row;
