import React, { createContext, useContext, useState } from 'react';

const SubIdContext = createContext();

export const useSubId = () => useContext(SubIdContext);

export const SubIdProvider = ({ children }) => {
  const [subId, setSubId] = useState('');

  return (
    <SubIdContext.Provider value={{ subId, setSubId }}>
      {children}
    </SubIdContext.Provider>
  );
};