
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

  return (
    <div className="app">
      <div className="app-container">
        <h1>Music Chord Finder</h1>
        <div className="selectors">
          <NoteSelector selectedNote={note} onChange={setNote} />
          <ChordTypeSelector selectedChordType={chordType} onChange={setChordType} />
        </div>
        <div className="chord-container">
          <ChordDisplay note={note} chordType={chordType} />
        </div>
      </div>
    </div>
  );
}

export default App;


