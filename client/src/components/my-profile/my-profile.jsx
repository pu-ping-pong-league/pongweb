import React from "react"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import { Mutation } from "react-apollo"
import Navbar from "../navbar/navbar.jsx"
import "./my-profile.css"
import logo from "../Logo.png"
import {
  Jumbotron,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Table
} from "reactstrap"
import ReactSvgPieChart from "react-svg-piechart"
import classnames from "classnames"
import Pastmatchinfo from "../pastmatchinfo/pastmatchinfo.jsx"
const GET_MY_PROFILE = gql`
  query {
    me {
      name
      email
      stats {
        wins
        losts
        totalsetwon
        totalsetlost
        rating
      }
      deactivated
      location
      bio
      residentialcollege
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
      season {
        season
        round
      }
    }
  }
`

const SUMBIT_MATCH = gql`
  mutation submitmatch(
    $player1: String!
    $player2: String!
    $player1set: Int!
    $player2set: Int!
    $round: Int!
    $season: Int!
  ) {
    submitmatch(
      player1: $player1
      player2: $player2
      player1set: $player1set
      player2set: $player2set
      round: $round
      season: $season
    ) {
      id
      player1 {
        name
        email
        stats {
          wins
          totalsetwon
          losts
          totalsetlost
          rating
          netwins
        }
      }
      player1set
      player2set
      player2 {
        name
        email
        stats {
          wins
          totalsetwon
          losts
          rating
          totalsetlost
        }
      }
    }
  }
`
const UPDATE_INFO = gql`
  mutation updateinfo($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
    updateinfo(data: $data, where: $where) {
      id
      residentialcollege
      location
      bio
      name
      email
      stats {
        wins
        totalsetwon
        losts
        totalsetlost
      }
    }
  }
`
const DEACTIVATE = gql`
  mutation deactivate($email: String!, $deactivated: Boolean!) {
    deactivate(email: $email, deactivated: $deactivated) {
      name
      email
    }
  }
`

