import React, { Component } from 'react';
import UserForm from '../UserForm';
import '../App.css';

class SignupPage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Signup</h1>
        <UserForm/>
      </div>
    );
  }
}

export default SignupPage;
