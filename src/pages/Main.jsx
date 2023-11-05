import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import NoteList from '../components/NoteList'
import { nanoid } from 'nanoid'
const Main = () => {
  const data = [
    {
      id: nanoid(),
      displayText: "Calm",
      colors: ['#123321', '#331512', '#88615D']
    },
    {
      id: nanoid(),
      displayText: "Warm",
      colors: ['#272838', '#F3DE8A', '#EB9486']
    },
    {
      id: nanoid(),
      displayText: "Fairy",
      colors: ['#210B2C', '#55286F', '#AE759F']
    }
  ]
  const [darkMode, setDarkMode] = useState(false)
  const [searchText, setSearchText] = useState("")
  const [palette, setPalette] = useState(data[0].colors)

  

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <Navbar handleSetPallete={setPalette} data={data} handleToggleDarkMode={setDarkMode} handleSearchNote={setSearchText}/>
      <NoteList palette={palette} searchText={searchText}/>
    </div>
  )
}

export default Main
