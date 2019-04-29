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
            <div className="nav-container">
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

var sticky = null;
function getSticky() 
{
  sticky = document.querySelector(".nav-container")
  console.log(sticky);
}
export default NavBar;