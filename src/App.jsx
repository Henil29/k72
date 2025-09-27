import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'

const App = () => {
  return (
    <div className='text-white'>
      {/* just for testing navigation */}
      {/* <Link to="/">Home</Link>
      <Link to="/agence">Agence</Link>
      <Link to="/projects">Projects</Link> */}

      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />

        {/* for undefined routes */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App