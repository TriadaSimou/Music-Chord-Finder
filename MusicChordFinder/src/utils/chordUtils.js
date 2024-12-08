/* Function that calculates chord notes based on starting note and type */

export function getChordNotes(note, chordType) {
  const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']; // All musical notes in order
  const majorIntervals = [0, 4, 7]; // Intervals in semitones for a Major chord, [root, major third, perfect fifth]
  const minorIntervals = [0, 3, 7]; // Intervals in semitones for a Minor chord, [root, minor third, perfect fifth]

  const startIdx = notes.indexOf(note); // Index of note selected
  const intervals = chordType === 'Major' ? majorIntervals : minorIntervals; //Intervals of type selected
  const chordNotes = intervals.map((interval) => notes[(startIdx + interval) % notes.length]); // For every interval in intervals 
  //the corresponding note is appended in chordNotes
  return chordNotes;
}