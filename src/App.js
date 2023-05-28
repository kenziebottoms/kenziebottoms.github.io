import React, { useState } from 'react'

import Sidebar from './components/Sidebar'
import Content from './components/Content'

import './styles/App.scss'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <Sidebar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Content />
    </div>
  )
}

export default App
