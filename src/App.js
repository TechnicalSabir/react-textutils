import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light') //check whether dark mode is enable or not.
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }

  const toggleMode = (cls) => {
    console.log(cls);
    document.body.classList.add(`bg-${cls}`)
    // if (mode === 'light') {
    //   setMode('dark');
    //   document.body.classList.add('bg-secondary');
    //   showAlert("Dark mode has been enabled", 'success');
    //   document.title = 'Textutils - Dark Mode';
    
    // } else {
    //   setMode('light');
    //   document.body.classList.remove('bg-secondary');
    //   showAlert("light mode has been enabled", 'success');
    // }
  }
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" />} />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
