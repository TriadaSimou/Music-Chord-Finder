/* (Functional Component) 
Dropdown to select a chord type*/

import React from 'react';

function ChordTypeSelector({ selectedChordType, onChange }) {
  const chordTypes = ['Major', 'Minor'];

  return React.createElement('div', null,
    React.createElement('label', { htmlFor: 'chordType' }, 'Select a chord type: '),
    React.createElement('select', {
      id: 'chordType',
      value: selectedChordType,
      onChange: (e) => onChange(e.target.value)
    },
    // For every chordType in chordTypes[] an option element is created
      chordTypes.map((chordType) => 
        React.createElement('option', { key: chordType, value: chordType }, chordType)
      )
    )
  );
}

export default ChordTypeSelector;