import React from 'react';

const BreedInfo = ({ breedInfo }) => {
  return (
    <div>
      <h3>Breed Information</h3>
      <ul>
        {breedInfo.map(breed => (
          <li key={breed.id}>
            <h4>{breed.name}</h4>
            <p><strong>Weight:</strong> {breed.weight.metric} kg</p>
            <p><strong>Height</strong>: {breed.height.metric} cm</p>
            <p><strong>Bred for:</strong> {breed.bred_for}</p>
            <p><strong>Breed group:</strong> {breed.breed_group}</p>
            <p><strong>Life span:</strong> {breed.life_span}</p>
            <p><strong>Breed temperament:</strong> {breed.temperament}</p>
            <p><strong>Origin:</strong> {breed.origin}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BreedInfo;