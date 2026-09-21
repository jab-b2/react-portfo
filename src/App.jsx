import { useState } from 'react'
import './App.css'
import Template from './components/Template.jsx'
import Header from './components/Header.jsx'
import TitleCard from './components/TitleCard.jsx'
import NavBar from './components/NavBar.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
//import Projects from './pages/Projects.jsx'
//import Art from './pages/Art.jsx'

const PAGE_COMPONENTS = {
  Home,
  About,
}

function App() {
  const [currentPage, setCurrentPage] = useState('Home')
  const ActivePage = PAGE_COMPONENTS[currentPage]

  return (
    <>
      <TitleCard />
      <Header />
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        <ActivePage />
      </main>
    </>
  )
}
export default App
