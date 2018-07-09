import React, { Component } from 'react';

class DefaultEB extends Component{
    constructor(props){
        super(props);
        this.state = {
            errorMessage: '',
            hasError: false 
        }
    }

    componentDidCatch(error,info){
        this.setState({ 
            hasError:true,
            errorMessage:error.errorMessage
        });
    }
    
    render(){
        if(this.state.hasError) {
            return <h1> Something went wrong. </h1>
        }
        return this.props.children;
    }
}

export default DefaultEB;