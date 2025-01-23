import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes, Route} from "react-router-dom"
import './App.css'
import { Home } from './pages/Home'

function App() {
 
  return (
    <>
      <h1>Blinkit Clone App</h1>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
      </Routes>
    </>
  )
}

export default App
