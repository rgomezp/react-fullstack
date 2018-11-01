import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class App extends Component {
  componentDidMount(){
    axios.get('/api/locations').then((res)=>{
      console.log(res.data);
      return res;
    });
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>Welcome to Winglist</h1>
      </div>
    );
  }
}

export default App;
