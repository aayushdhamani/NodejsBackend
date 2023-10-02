
import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './Context/notes/NoteState';
import Login from './components/login';
import SignUp from './components/signup';
import Alert from './components/Alert';
import Footer from "./components/Footer";
import { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  return (
 <>
<NoteState>
<BrowserRouter>
        <Navbar/>
        <Alert alert={alert}/>
        <div className="container">

      <Routes>
        <Route path="/" element={<Home showAlert={showAlert}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login showAlert={showAlert}/>} />
        <Route path="/signup" element={<SignUp showAlert={showAlert}/>} />
      </Routes>
      <Footer/>
      </div>
    </BrowserRouter>
    </NoteState>
 </>
  );
}

export default App;


