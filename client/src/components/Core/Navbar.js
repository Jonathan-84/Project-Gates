import React from 'react';
import { Link } from 'react-router-dom';
//import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import Auth from '../../utils/auth';
import Logo from '../../images/Logo.PNG';





function AppNavbar(){

    return (
      <>
        <div className="jumbotron jumbotron-fluid bg-warning pb-4 pt-1">
    <div className="container">
   
    <img className="img-fluid w-25 h-25" src={Logo} alt="Initial Logo" />
      <h3 className=" lead d-none d-md-block">Your Sales Deadline Co-Pilot</h3>
    <nav className="navbar navbar-expand-lg navbar-light">
        <button className="navbar-toggler bg-warning" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                    <li className='nav-item active'>
                        <Link to="/" className="link-text m-3  text-dark font-weight-bold fw-bold main-link">Home</Link>
                        </li>
         {/*This is where the COnditional was added for the Nav*/}
                    {Auth.loggedIn() ? (
                <>
                <li className='nav-item active'>
                  <Link to="/fromNow" className="link-text text-dark m-3 font-weight-bold main-link">From Today</Link>
                  </li>
                  <li className='nav-item active'>
                  <Link to="/Future" className="link-text text-dark m-3 font-weight-bold  main-link">Deadlines</Link>
                  </li>
                 {/* <li className='nav-item active'>
                  <Link to="/Planning" className="link-text text-dark m-3 font-weight-bold  main-link">Planning</Link>
                    </li>*/}
                  <br />
                  <li className='nav-item active'>
                  <Link to="/" onClick={Auth.logout}className="link-text text-dark m-3 font-weight-bold main-link">Logout</Link>
                  </li>
                </>
              ) : (
                <>
                
                <li className='nav-item active'>
                <Link to="/login" className="link-text text-dark font-weight-bold m-3 add-padding main-link">Log in</Link>
                </li>
                <li className='nav-item active'>
                <Link to="/signup" className="link-text text-dark font-weight-bold m-3 add-padding main-link"> Sign Up</Link>
                </li>
                </>
              )}
                
                </ul>
            </div>
            
        
    </nav>
    </div>
    </div>

      </>
      
    );
  };
  
  export default AppNavbar;
  