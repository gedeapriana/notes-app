import React, { useState, useEffect } from "react";
import { getInitialData } from "./utils";
import Navbar from "./Components/Navbar";
import InputForm from "./Components/InputForm";
import NotesSection from "./Components/NotesSection";

function App() {

  const [query, setQuery] = useState("");
  const [searchNotes, setSearchNotes] = useState([]);
  const [notes, setNotes] = useState(getInitialData());

  const activeNotes = (searchNotes || notes).filter((note) => !note.archived);
  const archivedNotes = (searchNotes || notes).filter((note) => note.archived);

  useEffect(() => {
    setSearchNotes(notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase())));
  }, [query, notes]);

  return (
    <>
      <Navbar search={query} updateQuery={setQuery} updateNotes={setNotes}  />
      <InputForm updateNotes={setNotes} />
      <NotesSection label='Catatan' notes={activeNotes} setNotes={setNotes} />
      <NotesSection label='Arsip Catatan' notes={archivedNotes} setNotes={setNotes} />
    </>
  );
}

export default App;
