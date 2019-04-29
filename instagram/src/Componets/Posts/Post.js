import React from 'react';

class Post extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    render()
    {
        let c = this.props.data.comments.map((x,i) => <div className="content-comment" key={`post:${this.key}comment:${i}`}><strong>{x.username}</strong> {x.text}</div>);
        
        return(
            <div className="post-container">
                <div className="user-avatar"><img className="avatar" id="size-small" src={this.props.data.thumbnailUrl} alt={`${this.props.data.username}-profile`}/>{this.props.data.username}</div>
                <div className="post-content content">
                    <img src={this.props.data.imageUrl} alt="post pic"/>
                    <div className="actions" id="noselect"><i className="far fa-heart" onClick={() => console.log("liked")}></i> <i className="far fa-comment" onClick={() => console.log("comment")}></i></div>
                    <div className="content-comments">
                    {c}    
                    </div>
                    
                    <div className="time-stamp">SomeTimeAgo</div>
                    <div className="comment-box"> </div>
                </div>
                <div>

                </div>
            </div>
        );
    }
}
export default Post