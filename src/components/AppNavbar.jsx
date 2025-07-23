import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Form, FormControl, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router';



export default function AppNavbar(props) {
  
  return (
    <>
      {/* <Navbar expand="lg" className={`bg-body-tertiary navbar-${props.mode} bg-${props.mode} w-100`} > */}
      <Navbar className={`bg-${props.mode}`} data-bs-theme={props.mode}>
        <Container fluid >
           <Navbar.Brand as={Link} to="/">{props.title}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">{props.about}</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          {/* <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Check this switch"
        /> */}
         <Button onClick={props.toggleMode} variant="outline-secondary mx-3">{props.btnText}</Button>

            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-secondary" >Search</Button>
            </Form>

          
        </Container>
      </Navbar>
    </>
  );
}
AppNavbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};

AppNavbar.defaultProps = {
  title: "title",
  about: "about text"
};