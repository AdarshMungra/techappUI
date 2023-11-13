// src/components/BusinessList.js

import React, { useState, useEffect } from 'react';
import './BusinessList.css'; // Import additional styles if needed

const BusinessList = () => {
  const [businesses, setBusinesses] = useState([
    { id: 1, name: 'Business 1', description: 'Description for Business 1' },
    { id: 2, name: 'Business 2', description: 'Description for Business 2' },
    { id: 3, name: 'Business 3', description: 'Description for Business 3' },
    // Add more sample businesses as needed
  ]);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      try {
        // You can remove this section when connecting to a real API
        // const response = await fetch('https://api.example.com/businesses');
        // const data = await response.json();
        // setBusinesses(data);
      } catch (error) {
        console.error('Error fetching business data:', error);
      }
    };

    fetchData();
  }, []);


    // Function to handle button click for each business
    const handleBusinessButtonClick = (businessId) => {
      alert(`Button clicked for Business ${businessId}`);
      // Add your logic for handling the button click, such as navigating to a business page
    };

  return (
    <div className="business-list-container">
      <header className="header">
        <h1>Available Businesses</h1>
        <p>Explore and choose from the list of available businesses and companies</p>
      </header>
      <ul className="business-list">
        {businesses.map((business) => (
          <li key={business.id}>
            <h2>{business.name}</h2>
            <p>{business.description}</p>
            {/* Add additional business information or links */}
            <a href="/static-business-template" target="_blank" rel="noopener noreferrer">
              <button onClick={() => handleBusinessButtonClick(business.id)}>
                open
              </button>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusinessList;
