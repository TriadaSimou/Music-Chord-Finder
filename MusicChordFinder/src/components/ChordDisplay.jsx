
/* (Functional Component) 
Calculation and display of chord notes, based on note and chord type selected */

import React from 'react';
import { getChordNotes } from '../utils/chordUtils';

function ChordDisplay({ note, chordType }) {
  const chordNotes = getChordNotes(note, chordType); // Get chord notes based on selected note and chord type
  const degreeNames = ["Root", "3rd", "5th"]; // Names of chord degrees

  return (
    <div>
      <h2>{note} {chordType}</h2>
      <table className="chord-table">
        <tbody>
          {/* //For every note in chordNotes a row is created */}
          {chordNotes.map((note, index) => (
            <tr key={note}>
              {/* Degree names (Root, 3rd, 5th) */}
              <td>{degreeNames[index]}</td>
              {/* Corresponding note */}
              <td>{note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ChordDisplay;