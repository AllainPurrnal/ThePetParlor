import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap'

import './index.css';

const AppNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

    return (
      <div>
        <Navbar color='light' light expand='sm' className='sticky-top mb-5'>
          <Container>
            <NavbarBrand href="/">ThePetParlor</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="/Services">Services</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="/About">About</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="/Contact">Contact</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  
}

export default AppNavbar;