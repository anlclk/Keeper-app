import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Note from "../note/Note";
import notes from "../note.js/note"


function addNote(noteItem) {
  return <Note 
  key={noteItem.key}
  title={noteItem.title}
  content={noteItem.content}
  />
}


function App() {
  return(
    <>
    <Header />
    <main>
      {notes.map(addNote)}
    </main>
    <Footer />

    </>
  );
};

export default App
