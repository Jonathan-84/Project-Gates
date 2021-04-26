import React from 'react';
import { Link } from 'react-router-dom';
//import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import Auth from '../utils/auth';

const AppNavbar = () => {
   
  
    return (
      <>
        <div className="jumbotron jumbotron-fluid bg-warning pb-4 pt-1">
    <div className="container">
      <h1 className="display-4">Exley</h1>
      <p className="lead">A light tool to help keep you and your prospects on schedule.</p>
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon bg-warning"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li>
                        <Link to="/" className="link-text text-dark m-3 p-2 border border-dark rounded bg-white fw-bold main-link">Home</Link>
                    
         {/*This is where the COnditional was added for the Nav*/}
                    {Auth.loggedIn() ? (
                <>
                  <Link to="/fromNow" className="link-text text-dark m-3 p-2 bg-white border border-dark rounded fw-bold  main-link">From Now</Link>
                  <Link to="/Future" className="link-text text-dark m-3 p-2 bg-white border border-dark rounded fw-bold  main-link">Look Ahead</Link>
                  <Link to="/" onClick={Auth.logout}className="link-text text-dark rounded border border-dark p-2 m-3 bg-white fw-bold main-link">Logout</Link>
                </>
              ) : (
                <>
                <Link to="/login" className="link-text text-dark fw-bold m-3 border border-dark p-2 bg-white rounded add-padding main-link">Log in</Link>
                <Link to="/signup" className="link-text text-dark fw-bold m-3 border border-dark p-2 bg-white rounded add-padding main-link"> Sign Up</Link>
                </>
              )}
                </li>
                </ul>
            </div>
            
        </div>
    </nav>
    </div>
    </div>
      </>
      
    );
  };
  
  export default AppNavbar;
  