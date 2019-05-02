import React from 'react';
import moment from 'moment';
import styled, { css } from 'styled-components'

import UserInputForm from '../Functionality/UserInputForm';

const Container = styled.div `
    padding: 20px;
    width: 600px;
    overflow: hidden;
    border: 2px solid #00000033;
    background-color: rgb(252, 255, 255);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-bottom: 10px;
`
const Actions = styled.div`
    margin: 20px 0;
    width: 100%;
    overflow: hidden;
    object-fit: contain;
    font-size: 24px;
    `

const MainImage = styled.img`
margin: 20px 0;
/*max-height: 400px;*/
width: 100%;
overflow: hidden;
object-fit: contain;
`

const AvatarImage = styled.img`
margin-right: 8px;
border: 1px solid black;
width: 24px;
border-radius: 100px;
`

const Avatar = styled.div`
display: flex;
align-items: center;
`
const TimeStamp = styled.div`
font-size: 12px;
color: gray;
object-fit: cover;
`
const UserName = styled.span `
font-size: 12px;
font-weight: 700;

${props => props.large && css`
    font-size: 14px;
  `}
`;
const Likes = styled.div`
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 10px;
`

class Post extends React.Component
{
    liked = false;
    render()
    {
        let c = this.props.data.comments.map((x,i) => <div className="content-comment" key={`post:${this.key}comment:${i}`}><UserName>{x.username}</UserName> {x.text}</div>);
        return(
            <Container>
                <Avatar><AvatarImage id="size-small" src={this.props.data.thumbnailUrl} alt={`${this.props.data.username}-profile`}/><UserName large>{this.props.data.username}</UserName></Avatar>
                <div className="post-content content">
                    <MainImage src={this.props.data.imageUrl} alt="post pic"/>
                    <Actions className="actions" id="noselect"><span  onClick={() =>this.handleLike()}><i className={`${this.liked ? "fas" : "far"} fa-heart floater-container`} data-floatid={this.props.index}></i></span> <i className="far fa-comment" onClick={() => console.log("comment")}></i></Actions>
                    <i className="fas fa-heart like-floater" id="floater" data-floatid={this.props.index} style={{display: "none"}}></i>
                    <Likes id="noselect">{this.props.data.likes > 0 ? `${this.props.data.likes} likes` : ""}</Likes>
                    <div className="content-comments">
                    {c}    
                    </div>
                    <TimeStamp>{moment(this.props.data.timestamp, "LLL").fromNow()}</TimeStamp>
                    <div className="comment-box" id="noselect"><UserInputForm placeholder={"comment..."} submitCb={str => this.handleComment(str)} clearOnSubmit={true} size={500}/><span onClick={() =>console.log("clicked")}>...</span></div>
                </div>
                <div>

                </div>
            </Container>
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