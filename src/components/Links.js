import React, { Component } from 'react' 
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Welcome  from './welcomePage';
import Posts from './userPosts';
import Outreach from './outreach';
import Sponsors from './sponsors';
import logo from '../images/CUPOCOFFEE_Logo.png';

import App from '../App';


class Links extends Component{
    render(){
        return(
            <Router>
                
                <div className="container-fluid text-center">
                <div classNaem="Header">
            <div className="jumbotron text-center"><Link to='/'>
                <img src={logo} className="App-logo" alt="logo" /></Link>
                <br/><br/> 
                <form className="form-inline">
                    <div className="input-group">
                    <input type="text" className="form-control" size="50" placeholder="Find Your Cup O' Coffee!" required/>
                    <div className="input-group-btn">
                        <button type="button" className="btn btn-danger">GO!</button>
                    </div>
                    </div>
                </form>
                </div>
                </div>
            
                <Switch>
                    <Route exact path='/' component={Welcome} />
                    <Route exact path='/outreach' component={Outreach} />
                    <Route exact path='/posts' component={Posts} />
                    <Route exact path='/sponsors' component={Sponsors} />
                </Switch>
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
                            <span className="glyphicon glyphicon-globe"></span>
                            <h4>SPONSORS</h4>
                            <p>See who we work with to get you the coffee you love</p></Link>
                        </div>
                        <hr />
                    
                    </div>

                </div>
            </Router>
        );
    }
}

export default Links;