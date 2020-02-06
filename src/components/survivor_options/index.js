import React from 'react';
import './styles.css';
import { extractProfileId } from '../../model/survivor';

const SurvivorOptions = ({ survivors }) =>
  <>
    <option disabled></option>
    {
      survivors.map(survivor =>
        !survivor.infected &&
        <option
          key={survivor.location}
          value={extractProfileId(survivor.location)}
        >
          {survivor.name}
        </option>
      )
    }
  </>

export default SurvivorOptions;
