import React, { useState, useEffect } from 'react';
import { getEvents } from './api/eventService';
import Event from './components/common/Event';
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
        {eventDetails ? <Event event={eventDetails} /> : <p>Loading...</p>}
      </main>
    </div>
  );
  }

  export default App;
