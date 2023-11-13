// src/components/CalendarPage.js

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/CalendarPage.css'; // Import additional styles if needed

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Add your logic for handling the selected date
  };

  return (
    <div className="calendar-container">
      <header className="header">
        <h1>Book a Reservation</h1>
        <p>Select a date for your reservation</p>
      </header>
      <div className="calendar-section">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          minDate={new Date()} // Optional: Set minimum allowed date
        />
        <p>Selected Date: {selectedDate.toDateString()}</p>
        {/* Add additional content or booking logic as needed */}
      </div>
    </div>
  );
};

export default CalendarPage;
