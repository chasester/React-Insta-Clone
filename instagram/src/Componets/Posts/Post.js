import React from 'react';
import moment from 'moment';
import UserInputForm from '../Functionality/UserInputForm';

class Post extends React.Component
{
    render()
    {
        let c = this.props.data.comments.map((x,i) => <div className="content-comment" key={`post:${this.key}comment:${i}`}><strong>{x.username}</strong> {x.text}</div>);
        return(
            <div className="post-container">
                <div className="user-avatar"><img className="avatar" id="size-small" src={this.props.data.thumbnailUrl} alt={`${this.props.data.username}-profile`}/>{this.props.data.username}</div>
                <div className="post-content content">
                    <img src={this.props.data.imageUrl} alt="post pic"/>
                    <div className="actions" id="noselect"><i className="far fa-heart" onClick={() => console.log("liked")}></i> <i className="far fa-comment" onClick={() => console.log("comment")}></i></div>
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
    handleComment(str)
    {
        this.props.commentcb(str,user,this.props.index);
    }
    
}

var user = "Some_Sexy_Person"
export default Post