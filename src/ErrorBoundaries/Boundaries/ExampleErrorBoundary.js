import React, { Component } from 'react';
import '../Boundary_styles/ExampleErrorBoundary.css'
import { Link } from 'react-router-dom';




class ExampleErrorBoundary extends Component{
    constructor(){
        super();
        this.state = { 
            error: null,
            errorInfo: null
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }


    render(){
        var path = "/CupOCoffee"

        if(this.state.errorInfo) {
            return(
                <div className="backdrop">
                    <div className="window" id="window">

                        <div className="info">
                            <h2> Something went wrong :(</h2>
                            <div className="details-container">
                                <details  style={{ whiteSpace: "pre-wrap"}}>
                                    <summary> More Information </summary>
                                    {this.state.error && this.state.error.toString()}
                                    <br />
                                    {this.state.errorInfo.componentStack} 
                                    {/* we probably wouldnt want to include the above line on 
                                    an actual site in order to maintain abstraction */}
                                </details>
                            </div>
                            <h4>The page you are currently attempting to access has not loaded properly
                                please select one of the links below to visit a different part of the website 
                                or select details to see what could have caused this issue.</h4>
                                <div className="link">
                                <Link className="navHeader" to='/CupOCoffee/'>HOME</Link>
                                </div>
                                <div className="link">
                                <Link className="navHeader" to={`${path}/outreach`}>OUTREACH</Link>
                                </div>
                                <div className="link">
                                <Link className="navHeader" to={`${path}/posts`}>COMMUNITY</Link>
                                </div>
                                <div className="link">
                                <Link className="navHeader" to={`${path}/sponsors`}>SPONSORS</Link>
                                </div>

                    
                                
                        </div>
                    </div>
                </div>
            );
        }
        return this.props.children;
        
    }
}

export default ExampleErrorBoundary;