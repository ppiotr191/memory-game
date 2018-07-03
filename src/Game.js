import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card.js';
import utils from './classes/Utils.js';

class Game extends Component {

  previousPicture = null;

  constructor(props) {
    super(props);

    let pictures = [
      {
        image: 'images/picture01.jpg',
        show: true,
        correct : false,
      },
      {
        image: 'images/picture02.jpg',
        show: true,
        correct : false,
      },
      {
        image: 'images/picture03.jpg',
        show: true,
        correct : false
      },
      {
        image: 'images/picture04.jpg',
        show: true,
        correct : false
      },
      {
        image: 'images/picture05.jpg',
        show: true,
        correct : false
      },
      {
        image: 'images/picture06.jpg',
        show: true,
        correct : false
      }
    ];

    const newArray = pictures.map(a => Object.assign({}, a));
    pictures = pictures.concat(newArray);
    pictures = utils.shuffle(pictures);
    this.state = {
      pictures: pictures,
    }
    this.startGame();
  }
  
  startGame(){

    setTimeout(() => {
      let pictures = this.state.pictures.slice();
      pictures = pictures.map((value) => {
        value.show = false;
        return value;
      })

      this.setState({
        pictures: pictures
      })
    },1000)
  }

  checkPreviousPicture(index){
    let pictures = this.state.pictures;
    if (this.previousPicture === null){
      this.previousPicture = index;
      return;
    }
    if (this.state.pictures[index].image === this.state.pictures[this.previousPicture].image){
        pictures[this.previousPicture].correct = true;
        pictures[index].correct = true;
        this.previousPicture = null;
      return;
    }
    pictures[this.previousPicture].show = false;
    pictures[index].show = false;
    this.previousPicture = null;

    this.setState({
      pictures : pictures
    })
  }

  checkWinner(){
      for (let i = 0; i < this.state.pictures.length; i++){
        if (this.state.pictures[i].correct === false){
            return false;
        }
      }
      return true;
  }

  handleClick(index){ 
    let pictures = this.state.pictures;
    if (pictures[index].correct){
        return;
    } 
    pictures[index].show = (pictures[index].show) ? false : true;
    this.setState({
      pictures : pictures
    })

    setTimeout(() => {
      this.checkPreviousPicture(index);
      if (this.checkWinner()){
          this.props.finishedGameHandler();
      }
    }, 1000);
    
  }

  render() {

    return (
      <div className="Game">
        {this.state.pictures.map((image, index) => {
          return (<Card key={index} show={image.show} image={image.image} onClick={() => { 
            this.handleClick(index) }}></Card>)
        })}
      </div>
    );
  }
}

export default Game;
