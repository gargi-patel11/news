// import logo from './logo.svg';
import './App.css';
// import "bootstrap/dist/css/bootstrap.css"
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News/>

      </div>
    )
  }
}


// export default App;
