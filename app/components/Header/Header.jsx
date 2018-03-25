import { Link } from 'react-router-dom';
import React, {Component} from 'react';
import "./Header.css";

import Grid  from 'react-bootstrap/lib/Grid';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem  from 'react-bootstrap/lib/NavItem';
//import { Link } from 'react-router';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';

class Header extends Component{
    render(){
        // return(
        //     <header>
        //         <nav>
        //             <ul>
        //                 <li><Link to='/'>Home</Link></li>
        //                 <li><Link to='/about'>About</Link></li>
        //             </ul>
        //         </nav>
        //     </header>
        // );


        //
        // return(
        //     <div>
        //         <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        //             <a className="navbar-brand" href="#">Navbar</a>
        //             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>
        //
        //             <div className="collapse navbar-collapse" id="navbarColor01">
        //                 <ul className="navbar-nav mr-auto">
        //                     <li className="nav-item active">
        //                         <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="#">Features</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="#">Pricing</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="#">About</a>
        //                     </li>
        //                 </ul>
        //                 <form className="form-inline my-2 my-lg-0">
        //                     <input className="form-control mr-sm-2" placeholder="Search" type="text"/>
        //                         <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        //                 </form>
        //             </div>
        //         </nav>
        //     </div>
        // );


        return(
            <div>
                <Navbar default collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">CodeLife</Link>
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
                            <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
                                News
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        );
    }
}

export default Header;