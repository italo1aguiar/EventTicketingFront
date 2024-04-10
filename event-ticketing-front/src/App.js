import React, { useState, useEffect } from 'react';
import { getEvents } from './api/eventService';

function App() {
  const [eventDetails, setEventDetails] = useState(null);

  useEffect(() => {
    getEvents()
      .then(data => setEventDetails(data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  // Use another useEffect to log events when they change
  useEffect(() => {
    console.log('Updated events:', eventDetails);
  }, [eventDetails]); // Dependency array includes events

  return (
    <div className="App">
      <header className="App-header">
        <p>Event Ticketing System</p>
      </header>
      <main>
      {eventDetails ? (
        <div className="event">
          <h3>{eventDetails.name}</h3>
          <p>Description: {eventDetails.description}</p>
          <p>Date: {eventDetails.date}</p>
          {eventDetails.location && (
            <div>
              <p>Location Name: {eventDetails.location.name}</p>
              <p>Location Address: {eventDetails.location.address}</p>
            </div>
          )}
        </div>
      ) : (
        <p>Loading event details...</p>
      )}
    </main>
    </div>
  );
  }

  export default App;
