import React from 'react';
import oneWayHash from "./OneWayHash";

const withAuthenticate = PostPage => LoginPage =>
class extends React.Component {
    didPassword = false;
  render() {
    return (<div className="container">{this.authenticate() ? <PostPage loginCb={(v)=>this.update(v)}/> : <LoginPage loginCb={(v)=>this.update(v)} firsttry={this.didPassword}/>}</div>)
  }
  authenticate()
  {
    return localStorage.getItem("credentials") === oneWayHash("chase","isCOOL!");
  }
  update(logout)
  {
    this.didPassword = logout;
    this.setState({});
  }
};

export default withAuthenticate;
