import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

//components
import Navbar from './components/Navbar'

// pages
import Home from './pages/Home'

//styles
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  )
}

export default App
