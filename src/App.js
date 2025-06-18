import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";
import Notes from "./components/Notes/Notes";

const NOTES = [
  // {
  //   id: "a123",
  //   title: "some title",
  //   text: "some text",
  // },
  // {
  //   id: "a124",
  //   title: "some title 1",
  //   text: "some text",
  // },
  // {
  //   id: "a125",
  //   title: "some title 2",
  //   text: "some text",
  // },
  // {
  //   id: "a126",
  //   title: "some title 3",
  //   text: "some text",
  // },
];

const App = () => {
  const [notes, setNotes] = useState(NOTES);
  const [selectedNote, setSelectedNote] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addNote = (note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  };
  const editNote = (editedNote) => {

    setNotes(prevNotes => {
      const newArray = prevNotes.map(note => {
        if (editedNote.id === note.id) {
          note.title = editedNote.title;
          note.text = editedNote.text;
        }
        return note;
      });
      return newArray;
    })
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => id !== note.id);
    });
  };
  const toggleModal = () => {
    setIsModalOpen((prevState) => {
      return !prevState;
    });
  };
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Form addNote={addNote} />
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          selectedNote={selectedNote}
          toggleModal={toggleModal}
          editNote={editNote}
        />
      )}

      <Notes
        notes={notes}
        deleteNote={deleteNote}
        toggleModal={toggleModal}
        setSelectedNote={setSelectedNote}
      />
    </div>
  );
};

export default App;
