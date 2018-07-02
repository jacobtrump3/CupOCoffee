import React, { Component } from 'react';
import Starbucks from '../images/Starbucks.png';
import Dunkin from '../images/Dunkin_donuts.png';
import Caribou from '../images/Caribou_coffee.png';
import '../styles/sponsors.css'
class Sponsors extends Component{
    render(){
        return(
        <div className="Posts">
            <div className="row center">
                <div className= "col-sm-1"></div>
                <div  className="col-sm-3 starbucks">
                    <a href={"http://starbucks.com"}> 
                        <img src={Starbucks}/>
                    </a>
                </div>
                <div  className="col-sm-3 dunkin">
                    <a href={"http://dunkindonuts.com"}> 
                        <img src={Dunkin}/>
                    </a>
                </div>
                <div  className="col-sm-3 dunkin">
                    <a href={"http://cariboucoffee.com"}> 
                        <img src={Caribou}/>
                    </a>
                </div>
            </div>
        </div>
        
        );
    }
}

export default Sponsors;