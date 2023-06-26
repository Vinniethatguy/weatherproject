import logo from './logo.svg';
import React, {Component, useState, useEffect} from 'react';
import './App.css';
import './Components/lava_lamp.scss'



export default class App extends Component{

  constructor(){
    super()
    this.num = 0
    this.state = {date : new Date()};

  }

  check(){
    return "Soemthign Something"
  }

  handleClick(){
    console.log("hello there " + this.num );
    this.num += 1
    this.time = new Date()
  }


  render(){
  return (
    <section class="sticky">
    <div class="bubbles">
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
      </div>
    </section>
    );
  }
}

// export default App;
