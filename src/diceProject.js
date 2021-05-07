import React, { Component } from 'react'
import './diceProject.css'
class Dice extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            dice1: 'five',
            dice2: 'one',
            isRolling: false,
            counter: 0
        }
        this.randDice = this.randDice.bind(this);
    }


    randDice () {
    const numArray = ['one', 'two', 'three', 'four', 'five', 'six']
    let rand1 = Math.floor(Math.random() * numArray.length);
    let rand2 = Math.floor(Math.random() * numArray.length);
    let randNum1 = numArray[rand1];
    let randNum2 = numArray[rand2];
    let rollingRnad = Math.floor(Math.random() * 100/2) * 2 ;
        // if(rollingRnad % 2 === 0){
        //     this.setState({counter: rollingRnad})
        // }else {
        //     this.setState({counter: rollingRnad + 1})
        // }

    this.setState({dice1: randNum1 , dice2: randNum2, isRolling: true, counter: rollingRnad });  

// After 500 millisecond Go Back To (isRolling: false)
        setTimeout( () => {
            this.setState({isRolling:false});
        },1000)
    }

    render() {
        return (
            
            <div>
                <h1>Try Your Luck 🙂 </h1>
                <div className="dice-style">
                   {/* <i className={`fas fa-dice-${this.state.dice1} ${this.state.isRolling ? 'animation-Rolling1' : ''}`}></i>
                   <i className={`fas fa-dice-${this.state.dice2} ${this.state.isRolling ? 'animation-Rolling2' : ''} `}></i><br/> */}
                   <i className={`fas fa-dice-${this.state.dice1} ${this.state.isRolling && this.state.counter ? 'animation-RollingAll' : 'animation-Rolling1'}`}></i>
                   <i className={`fas fa-dice-${this.state.dice2} ${this.state.isRolling && this.state.counter ? 'animation-RollingAll' : 'animation-Rolling2'} `}></i><br/>

                   <button onClick={this.randDice} disabled={this.state.isRolling}>
                    {this.state.isRolling ? 'Rolling...' : 'Throw The Dice'}
                   </button>
                </div>

            </div>
        )
    }
}

export default Dice;