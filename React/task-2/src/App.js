import "./App.css";
import Notes from "./components/Notes";
import NewNote from "./components/NewNote";
import EditNote from "./components/EditNote";
import { useState } from "react";

function App() {
  const [notes, setnotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  const handleAddNote = (newNote) => {
    const newId = notes.length + 1;
    setnotes([...notes, { id: newId, content: newNote }]);
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setnotes(updatedNotes);
  };

  const handleEditNote = (id) => {
    const noteToEdit = notes.find((note) => note.id === id);
    setEditingNote(noteToEdit);
  };

  const handleSaveEdit = (editedNote) => {
    const updatedNotes = notes.map((note) =>
      note.id === editingNote.id ? { ...note, content: editedNote } : note
    );
    setnotes(updatedNotes);
    setEditingNote(null);
  };

  return (
    <div className="App">
      <h1>Notes App</h1>
      <div className="container">
        <Notes
          notes={notes}
          onDelete={handleDeleteNote}
          onEdit={handleEditNote}
        />
        <NewNote onAddNote={handleAddNote} />
        {editingNote && (
          <EditNote note={editingNote.content} onSave={handleSaveEdit} />
        )}
      </div>
    </div>
  );
}

export default App;
