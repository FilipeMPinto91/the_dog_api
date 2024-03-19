import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = ({ onSelectBreed }) => {
  const [breeds, setBreeds] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await axios.get('https://api.thedogapi.com/v1/breeds?limit=300');
        setBreeds(response.data);
      } catch (error) {
        console.error('Error fetching breeds:', error);
      }
    };

    fetchBreeds();
  }, []);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBreeds = breeds.filter(breed =>
    breed.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectBreed = (breedId) => {
    onSelectBreed(breedId);
  };

  return (
    <div className='search-container'>
      <input
        type="text"
        placeholder="Search for dogs"
        className="input-bar"
        value={searchTerm}
        onChange={handleInputChange}
      />
      {searchTerm && (
        <div>
          {filteredBreeds.slice(0, 10).map(breed => (
            <div key={breed.id} onClick={() => handleSelectBreed(breed.id)}>
              {breed.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;