import React, { Component } from 'react' 
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { PageHeader } from 'react-bootstrap';
import Welcome  from './welcomePage';
import Posts from './userPosts';
import Outreach from './outreach';
import Sponsors from './sponsors';
import logo from '../images/CUPOCOFFEE_Logo.png';
import Navigation from './Navbar';
import AroundMe from './AroundMe';

import '../styles/links.css'



class Links extends Component{
    render(){
        return(
            <Router>
                
                <div className="container-fluid text-center">
            <PageHeader className="header text-center">
                <Link to='/'>
                    {/* <div className="App-logo"> Cup O' Coffee </div> */}
                <img src={logo} className="App-logo" alt="logo" />
                </Link>
            </PageHeader>
            <Navigation className="nav-bar " />
              
                    <Route exact path='CupOCoffee/' component={Welcome} />
                    <Route path='/outreach' component={Outreach} />
                    <Route path='/posts' component={Posts} />
                    <Route path='/sponsors' component={Sponsors} />
                    <Route path='/AroundMe' component={AroundMe} />
             
                <div className="internal-link-logos">
                    <h2>Check Us Out</h2>
                    <h4>What we offer</h4>
                    <br/>
                    <div className="row center" >
                        <div className="col-sm-3">
                        </div>
                        <div  className="col-sm-2"><Link to='/outreach'>
                            <span className="glyphicon glyphicon-globe"></span>
                            <h4>GLOBAL OUTREACH</h4>
                            <p>See what Cup O coffee does in the community</p></Link>
                        </div>
                        <div className="col-sm-2"><Link to='/posts'>
                            <span className="glyphicon glyphicon-thumbs-up"></span>
                            <h4>COMMUNITY</h4>
                            <p>See what the Cup O Coffee community is up to</p></Link>
                        </div>
                    
                        <div className="col-sm-2"><Link to='/sponsors'>
                            <span className="glyphicon glyphicon-briefcase"></span>
                            <h4>SPONSORS</h4>
                            <p>See who we work with to get you the coffee you love</p></Link>
                        </div>
                                    
                    </div>
                </div>

                </div>
            </Router>
        );
    }
}

export default Links;