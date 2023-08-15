import React, { useState } from 'react';

const NewNote = ({ onAddNote }) => {
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.trim() !== "") {
      onAddNote(note);
      setNote("");
    }
  };

  return (
    <div className="newNote">
      <h3>Yeni Not Ekle</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Notunuzu Buraya Giriniz"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button type="submit">Ekle</button>
      </form>
    </div>
  );
};

export default NewNote;
