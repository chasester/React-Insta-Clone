import React from 'react';
import './Nav.css';
import UserInputForm from '../Functionality/UserInputForm';

class NavBar extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    componentDidMount()
    {
        getSticky();
    }
    componentDidUpdate()
    {
        getSticky();
    }
    render()
    {
        return (
            <div className="nav-container sticky" id="noselect">
                <div className="logo" onClick={()=> console.log("clicked")}><i className="fas fa-cookie-bite"></i> | Food Hub</div>
                <UserInputForm placeholder={"\uf002 Search"} changeCb={(str) => this.props.searchCb(str)} clearOnSubmit={false} />
                <div className="links">
                    <i className="far fa-compass"onClick={()=> console.log("clicked")}></i>
                    <i className="far fa-heart" onClick={()=> console.log("clicked")}></i>
                    <i className="far fa-user" onClick={()=> {localStorage.setItem("credentials", ""); localStorage.setItem("username",""); this.props.loginCb()}}></i>
                </div>
            </div>
        );
    }
}

window.onscroll = function() {moveSticky()};

var sticky = null;
var stickyoffset = 0;
function getSticky() 
{
  sticky = document.querySelector(".nav-container");
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

export default NavBar;