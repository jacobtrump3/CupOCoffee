import React, { Component } from 'react'
import '../styles/userPosts.css';
import {Helmet} from "react-helmet";
import { Form, FormGroup, Radio, FormControl, ControlLabel} from 'react-bootstrap';

class PostPopup extends Component{
    constructor(){
        super();
        this.state = {
            postType: " ",
            postContent: " "
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event){
        this.setState({
            postType: event.target.value
        });
        console.log(event.target.value);
    }

    handleSubmit(event){
        this.setState({
            postContent: event.target.value
        });
        console.log(event.target.value);
    }

    render(){
        return(
            <div className="modal-backdrop">
                <div className="post-modal">
                    <h1><b> Cup O' Coffee</b> </h1>
                    <h4> What's this post about: </h4>
                    <div className="postTypeMenu">
                        <Form onSubmit={this.props.closePopup}>
                            <FormGroup>
                                <Radio name = "radioGroup" 
                                value = "random"
                                checked = {this.state.postType === "random"}
                                onChange = {this.handleChange} inline>
                                    Random
                                </Radio>{' '}
                                <Radio name = "radioGroup" 
                                value = "question"
                                checked = {this.state.postType === "question"}
                                onChange = {this.handleChange} inline>
                                    Question
                                </Radio>{' '}
                                <Radio name="radioGroup" 
                                value="review"
                                checked = {this.state.postType === "review"}
                                onChange={this.handleChange} inline>
                                    Review
                                </Radio>
                            </FormGroup>
                            <FormGroup controlId="formControlsTextarea">
                            <FormControl className="textarea" 
                            componentClass="textarea"
                            placeholder="Tell us about it!" 
                            value = {this.state.postContent}
                            onSubmit = {this.handleSubmit}
                            />
                            </FormGroup>
                            <div className="btns">
                                <button type = "button" onClick={this.handleSubmit}>Submit</button>
                                <button onClick={this.props.closePopup}>Cancel</button>
                            </div>
                        </Form>
                    </div>
                    <div className="postType"></div>
                   
                </div>
            </div>
        );
    }
}

class Posts extends Component{
    constructor(){
        super(); 
        this.state = {
            showPopup:false
        };
    }
    togglePopup(){
        this.setState({
            showPopup:!this.state.showPopup
        });
    }

    render(){
        return(
        <div className="posts center">
             <Helmet>
                <meta charSet="utf-8" />
                <title>Coffee Connection: information about products | Cups O' Coffee</title>
            </Helmet>
            <div className="new-post">
                <button className="new-post-button" onClick={this.togglePopup.bind(this)}>New Post</button>
                {this.state.showPopup ? 
                    <PostPopup
                        text='submit'
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
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