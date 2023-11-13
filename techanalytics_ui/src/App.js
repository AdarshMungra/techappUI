// src/App.js

import React from 'react';
import Navbar from './Components/NavBarComponent/NavBar';
import Home from './Components/HomePage/Home';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
