import * as React from "react"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import Leaderboardinfo from "../leaderboardinfo/leaderboardinfo.jsx"
import Navbar from "../navbar/navbar.jsx"
import "./leaderboard.css"
import { Table, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap"
import Matchinfo from "../matchinfo/matchinfo.jsx"
import classnames from "classnames"
import { Tabs, Tab } from "react-bootstrap"

const GET_STATS = gql`
  query statses($where: StatsWhereInput!) {
    statses(orderBy: netwins_DESC, where: $where) {
      player {
        email
        name
        confirmed
        stats {
          wins
          losts
          totalsetwon
          totalsetlost
          rating
        }
      }
    }
  }
`
const GET_MATCHES = gql`
  query matches($where: MatchWhereInput) {
    matches(where: $where) {
      player1 {
        email
        name
      }
      round
      player2 {
        email
        name
      }
      player1set
      player2set
    }
  }
`
const GETCURRENT = gql`
  query {
    getcurrent {
      season
      round
      timer
    }
  }
`

class Leaderboard extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.toggle1 = this.toggle1.bind(this)
    this.state = {
      activeTab: 0,
      activeTab1: 1
    }
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }

  toggle1(tab) {
    if (this.state.activeTab1 !== tab) {
      this.setState({
        activeTab1: tab
      })
    }
  }
  render() {
    return (
      <div>
        <Navbar history={this.props.history} />
        <h1>Leaderboard</h1>

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
            const leaderboard = []
            const leaderboardcontent = []

            if (data.getcurrent.length !== 0) {
              for (let i = 1; i < data.getcurrent[0].round + 1; i++) {
                leaderboard.push(
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.activeTab === i
                      })}
                      onClick={() => {
                        this.toggle(i)
                      }}
                    >
                      Round {i}
                    </NavLink>
                  </NavItem>
                )
                leaderboardcontent.push(
                  <TabPane tabId={i}>
                    <Query
                      variables={{
                        where: {
                          season: { season: 1 },
                          player: {
                            confirmed: true,
                            deactivated: false
                          },
                          round: i
                        }
                      }}
                      query={GET_STATS}
                    >
                      {({ loading, error, data, refetch }) => {
                        if (loading) {
                          return "Loading..."
                        }
                        if (error) {
                          console.log(error)
                          return "OOps, somehing blew up."
                        }
                        console.log("stat")
                        console.log(data.statses)
                        return (
                          <Table>
                            <thead>
                              <tr>
                                <th>position</th>
                                <th>name</th>
                                <th>email</th>
                                <th>rating</th>
                                <th>net wins</th>
                                <th>matches won</th>
                                <th>matches lost</th>
                                <th>net set</th>
                                <th>set won</th>
                                <th>set lost</th>
                              </tr>
                            </thead>
                            {data.statses.map((user, index) => {
                              return (
                                <Leaderboardinfo
                                  integer={i}
                                  position={index + 1}
                                  key={this.props.id}
                                  email={user.player.email}
                                  name={user.player.name}
                                  stats={user.player.stats}
                                />
                              )
                            })}
                          </Table>
                        )
                      }}
                    </Query>
                  </TabPane>
                )
              }
              console.log(leaderboard)
              return (
                <div>
                  <Nav tabs>{leaderboard} </Nav>
                  <TabContent activeTab={this.state.activeTab}>
                    {leaderboardcontent}
                  </TabContent>
                </div>
              )
            }
          }}
        </Query>

        <h1>Matches</h1>
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
            const leaderboard1 = []
            const leaderboardcontent1 = []
            if (data.getcurrent.length !== 0) {
              for (let i = 1; i < data.getcurrent[0].round + 1; i++) {
                leaderboard1.push(
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.activeTab1 === i
                      })}
                      onClick={() => {
                        this.toggle1(i)
                      }}
                    >
                      Round {i}
                    </NavLink>
                  </NavItem>
                )
                leaderboardcontent1.push(
                  <TabPane tabId={i}>
                    <Query
                      variables={{
                        where: { season: { season: 1 }, round: i }
                      }}
                      query={GET_MATCHES}
                    >
                      {({ loading, error, data, refetch }) => {
                        if (loading) {
                          return "Loading..."
                        }
                        if (error) {
                          console.log(error)
                          return "OOps, somehing blew up."
                        }
                        return (
                          <Table>
                            <thead>
                              <tr>
                                <th>Player1</th>
                                <th>Player2</th>
                                <th>Player1 Set</th>
                                <th>Player2 Set</th>
                              </tr>
                            </thead>
                            {data.matches.map(match => {
                              return (
                                <Matchinfo
                                  key={this.props.id}
                                  player1={match.player1}
                                  player2={match.player2}
                                  Player1Set={match.player1set}
                                  Player2Set={match.player2set}
                                />
                              )
                            })}
                          </Table>
                        )
                      }}
                    </Query>
                  </TabPane>
                )
              }
              return (
                <div>
                  <Nav tabs>{leaderboard1} </Nav>
                  <TabContent activeTab={this.state.activeTab1}>
                    {leaderboardcontent1}
                  </TabContent>
                </div>
              )
            }
          }}
        </Query>
      </div>
    )
  }
}

export default Leaderboard
