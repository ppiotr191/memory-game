import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false,
      winner: false
    }
    this.startGameOnclick = this.startGameOnclick.bind(this);
  }

  startGameOnclick() {
    this.setState({
      gameStarted: true,
      winner: false
    });
  }

  finishedGameHandler() {
    this.setState({
      gameStarted: false,
      winner: true
    });
  }

  render() {

    if (this.state.gameStarted) {
      return (
        <div className="App">
          <Game finishedGameHandler = {() => {this.finishedGameHandler()}} />
        </div>
      );
    }
    return (
      <div className="App">
        <div className="button-cointainer">
          {
            this.state.winner && <h1>Winner!</h1>
          }
          <button onClick={this.startGameOnclick} className="btn btn-success btn-large">Start Game</button>

        </div>
      </div>
    );

  }
}

export default App;
