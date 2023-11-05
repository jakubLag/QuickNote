import React, { useState } from 'react'
import '../styles/Note.css'
import { AiFillDelete, AiOutlineBgColors, AiFillCloseCircle } from 'react-icons/ai'
const Note = (props) => {

    const {id, text, date} = props.data;
    const [choice, setChoice] = useState(false)
    const [color, setColor] = useState("#123321")

  return (
    <div className='Note' style={{background: color, border: `1px solid ${color}`}}>
      <div className="note-body">
        <p>{text}</p>
      </div>
      <div className="note-footer">
        <div className="date">
          <b>{date}</b>
        </div>
        <div className="options">
        {
          choice ? 
          <div className="color-choice">
            {
              props.palette.map(item => (
                <button style={{background: item}} className='choice-btn' onClick={() => setColor(item)}></button>
              ))
            }
            {/* <button className="choice-btn pink scaleup" onClick={() => setColor("#88615D")}></button>
            <button className="choice-btn claret scaleup" onClick={() => setColor("#331512")}></button>
            <button className="choice-btn green scaleup" onClick={() => setColor("#123321")}></button> */}
            <AiFillCloseCircle className='close scaleup' onClick={() => setChoice(false)}/>
          </div>
          : 
          <AiOutlineBgColors className='color scaleup' onClick={() => setChoice(true)}/>
        }
        <AiFillDelete className='delete' onClick={() => props.deleteNote(id)}/>
        </div>
        
      </div>
    </div>
  )
}

export default Note
