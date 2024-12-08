
/* (Functional Component) 
Dropdown to select a chord type */

import React from 'react';

function ChordTypeSelector({ selectedChordType, onChange }) {
  const chordTypes = ['Major', 'Minor']; // Array of chord types

  return (
    <div>
      <label htmlFor="chordType">Select a chord type: </label>
      <select
        id="chordType"
        value={selectedChordType} 
        onChange={(e) => onChange(e.target.value)} // Handle change events to update state
      >
        {/* For every chordType in chordTypes[] an option element is created */}
        {chordTypes.map((chordType) => (
          <option key={chordType} value={chordType}>
            {chordType}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ChordTypeSelector;