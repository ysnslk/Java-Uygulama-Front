import React, { useState } from 'react';

const EditNote = ({ note, onSave }) => {
  const [editedNote, setEditedNote] = useState(note);

  const handleSave = () => {
    onSave(editedNote);
  };

  return (
    <div className="editNote">
      <h3>Düzenle</h3>
      <input
        type="text"
        value={editedNote}
        onChange={(e) => setEditedNote(e.target.value)}
      />
      <button onClick={handleSave}>Kaydet</button>
    </div>
  );
};

export default EditNote;
