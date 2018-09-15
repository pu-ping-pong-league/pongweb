import * as React from "react"
import Navbar from "../navbar/navbar.jsx"
import "./about.css"
import logo from "./Logo.png"

class Home extends React.Component {
  render() {
    return (
      <div id="about" className="container content center">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Navbar history={this.props.history} />
        <div>
          <h1>About the League</h1>
          <h4>
            The Princeton University Ping Pong League is a semester-based ping
            pong league geared towards Princeton University graduates and
            undergraduates interested in playing casual ping pong matches and
            competing for nothing else other than the fun and the potential of
            meeting fellow students through weekly matches. No fee is required
            for participation and students from any residential college can sign
            up for competing.
          </h4>
          <br />
          <br />
        </div>
        <div>
          <h1>Rules and Format:</h1>
          <h4>
            <ul className="rules">
              <li>
                All preliminary round matches are Best of 3, with each set being
                the first to 21. Serves alternate every 5 points.
              </li>
              <li>
                A victory counts for 1 point and a loss counts for 0 points. Tie
                breaker criteria: A) Net sets won by the players, B) Total sets
                won by the players.
              </li>
              <li>
                {" "}
                Leaderboard, matchups and results of each round will be
                announced on the Ping Pong League's Official Website. It is the
                players' responsibility to contact each other to arrange a time
                and place for their match and report the results to the
                administrator Yannis Karakozis via email at ick@princeton.edu.
                Both players should report the result of the match to the
                administrator to ensure that the correct outcome of the match is
                registered.
              </li>
              <li>
                {" "}
                In the case that a match is not played or the players do not
                inform the administrator by email, the result will be registered
                as (0-0) and each player will be penalized with a penalty point.
                A player with 3 penalty points will be kicked out of the league.
              </li>
              <li>
                If a player cannot play, it is considered a forfeit (2-0) in
                favor of their opponent. No penalty points will be accrued in
                the case of a forfeit.
              </li>
              <li>
                Ping pong tables you can play at: Wilcox Commons, Frist 2nd
                floor by the Pool Tables, Dillon Gym Reception Desk, Mathey
                Common Room.
              </li>
            </ul>
          </h4>
        </div>
      </div>
    )
  }
}

export default Home
