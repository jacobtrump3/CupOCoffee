import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Geocode from "react-geocode";
import '../styles/AroundMe.css'; 



const UserLocation = ({ text }) => (
  <div className="location"> {text}</div>
);

class AroundMe extends Component {
  constructor(props){
    super(props)
      this.state={
        lat: 41.88222529999999,
        lng: -87.62898789999997,
        center:{
          lat: 41.88222529999999,
          lng: -87.62898789999997
        },
        zoom:11
      }
    }
  
  handleSubmit(){
    Geocode.setApiKey("AIzaSyBw4kSonEavFjSP5bi4kv9pqdlOJi--3JM");
    Geocode.enableDebug();
    Geocode.fromAddress(
      document.getElementById("street").value + " " + 
      document.getElementById("city").value + " " + 
      document.getElementById("zipcode").value
    ).then(
      response =>{
        
          this.setState({
            lat: response.results[0].geometry.location.lat, 
            lng: response.results[0].geometry.location.lng,
            center:{
              lat: response.results[0].geometry.location.lat, 
              lng: response.results[0].geometry.location.lng
          }});
          document.getElementById("Enter_Your_Address").innerHTML="Coffee Shops Near You";
        },
      error => {
        alert("YOU ENTERED AN INVALID ADDRESS")
        console.log(document.getElementById("street").value);
        console.error(error);
      }
    )
  }
 
  render() {
    return (
      <div>
        <div className="address">
          <h2 id="Enter_Your_Address">Enter An Address</h2>
            <input type="text" id="street" className="street" placeholder="Street Address"/><br/>
            <input type="text" id="city" className="city" placeholder="City and State"/>
            <input type="text" id="zipcode" className="zip" placeholder="Zipcode" /><br/>
            <button onClick={() => this.handleSubmit()} className="submitBtn">FIND ME SOME COFFEE</button>
          <div>
            <div className="yourLocation" id="yourLocation"></div>
          </div>
        </div>
        <div className="map">
          
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyBw4kSonEavFjSP5bi4kv9pqdlOJi--3JM"}}
            center={this.state.center}
            defaultZoom={this.state.zoom}
          >
            <UserLocation
              lat={this.state.lat}
              lng={this.state.lng}
              text={'YOU'}
            />
          </GoogleMapReact>
        </div>
      </div>
    );  
  }
}

 
export default AroundMe;