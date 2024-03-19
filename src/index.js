import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DogDataProvider } from './Components/context/DogDataContext';
import { SubIdProvider } from './Components/context/SubIdContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//   <React.StrictMode>
    <SubIdProvider>
      <DogDataProvider>
        <App />
      </DogDataProvider>
    </SubIdProvider>
  /* </React.StrictMode>  */
);
