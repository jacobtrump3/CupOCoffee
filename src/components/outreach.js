import React, { Component } from 'react' ;
import '../styles/outreach.css';
import Cups_around_the_world from '../images/cups_around_the_world.jpg'
import for_the_kids from '../images/for_the_kids.jpg'
import city from '../images/city.jpg';
class Outreach extends Component{
    render(){
        return(
        <div className="Outreach">
            <h1><b>GLOBAL OUTREACH</b></h1><br/>
            <div id="myCarousel" class="carousel slide text-center" data-ride="carousel">
                <ol clasNames="carousel-indicators" >
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner" role="listbox">
                    <div className="item active cups">
                        <h2>Cups Around the World</h2>
                        <img src={Cups_around_the_world}/>
                    </div>
                    <div className="item community">
                        <h2>In Our Local Community</h2>
                        <img src={city}/>

                    </div>
                    <div className="item kids">
                        <h2>For The Kids</h2>
                        <img src={for_the_kids}/>

                    </div>
                </div>

                <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
               
        );
    }
}

export default Outreach;