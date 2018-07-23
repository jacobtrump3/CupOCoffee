import React, { Component } from 'react';
import {  Navbar,  Nav } from 'react-bootstrap';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';


class Sidebar extends Component{

    render() {
      var path = "/CupOCoffee/"
        return(
            <Navbar inverse collapseOnSelect className="navbar">
              <Navbar.Header>
                <Navbar.Toggle />
              </Navbar.Header>
              
              <Navbar.Collapse className="nav-bar-collapse">
                <Nav className="nav-bar-container">
                    <Link className="navHeader" to='/CupOCoffee/'>HOME</Link>

                    <Link className="navHeader" to={`${path}/outreach`}>OUTREACH</Link>

                    <Link className="navHeader" to='/posts'>COMMUNITY</Link>
                
                    <Link className="navHeader" to='/sponsors'>SPONSORS</Link>

                    <Link className="navHeader" to='/AroundMe'>NEAR YOU</Link>
=                </Nav>
              </Navbar.Collapse>
            </Navbar>
            
        );
      }
    }

  export default Sidebar;