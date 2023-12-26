import React from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Shop from './pages/Shop.jsx';
import {BrowserRouter,Route, Routes,} from "react-router-dom"
import Gallery from './pages/Gallery.jsx';


function App() {
  return (
    <BrowserRouter>
   
    <Navbar />

  
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/About" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Shop" element={<Shop />} />
        
     
      </Routes>
     
      </BrowserRouter>
  );
}

export default App;
