import React, { Component } from 'react';
import UserForm from '../UserForm';
import '../App.css';

class LoginPage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Login</h1>
        <UserForm/>
      </div>
    );
  }
}

export default LoginPage;
