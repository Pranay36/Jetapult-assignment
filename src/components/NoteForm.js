import React, { useState, useEffect, useContext } from "react";
import NotesContext from "../context/NotesContext";

const NoteForm = () => {
  const { addNote, activeNote, updateNote, setActiveNote } =
    useContext(NotesContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (activeNote) {
      setTitle(activeNote.title);
      setContent(activeNote.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [activeNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() && !content.trim()) return;

    if (activeNote) {
      updateNote({ ...activeNote, title, content });
      setActiveNote(null);
    } else {
      addNote({ id: Date.now(), title, content });
    }

    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Take a note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">{activeNote ? "Update" : "Add"} Note</button>
    </form>
  );
};

export default NoteForm;
