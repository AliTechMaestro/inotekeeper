import "./App.css";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./Components/Header";
import CreateNote from "./Components/CreateNote";
import { useState } from "react";
import Note from "./Components/Note";
function App() {
  const [noteArray, setNoteArray] = useState([]);

  const addNote = (note) => {
    console.log(note);
    if (note.title === "" && note.content === "") {
      alert("You can't add Empty Note");
    } else if (note.title === "" && note.content !== "") {
      alert("Title is Required");
      window.preventDefault();
    } else if (note.title !== "" && note.content === "") {
      alert("Please Enter Note description");
      window.preventDefault();
    } else {
      setNoteArray((preval) => {
        return [...preval, note];
      });
    }
  };

  const DeleteNote = (id) => {
    setNoteArray((oldData) => {
      return oldData.filter((currentData, index) => {
        return id !== index;
      });
    });
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      <div className="container">
        <div className="flexbox pb-5">
          {noteArray &&
            noteArray.map((curNote, index) => {
              return (
                <>
                  <Note
                    title={curNote.title}
                    content={curNote.content}
                    id={index}
                    key={index}
                    onSelect={DeleteNote}
                  />
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default App;
