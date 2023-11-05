import React, { useState } from 'react'
import '../styles/AddNote.css'
import { AiFillPlusCircle } from 'react-icons/ai'
const AddNote = ({ handleAddNote }) => {

    const [text, setText] = useState("")

    const handleSaveClick = () => {
        text === "" ? alert("Note can't be empty") : 
        handleAddNote(text)
        setText("")
    }
    
  return (
    <div className='AddNote'>
      <div className="note-body">
        <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Type new note here..." cols="30" rows="10"></textarea>
      </div>
      <div className="note-footer">
        <AiFillPlusCircle className='add' onClick={handleSaveClick}/>
      </div>
    </div>
  )
}

export default AddNote
