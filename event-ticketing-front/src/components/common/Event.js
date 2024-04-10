import React from 'react';

function Event({ event }) {
  return (
    <div className="event">
      <h3>{event.name}</h3>
      <p>Description: {event.description}</p>
      <p>Date: {event.date}</p>
      {/* Other event details */}
    </div>
  );
}

export default Event;
