import * as React from "react"
import "./loginpage.css"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"
import logo from "../Logo.png"

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`

class LoginPage extends React.Component {
  state = {
    email: "",
    password: ""
  }
  componentDidMount() {
    var element = document.getElementById("center")
    element.classList.add("toggle")
  }
  render() {
    return (
      <div className="bg">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <Mutation mutation={LOGIN}>
          {login => {
            return (
              <div>
                <form
                  className="login-form"
                  onSubmit={async e => {
                    e.preventDefault()
                    try {
                      const { data } = await login({
                        variables: {
                          email: this.state.email,
                          password: this.state.password
                        }
                      })
                      localStorage.setItem("token", data.login.token)
                      localStorage.setItem("name", data.login.user.name)
                      localStorage.setItem("email", data.login.user.email)

                      if (localStorage.getItem("username") == null) {
                        document.getElementById("text1").classList.add("hide1")
                      }
                      if (localStorage.getItem("name") == null) {
                        document.getElementById("text2").classList.add("hide1")
                      }
                      if (localStorage.getItem("email") == null) {
                        document.getElementById("text3").classList.add("hide1")
                      }
                      if (localStorage.getItem("username") !== null) {
                        document
                          .getElementById("text1")
                          .classList.remove("hide1")
                      }
                      if (localStorage.getItem("name") !== null) {
                        document
                          .getElementById("text2")
                          .classList.remove("hide1")
                      }
                      if (localStorage.getItem("email") !== null) {
                        document
                          .getElementById("text3")
                          .classList.remove("hide1")
                      }
                      document
                        .getElementById("center")
                        .classList.remove("toggle")

                      this.props.history.push("/homepage")
                    } catch (error) {
                      localStorage.removeItem("token")
                      localStorage.removeItem("user")
                    }
                  }}
                >
                  <input
                    placeholder="email"
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                  <input
                    type="password"
                    placeholder="password"
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                  <button type="submit">LOGIN</button>
                  <a href="/signup" class="button">
                    SignUp
                  </a>
                </form>
              </div>
            )
          }}
        </Mutation>
      </div>
    )
  }
}

export default LoginPage
