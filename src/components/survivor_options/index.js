import React from 'react';
import './styles.css';

const SurvivorOptions = ({ survivors }) => {
  const profilePath = (location) => {
    return location.substring(location.lastIndexOf('/') + 1);
  }
  
  return (
    <>
      <option disabled></option>
      {
        survivors.map(survivor =>
          !survivor.infected &&
          <option
            key={survivor.location}
            value={profilePath(survivor.location)}
          >
            {survivor.name}
          </option>
        )
      }
    </>
  );
}

export default SurvivorOptions;
