import './App.css';
import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Nav from './Assets/Nav';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Notfound from './Pages/Notfound';
import "./styles/main.css"
function App() {
     return(
      <BrowserRouter>
        <Nav />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            {/* <Route path='/payement' element={<Payment />}/> */}
            <Route path='*' element={<Notfound />} />
        </Routes>
      </BrowserRouter>
     )
}

export default App;