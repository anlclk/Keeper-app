import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Note from "../note/Note";
import CreateArea from "../createarea/CreateArea";


function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    })
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }


  return(
    <>
    <Header />
    <CreateArea onAdd={addNote}/>
    <main>
      {notes.map((noteItem, index) => {
        return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />
      })}
    </main>
    <Footer />

    </>
  );
};

export default App
