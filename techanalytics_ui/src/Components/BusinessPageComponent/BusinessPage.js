// src/components/BusinessPage.js

import React, { useState } from 'react';
import './BusinessComponent/BusinessPage.css'; // Import additional styles if needed

const BusinessPage = ({ business }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [customerName, setCustomerName] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleNameChange = (event) => {
    setCustomerName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic for handling the appointment submission
    console.log('Appointment Submitted:', {
      businessId: business.id,
      date: selectedDate.toDateString(),
      time: selectedTime,
      customerName: customerName,
    });
  };

  return (
    <div className="business-page-container">
      <header className="header">
        <h1>{business.name}</h1>
        <p>{business.description}</p>
      </header>
      <form className="appointment-form" onSubmit={handleSubmit}>
        <label htmlFor="date">Select Date:</label>
        <input
          type="date"
          id="date"
          value={selectedDate.toISOString().split('T')[0]}
          onChange={(e) => handleDateChange(new Date(e.target.value))}
          required
        />

        <label htmlFor="time">Select Time:</label>
        <input
          type="time"
          id="time"
          value={selectedTime}
          onChange={(e) => handleTimeChange(e.target.value)}
          required
        />

        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          value={customerName}
          onChange={handleNameChange}
          required
        />

        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default BusinessPage;
