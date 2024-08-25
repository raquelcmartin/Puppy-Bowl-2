import { Routes, Route } from 'react-router-dom'
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'
import NewPlayer from './components/NewPlayer'
import NavBar from './components/NavBar'
import './index.css'


function App() {
  

  return (
    <>
    <NavBar />

    <main>
    <Routes>
      {/* <Route path='/' element={<Homepage />} /> */}
      <Route path='/' element={<AllPlayers/>} />
      <Route path='/players/:id' element={<SinglePlayer/>} />
      <Route path='/form' element={<NewPlayer/>} />
    </Routes>
    </main>
      
    </>
  )
}

export default App
