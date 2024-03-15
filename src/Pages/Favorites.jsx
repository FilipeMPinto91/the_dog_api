import React, { useEffect, useState } from "react";
import axios from "axios";

export const Favorites = () => {
  const [favorites, setFavorites] = useState(null);
  const subId = "randomUser1"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.thedogapi.com/v1/favourites?sub_id=${subId}`, {
            headers: {
              "Content-Type": 'application/json',
              "x-api-key": 'live_4rGYISEvfuqFXkGte9Eg7EYoB2hqfqhRLY9fndfj9j7zkZlJWgHhfzSa9rgIruYP',
            },
          }
        );
        setFavorites(response.data);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    fetchData();
  }, [subId]);

  console.log(favorites)

  //Needs the id from the favourite creation and not the image unique id
  const onClickRemove = async (event, favoriteId) => {
    event.preventDefault(); 

    try {
      await axios.delete(
        `https://api.thedogapi.com/v1/favourites/${favoriteId}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'live_4rGYISEvfuqFXkGte9Eg7EYoB2hqfqhRLY9fndfj9j7zkZlJWgHhfzSa9rgIruYP',
          },
        }
      );

      setFavorites(favorites.filter(favorite => favorite.id !== favoriteId));
    } catch (error) {
      console.error('Error removing favorite: ', error);
    }
  }

  return (
    <section className="main-container">
      <div className="image-grid">
        {favorites && favorites.map(favorite => (
          <div key={favorite.id} className="image-button-pair">
            <img className="grid-image" src={favorite.image.url} alt="dog" />
            <button className="grid-button" onClick={event => onClickRemove(event, favorite.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Favorites;