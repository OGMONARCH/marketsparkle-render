import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Carty from './component/Carty'
const Rogue = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/carty" element={<Carty />} />
    </Routes>
  </BrowserRouter>
  )
}

export default Rogue