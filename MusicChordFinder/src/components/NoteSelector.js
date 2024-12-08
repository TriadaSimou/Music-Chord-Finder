/* (Functional Component)
 Dropdown to select a musical note */

import React from 'react';

function NoteSelector({ selectedNote, onChange }) {
  const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

  return React.createElement('div', null,
    React.createElement('label', { htmlFor: 'note' }, 'Select a root note: '),
    React.createElement('select', {
      id: 'note', 
      value: selectedNote, 
      onChange: (e) => onChange(e.target.value) // Event handler for onChange event
    }, 
    // For every note in notes[] an option element is created
      notes.map((note) => 
        React.createElement('option', { key: note, value: note }, note)
      )
    )
  );
}

export default NoteSelector;