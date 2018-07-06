import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import Starbucks from '../images/Starbucks.png';
import Dunkin from '../images/Dunkin_donuts.png';
import Caribou from '../images/Caribou_coffee.png';
import '../styles/sponsors.css'
class Sponsors extends Component{

    render(){
        return(
        <div className="sponsors">
             <Helmet>
              
                <meta charSet="utf-8" />
                <title>Starbucks, Dunkin Donuts, and more! | Cups O' Coffee</title>
                {/* <meta itemprop="name" content="Starbucks" />
                <meta itemprop="url" content="http://www.starbucks.com/" />
                <meta itemprop="name" content="DunkinDonuts"/>  
                <meta itemprop="url" content="http://www.dunkindonuts.com/"/> */}
                <script type="application/ld+json">   
                    {
                        `{\n 
                            @context: http://schema.org, \n 
                            @type: LocalBusiness,\n
                            image: http://www.googleusercontent.com/static/media/Starbucks.777cdc75.png, \n
                            url: http://www.starbucks.com/ \n
                        }`

                    }
                    {/* <JSONLD>
                        <Generic type="CafeOrCoffeeShop" jsonIdType="CafeOrCoffeeShop" schema={{name:"Starbucks Coffee", image: "http://www.googleusercontent.com/static/media/Starbucks.777cdc75.png"}}/>
                    </JSONLD> */}
                </script>
            </Helmet>
            <div> 
                <div>
                    <h2>With the cooperation of corporate sponsors such as these we are 
                        able to provide our customers with the best service possible </h2>
                </div>
                <div className="row center" itemScope itemType="http://schema.org/CafeOrCoffeeShop">
                    <div  className="col-lg-4 col-md-4 col-sm-4 col-xs-4 starbucks">
                        <a href={"http://starbucks.com"} itemProp="url"> 
                            <img itemProp="logo" src={Starbucks} alt={"Starbucks Logo"}/>
                        </a>
                    </div>
                    <div  className="col-lg-4 col-md-4 col-sm-4 col-xs-4 dunkin">
                        <a href={"http://dunkindonuts.com"}> 
                            <img src={Dunkin} alt={"Dunkin Donuts Logo"}/>
                        </a>
                    </div>
                    <div  className="col-lg-4 col-md-4 col-sm-4 col-xs-4 caribou">
                        <a href={"http://cariboucoffee.com"}> 
                            <img src={Caribou} alt={"Caribou Logo"}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        );
    }
}

export default Sponsors;