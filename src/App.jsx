import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'
import NewPlayer from './components/NewPlayer'
import NavBar from './components/NavBar'


function App() {
  

  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<AllPlayers/>} />
      <Route path='/players/:id' element={<SinglePlayer/>} />
      <Route path='/players/add' element={<NewPlayer/>} />
    </Routes>
      
    </>
  )
}

export default App
