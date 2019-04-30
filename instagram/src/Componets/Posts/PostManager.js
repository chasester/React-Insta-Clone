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
                    this.state.data.map( (x,i) => <Post data={x} key={`post:${i}`} index={i} commentcb={(s,u) => this.handleComment(s,u,i)}/>)
                }
            </div>
        );
    }

    handleComment(str, user, id)
    {
        try
        {
            let arry = this.state.data;
            let len = arry[id].comments.length;
            id= parseInt(id); str.toString(); user.toString();
            arry[id].comments.push({id: len, username: user, text: str});
            this.setState({data : arry});
        }
        catch (err) 
        {
            console.log(err);
        }
    }
}

export default PostManager;