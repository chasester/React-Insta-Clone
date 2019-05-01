import React from "react";
import UserInputForm from "./../Functionality/UserInputForm";
import oneWayHash from "./OneWayHash";

class Login extends React.Component
{
    constructor(props)
    {
        super(props);
        this.credentials = {password: null, username : null}
        this.userdiv = null;
        this.passdiv = null;
    }

    render()
    {
        
        return(
            <div className="login-container main-content">
            <div className="logo" id="size-large" style={{padding: "10px 0 40px 0"}}><i className="fas fa-cookie-bite"></i> | Food Hub</div>
            {this.props.firsttry ? <h4 style={{color: "red", margin: "0 0 20px 0"}}>Incorrect Password</h4> : ""}
            <UserInputForm name="username" clear={true} changeCb={str => this.submitUsername(str)} submitCb={()=>this.login()} placeholder={"\uf007 username"}/>
            <UserInputForm name="password" clear={true} isPassword={true} changeCb={str => this.submitPassword(str)} submitCb={()=>this.login()} placeholder={"\uf023 password"}/>
            {/* <button onClick={()=>this.login()}>Login</button> */}
            </div>
        );
    }
    submitPassword(str)
    {  
        this.credentials.password = str;
        if(this.passdiv) this.passdiv.style.outline = "0"
    }
    submitUsername(str)
    {
        this.credentials.username = str;
        if(this.userdiv) this.userdiv.style.outline = "0"
    }
    login()
    {
        if(!this.credentials.username){ if(this.userdiv){this.userdiv.focus(); this.userdiv.style.outline = "1px solid #FF0000";} return; } //check if empty
        if(!this.credentials.password){ if(this.passdiv){this.passdiv.focus(); this.passdiv.style.outline = "1px solid #FF0000";} return; }
        //check if data is cleared
        localStorage.setItem('credentials', oneWayHash(this.credentials.username, this.credentials.password));
        localStorage.setItem('username', this.credentials.username);
        this.credentials = {password: null, username : null};
        this.setState();
        this.props.loginCb(true);
    }
    componentDidMount()
    {
        this.userdiv = document.querySelector(".username")
        this.passdiv = document.querySelector(".password")
        if(this.userdiv) this.userdiv.focus();
    }
    componentWillUnmount()
    {
        this.userdiv = null;
        this.passdiv = null;
    }
}

export default Login;