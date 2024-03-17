import React, { useEffect, useState } from "react";
import axios from "axios";
import BreedInfo from "./BreedInfo";

const DogCard = ({selectedBreedId}) => {
  const [dogData, setDogData] = useState([]);
  const subId = "randomUser1"
  const [breedInfo, setBreedInfo] = useState(null);
  const [favoriteStatus, setFavoriteStatus] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get(`https://api.thedogapi.com/v1/images/search?format=json&limit=10&`, {
      headers: {
        "Content-Type": 'application/json',
        "x-api-key": 'live_4rGYISEvfuqFXkGte9Eg7EYoB2hqfqhRLY9fndfj9j7zkZlJWgHhfzSa9rgIruYP',
      }
    })
    .then(response => setDogData(response.data))
    .catch(error => console.error("Error during fetching:", error));
  };

  const dogRefresh = () => {
    fetchData();
  }

  const onClickAdd = (event, dogId) => {
    event.preventDefault();
  
    const data = {
      image_id: dogId,
      sub_id: subId,
    };

    setFavoriteStatus(prevState => ({
      ...prevState,
      [dogId]: true
    }));
    console.log(dogId);

    axios.post("https://api.thedogapi.com/v1/favourites", data, {
      headers: {
        "Content-Type": 'application/json',
        "x-api-key": 'live_4rGYISEvfuqFXkGte9Eg7EYoB2hqfqhRLY9fndfj9j7zkZlJWgHhfzSa9rgIruYP',
      }
    })
    .then(response => console.log(response))
    .catch(error => console.error("Error while adding to favorites:", error));
  };

  console.table(favoriteStatus);

  const onClickShowInfo = (breeds) => {
    setBreedInfo(breeds);
  };

  return (
    <div>
      <div className="image-grid">
        {dogData.map((dog) => (
          <div key={dog.id} className="image-button-pair">
            <img className="grid-image" src={dog.url} alt="dog" />
            <div className="dog-buttons">
              <button 
                className="grid-button" 
                onClick={event => onClickAdd(event, dog.id)}
                disabled={favoriteStatus[dog.id]}
              >
                <span>{favoriteStatus[dog.id] ? '❤️' : 'Favorite'}</span>
              </button>
              <button className="grid-button" onClick={() => onClickShowInfo(dog.breeds)}>
                <span>Breed Info</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={dogRefresh}>I want more random Dogs</button>
      {breedInfo && <BreedInfo breedInfo={breedInfo} />}
    </div>
  );
};

export default DogCard;