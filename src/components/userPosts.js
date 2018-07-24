import React, { Component } from 'react'
import '../styles/userPosts.css';
import {Helmet} from "react-helmet";
import { Form, FormGroup, Radio, FormControl, ControlLabel, FieldGroup} from 'react-bootstrap';

class PostPopup extends Component{
    constructor(){
        super();
        this.state = {
            postType: "random",
            postContent: "",
            postTitle: "",
        }
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);        
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleTitleChange(event){
        this.setState({
            postTitle: event.target.value
        });
    }
    handleTypeChange(event){
        this.setState({
            postType: event.target.value
        });
    }
    handleContentChange(event){
        this.setState({
            postContent: event.target.value
        });
    }

    handleSubmit(event){
        console.log(this.state.postTitle);
        console.log(this.state.postType);
        console.log(this.state.postContent);
        var posts = localStorage.getItem("user-posts");
        var key = localStorage.getItem("key");
        if(posts == null){
            key = 0;
            localStorage.setItem("key", key);
            posts = "Key: " +key  + "\n"+ 
            "Title: " + this.state.postTitle + "\n"+
            "Type: " + this.state.postType + "\n"+ 
            "Content: " + this.state.postContent + "\n\n" + posts; 
            localStorage.setItem("user-posts", posts)
        }
        else{
            ++key;
            localStorage.setItem("key", key);
            posts = "Key: " +key  + "\n"+ 
            "Title: " + this.state.postTitle + "\n"+
            "Type: " + this.state.postType + "\n"+ 
            "Content: " + this.state.postContent + "\n\n" + posts;
            localStorage.setItem("user-posts", posts)
        }
        
        
        this.props.closePopup();
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
                                onChange = {this.handleTypeChange} inline>
                                    Random
                                </Radio>{' '}
                                <Radio name = "radioGroup" 
                                value = "question"
                                checked = {this.state.postType === "question"}
                                onChange = {this.handleTypeChange} inline>
                                    Question
                                </Radio>{' '}
                                <Radio name="radioGroup" 
                                value="review"
                                checked = {this.state.postType === "review"}
                                onChange={this.handleTypeChange} inline>
                                    Review
                                </Radio>
                            </FormGroup>
                                <div class="titleLabel"> Title: </div>
                                <input
                                id="postTitle"
                                type="text"
                                label="postTitle"
                                placeholder="My Awesome Post"
                                value = {this.state.postTitle}
                                onChange = {this.handleTitleChange}
                                />
                            <FormGroup controlId="formControlsTextarea">
                            <FormControl className="textarea" style={{ height: 100 }}
                            componentClass="textarea"
                            placeholder="Tell us about it!" 
                            value = {this.state.postContent}
                            onChange = {this.handleContentChange}
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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Post extends Component {
    constructor(){
        super();
        this.state = {
            Title: null,
            Type: null,
            Content: null
        }
    }

    separatePost(key){
        var post
        var posts = localStorage.getItem("user-posts");
        posts.indexOf("post1")
    }
    render(){
        return(
            <div className="post">
                {localStorage.getItem("user-posts")}
            </div>
        );
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Posts extends Component{
    constructor(){
        super(); 
        this.state = {
            showPopup:false,
            newItem: "",
            list: []
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

            <div>
                <Post/>
            </div>
        </div>
        );
    }
}




export default Posts;

