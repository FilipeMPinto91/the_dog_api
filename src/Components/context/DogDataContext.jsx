import React, { createContext, useState, useContext } from 'react';

export const DogDataContext = createContext();

export const DogDataProvider = ({ children }) => {
  const [dogData, setDogData] = useState([]);

  return (
    <DogDataContext.Provider value={{ dogData, setDogData }}>
      {children}
    </DogDataContext.Provider>
  );
};

export const useDogData = () => useContext(DogDataContext);