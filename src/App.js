import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Alert from "./components/Alert";


function App() {
  const [darkMode, setDarkMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (type, msg) => {
    setAlert({
      type: type,
      msg: msg
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleColorMode = () => {
    if (darkMode === 'light') {
      setDarkMode('dark');
      document.body.style.background = "#042743";
      showAlert('success', 'Dark Mode Enable.');
    } else {
      setDarkMode('light')
      document.body.style.background = "white";
      showAlert('success', 'Light Mode Enable.');
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" toggleColorMode={toggleColorMode} darkMode={darkMode} />
        <Alert alert={alert} />
        <div style={{ marginTop: "4rem" }}>
          <Routes>
            <Route path="/" element={<Home showAlert={showAlert} darkMode={darkMode} />} />
            <Route path="/about" element={<About darkMode={darkMode}/>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>


    </>
  );
}

export default App;
