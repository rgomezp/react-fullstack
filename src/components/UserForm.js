import React, { Component } from 'react';
import './App.css';

class UserForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      username  : '',
      password  : ''
    }
  }

  textChange(event, field){
    let text = event.target.value;

    if(field === "username"){
      this.setState({username:text})
    }else{
      this.setState({password: text})
    }
  }

  render() {
    return (
      <form>
        <div className="form-group">
        <label>Username</label>
        <input onChange={(e)=>this.textChange(e, 'username')} value={this.state.username} type="text" className="form-control"/>
        </div>
        <div className="form-group">
        <label>Password</label>
        <input onChange={(e)=>this.textChange(e, 'password')} value={this.state.password} type="password" className="form-control"/>
        </div>
        <input type="submit" className="form-control"/>
      </form>
    );
  }
}

export default UserForm;
