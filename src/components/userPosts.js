import React, { Component } from 'react'
import '../styles/userPosts.css';
import {Helmet} from "react-helmet";


class Posts extends Component{
    render(){
        return(
       
        <div className="posts center">
             <Helmet>
                <meta charSet="utf-8" />
                <title>Coffee Connection: information about products | Cups O' Coffee</title>
            </Helmet>
            <div className="post">
                <h2 className="title">Title</h2>
                <h4 className="username">Username</h4>
                <div className="content">Content goes here</div>
            </div>
            <div className="post">
                <h2 className="title">Title</h2>
                <h4 className="username">Username</h4>
                <div className="content">Content goes here</div>
            </div>
            <div className="post">
                <h2 className="title">Title</h2>
                <h4 className="username">Username</h4>
                <div className="content">Content goes here</div>
            </div>
        </div>
        );
    }
}




export default Posts;