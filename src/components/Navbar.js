import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import { Button, Navbar, NavItem, Nav, MenuItem } from 'react-bootstrap';
import '../styles/Navbar.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Welcome  from './welcomePage';
import Posts from './userPosts';
import Outreach from './outreach';
import Sponsors from './sponsors';

class Sidebar extends Component{
    render() {
        return(
            <Navbar inverse collapseOnSelect className="navbar">
              <Navbar.Header>
                <Navbar.Toggle />
              </Navbar.Header>
              
              <Navbar.Collapse className="nav-bar-collapse">
                <Nav >
                  <NavItem eventKey={1} href="#" className="navitem">
                    <Link to='/'>HOME </Link>
                  </NavItem>
                  <NavItem eventKey={2} href="#" className="navitem">
                    <Link to='/outreach'>OUTREACH</Link>
                  </NavItem>
                  <NavItem eventKey={2} href="#" className="navitem">
                    <Link to='/posts'>COMMUNITY</Link>
                  </NavItem>
                  <NavItem eventKey={1} href="#" className="navitem">
                    <Link to='/sponsors'>SPONSORS</Link>
                  </NavItem>
                  <NavItem eventKey={1} href="#" className="navitem">
                    NEAR YOU
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        );
      }
    }

  export default Sidebar;