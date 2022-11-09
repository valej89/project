import React from 'react';
import { Link } from 'react-router-dom';
//import './NavBar.css';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-indigo">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src="./images/icon.gif" className='img-fluid'/>Friki Store</a>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>  */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;