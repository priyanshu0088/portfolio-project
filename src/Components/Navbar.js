import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav  ">
          <li className="nav-item ">
            <a className="nav-link " aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">about</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">contact</a>
          </li>
          
        </ul>
       
      </div>
    </div>
    </div>
  </nav>
  )
}

export default Navbar
