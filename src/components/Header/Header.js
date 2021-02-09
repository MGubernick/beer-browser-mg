import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#index" style={{ fontSize: '30px' }}>Home</Nav.Link>
    {/* <Nav.Link href="#search">Browse</Nav.Link> */}
    <Nav.Link href="#favorites" style={{ fontSize: '30px' }}>Favorites</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar className="header-nav" style={{ fontSize: '20px', height: '65px', marginLeft: '9px', width: '94%' }} bg="primary" variant="dark" expand="md">
    <Navbar.Brand style={{ fontSize: '50px' }} href="#index">
      Beans Love Beer
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { alwaysOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
