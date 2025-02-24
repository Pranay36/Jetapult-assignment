import React, { useContext } from "react";
import NotesContext from "../context/NotesContext";
import Note from "./Note";

const NotesList = () => {
  const { notes } = useContext(NotesContext);

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NotesList;
