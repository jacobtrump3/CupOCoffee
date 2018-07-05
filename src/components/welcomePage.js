import React, { Component } from 'react'
import {Helmet} from "react-helmet";

import { Link, Router } from 'react-router-dom';
import '../styles/welcomePage.css';


class Welcome extends Component {
    render() {
    return (
    <div className="Welcome" >
        <div className="container-fluid text-center about-us">
            <div className="row">
                <div className="col-sm-12 ">
                    <h1><b>What we're all about:</b></h1><br/>
                    <h4 className="mission " ><strong>MISSION:</strong> <b> To help our customers get out of bed every
                    morning with the tools to start the day off right</b></h4> <br/>     
                    <p className="vision "><strong>VISION:</strong><b> Here at Cup O' Coffee our vision is to have a world of 
                    people who are no longer tired when they walk into work in the 
                    morning. Who aren't afraid to admit that sometimes you need a little extra kick to 
                    tackle the day like an all-pro NFL linebacker. Whether you need a morning pickup composed of
                    dark roasted coffee beans shipped in from the mountains of Chile or you prefer a little taste 
                    of rich flavor grown from the best plants in the islands of Hawaii, we've got you covered.</b> </p>
                </div>
            </div>
        </div>
    </div>
      );
    }
}
  


export default Welcome;


