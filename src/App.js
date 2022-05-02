import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [darkMode, setDarkMode] = useState('light');

  const toggleColorMode = () => {
    if (darkMode === 'light') {
      setDarkMode('dark');
      document.body.style.background = "#042743";
    } else {
      setDarkMode('light')
      document.body.style.background = "white";
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" toggleColorMode={toggleColorMode} darkMode={darkMode} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          {/* <Route path="/about" element={<About myStyle={myStyle}/>} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>


    </>
  );
}

export default App;
