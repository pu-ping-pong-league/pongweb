import * as React from "react"
import Navigation from "../navigation/navigation.jsx"
import logo from "../Logo.png"
import Leaderboard from "../leaderboard/leaderboard"

class Leagues extends React.Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Navigation history={this.props.history} />
        <h1>Leaderboard</h1>
        <Leaderboard />
      </div>
    )
  }
}

export default Leagues
