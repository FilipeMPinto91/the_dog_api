import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import { NavBar } from './Components/NavBar';
import Favorites from './Pages/Favorites';
import AuthPage from './Pages/AuthPage';

const App = () => {
  return (
      <Router>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/favorites' element={<Favorites/>} />
          <Route path='/authentication' element={<AuthPage/>}/>
        </Routes>
      </Router>
  )
}

export default App;
