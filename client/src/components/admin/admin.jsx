import * as React from "react"
import logo from "./Logo.png"
import Navbar from "../navbar/navbar.jsx"
import "./admin.css"
import { Mutation, Query } from "react-apollo"
import gql from "graphql-tag"
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

const UPDATECURRENT = gql`
  mutation updatecurrent($round: Int!, $season: Int!, $timer: String!) {
    updatecurrent(round: $round, season: $season, timer: $timer) {
      season
      fixture
      timer
    }
  }
`
const CREATECURRENT = gql`
  mutation createcurrent($round: Int!, $season: Int!, $timer: String!) {
    createcurrent(round: $round, season: $season, timer: $timer) {
      season
      fixture
      timer
    }
  }
`

const GETCURRENT = gql`
  query {
    getcurrent {
      season
      fixture
      timer
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

            if (data.getcurrent.length !== 0) {
             
              return (
                <div>
                  <Table className="statstable">
                    <tr>
                      <th>Current Round</th>
                      <th>Current Season</th>
                      <th>Current Round Ends</th>
                    </tr>
                    <tr>
                      <th>{data.getcurrent[0].fixture}</th>
                      <th>{data.getcurrent[0].season}</th>
                      <th>{data.getcurrent[0].timer}</th>
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
                                          "2018" +
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
                          <div>{this.state.error}</div>
                        </div>
                      )
                    }}
                  </Mutation>
                </div>
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
                            } catch (error) {}
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
                                        "2018" +
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
