
import './App.css';
import { Navbar } from './components/Navbar';
 
import React, { useState } from 'react'

import  './pages/About';
import {HomePage} from "./pages/Home"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AboutPage from './pages/About';




function App() {
  const [mode, setMode]= useState('light');

  const toggleMode=() =>{
    if (mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor= 'white'
      showAlert(" Light mode has been enabled","success")
      document.title="TextUtils- Light Mode"
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor= '#1d2b3f'
      showAlert(" Dark mode has been enabled","success")
      document.title="TextUtils- Dark Mode"
    }
  }

  

  const [alert, setAlert]= useState(null);
  console.log("alerts value is:",alert)
  const showAlert= (message,type) =>{
    setAlert(null)
    setAlert({
      msg :message,
      type :type
    })
    
  }

  return (
    <>
    
    
   <BrowserRouter>
   <Navbar  title= 'TextUtils' mode={mode} toggleMode={toggleMode}/>
    <Routes>
      <Route path="/" element={<HomePage mode={mode} />}/>
        
      <Route path="/About" element={<AboutPage/>}/>
        
     
    </Routes>
  </BrowserRouter>
    
    {/* {alert?<Alert alert={alert} setAlert={setAlert}/>:""} */}
     
    
    
      
     {/*  <div>
        <Box heading="Enter text to analyse below" mode={mode} ></Box>
      </div> */}

      </>
      

    
    
  )
}

export default App;
