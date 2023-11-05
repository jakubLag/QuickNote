import React, { useState } from 'react'
import { RiSearchLine, RiPaletteLine, RiContrast2Line} from "react-icons/ri"
import '../styles/Navbar.css'
import '../styles/Palettes.css'

const Navbar = ({ handleSearchNote, handleToggleDarkMode, data, handleSetPallete }) => {

  const [toggleSearch, setToggleSearch] = useState(false)

  const [togglePalettes, setTogglePalettes] = useState(false)
  
  return (
    <div className='Navbar'>
      <h1>QuickNote</h1>
      <div className="nav">
        <div className="nav-item">
            {
              toggleSearch 
              ?
              <div className="input-container">
                <input onChange={e => handleSearchNote(e.target.value)} type="text" className='search-input' placeholder="Search a note..."/>
                <RiSearchLine className='icon search-toggled' onClick={() => setToggleSearch(false)}/>
              </div>
              :
              <RiSearchLine className='icon search' onClick={() => setToggleSearch(true)}/>
            }
        </div>
        <div className="nav-item">
            <RiContrast2Line className='icon darkMode' onClick={() => handleToggleDarkMode(previousDarkmode => !previousDarkmode)}/>
        </div>
        <div className="nav-item">
            <RiPaletteLine className='icon settings' onClick={() => setTogglePalettes(check => !check)}/>
            {togglePalettes &&
             <div className="Palettes">
              {data && data.map(item => (
                <div className="option" onClick={() => handleSetPallete(item.colors)}>
                  <div className="color-preview">
                    {item.colors.map(item => (
                      <button style={{background: item}} className="choice-btn"></button>
                    ))}
                  </div>
                  <div className="option-text">{item.displayText}</div>
                  
                </div>
              ))}
            </div>
            }
        </div>
        
      </div>
    </div>
  )
}

export default Navbar
