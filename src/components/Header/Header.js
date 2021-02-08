import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

// import { beerIndex } from './../../api/beer.js'

// const authenticatedOptions = (
//   <Fragment>
//     <Nav.Link href="#change-password">Change Password</Nav.Link>
//     <Nav.Link href="#sign-out">Sign Out</Nav.Link>
//   </Fragment>
// )

// const unauthenticatedOptions = (
//   <Fragment>
//     <Nav.Link href="#sign-up">Sign Up</Nav.Link>
//     <Nav.Link href="#sign-in">Sign In</Nav.Link>
//   </Fragment>
// )

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#index">Home</Nav.Link>
    <Nav.Link href="#search">Browse</Nav.Link>
    <Nav.Link href="#favorites">Favorites</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar style={{ fontSize: '20px', height: '65px', marginLeft: '9px', width: '94%' }} bg="primary" variant="dark" expand="md">
    <Navbar.Brand style={{ fontSize: '50px' }} href="#">
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
