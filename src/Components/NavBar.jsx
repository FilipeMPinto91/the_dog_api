import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
      <nav>
        <div className="navbar-container">
          <Link className="navbar-link" to={"/"}>
            <h3 className="navbar-title">Made for Dog Lovers</h3>
          </Link>
  
          <div className="navbar-right-part">
            <div className="navbar-links">
              <Link className="navbar-link" to={"/favorites"}>
                <div className="navbar-option">Favorites</div>
              </Link>
              <Link className="navbar-link" to={"/authentication"}>
                <div className="navbar-option">Authentication</div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  };