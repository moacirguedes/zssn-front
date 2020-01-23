import React from 'react';
import './styles.css';

const SurvivorOptions = ({ survivors }) => {
  const handleLocation = (location) => {
    return location.substring(location.lastIndexOf('/') + 1);
  }
  
  return (
    <>
      <option disabled></option>
      {
        survivors.map(survivor =>
          survivor['infected?'] === false &&
          <option
            key={survivor.location}
            value={handleLocation(survivor.location)}
          >
            {survivor.name}
          </option>
        )
      }
    </>
  );
}

export default SurvivorOptions;
