import React, { createContext, useState, useContext } from 'react';

export const DogDataContext = createContext();

export const DogDataProvider = ({ children }) => {
  const [dogData, setDogData] = useState([]);
  const [imageId, setImageId] = useState([]);

  return (
    <DogDataContext.Provider value={{ dogData, setDogData, imageId, setImageId }}>
      {children}
    </DogDataContext.Provider>
  );
};



export const useDogData = () => useContext(DogDataContext);