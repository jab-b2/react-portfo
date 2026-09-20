import { useState } from 'react'
import './App.css'
import Template from './components/Template.jsx'
import Header from './components/Header.jsx'
import TitleCard from './components/TitleCard.jsx'
import NavBar from './components/NavBar.jsx'
import Button from './components/subcomponents/Button.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TitleCard />
    <Header />
    <NavBar />
    <Button>Test</Button>
    
    </>
  )
}

export default App
