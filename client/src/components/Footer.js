import React from 'react';
//import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

// Will add in the future
function Footer() {
    return (
        <footer className="footer bg-warning fixed-bottom mx-auto p-3">
            <Nav className="text-center" variant="pills" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link className="text-dark" href="https://github.com/Jonathan-84" target="_blank">LinkedIn</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className="text-dark" href="https://www.linkedin.com/in/jrobinson8" target="_blank">GitHub</Nav.Link>
  </Nav.Item>
</Nav>
        </footer>
    )
}
export default Footer;