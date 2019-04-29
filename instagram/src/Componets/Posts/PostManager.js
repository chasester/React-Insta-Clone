import React from 'react';
import './Post.css';
import Post from './Post';
import dummyData from '../../dummy-data'

class PostManager extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {data: dummyData};
    }
    
    render()
    {
        return(
            <div className="post-content main-content">
                {
                    this.state.data.map( (x,i) => <Post data={x} key={`post:${i}`} commentcb={(s,u) => this.handleComment(s,u,i)}/>)
                }
            </div>
        );
    }

    handleComment(str, user, id)
    {
        try
        {
            let len = this.state.data[id].comments.length;
            id= parseInt(id); str.toString(); user.toString();
            this.state.data[id].comments.push({id: len, username: user, text: str});
            this.setState(this.state);
        }
        catch (err) 
        {
            console.log(err);
        }
    }
}

export default PostManager;