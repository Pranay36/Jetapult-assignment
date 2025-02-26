import React, { useState, useContext } from "react";
import NotesContext from "../context/NotesContext";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Note = ({ note }) => {
  const { setActiveNote, deleteNote } = useContext(NotesContext);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState(note.summary || "");

  const fetchSummary = async () => {
    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
    setLoading(true);

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const prompt = `Summarize this note:\n\n"${note.content}"\n\nSummary:`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      setSummary(text || "NA");
    } catch (error) {
      console.error("Error:", error);
      setSummary("Failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="note">
      <h3>{note.title}</h3>
      <p>{note.content}</p>

      {summary && (
        <p className="summary">
          <strong>Summary:</strong> {summary}
        </p>
      )}

      <div className="note-actions">
        <button onClick={() => setActiveNote(note)}>Edit</button>
        <button onClick={() => deleteNote(note.id)}>Delete</button>
        <button onClick={fetchSummary} disabled={loading}>
          {loading ? "Summarizing..." : "Summarize"}
        </button>
      </div>
    </div>
  );
};

export default Note;