class MyProfile extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      activeTab: "1",
      player1: null,
      player2: null,
      player1set: null,
      player2set: null,
      round: null,
      season: 1,
      location: null,
      bio: null
    }
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }
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
        <span id="address">
          <Navbar
            handleRecipeOnChange={this.handleRecipeOnChange}
            history={this.props.history}
          />

          <Query query={GET_MY_PROFILE}>
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
              if (data.me.stats !== null) {
                localStorage.setItem(
                  "rating",
                  data.me.stats[0].rating.toFixed(0)
                )
                const data1 = [
                  {
                    title: "Wins",
                    value: data.me.stats[0].wins,

                    color: "#a1d9ce"
                  },
                  {
                    title: "Losts",
                    value: data.me.stats[0].losts,
                    color: "#2f7d6d"
                  }
                ]
                const data2 = [
                  {
                    title: "Total Set Won",
                    value: data.me.stats[0].totalsetwon,

                    color: "#a1d9ce"
                  },
                  {
                    title: "Total Set Lost",
                    value: data.me.stats[0].totalsetlost,
                    color: "#2f7d6d"
                  }
                ]

                return (
                  <div className="matchescontainer">
                    <div className="profilecontainer">
                      <div className="playerinfo">
                        <Nav tabs>
                          <NavItem>
                            <NavLink
                              className={classnames({
                                active: this.state.activeTab === "1"
                              })}
                              onClick={() => {
                                this.toggle("1")
                              }}
                            >
                              Personal Info
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={classnames({
                                active: this.state.activeTab === "2"
                              })}
                              onClick={() => {
                                this.toggle("2")
                              }}
                            >
                              Edit Information
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={classnames({
                                active: this.state.activeTab === "3"
                              })}
                              onClick={() => {
                                this.toggle("3")
                              }}
                            >
                              Submit Result
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={classnames({
                                active: this.state.activeTab === "4"
                              })}
                              onClick={() => {
                                this.toggle("4")
                              }}
                            >
                              Deactivate Account
                            </NavLink>
                          </NavItem>
                        </Nav>
                        <TabContent
                          activeTab={this.state.activeTab}
                          ref="Progress1"
                        >
                          <TabPane tabId="1">
                            <div className="usernameprofile">
                              <h1>{data.me.name}</h1>
                            </div>
                            <div className="emailprofile">
                              <i
                                class="fa fa-envelope fa-lg fa-fw"
                                id="icon2"
                              />
                              <h4 className="email">{data.me.email}</h4>
                            </div>
                            <div className="residentialcollege">
                              <i class="fas fa-map-marker-alt" id="icon4" />
                              <h4 className="rescollege">
                                {data.me.residentialcollege}
                              </h4>
                            </div>
                            <div className="hometown hide1" id="hometown1">
                              <i class="fas fa-map-marked-alt" id="icon3" />
                              <h4 className="location">{data.me.location}</h4>
                            </div>

                            <div className="bio hide1" id="userbio">
                              <h2 className="email">Bio</h2>
                              <div>{data.me.bio}</div>
                            </div>
                          </TabPane>
                          <TabPane tabId="2">
                            <Mutation mutation={UPDATE_INFO}>
                              {updateinfo => {
                                return (
                                  <div>
                                    <Form
                                      horizontal
                                      onSubmit={async e => {
                                        console.log("player1email")
                                        e.preventDefault()
                                        try {
                                          const { data } = await updateinfo({
                                            variables: {
                                              data: {
                                                location: this.state.location,
                                                bio: this.state.bio
                                              },
                                              where: {
                                                email: localStorage.getItem(
                                                  "email"
                                                )
                                              }
                                            }
                                          })
                                          localStorage.setItem(
                                            "location",
                                            data.updateinfo.location
                                          )
                                          localStorage.setItem(
                                            "bio",
                                            data.updateinfo.bio
                                          )
                                          this.props.history.push("/myprofile")
                                          location.reload()
                                        } catch (error) {}
                                      }}
                                    >
                                      <FormGroup row>
                                        <Col className="label" sm={2}>
                                          Full Name
                                        </Col>
                                        <Col sm={10}>
                                          <Input
                                            disabled
                                            placeholder={localStorage.getItem(
                                              "name"
                                            )}
                                            id="exampleSelect"
                                          />
                                        </Col>
                                      </FormGroup>
                                      <FormGroup row>
                                        <Col className="label" sm={2}>
                                          Email
                                        </Col>
                                        <Col sm={10}>
                                          <Input
                                            disabled
                                            placeholder={localStorage.getItem(
                                              "email"
                                            )}
                                            id="exampleSelect1"
                                          />
                                        </Col>
                                      </FormGroup>
                                      <FormGroup row>
                                        <Col className="label" sm={2}>
                                          Residential College
                                        </Col>
                                        <Col sm={10}>
                                          <Input
                                            disabled
                                            placeholder={localStorage.getItem(
                                              "residentialcollege"
                                            )}
                                            id="exampleSelect2"
                                          />
                                        </Col>
                                      </FormGroup>
                                      <FormGroup row>
                                        <Col className="label" sm={2}>
                                          Hometown
                                        </Col>
                                        <Col sm={10}>
                                          <Input
                                            placeholder="Hometown"
                                            id="exampleSelect3"
                                            onChange={e =>
                                              this.setState({
                                                location: e.target.value
                                              })
                                            }
                                          />
                                        </Col>
                                      </FormGroup>
                                      <FormGroup row>
                                        <Col className="label" sm={2}>
                                          Bio
                                        </Col>
                                        <Col sm={10}>
                                          <Input
                                            placeholder="Bio"
                                            id="exampleSelect4"
                                            onChange={e =>
                                              this.setState({
                                                bio: e.target.value
                                              })
                                            }
                                          />
                                        </Col>
                                      </FormGroup>
                                      <button type="submit">Submit</button>
                                    </Form>
                                  </div>
                                )
                              }}
                            </Mutation>
                          </TabPane>
                          <TabPane tabId="3">
                            <Query query={GETCURRENT}>
                              {({ loading, error, data, refetch }) => {
                                if (loading) {
                                  return "Loading..."
                                }
                                if (
                                  error &&
                                  error.message ===
                                    "GraphQL error: Not authorized"
                                ) {
                                  return "You must login."
                                }
                                if (error) {
                                  return "OOps, somehing blew up."
                                }
                                console.log(data.getcurrent)
                                const currentround = data.getcurrent[0].round
                                const currentseason = data.getcurrent[0].season
                                if (data.getcurrent.length !== 0) {
                                  return (
                                    <Query
                                      variables={{
                                        where: {
                                          OR: [
                                            {
                                              player1: {
                                                email: localStorage.getItem(
                                                  "email"
                                                )
                                              },

                                              round: currentround
                                            },
                                            {
                                              player2: {
                                                email: localStorage.getItem(
                                                  "email"
                                                )
                                              },

                                              round: currentround
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
                                        console.log(data.matches)
                                        if (
                                          localStorage.getItem("location") ==
                                            "null" ||
                                          localStorage.getItem("location") ==
                                            null
                                        ) {
                                          document
                                            .getElementById("hometown1")
                                            .classList.add("hide1")
                                        }
                                        if (
                                          localStorage.getItem("bio") ==
                                            "null" ||
                                          localStorage.getItem("bio") == null
                                        ) {
                                          document
                                            .getElementById("userbio")
                                            .classList.add("hide1")
                                        }

                                        if (
                                          localStorage.getItem("location") !==
                                            null &&
                                          localStorage.getItem("location") !==
                                            "null"
                                        ) {
                                          document
                                            .getElementById("hometown1")
                                            .classList.remove("hide1")
                                        }
                                        if (
                                          localStorage.getItem("bio") !==
                                            null &&
                                          localStorage.getItem("bio") !== "null"
                                        ) {
                                          document
                                            .getElementById("userbio")
                                            .classList.remove("hide1")
                                        }
                                        if (data.matches.length == 0) {
                                          return (
                                            <div>
                                              {" "}
                                              Round hasn't started yet{" "}
                                            </div>
                                          )
                                        } else {
                                          const player1email =
                                            data.matches[0].player1.email
                                          const player2email =
                                            data.matches[0].player2.email
                                          if (
                                            data.matches[0].player1set == null
                                          ) {
                                            return (
                                              <Mutation mutation={SUMBIT_MATCH}>
                                                {submitmatch => {
                                                  return (
                                                    <div>
                                                      <Form
                                                        className="login-form"
                                                        onSubmit={async e => {
                                                          console.log(
                                                            "player1email"
                                                          )
                                                          e.preventDefault()
                                                          try {
                                                            const {
                                                              data
                                                            } = await submitmatch(
                                                              {
                                                                variables: {
                                                                  player1set: this
                                                                    .state
                                                                    .player1set,
                                                                  player2set: this
                                                                    .state
                                                                    .player2set,
                                                                  round: currentround,
                                                                  season: currentseason,
                                                                  player1: player1email,
                                                                  player2: player2email
                                                                }
                                                              }
                                                            )
                                                            this.props.history.push(
                                                              "/myprofile"
                                                            )
                                                            location.reload()
                                                          } catch (error) {}
                                                        }}
                                                      >
                                                        <FormGroup>
                                                          <Label for="exampleSelect">
                                                            {
                                                              data.matches[0]
                                                                .player1.name
                                                            }
                                                            {"'s "}
                                                            set score
                                                          </Label>
                                                          <Input
                                                            type="select"
                                                            name="select"
                                                            id="exampleSelect"
                                                            onChange={e =>
                                                              this.setState({
                                                                player1set:
                                                                  e.target.value
                                                              })
                                                            }
                                                          >
                                                            <option />
                                                            <option>0</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                          </Input>
                                                        </FormGroup>
                                                        <FormGroup>
                                                          <Label for="exampleSelect">
                                                            {
                                                              data.matches[0]
                                                                .player2.name
                                                            }
                                                            {"'s "}
                                                            set score
                                                          </Label>
                                                          <Input
                                                            type="select"
                                                            name="select"
                                                            id="exampleSelect1"
                                                            onChange={e =>
                                                              this.setState({
                                                                player2set:
                                                                  e.target.value
                                                              })
                                                            }
                                                          >
                                                            <option />
                                                            <option>0</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                          </Input>
                                                        </FormGroup>
                                                        <button type="submit">
                                                          Submit
                                                        </button>
                                                      </Form>
                                                    </div>
                                                  )
                                                }}
                                              </Mutation>
                                            )
                                          } else {
                                            return (
                                              <h4>
                                                The result is already submitted
                                              </h4>
                                            )
                                          }
                                        }
                                      }}
                                    </Query>
                                  )
                                } else {
                                  return <div> Round hasn't started yet </div>
                                }
                              }}
                            </Query>
                          </TabPane>
                          <TabPane tabId="4">
                            <div className="usernameprofile">
                              {(() => {
                                if (data.me.deactivated) {
                                  return (
                                    <div>
                                      <h1>
                                        Your account is currently deactivated
                                      </h1>
                                      <Mutation mutation={DEACTIVATE}>
                                        {deactivate => {
                                          return (
                                            <div>
                                              <Form
                                                onSubmit={async e => {
                                                  e.preventDefault()
                                                  try {
                                                    const {
                                                      data
                                                    } = await deactivate({
                                                      variables: {
                                                        email: localStorage.getItem(
                                                          "email"
                                                        ),
                                                        deactivated: false
                                                      }
                                                    })
                                                    this.props.history.push(
                                                      "/myprofile"
                                                    )
                                                    location.reload()
                                                  } catch (error) {}
                                                }}
                                              >
                                                <button type="submit">
                                                  Activate
                                                </button>
                                              </Form>
                                            </div>
                                          )
                                        }}
                                      </Mutation>
                                    </div>
                                  )
                                } else {
                                  return (
                                    <div>
                                      <h1>
                                        Are you sure you want to deactivate your
                                        account?
                                      </h1>

                                      <Mutation mutation={DEACTIVATE}>
                                        {deactivate => {
                                          return (
                                            <div>
                                              <Form
                                                onSubmit={async e => {
                                                  console.log("player1email")
                                                  e.preventDefault()
                                                  try {
                                                    const {
                                                      data
                                                    } = await deactivate({
                                                      variables: {
                                                        email: localStorage.getItem(
                                                          "email"
                                                        ),
                                                        deactivated: true
                                                      }
                                                    })
                                                    this.props.history.push(
                                                      "/myprofile"
                                                    )
                                                    location.reload()
                                                  } catch (error) {
                                                    console.log(error)
                                                  }
                                                }}
                                              >
                                                <button type="submit">
                                                  Deactivate
                                                </button>
                                              </Form>
                                            </div>
                                          )
                                        }}
                                      </Mutation>
                                    </div>
                                  )
                                }
                              })()}
                            </div>
                          </TabPane>
                        </TabContent>
                      </div>
                      <div>
                        <div className="careerstats">
                          <h4>Career Stats</h4>
                          <Table className="statstable">
                            <tr>
                              <th>Wins</th>
                              <th>{data.me.stats[0].wins}</th>
                            </tr>
                            <tr>
                              <th>Losts</th>
                              <th>{data.me.stats[0].losts}</th>
                            </tr>
                            <tr>
                              <th>Total Sets Won</th>
                              <th>{data.me.stats[0].totalsetwon}</th>
                            </tr>
                            <tr>
                              <th>Total Sets Lost</th>
                              <th>{data.me.stats[0].totalsetlost}</th>
                            </tr>
                            <tr>
                              <th>Rating</th>
                              <th>{data.me.stats[0].rating.toFixed(0)}</th>
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
                                  email: localStorage.getItem("email")
                                }
                              },
                              {
                                player2: {
                                  email: localStorage.getItem("email")
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
                                      round={user.season.round}
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
                      <h1>{data.me.name}</h1>
                    </div>
                    <div className="emailprofile">
                      <i class="fa fa-envelope fa-lg fa-fw" id="icon2" />
                      <h4 className="email">{data.me.email}</h4>
                    </div>
                    <h4>The season hasn't started yet</h4>
                  </div>
                )
              }
            }}
          </Query>
        </span>
      </div>
    )
  }
}

export default MyProfile
