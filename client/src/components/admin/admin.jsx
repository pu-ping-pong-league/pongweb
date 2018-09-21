import * as React from "react"
import logo from "./Logo.png"
import Navbar from "../navbar/navbar.jsx"
import "./admin.css"
import { Mutation, Query } from "react-apollo"
import gql from "graphql-tag"
import Matchinfo from "../matchinfo/matchinfo.jsx"
import { Col, Form, FormGroup, Input, Table } from "reactstrap"

const UPDATECURRENT = gql`
  mutation updatecurrent($round: Int!, $season: Int!, $timer: String!) {
    updatecurrent(round: $round, season: $season, timer: $timer) {
      season
      round
      timer
    }
  }
`
const CREATECURRENT = gql`
  mutation createcurrent($round: Int!, $season: Int!, $timer: String!) {
    createcurrent(round: $round, season: $season, timer: $timer) {
      season
      round
      timer
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
const UNPLAYEDMATCHES = gql`
  query getunplayedmatches($season: Int!, $round: Int!) {
    getunplayedmatches(season: $season, round: $round) {
      player1 {
        email
        name
      }
      player2 {
        email
        name
      }
      player1set
      player2set
    }
  }
`
const SETNULLSCORETOZERO = gql`
  mutation setnullscoretozero($round: Int!, $season: Int!) {
    setnullscoretozero(round: $round, season: $season) {
      season {
        season
        round
      }
      player1 {
        stats {
          wins
          losts
          totalsetwon
          totalsetlost
          rating
          netwins
        }
        email
        name
      }
      player2 {
        stats {
          wins
          losts
          totalsetwon
          totalsetlost
          rating
          netwins
        }
        email
        name
      }
      player1set
      player2set
      id
    }
  }
