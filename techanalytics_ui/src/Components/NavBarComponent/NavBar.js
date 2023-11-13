// src/components/Navbar.js

import React, { useState } from 'react';
import '../NavBarComponent/NavBar.css';
import SearchBar from '../SearchBarComponent/SearchBar';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleSearch = (searchQuery) => {
    // Add your logic for handling the search query
    console.log('Search Query:', searchQuery);
  };

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="logo">TechAnalytics</div>

      <div className={`search-bar ${showNavbar ? 'show' : ''}`}>
        <SearchBar onSearch={handleSearch} />
      </div>      
      <button className="navbar-toggler" onClick={toggleNavbar}>
        ☰
      </button>
      <div className={`nav-links ${showNavbar ? 'show' : ''}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/Business">Business</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/WorkWithUs">Work with us!</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

