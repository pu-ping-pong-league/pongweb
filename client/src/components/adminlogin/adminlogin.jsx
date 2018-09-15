import * as React from "react"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"
import Navbar from "../navbar/navbar.jsx"
import { Redirect, withRouter } from "react-router-dom"

const LOGIN = gql`
  mutation adminlogin($email: String!, $password: String!) {
    adminlogin(email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`

class AdminLoginPage extends React.Component {
  state = {
    email: "",
    password: ""
  }

  render() {
    return (
      <div className="bg">
        <header className="App-header">
          <Navbar history={this.props.history} />
        </header>

        <Mutation mutation={LOGIN}>
          {adminlogin => {
            return (
              <div>
                <form
                  className="login-form"
                  onSubmit={async e => {
                    e.preventDefault()

                    try {
                      const { data } = await adminlogin({
                        variables: {
                          email: this.state.email,
                          password: this.state.password
                        }
                      })

                      localStorage.setItem("admintoken", data.adminlogin.token)
                      localStorage.setItem(
                        "adminname",
                        data.adminlogin.user.name
                      )
                      localStorage.setItem(
                        "adminemail",
                        data.adminlogin.user.email
                      )
                      this.props.history.push("/admin")
                    } catch (error) {
                      localStorage.removeItem("admintoken")
                      localStorage.removeItem("adminname")
                      localStorage.removeItem("adminemail")
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
                  <a href="/" class="button">
                    Home
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

export default AdminLoginPage
