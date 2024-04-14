// Write your code here

import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onClickBtn = () => {
    this.setState(prevValue => ({isDarkMode: !prevValue.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state

    const modeClassName = isDarkMode ? 'dark-mode' : 'light-mode'

    const btnText = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="bg-container">
        <div className={`container ${modeClassName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.onClickBtn}>
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
