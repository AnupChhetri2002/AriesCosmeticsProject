import React, { useEffect, useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Shop from "./pages/Shop.jsx";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Gallery from "./pages/Gallery.jsx";
import AnimatedText from "./components/AnimatedText.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  const [urlName,setUrlName] = useState('')

  useEffect(()=>{

  },[])
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1900);
  }, []);
  return (
    <BrowserRouter>
      <Navbar />

      <div>
        <div className={`${!loading && " hidden "}`}>
          <div className=" w-full h-[36rem] flex items-center justify-center">
            <AnimatedText />
          </div>
        </div>
        <div className={`${loading && " hidden"}`}>
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/About" element={<About />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Shop" element={<Shop />} />
        

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
