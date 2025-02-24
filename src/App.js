import React from "react";
import NotesList from "./components/NotesList";
import NoteForm from "./components/NoteForm";
import { NotesProvider } from "./context/NotesContext";
import Footer from "./components/Footer"; 
import "./styles.css";

function App() {
  return (
    <NotesProvider>
      <div className="app">
        <h1>My Notes</h1>
        <NoteForm />
        <NotesList />
      </div>
      <Footer />
    </NotesProvider>
  );
}

export default App;
