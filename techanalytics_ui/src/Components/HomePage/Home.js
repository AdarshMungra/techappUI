// src/components/Home.js

import React, { useState } from 'react';
import Modal from 'react-modal';
import BusinessList from '../BusinessListComponent/BusinessList'; // Assuming BusinessList is in the same directory as Home.js
import './Home.css'; // Correct import path for the CSS file


const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome </h1>
        <p>Booking and reservation made easy.</p>
        <button onClick={openModal}>View Available Businesses</button>
      </header>

      {/* Your other content here */}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Available Businesses Modal"
        className="business-modal"
      >
        <button onClick={closeModal} className="close-modal-button">
          Close Modal
        </button>
        <BusinessList />
      </Modal>
    </div>
  );
};

export default Home;
