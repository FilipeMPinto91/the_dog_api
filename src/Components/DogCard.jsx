import React, { useEffect, useState } from "react";
import axios from "axios";

const DogCard = () => {
  const [dogData, setDogData] = useState([]);
  const subId = "randomUser1"

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

  const onClickAdd = (event, dogId) => {
    event.preventDefault();
  
    const data = {
      image_id: dogId,
      sub_id: subId,
    };
  
    axios.post("https://api.thedogapi.com/v1/favourites", data, {
      headers: {
        "Content-Type": 'application/json',
        "x-api-key": 'live_4rGYISEvfuqFXkGte9Eg7EYoB2hqfqhRLY9fndfj9j7zkZlJWgHhfzSa9rgIruYP',
      }
    })
    .then(response => console.log(response))
    .catch(error => console.error("Error while adding to favorites:", error));
  };

  return (
    <div className="image-grid">
      {dogData.map((dog) => (
        <div key={dog.id} className="image-button-pair">
          <img className="grid-image" src={dog.url} alt="dog" />
          <button className="grid-button" onClick={event => onClickAdd(event, dog.id)}>
            <span>Favorite</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default DogCard;