import { Link } from 'react-router-dom';
import React from 'react';
import "./Header.css";
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem  from 'react-bootstrap/lib/NavItem';

const Header = () => (
    <Navbar default collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to="/">BpmnJs</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                    Home
                </NavItem>
                <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
                    About
                </NavItem>
                <NavItem eventKey={3} componentClass={Link} href="/new" to="/new">
                    New
                </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Header;