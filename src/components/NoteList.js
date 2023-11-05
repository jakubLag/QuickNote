import React, { useState, useEffect } from 'react'
import { nanoid } from 'nanoid';
import Note from './Note';
import '../styles/NoteList.css'
import AddNote from './AddNote';
const NoteList = ({ searchText, palette }) => {
    const [notes, setNotes] = useState([]);

    const deleteNote = id => {
        const newNotes = notes.filter(note => note.id !== id);
        setNotes(newNotes)
    }
    
    const addNote = text => {
        const date = new Date()
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString()
        }
        const newNotes = [...notes, newNote]
        setNotes(newNotes)
    }

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));

        if(savedNotes) setNotes(savedNotes)
    }, [])

    useEffect(()=> {
        localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
      }, [notes])

  return (
    <div className='NoteList'>
        {notes.filter(note => note.text.toLowerCase().includes(searchText.toLowerCase())).map(note => <Note palette={palette} data={note} key={note.id} deleteNote={deleteNote}/>)}
        <AddNote handleAddNote={addNote}/>
    </div>
  )
}

export default NoteList
