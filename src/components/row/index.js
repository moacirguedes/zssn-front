import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { extractProfileId, infectedStatusToString } from '../../model/survivor';

const Row = ({ survivor }) =>
  <tr
    className={
      survivor.infected ?
        'Table__row-infected' :
        'Table__row-noninfected'
    }
    data-testid="table-row"
  >
    <td className="Table__cell">{survivor.name}</td>
    <td className="Table__cell Table__cell--center">{survivor.age}</td>
    <td className="Table__cell Table__cell--center">{survivor.gender}</td>
    <td className="Table__cell">{survivor.lonlat}</td>
    <td className="Table__cell Table__cell--center">
      {infectedStatusToString(survivor.infected)}
    </td>
    <td className="Table__cell Table__cell--center">
      <Link
        to={'/profile/' + extractProfileId(survivor.location)}
        data-testid="profile-button"
      >
        Profile
      </Link>
    </td>
  </tr>

export default Row;
