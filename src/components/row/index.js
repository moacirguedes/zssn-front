import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Row = ({ survivor }) => {
  const profilePath = (location) => {
    const id = location.substring(location.lastIndexOf('/') + 1);
    return "/profile/" + id;
  }

  return (
    <tr className=
      {survivor.infected ?
        'Table__row-infected' :
        'Table__row-noninfected'
      }
    >
      <td className="Table__cell">{survivor.name}</td>
      <td className="Table__cell Table_cell--center">{survivor.age}</td>
      <td className="Table__cell Table_cell--center">{survivor.gender}</td>
      <td className="Table__cell">{survivor.lonlat}</td>
      <td className="Table__cell Table_cell--center">
        {survivor.infected ? 'True' : 'False'}
      </td>
      <td className="Table__cell center">
        <Link to={profilePath(survivor.location)}>Profile</Link>
      </td>
    </tr>
  );
}

export default Row;
