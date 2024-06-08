import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import MyAlert from "./components/MyAlert";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feedback from "./Feedback";
import Dictionary from "./components/Dictionary";
import TextParser from "./components/TextParser";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  const [mode, setMode] = useState("light");

  return (
    <>
    <BrowserRouter>
      <Navbar
        title="WordWise"
        abouttext="About"
        mode={mode}
        enableMode={toggleMode}
      />
      <MyAlert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/" element={<TextForm heading = "Enter the text to analyse below " mode={mode} showAlert={showAlert}/>}/>
        </Routes>
        <Routes>
          <Route exact path="about" element={<About mode={mode}/>}/>
        </Routes>
        <Routes>
          <Route exact path="textparser" element={<TextParser mode={mode}/>}/>
        </Routes>
        <Routes>
          <Route exact path="dictionary" element={<Dictionary mode={mode} showAlert={showAlert}/>}/>
        </Routes>
        <Routes>
          <Route exact path="feedback" element={<Feedback mode={mode} showAlert={showAlert}/>}/>
        </Routes>
      </div>
      </BrowserRouter>  
    </>

  );
}

export default App;
