import * as React from "react"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import Navbar from "../navbar/navbar.jsx"
import "./profilepage.css"
import logo from "../Logo.png"
import {
  Jumbotron,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Table
} from "reactstrap"
import ReactSvgPieChart from "react-svg-piechart"
import Pastmatchinfo from "../pastmatchinfo/pastmatchinfo.jsx"

const GET_USER = gql`
  query getUser($email: String!) {
    getUser(email: $email) {
      name
      email
      residentialcollege
      location
      bio
      stats {
        wins
        losts
        totalsetwon
        totalsetlost
        rating
      }
      matches {
        player1 {
          name
        }
        player2 {
          name
        }
        player1set
        player2set
        fixture {
          round
        }
      }
    }
  }
`
const MATCHES = gql`
  query matches($where: MatchWhereInput) {
    matches(where: $where) {
      player1 {
        name
        email
      }
      player2 {
        name
        email
      }
      player1set
      player2set
      fixture {
        round
      }
      season {
        season
      }
    }
  }
`

class ProfilePage extends React.Component {
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
      <div className="profile-page">
        <Navbar
          handleRecipeOnChange={this.handleRecipeOnChange}
          history={this.props.history}
        />

        <Query
          variables={{
            email: this.props.match.params.email
          }}
          query={GET_USER}
        >
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
            const userlocation = data.getUser.location
            const userbio = data.getUser.bio
            if (data.getUser.stats != null) {
              const data1 = [
                {
                  title: "Wins",
                  value: data.getUser.stats[0].wins,

                  color: "#a1d9ce"
                },
                {
                  title: "Losts",
                  value: data.getUser.stats[0].losts,
                  color: "#2f7d6d"
                }
              ]
              const data2 = [
                {
                  title: "Total Set Won",
                  value: data.getUser.stats[0].totalsetwon,

                  color: "#a1d9ce"
                },
                {
                  title: "Total Set Lost",
                  value: data.getUser.stats[0].totalsetlost,
                  color: "#2f7d6d"
                }
              ]
              return (
                <div className="matchescontainer">
                  <div className="profilecontainer">
                    <div className="playerinfo">
                      <div className="usernameprofile">
                        <i class="fa fa-user fa-lg fa-fw" id="icon1" />
                        <h1>{data.getUser.name}</h1>
                      </div>
                      <div className="emailprofile">
                        <i class="fa fa-envelope fa-lg fa-fw" id="icon2" />
                        <h4 className="email">{data.getUser.email}</h4>
                      </div>
                      <div className="residentialcollege">
                        <i class="fas fa-map-marker-alt" id="icon4" />
                        <h4 className="rescollege">
                          {data.getUser.residentialcollege}
                        </h4>
                      </div>
                      <div className="hometown hide1" id="hometown2">
                        <i class="fas fa-map-marked-alt" id="icon3" />
                        <h4 className="location">{data.getUser.location}</h4>
                      </div>

                      <div className="bio hide1" id="userbio1">
                        <h2 className="email">Bio</h2>
                        <div>{data.getUser.bio}</div>
                      </div>
                    </div>

                    <div>
                      <div className="careerstats">
                        <h4>Career Stats</h4>
                        <Table className="statstable">
                          <tr>
                            <th>Wins</th>
                            <th>{data.getUser.stats[0].wins}</th>
                          </tr>
                          <tr>
                            <th>Losts</th>
                            <th>{data.getUser.stats[0].losts}</th>
                          </tr>
                          <tr>
                            <th>Total Sets Won</th>
                            <th>{data.getUser.stats[0].totalsetwon}</th>
                          </tr>
                          <tr>
                            <th>Total Sets Lost</th>
                            <th>{data.getUser.stats[0].totalsetlost}</th>
                          </tr>
                          <tr>
                            <th>Rating</th>
                            <th>{data.getUser.stats[0].rating.toFixed(0)}</th>
                          </tr>
                        </Table>
                        <div className="piechart">
                          <ReactSvgPieChart
                            strokeLinejoin="round"
                            strokeWidth={1}
                            shrinkOnTouchEnd={false}
                            data={data1}
                            expandOnHover={true}
                            expandSize={3}
                            viewBoxSize={30}
                            // onSectorHover={}
                          />
                          <ReactSvgPieChart
                            strokeLinejoin="round"
                            strokeWidth={1}
                            shrinkOnTouchEnd={false}
                            data={data2}
                            expandOnHover={true}
                            expandSize={3}
                            viewBoxSize={30}
                            // onSectorHover={}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="matches">
                    <h1>Past Matches</h1>

                    <Query
                      variables={{
                        where: {
                          OR: [
                            {
                              player1: {
                                email: this.props.match.params.email
                              }
                            },
                            {
                              player2: {
                                email: this.props.match.params.email
                              }
                            }
                          ]
                        }
                      }}
                      query={MATCHES}
                    >
                      {({ loading, error, data, refetch }) => {
                        if (loading) {
                          return "Loading..."
                        }
                        if (error) {
                          console.log(error)
                          return "OOps, somehing blew up."
                        }
                        if (userlocation == null || userlocation == "") {
                          document
                            .getElementById("hometown2")
                            .classList.add("hide1")
                        }
                        if (userbio == null || userbio == "") {
                          document
                            .getElementById("userbio1")
                            .classList.add("hide1")
                        }

                        if (userlocation !== null && userlocation !== "") {
                          document
                            .getElementById("hometown2")
                            .classList.remove("hide1")
                        }
                        if (userbio !== null && userbio !== "") {
                          document
                            .getElementById("userbio1")
                            .classList.remove("hide1")
                        }
                        if (data.matches !== []) {
                          return (
                            <Table>
                              <thead>
                                <tr>
                                  <th>Player1</th>
                                  <th>Player2</th>
                                  <th>Player1 Set</th>
                                  <th>Player2 Set</th>
                                  <th>Round</th>
                                  <th>Season</th>
                                </tr>
                              </thead>
                              {data.matches.map(user => {
                                return (
                                  <Pastmatchinfo
                                    key={this.props.id}
                                    player1={user.player1}
                                    player2={user.player2}
                                    player1set={user.player1set}
                                    player2set={user.player2set}
                                    round={user.fixture.round}
                                    season={user.season.season}
                                  />
                                )
                              })}
                            </Table>
                          )
                        }
                      }}
                    </Query>
                  </div>
                </div>
              )
            } else {
              return (
                <div className="playerinfo">
                  <div className="usernameprofile">
                    <i class="fa fa-user fa-lg fa-fw" id="icon1" />
                    <h1>{data.getUser.name}</h1>
                  </div>
                  <div className="emailprofile">
                    <i class="fa fa-envelope fa-lg fa-fw" id="icon2" />
                    <h4 className="email">{data.getUser.email}</h4>
                  </div>
                </div>
              )
            }
          }}
        </Query>
      </div>
    )
  }
}

export default ProfilePage