`

class AdminPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: "1",
      round: null,
      season: null,
      timer: null,
      date: null,
      year: null,
      month: null,
      hour: 0,
      error: null
    }
  }
  render() {
    return (
      <div className="bg">
        <Navbar history={this.props.history} />
        <h1>Welcome Admin</h1>
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
            const season1 = data.getcurrent[0].season
            const round1 = data.getcurrent[0].round
            const timer1 = data.getcurrent[0].timer
            const unplayedmatches = []

            if (data.getcurrent.length !== 0) {
              return (
                <Query
                  query={UNPLAYEDMATCHES}
                  variables={{
                    season: season1,
                    round: round1
                  }}
                >
                  {({ loading, error, data, refetch }) => {
                    if (loading) {
                      return "Loading..."
                    }
                    if (
                      error &&
                      error.message === "GraphQL error: Not authorized"
                    ) {
                      return "You must login."
                    }
                    if (error) {
                      return "Shit"
                    }
                    unplayedmatches.push(
                      <Table>
                        <thead>
                          <tr>
                            <th>Player1</th>
                            <th>Player2</th>
                            <th>Player1 Set</th>
                            <th>Player2 Set</th>
                          </tr>
                        </thead>
                        {data.getunplayedmatches.map(match => {
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

                    return (
                      <div>
                        <h1> Unplayed Matches This Round </h1>
                        {unplayedmatches}
                        {(() => {
                          console.log(unplayedmatches.length)
                          if (unplayedmatches.length != 0)
                            return (
                              <Mutation mutation={SETNULLSCORETOZERO}>
                                {setnullscoretozero => {
                                  return (
                                    <Form
                                      horizontal
                                      onSubmit={async e => {
                                        e.preventDefault()

                                        try {
                                          const {
                                            data
                                          } = await setnullscoretozero({
                                              variables: {
                                                season: this.state.season,
                                                round: this.state.round
                                              }
                                            })
                                          this.props.history.push("/admin")
                                          location.reload()
                                        } catch (error) {
                                          this.setState({
                                            error: "Oops! Something went wrong."
                                          })
                                        }
                                      }}
                                    >
                                      {" "}
                                      <button type="submit">
                                        Set Null Score to Zero
                                      </button>
                                    </Form>
                                  )
                                }}
                              </Mutation>
                            )
                        })()}
                        <h1> Current Round </h1>
                        <Table className="statstable">
                          <tr>
                            <th>Current Round</th>
                            <th>Current Season</th>
                            <th>Current Round Ends</th>
                          </tr>
                          <tr>
                            <th>{season1}</th>
                            <th>{round1}</th>
                            <th>{timer1}</th>
                          </tr>
                        </Table>

                        <Mutation mutation={UPDATECURRENT}>
                          {updatecurrent => {
                            return (
                              <div>
                                <h1>Update Current Round</h1>
                                <Form
                                  horizontal
                                  onSubmit={async e => {
                                    e.preventDefault()

                                    try {
                                      const { data } = await updatecurrent({
                                        variables: {
                                          season: this.state.season,
                                          round: this.state.round,
                                          timer: this.state.timer
                                        }
                                      })
                                      console.log(this.state.timer)
                                      this.props.history.push("/admin")
                                      location.reload()
                                    } catch (error) {
                                      this.setState({
                                        error: "Oops! Something went wrong."
                                      })
                                    }
                                  }}
                                >
                                  <FormGroup row>
                                    <Col className="label" sm={2}>
                                      Round
                                    </Col>
                                    <Col sm={10}>
                                      <Input
                                        placeholder="round"
                                        type="number"
                                        id="exampleSelect11"
                                        onChange={e =>
                                          this.setState({
                                            round: e.target.value
                                          })
                                        }
                                      />
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Col className="label" sm={2}>
                                      Season
                                    </Col>
                                    <Col sm={10}>
                                      <Input
                                        placeholder="season"
                                        id="exampleSelect16"
                                        type="number"
                                        onChange={e =>
                                          this.setState({
                                            season: e.target.value
                                          })
                                        }
                                      />
                                    </Col>
                                  </FormGroup>
                                  <FormGroup row>
                                    <Col className="label" sm={2}>
                                      When does the next round end?
                                    </Col>
                                    <Col sm={10}>
                                      <div className="timerinput">
                                        <div>Year:</div>
                                        <Input
                                          type="select"
                                          name="select"
                                          placeholder="Bio"
                                          className="timerinput122"
                                          id="exampleSelect21"
                                          onChange={e =>
                                            this.setState({
                                              year: e.target.value
                                            })
                                          }
                                        >
                                          <option>N/A</option>
                                          <option>2018</option>
                                          <option>2019</option>
                                          <option>2020</option>
                                          <option>2021</option>
                                        </Input>
                                        <div>Month:</div>
                                        <Input
                                          type="select"
                                          name="select"
                                          placeholder="Bio"
                                          className="timerinput1"
                                          id="exampleSelect17"
                                          onChange={e =>
                                            this.setState({
                                              month: e.target.value
                                            })
                                          }
                                        >
                                          <option>N/A</option>
                                          <option>JAN</option>
                                          <option>FEB</option>
                                          <option>MAR</option>
                                          <option>APR</option>
                                          <option>MAY</option>
                                          <option>JUN</option>
                                          <option>JUL</option>
                                          <option>AUG</option>
                                          <option>SEP</option>
                                          <option>OCT</option>
                                          <option>NOV</option>
                                          <option>DEC</option>
                                        </Input>
                                        <div>Date:</div>
                                        <Input
                                          className="timerinput1"
                                          type="select"
                                          name="select"
                                          placeholder="Bio"
                                          id="exampleSelect18"
                                          onChange={e =>
                                            this.setState({
                                              date: e.target.value
                                            })
                                          }
                                        >
                                          <option>N/A</option>
                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                          <option>4</option>
                                          <option>5</option>
                                          <option>6</option>
                                          <option>7</option>
                                          <option>8</option>
                                          <option>9</option>
                                          <option>10</option>
                                          <option>11</option>
                                          <option>12</option>
                                          <option>13</option>
                                          <option>14</option>
                                          <option>15</option>
                                          <option>16</option>
                                          <option>17</option>
                                          <option>18</option>
                                          <option>19</option>
                                          <option>20</option>
                                          <option>21</option>
                                          <option>22</option>
                                          <option>23</option>
                                          <option>24</option>
                                          <option>25</option>
                                          <option>26</option>
                                          <option>27</option>
                                          <option>28</option>
                                          <option>29</option>
                                          <option>30</option>
                                          <option>31</option>
                                        </Input>
                                        <div>Hour:</div>
                                        <Input
                                          className="timerinput1"
                                          type="select"
                                          name="select"
                                          placeholder="Hour"
                                          id="exampleSelect19"
                                          value={this.state.hour}
                                          onChange={async e => {
                                            this.setState({
                                              hour: e.target.value
                                            })
                                            this.setState({
                                              timer:
                                                this.state.date +
                                                " " +
                                                this.state.month +
                                                " " +
                                                this.state.year +
                                                " " +
                                                this.state.hour +
                                                ":00:00"
                                            })
                                          }}
                                        >
                                          <option>N/A</option>
                                          <option>0</option>
                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                          <option>4</option>
                                          <option>5</option>
                                          <option>6</option>
                                          <option>7</option>
                                          <option>8</option>
                                          <option>9</option>
                                          <option>10</option>
                                          <option>11</option>
                                          <option>12</option>
                                          <option>13</option>
                                          <option>14</option>
                                          <option>15</option>
                                          <option>16</option>
                                          <option>17</option>
                                          <option>18</option>
                                          <option>19</option>
                                          <option>20</option>
                                          <option>21</option>
                                          <option>22</option>
                                          <option>23</option>
                                        </Input>
                                      </div>
                                    </Col>
                                  </FormGroup>
                                  <button type="submit">Submit</button>
                                </Form>
                                <div>{this.state.error}</div>
                              </div>
                            )
                          }}
                        </Mutation>
                      </div>
                    )
                  }}
                </Query>
              )
            } else {
              return (
                <Mutation mutation={CREATECURRENT}>
                  {createcurrent => {
                    return (
                      <div>
                        <h1>Generate Current Round</h1>
                        <Form
                          horizontal
                          onSubmit={async e => {
                            e.preventDefault()

                            try {
                              const { data } = await createcurrent({
                                variables: {
                                  season: this.state.season,
                                  round: this.state.round,
                                  timer: this.state.timer
                                }
                              })
                              console.log(this.state.timer)
                              this.props.history.push("/admin")
                              location.reload()
                            } catch (error) { }
                          }}
                        >
                          <FormGroup row>
                            <Col className="label" sm={2}>
                              Round
                            </Col>
                            <Col sm={10}>
                              <Input
                                placeholder="round"
                                type="number"
                                id="exampleSelect5"
                                onChange={e =>
                                  this.setState({
                                    round: e.target.value
                                  })
                                }
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col className="label" sm={2}>
                              Season
                            </Col>
                            <Col sm={10}>
                              <Input
                                placeholder="season"
                                id="exampleSelect6"
                                type="number"
                                onChange={e =>
                                  this.setState({
                                    season: e.target.value
                                  })
                                }
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col className="label" sm={2}>
                              When does the next round end?
                            </Col>
                            <Col sm={10}>
                              <div className="timerinput">
                                <div>Year:</div>
                                <Input
                                  type="select"
                                  name="select"
                                  placeholder="Bio"
                                  className="timerinput1221"
                                  id="exampleSelect211"
                                  onChange={e =>
                                    this.setState({
                                      year: e.target.value
                                    })
                                  }
                                >
                                  <option>N/A</option>
                                  <option>2018</option>
                                  <option>2019</option>
                                  <option>2020</option>
                                  <option>2021</option>
                                </Input>

                                <div>Month:</div>
                                <Input
                                  type="select"
                                  name="select"
                                  placeholder="Bio"
                                  className="timerinput1"
                                  id="exampleSelect7"
                                  onChange={e =>
                                    this.setState({
                                      month: e.target.value
                                    })
                                  }
                                >
                                  <option>JAN</option>
                                  <option>FEB</option>
                                  <option>MAR</option>
                                  <option>APR</option>
                                  <option>MAY</option>
                                  <option>JUN</option>
                                  <option>JUL</option>
                                  <option>AUG</option>
                                  <option>SEP</option>
                                  <option>OCT</option>
                                  <option>NOV</option>
                                  <option>DEC</option>
                                </Input>
                                <div>Date:</div>
                                <Input
                                  className="timerinput1"
                                  type="select"
                                  name="select"
                                  placeholder="Bio"
                                  id="exampleSelect8"
                                  onChange={e =>
                                    this.setState({
                                      date: e.target.value
                                    })
                                  }
                                >
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                  <option>6</option>
                                  <option>7</option>
                                  <option>8</option>
                                  <option>9</option>
                                  <option>10</option>
                                  <option>11</option>
                                  <option>12</option>
                                  <option>13</option>
                                  <option>14</option>
                                  <option>15</option>
                                  <option>16</option>
                                  <option>17</option>
                                  <option>18</option>
                                  <option>19</option>
                                  <option>20</option>
                                  <option>21</option>
                                  <option>22</option>
                                  <option>23</option>
                                  <option>24</option>
                                  <option>25</option>
                                  <option>26</option>
                                  <option>27</option>
                                  <option>28</option>
                                  <option>29</option>
                                  <option>30</option>
                                  <option>31</option>
                                </Input>
                                <div>Hour:</div>
                                <Input
                                  className="timerinput1"
                                  type="select"
                                  name="select"
                                  placeholder="Bio"
                                  id="exampleSelect9"
                                  onChange={async e => {
                                    this.setState({
                                      hour: e.target.value
                                    })
                                    this.setState({
                                      timer:
                                        this.state.date +
                                        " " +
                                        this.state.month +
                                        " " +
                                        this.state.year +
                                        " " +
                                        this.state.hour +
                                        ":00:00"
                                    })
                                  }}
                                >
                                  <option>0</option>
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                  <option>6</option>
                                  <option>7</option>
                                  <option>8</option>
                                  <option>9</option>
                                  <option>10</option>
                                  <option>11</option>
                                  <option>12</option>
                                  <option>13</option>
                                  <option>14</option>
                                  <option>15</option>
                                  <option>16</option>
                                  <option>17</option>
                                  <option>18</option>
                                  <option>19</option>
                                  <option>20</option>
                                  <option>21</option>
                                  <option>22</option>
                                  <option>23</option>
                                </Input>
                              </div>
                            </Col>
                          </FormGroup>
                          <button type="submit">Submit</button>
                        </Form>
                      </div>
                    )
                  }}
                </Mutation>
              )
            }
          }}
        </Query>
      </div>
    )
  }
}

export default AdminPage
