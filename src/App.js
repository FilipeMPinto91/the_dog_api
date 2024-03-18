import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import { NavBar } from './Components/NavBar';
import Favorites from './Pages/Favorites';
import FakeAuthPage from './Pages/AuthPage';
import { DogDataProvider } from './Components/context/DogDataContext';

const App = () => {
  return (
    <DogDataProvider>
      <Router>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/favorites' element={<Favorites/>} />
          <Route path='/authentication' element={<FakeAuthPage/>}/>
        </Routes>
      </Router>
    </DogDataProvider>
  )
}

export default App;
