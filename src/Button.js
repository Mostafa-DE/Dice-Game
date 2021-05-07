import React, { Component } from 'react'



class ButtonClick extends Component {
constructor(props){
    super(props);
    this.state = {clicked: false};
    this.handleClicked = this.handleClicked.bind(this);
}

handleClicked(e) {
    this.setState({clicked: true});
}

render(){
    return (
        <div>
            <h1> {this.state.clicked ? 'Clicked :) ' : 'Not Clicked :('} </h1>
            <button onClick={this.handleClicked}>Click Me!!</button>
        </div>
    )
}

}

export default ButtonClick;