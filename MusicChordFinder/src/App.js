/*  Main component of the app */

import React, { useState } from 'react'; // React hook (function to simplify things) to manage state in a functional component
import NoteSelector from './components/NoteSelector';
import ChordTypeSelector from './components/ChordTypeSelector';
import ChordDisplay from './components/ChordDisplay';
import './App.css';

/* const [state, setState] = useState(initialValue);
     state: current value of state
     setState: function to update state
     initalValue: initial value when component first renders  */
function App() {
  const [note, setNote] = useState('C'); 
  const [chordType, setChordType] = useState('Major');

  return React.createElement('div', { className: 'app' },
    React.createElement('div', { className: 'app-container' }, 
      React.createElement('h1', null, 'Music Chord Finder'),
      React.createElement('div', { className: 'selectors' },
        React.createElement(NoteSelector, { selectedNote: note, onChange: setNote }),
        React.createElement(ChordTypeSelector, { selectedChordType: chordType, onChange: setChordType })
      ),
      React.createElement('div', { className: 'chord-container' },
        React.createElement(ChordDisplay, { note: note, chordType: chordType })
      )
    )
  );
}

export default App;


