import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    number: 0,
  }

  generateNumber = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)

    this.setState({number: newRandomNumber})
  }

  render() {
    const {number} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Random Number</h1>
          <p className="text">
            Generate a random number in the range of 0 to 100
          </p>
          <div className="button-container">
            <button
              type="button"
              className="button-1"
              onClick={this.generateNumber}
            >
              Generate
            </button>
          </div>
          <p className="number">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
