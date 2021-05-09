import React from 'react';
//import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

// Will add in the future
function Footer() {
    return (
        
  <Nav className="footer bg-warning fixed-bottom mx-auto p-0">
    <div>
     <Nav.Item>
    <Nav.Link className="text-dark font-weight-bold"  target="_blank">Exley</Nav.Link>
  </Nav.Item>
  </div>
 {/* <Nav.Item>
    <Nav.Link className="text-dark" href="https://github.com/Jonathan-84" target="_blank">GitHub</Nav.Link>
 </Nav.Item>*/}
  <Nav.Item>
    <Nav.Link className="text-dark" href="https://www.linkedin.com/in/jrobinson8" target="_blank">LinkedIn</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className="text-dark" href = "mailto:exley.deadlines@outlook.com?subject = Feedback&body = Message">Contact Exley</Nav.Link>
  </Nav.Item>
</Nav>
        
    )
}
export default Footer;