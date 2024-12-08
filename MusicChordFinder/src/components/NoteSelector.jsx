
/* (Functional Component)
 Dropdown to select a musical note */

 import React from 'react';

 function NoteSelector({ selectedNote, onChange }) {
   const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B']; 
 
   return (
     <div>
       <label htmlFor="note">Select a root note: </label>
       <select
         id="note"
         value={selectedNote} 
         onChange={(e) => onChange(e.target.value)} // Handle change events to update state
       >
         {/* For every note in notes[] an option element is created */}
         {notes.map((note) => (
           <option key={note} value={note}>
             {note}
           </option>
         ))}
       </select>
     </div>
   );
 }
 
 export default NoteSelector;

