import React from 'react'
import Home from './screens/Home'
import BookTicket from './screens/BookTicket'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route  exact path="/" element={<Navigate to="/home"/>}/>
      <Route  exact path="/home" element={<Home />}/>
      <Route  exact path="/booking" element={<BookTicket />}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App