import { Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/home'
import ContactUs from './pages/contactUs'
import Selected from './pages/select'
import Services from './pages/services'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/:id' element={<Selected />} />
      </Routes>

  )
}

export default App
