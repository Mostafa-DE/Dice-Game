import React, { Component } from 'react'
import './App.css';
// import ButtonClick from './Button';
// import Game from './Game';
// import Rando from './Rando';
// import RandomNum from './randomNum';
import Dice from './diceProject';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Dice />
      </div>
    )
  }
}

export default App;