import * as React from "react"
import "./navbar.css"
import gql from "graphql-tag"
import { Mutation, Query } from "react-apollo"
import { Link } from "react-router-dom"
import Select from "react-select"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap"

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        email
        residentialcollege
        bio
        location
        stats {
          rating
        }
      }
    }
  }
`
const GET_ALL_PROFILES = gql`
  query getUsers($where: UserWhereInput!) {
    getUsers(where: $where, orderBy: name_ASC) {
      email
      name
      residentialcollege
    }
  }
`

class Navigation extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
  }
  state = {
    email: "",
    password: "",
    error: "",
    selectedOption: null,
    isDropDownOpen: false,
    dropdownOpen: false
  }

  onLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("email")
    localStorage.removeItem("name")
    localStorage.removeItem("residentialcollege")
    localStorage.removeItem("rating")
    localStorage.removeItem("location")
    localStorage.removeItem("bio")
    this.props.history.push("/")
    location.reload()
  }
  handleChange = selectedOption => {
    this.setState({ selectedOption })
    this.props.history.push(`/${selectedOption.value}`)
    location.reload()
  }
  toggleDropdown = () => {
    this.setState({
      isDropDownOpen: !this.state.isDropDownOpen
    })
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }
  render() {
    const { selectedOption } = this.state
    const token = localStorage.getItem("token")
    var uname = ""
    // var uname = () => {
    //   return token ? localStorage.getItem("username") : "guest"
    // }

    if (this.state.loading) {
      return <div className="app__loading">Loading...</div>
    }

    return (
      <div>
        <Navbar className="Navbar" light expand="md">
          <NavbarBrand className="NavbarTitle" href="/">
            <div>PrincetonPingPongLeague</div>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Query
              query={GET_ALL_PROFILES}
              variables={{
                where: {
                  season: { season: 1 },
                  confirmed: true
                }
              }}
            >
              {({ loading, error, data, refetch }) => {
                if (loading) {
                  return "Loading..."
                }

                if (error) {
                  return "Oops, something blew up."
                }

                if (!data.getUsers) return "no data..."

                const options = data.getUsers.map(player => {
                  return {
                    value: player.email,
                    label: player.name
                  }
                })

                return (
                  <div>
                    <Nav className="ml-auto" navbar>
                      <NavItem className="search__nav">
                        <div className="search__component">
                          <Select
                            name="form-field-name"
                            options={options}
                            placeholder="Search players"
                            onChange={this.handleChange}
                          />
                        </div>
                      </NavItem>
                    </Nav>
                  </div>
                )
              }}
            </Query>

            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="my-page" href="/contactus/" id="my-page">
                  Contact Us
                </NavLink>
              </NavItem>
              <NavItem>
                <Dropdown
                  className="my-league"
                  isOpen={this.state.dropdownOpen}
                >
                  <DropdownToggle
                    className="dropdown"
                    data-toggle="dropdown"
                    disabled
                    style={{ backgroundColor: "transparent", color: "gray" }}
                    caret
                  >
                    League
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem
                      onClick={() => this.props.history.push(`/playerroster`)}
                    >
                      Player Roster
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => this.props.history.push(`/leaderboard`)}
                    >
                      Leaderboard/Matches
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => this.props.history.push(`/halloffame`)}
                    >
                      Hall Of Fame
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
              <NavItem>
                <NavLink
                  disabled={!localStorage.getItem("token")}
                  className="my-page"
                  href="/myprofile/"
                  id="my-page"
                >
                  My Page
                </NavLink>
              </NavItem>
              <NavItem className="welcome">
                <p className="welcomeText">Welcome</p>
                <div>
                  {token
                    ? (uname = localStorage.getItem("name"))
                    : (uname = "guest")}
                </div>
              </NavItem>
              <UncontrolledDropdown
                toggle={this.toggleDropdown}
                isOpen={this.state.isDropDownOpen}
                direction="bottom"
                nav
                inNavbar
              >
                <div>
                  {token ? (
                    <Button onClick={this.onLogout} color="info">
                      Log out
                    </Button>
                  ) : (
                    <DropdownToggle onClick={this.toggleDropdown} caret>
                      Login
                    </DropdownToggle>
                  )}
                </div>

                <Dropdown isOpen={this.state.isDropDownOpen} inNavbar>
                  <DropdownMenu right>
                    <Mutation mutation={LOGIN}>
                      {login => {
                        return (
                          <div className="MainPart">
                            <form
                              id="myForm"
                              onSubmit={async e => {
                                e.preventDefault()
                                try {
                                  const { data } = await login({
                                    variables: {
                                      email: this.state.email,
                                      password: this.state.password
                                    }
                                  })
                                  localStorage.setItem(
                                    "token",
                                    data.login.token
                                  )
                                  localStorage.setItem(
                                    "name",
                                    data.login.user.name
                                  )
                                  localStorage.setItem(
                                    "email",
                                    data.login.user.email
                                  )
                                  localStorage.setItem(
                                    "residentialcollege",
                                    data.login.user.residentialcollege
                                  )
                                  localStorage.setItem(
                                    "rating",
                                    data.login.user.stats[0].rating.toFixed(0)
                                  )
                                  localStorage.setItem(
                                    "bio",
                                    data.login.user.bio
                                  )
                                  localStorage.setItem(
                                    "location",
                                    data.login.user.location
                                  )
                                  // isOpen: PropTypes.bool,
                                  // DropdownMenu.propTypes.bool = false
                                  this.toggleDropdown()

                                  this.setState({
                                    email: "",
                                    password: "",
                                    error: ""
                                  })

                                  this.props.history.push("/myprofile")
                                } catch (error) {
                                  localStorage.removeItem("token")
                                  localStorage.removeItem("email")
                                  localStorage.removeItem("name")
                                  localStorage.removeItem("rating")
                                  localStorage.removeItem("residentialcollege")

                                  this.setState({
                                    email: "",
                                    password: "",
                                    error: "" + error
                                  })
                                }
                              }}
                            >
                              <div className="inputBox">
                                <DropdownItem disabled id="warning">
                                  {this.state.error}
                                </DropdownItem>
                                <DropdownItem disabled>email:</DropdownItem>
                                <DropdownItem disabled>
                                  <input
                                    type="text"
                                    className="abc"
                                    onChange={e => {
                                      this.setState({ email: e.target.value })
                                    }}
                                  />
                                </DropdownItem>

                                <DropdownItem disabled>password:</DropdownItem>
                                <DropdownItem disabled>
                                  <input
                                    type="password"
                                    onChange={e => {
                                      this.setState({
                                        password: e.target.value
                                      })
                                    }}
                                  />
                                </DropdownItem>
                              </div>
                              <DropdownItem divider />
                              <DropdownItem disabled>
                                <button
                                  // disabled={
                                  //   !this.state.email || !this.state.password
                                  // }
                                  type="submit"
                                  className="LoginButton"
                                >
                                  Log in
                                </button>
                              </DropdownItem>
                            </form>
                          </div>
                        )
                      }}
                    </Mutation>

                    <DropdownItem divider />
                    <DropdownItem disabled>Don't have an account?</DropdownItem>
                    <DropdownItem disabled>
                      <Link to="/signup">
                        <button className="SignupButton">Sign up</button>
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Navigation

{
  /* <UncontrolledDropdown direction="bottom" nav inNavbar>
                <div>
                  {token ? (
                    <Button onClick={this.onLogout} color="info">
                      Log out
                    </Button>
                  ) : (
                    <DropdownToggle
                      disabled
                      data-toggle="dropdown"
                      onClick={this.toggleDropdown}
                      caret
                    >
                      Login
                    </DropdownToggle>
                  )}
                </div>

                <Dropdown isOpen={this.state.isDropDownOpen}>
                  <DropdownMenu right class="dropdown-toggle1">
                    <Mutation mutation={LOGIN}>
                      {login => {
                        return (
                          <div className="MainPart">
                            <form
                              id="myForm"
                              onSubmit={async e => {
                                e.preventDefault()
                                try {
                                  const { data } = await login({
                                    variables: {
                                      email: this.state.email,
                                      password: this.state.password
                                    }
                                  })
                                  localStorage.setItem(
                                    "token",
                                    data.login.token
                                  )
                                  localStorage.setItem(
                                    "name",
                                    data.login.user.name
                                  )
                                  localStorage.setItem(
                                    "email",
                                    data.login.user.email
                                  )
                                  // isOpen: PropTypes.bool,
                                  // DropdownMenu.propTypes.bool = false
                                  this.toggleDropdown()

                                  this.setState({
                                    email: "",
                                    password: "",
                                    error: ""
                                  })

                                  this.props.history.push("/")
                                } catch (error) {
                                  localStorage.removeItem("token")
                                  localStorage.removeItem("email")
                                  localStorage.removeItem("name")

                                  this.setState({
                                    email: "",
                                    password: "",
                                    error: "Oops! Something went wrong."
                                  })
                                }
                              }}
                            >
                              <div className="inputBox">
                                <DropdownItem disabled id="warning">
                                  {this.state.error}
                                </DropdownItem>
                                <DropdownItem disabled>email:</DropdownItem>
                                <DropdownItem disabled>
                                  <input
                                    type="text"
                                    className="abc"
                                    onChange={e => {
                                      this.setState({ email: e.target.value })
                                    }}
                                  />
                                </DropdownItem>

                                <DropdownItem disabled>password:</DropdownItem>
                                <DropdownItem disabled>
                                  <input
                                    type="password"
                                    onChange={e => {
                                      this.setState({
                                        password: e.target.value
                                      })
                                    }}
                                  />
                                </DropdownItem>
                              </div>
                              <DropdownItem divider />
                              <DropdownItem disabled>
                                <button
                                  // disabled={
                                  //   !this.state.email || !this.state.password
                                  // }
                                  type="submit"
                                  className="LoginButton"
                                >
                                  Log in
                                </button>
                              </DropdownItem>
                            </form>
                          </div>
                        )
                      }}
                    </Mutation>

                    <DropdownItem divider />
                    <DropdownItem disabled>Don't have an account?</DropdownItem>
                    <DropdownItem disabled>
                      <Link to="/signup">
                        <button className="SignupButton">Sign up</button>
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </UncontrolledDropdown> */
}
