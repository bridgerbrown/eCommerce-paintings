import { useState } from 'react'
import './App.css'
import Shop from './Shop/Shop'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
