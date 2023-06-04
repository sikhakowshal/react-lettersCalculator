import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {lettersCount: 0}

  onChangeTextInput = event => {
    const noOfLetters = event.target.value.length
    this.setState({lettersCount: noOfLetters})
  }

  render() {
    const {lettersCount} = this.state

    return (
      <div className="container">
        <div className="letters-calculator-container">
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="calculator-img"
            />
          </div>
          <div className="responsive-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-container">
              <label htmlFor="searchInput" className="input-label">
                Enter the phrase
              </label>
              <input
                type="text"
                className="text-input"
                id="searchInput"
                onChange={this.onChangeTextInput}
              />
            </div>
            <h1 className="letters-count-indicator-text">
              No of letters: {lettersCount}
            </h1>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
