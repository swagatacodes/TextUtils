import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export function Navbar(props){
  const changeColour=(colour) =>{
    document.body.style.backgroundColor= colour
  }
    
    return(
        <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
       </ul>
      <div style={{display:"flex", marginRight:"4px"}}>
        <div onClick={()=>{changeColour("red")}} style={{backgroundColor:"red"}} className="palletColour"></div>
        <div onClick={()=>{changeColour("yellow")}} style={{ backgroundColor:"yellow"}}className="palletColour"></div>
        <div onClick={()=>{changeColour("pink")}} style={{backgroundColor:"pink"}}className="palletColour"></div>

      </div>
      <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
    </div>
  </div>
</nav>
      
    </div>
    )
}

Navbar.propTypes ={
    title: PropTypes.string
}