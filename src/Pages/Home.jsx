import DogCard from "../Components/DogCard";
import SeachBar from "../Components/SearchBar";
import React, { useState } from 'react';

const Home = () => {
  const [selectedBreedId, setSelectedBreedId] = useState(null);

  const handleSelectBreed = (breedId) => {
    setSelectedBreedId(breedId);
  };

  return (
    <div>
      <SeachBar onSelectBreed={handleSelectBreed}></SeachBar>
      <div className="main-container">
        <DogCard selectedBreedId={selectedBreedId} />
      </div>
    </div>
  );
};

export default Home;