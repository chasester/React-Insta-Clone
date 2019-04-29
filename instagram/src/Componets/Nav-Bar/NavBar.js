import React from 'react';
import './Nav.css';
import SearchBar from '../Functionality/SearchBar';

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
            <div className="nav-container" id="noselect">
                <div className="logo" onClick={()=> console.log("clicked")}><i className="fab fa-instagram"></i> | Instagram</div>
                <SearchBar />
                <div className="links">
                    <i className="far fa-compass"onClick={()=> console.log("clicked")}></i>
                    <i className="far fa-heart" onClick={()=> console.log("clicked")}></i>
                    <i className="far fa-user" onClick={()=> console.log("clicked")}></i>
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
  stickyoffset = sticky.offsetTop;
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