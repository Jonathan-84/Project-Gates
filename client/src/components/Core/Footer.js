import React from 'react';
//import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

// Will add in the future
function Footer() {
    return (
      <>

  <Nav className="footer d-flex justify-content-between bg-dark fixed-bottom mx-auto p-2">
     <Nav.Item>
    <Nav.Link className="text-warning font-weight-bold"  target="_blank">Exley ©️ 2021 All Rights Reserved.  </Nav.Link>
  </Nav.Item>
 {/* <Nav.Item>
    <Nav.Link className="text-dark" href="https://github.com/Jonathan-84" target="_blank">GitHub</Nav.Link>
 </Nav.Item>*/}
 <div className="d-flex justify-content-end">
  <Nav.Item>
    <Nav.Link className="text-warning" href="https://www.linkedin.com/in/jrobinson8" target="_blank">LinkedIn</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className="text-warning" href = "mailto:exley.deadlines@outlook.com?subject = Feedback&body = Message">Contact Exley</Nav.Link>
  </Nav.Item>
  </div>
</Nav>
</>    
    )
    
}
export default Footer;