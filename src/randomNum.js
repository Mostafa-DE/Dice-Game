import React, { Component } from 'react'

class RandomNum extends Component {
constructor(props) {
    super(props);
    this.state = {num: 1}; 
    this.handleClicked();
    this.handleClicked = this.handleClicked.bind(this)
}


handleClicked(e) {
    let rand = Math.floor(Math.random() * 10) + 1;
    this.setState({num: rand})
}

    render() {
        return (
            <div>
                <h1>Number is: {this.state.num} </h1>
                {this.state.num === 10 ? <h2>You Win</h2> : ''}
                {this.state.num !== 10 ?
                <button onClick={this.handleClicked}>
                  Random Number
                </button>: null}
            </div>
        )
    }


}

export default RandomNum;