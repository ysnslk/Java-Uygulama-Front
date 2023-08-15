import logo from "./logo.svg";
import "./App.css";
import Notes from "./components/Notes";
import NewNote from "./components/NewNote";
import EditNote from "./components/EditNote";
import { useState } from "react";

function App() {
  const [notlar, setNotlar] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  const handleAddNote = (newNote) => {
    const newId = notlar.length + 1;
    setNotlar([...notlar, { id: newId, content: newNote }]);
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notlar.filter((note) => note.id !== id);
    setNotlar(updatedNotes);
  };

  const handleEditNote = (id) => {
    const noteToEdit = notlar.find((note) => note.id === id);
    setEditingNote(noteToEdit);
  };

  const handleSaveEdit = (editedNote) => {
    const updatedNotes = notlar.map((note) =>
      note.id === editingNote.id ? { ...note, content: editedNote } : note
    );
    setNotlar(updatedNotes);
    setEditingNote(null);
  };

  return (
    <div className="App">
      <h1>Notes App</h1>
      <div className="container">
        <Notes
          notes={notlar}
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
