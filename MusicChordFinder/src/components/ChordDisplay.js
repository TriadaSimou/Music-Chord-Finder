/* (Functional Component) 
Calculation and display of cord notes, based on note and chord type selected */

import React from 'react';
import { getChordNotes } from '../utils/chordUtils';

function ChordDisplay({ note, chordType }) {
  const chordNotes = getChordNotes(note, chordType);
  const degreeNames = ["Root", "3rd", "5th"];

  return React.createElement('div', null,
    React.createElement('h2', null, note + ' ' + chordType),
    React.createElement('table', { className: 'chord-table' },
      React.createElement('tbody', null,
        chordNotes.map((note, index) =>  //For every note in chordNotes a row is created
          React.createElement('tr', { key: note },
            React.createElement('td', null, degreeNames[index] ),   // Degree name
            React.createElement('td', null, note) // Corresponding note
          )
        )
      )
    )
  );
}

export default ChordDisplay;