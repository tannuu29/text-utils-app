import { useState } from 'react'
import './App.css'
import AppNavbar from './components/AppNavbar'
import TextForm from './components/TextForm'
import About from './components/About'
import AlertDismis from './components/AlertDismis'
import AboutUs from './components/AboutUs'
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [btnText, setBtnText] = useState("🌙")
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#393d41"
      setBtnText("🌙");
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
      // setInterval(() =>{
      //   document.title = "TextUtils is Amazing";
      // }, 2000);
      //  setInterval(() =>{
      //   document.title = "Install TextUtils App Now";
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      setBtnText("🔆")
      showAlert("Light mode has been enabled", "success")
      // document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
      <Router>
        <AppNavbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} btnText={btnText} />
        {/* <AppNavbar/> */}
        <AlertDismis alert={alert} />

        <div className='container'>
          <Routes>
            <Route exact path="/about" element={<AboutUs mode={mode} />} />

            <Route exact path="/" element={<TextForm heading="TextUtils - Word & Charcter Counter" mode={mode} showAlert={showAlert} />} />
          </Routes>

        </div>
        {/* <About/> */}
      </Router>
    </>
  )
}

export default App
