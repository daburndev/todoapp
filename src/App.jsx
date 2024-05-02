import React from 'react';
import Loginpage from './pages/Loginpage';
import Registerpage from './pages/Registerpage';
import Homepage from './pages/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route index element={<Homepage/>}/>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/login" element={<Loginpage/>}/>
        <Route path="/register" element={<Registerpage/>}/>
        
        
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App