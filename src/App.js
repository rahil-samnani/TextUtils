import './App.css'
import Alert from './Components/Alert'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Text from './Components/Text.js'
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router";

function App() {

  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1300)
  }

  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      showAlert("Dark Mode is enabled", "success")
      document.body.style.backgroundColor = "#1a1818"
      document.title = "textUtils - Dark Mode"
    }
    else {
      setMode("light")
      showAlert("Light Mode is enabled", "success")
      document.body.style.backgroundColor = "white"
      document.title = "textUtils - Light Mode"
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-5">
          <Routes>
            <Route path='/about' element={<About mode={mode}/>} />
            <Route path='/' element={<Text mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
