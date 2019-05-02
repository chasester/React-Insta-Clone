import React from 'react';
import styled from 'styled-components';

import './Nav.css';
import UserInputForm from '../Functionality/UserInputForm';


const Container = styled.div`
font-family: 'Mr Bedfort', cursive;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
position: fixed;
top: 0;
margin-left: -20px;
margin-top: 0;
padding: 10px 20px;
max-width: 1000px;
background-color: #FFFFFFAA;
`

const Logo = styled.div
`
font-size: 36px;

`

class NavBar extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    render()
    {
        return (
            <Container className="sticky" id="noselect">
                <Logo onClick={()=> console.log("clicked")}><i className="fas fa-cookie-bite"></i> | Food Hub</Logo>
                <UserInputForm placeholder={"\uf002 Search"} changeCb={(str) => this.props.searchCb(str)} clearOnSubmit={false} />
                <div className="links">
                    <i className="far fa-compass"onClick={()=> console.log("clicked")}></i>
                    <i className="far fa-heart" onClick={()=> console.log("clicked")}></i>
                    <i className="far fa-user" onClick={()=> {localStorage.setItem("credentials", ""); localStorage.setItem("username",""); this.props.loginCb()}}></i>
                </div>
            </Container>
        );
    }
}
/*
window.onscroll = function() {moveSticky()};

 var sticky = null;
var stickyoffset = 0;
function getSticky() 
{
  sticky = document.querySelector(".sicky");
  stickyoffset = sticky.offsetTop-1;
}

function moveSticky() {
    if(!sticky) return;
    if (window.pageYOffset >= stickyoffset) {
      sticky.classList.add("sticky")
    } else {
      sticky.classList.remove("sticky");
    }
  }
 */
export default NavBar;