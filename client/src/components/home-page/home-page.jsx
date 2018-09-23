import * as React from "react"
import Leaderboard from "../leaderboard/leaderboard.jsx"
import logo from "./Logo.png"
import Navbar from "../navbar/navbar.jsx"
import "./home-page.css"
import FoodSlide from "../carousel/carousel"
import Countdown from "react-countdown-now"
import Footer from "../footer/footer"
import { Mutation, Query } from "react-apollo"
import gql from "graphql-tag"

const GETCURRENT = gql`
  query {
    getcurrent {
      season  
      round    
      timer
    }
  }
`

class HomePage extends React.Component {
  componentDidMount() {
    if (
      localStorage.getItem("name") == null ||
      localStorage.getItem("name") == ""
    ) {
      document.getElementById("text2").classList.add("hide1")
    }
    if (
      localStorage.getItem("email") == null ||
      localStorage.getItem("email") == ""
    ) {
      document.getElementById("text3").classList.add("hide1")
    }
    if (
      localStorage.getItem("rating") == null ||
      localStorage.getItem("rating") == ""
    ) {
      document.getElementById("text4").classList.add("hide1")
    }
    if (
      localStorage.getItem("name") !== null &&
      localStorage.getItem("name") !== ""
    ) {
      document.getElementById("text2").classList.remove("hide1")
    }
    if (
      localStorage.getItem("email") !== null &&
      localStorage.getItem("email") !== ""
    ) {
      document.getElementById("text3").classList.remove("hide1")
    }
    if (
      localStorage.getItem("rating") !== null &&
      localStorage.getItem("rating") !== ""
    ) {
      document.getElementById("text4").classList.remove("hide1")
    }
  }
  render() {
    return (
      <div>
        <Navbar history={this.props.history} className="navigation" />
        <div className="timer">
          <text>{"Next round ends in"} </text>

          <Query query={GETCURRENT}>
            {({ loading, error, data, refetch }) => {
              if (loading) {
                return "Loading..."
              }
              if (error && error.message === "GraphQL error: Not authorized") {
                return "You must login."
              }
              if (error) {
                return "OOps, somehing blew up."
              }

              if (data.getcurrent.length !== 0) {
                return <Countdown date={data.getcurrent[0].timer} />
              }
            }}
          </Query>
        </div>
        <h1>Welcome to Princeton Ping Pong League</h1>
        <FoodSlide />
        <div className="info">
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
        <Footer />
      </div>
    )
  }
}

export default HomePage
