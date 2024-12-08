
/* Function that calculates chord notes based on the starting note and chord type */

export function getChordNotes(note, chordType) {
  const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']; // All musical notes in sequence
  const majorIntervals = [0, 4, 7]; // Intervals (in semitones) for a Major chord: [root, major third, perfect fifth]
  const minorIntervals = [0, 3, 7]; // Intervals (in semitones) for a Minor chord: [root, minor third, perfect fifth]

  const startIdx = notes.indexOf(note); // Find the index of the selected root note
  const intervals = chordType === 'Major' ? majorIntervals : minorIntervals; // Determine the intervals based on chord type

  // Map the intervals to the corresponding notes, wrapping around if needed
  const chordNotes = intervals.map(
    (interval) => notes[(startIdx + interval) % notes.length]
  );

  return chordNotes; // Return the calculated chord notes
}