import Note from "./components/Note";

const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {/* <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li> */}
        {/* {notes.map((currentNote) => (
          <li key={currentNote.id}>{currentNote.content}</li>
        ))} */}
        {notes.map((currentNote) => (
          <Note key={currentNote.id} currentNote={currentNote} />
        ))}
      </ul>
    </div>
  );
};
export default App;
