import React from 'react';
import moment from 'moment';
import UserInputForm from '../Functionality/UserInputForm';

class Post extends React.Component
{
    liked = false;
    render()
    {
        let c = this.props.data.comments.map((x,i) => <div className="content-comment" key={`post:${this.key}comment:${i}`}><strong>{x.username}</strong> {x.text}</div>);
        return(
            <div className="post-container">
                <div className="user-avatar"><img className="avatar" id="size-small" src={this.props.data.thumbnailUrl} alt={`${this.props.data.username}-profile`}/>{this.props.data.username}</div>
                <div className="post-content content">
                    <img src={this.props.data.imageUrl} alt="post pic"/>
                    <div className="actions" id="noselect"><span  onClick={() =>this.handleLike()}><i className={`${this.liked ? "fas" : "far"} fa-heart floater-container`} data-floatid={this.props.index}></i></span> <i className="far fa-comment" onClick={() => console.log("comment")}></i></div>
                    <i className="fas fa-heart like-floater" id="floater" data-floatid={this.props.index} style={{display: "none"}}></i>
                    <div className="likes" id="noselect">{this.props.data.likes > 0 ? `${this.props.data.likes} likes` : ""}</div>
                    <div className="content-comments">
                    {c}    
                    </div>
                    <div className="time-stamp">{moment(this.props.data.timestamp, "LLL").fromNow()}</div>
                    <div className="comment-box" id="noselect"><UserInputForm placeholder={"comment..."} submitCb={str => this.handleComment(str)} clearOnSubmit={true} size={500}/><span onClick={() =>console.log("clicked")}>...</span></div>
                </div>
                <div>

                </div>
            </div>
        );
    }
    handleLike()
    {
        this.liked = !this.liked;
        this.props.likedcb(this.liked, localStorage.getItem("credentials"), this.props.index);
    }
    handleComment(str)
    {
        this.props.commentcb(str,localStorage.getItem("username"),this.props.index);
    }
    
}

export default Post