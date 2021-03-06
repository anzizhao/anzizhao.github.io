import React from 'react'
import {connect} from 'react-redux'

import {newGame} from '../actions'

const MainButton = React.createClass({
  render: function() {
    const style= {
      width: 200,
      margin: 'auto',
      padding: 12,
    }

    const buttonStyle= {
      width: 200,
      margin: 'auto',
      padding: 20,
      fontSize: 18
    }

    return (
        <div style={style}>
        <button style={buttonStyle} onClick={this.props.goTo}>{this.props.text}</button>
        </div>
    )
  }
})

const HomePage = React.createClass({
  contextTypes: {
    history: React.PropTypes.object
  },

  goToGameRules: function() {
      this.context.history.pushState(null, '/mastermind/rules')
  },

  goToPlayAGame: function() {
    this.props.dispatch(newGame())
    this.context.history.pushState(null, '/mastermind/play')
  },

  goToReplay: function() {
      this.context.history.pushState(null, '/mastermind/replay')
  },

  render: function() {

    const style= {
      padding: 20,
    }

    return (
        <div className="mainPanel" style={style}>
            <MainButton text="Play a Game" goTo={this.goToPlayAGame} />
            <MainButton text="Game Rules" goTo={this.goToGameRules} />
        </div>
    )
  }
})

            //<MainButton text="Replay Games" goTo={this.goToReplay} />

const HomePageContainer = connect()(HomePage)
export default HomePageContainer

