import React from 'react';

const Notes = ({ notes, onDelete, onEdit }) => {
  return (
    <div className="notes">
      <h3>Notlarım</h3>
      {notes.map(note => (
        <div key={note.id}>
        <button onClick={() => onEdit(note.id)}>Düzenle</button>
          <span>{note.content}</span>
          <button onClick={() => onDelete(note.id)}>Sil</button>
        </div>
      ))}
    </div>
  );
};

export default Notes;
