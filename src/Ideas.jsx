import { useEffect, useState } from "react";
import Note from "./Note";
import NotesList from "./NotesList";
import { v4 as uuid } from 'uuid';

function Ideas() {
  const [myNotes, setMyNotes] = useState(localStorage.myNotes ? JSON.parse(localStorage.myNotes) : [])
  const [selectedNote, setSelectedNote] = useState(null)

  useEffect(() => {
    localStorage.setItem("myNotes", JSON.stringify(myNotes))
  }, [myNotes])

  const addNote = () => {
    const newNote = {
      title: " ",
      id: uuid(),
      description: ""
    }
    setMyNotes([newNote, ...myNotes])
  }

  const deleteNote = (noteId) => {
    setMyNotes(myNotes.filter( ({id}) => id !== noteId ))
  }

  const updateNote = (myUpdatedNote) => {
    const updatedNotesList = myNotes.map( (item) => {
      if (item.id === myUpdatedNote.id)
        return myUpdatedNote;
      return item;
    })
    setMyNotes(updatedNotesList)
  }

  const getActiveNote = () => {
    return myNotes.find( ({id}) => id === selectedNote )
  }

  return(
    <div>
      <Note addNoteProp = {addNote}
        selectedNoteProp = {getActiveNote()}
        updateNoteProp = {updateNote}       
        
      />
      <NotesList 
        myNotesProp = {myNotes}
        addNoteProp = {addNote}
        deleteNoteProp = {deleteNote}
        selectedNoteProp = {selectedNote}
        setSelectedNoteProp = {setSelectedNote}
      />
    </div>
  )
}

export default Ideas;