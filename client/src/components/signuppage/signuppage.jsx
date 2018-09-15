import * as React from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import "./signuppage.css"
import logo from "../Logo.png"
import {
  Jumbotron,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Table
} from "reactstrap"

const SIGNUP = gql`
  mutation signup(
    $email: String!
    $password: String!
    $name: String!
    $residentialcollege: String
  ) {
    signup(
      email: $email
      password: $password
      name: $name
      residentialcollege: $residentialcollege
    ) {
      token
      user {
        id
        name
        email
        residentialcollege
        stats {
          rating
        }
      }
    }
  }
`
class SignupPage extends React.Component {
  state = {
    email: "",
    name: "",
    password: "",
    residentialcollege: null
  }
  componentDidMount() {
    var element = document.getElementById("center")
    element.classList.add("toggle")
  }
  render() {
    return (
      <div className="formcontainer">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <Mutation mutation={SIGNUP}>
          {signup => {
            return (
              <Form
                className="signup-form"
                onSubmit={async e => {
                  e.preventDefault()
                  try {
                    const { data } = await signup({
                      variables: {
                        email: this.state.email,
                        password: this.state.password,
                        name: this.state.name,
                        residentialcollege: this.state.residentialcollege
                      }
                    })
                    // localStorage.setItem("token", data.signup.token)
                    // localStorage.setItem("name", data.signup.user.name)
                    // localStorage.setItem("email", data.signup.user.email)
                    // localStorage.setItem(
                    //   "residentialcollege",
                    //   data.signup.user.residentialcollege
                    // )
                    // localStorage.setItem(
                    //   "rating",
                    //   data.signup.user.stats[0].rating.toFixed(0)
                    // )

                    // if (localStorage.getItem("name") == null) {
                    //   document.getElementById("text2").classList.add("hide1")
                    // }
                    // if (localStorage.getItem("email") == null) {
                    //   document.getElementById("text3").classList.add("hide1")
                    // }

                    // if (localStorage.getItem("name") !== null) {
                    //   document.getElementById("text2").classList.remove("hide1")
                    // }
                    // if (localStorage.getItem("email") !== null) {
                    //   document.getElementById("text3").classList.remove("hide1")
                    // }
                    this.props.history.push(`/signupthankyou`)
                  } catch (error) {
                    alert(error.message)
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")
                  }
                }}
              >
                <FormGroup row>
                  <Label sm={3} className="label" for="exampleEmail">
                    Email:
                  </Label>
                  <Col sm={9}>
                    <Input
                      placeholder="email"
                      onChange={e => this.setState({ email: e.target.value })}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label sm={3} className="label" for="examplePassword">
                    Password:
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="password"
                      placeholder="password"
                      onChange={e =>
                        this.setState({ password: e.target.value })
                      }
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label sm={3} for="exampleName">
                    Name:
                  </Label>
                  <Col sm={9}>
                    <Input
                      placeholder="name"
                      onChange={e => this.setState({ name: e.target.value })}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label sm={3} for="exampleName">
                    Residential College
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="select"
                      name="select"
                      id="exampleSelect"
                      placeholder="residential college"
                      onChange={e =>
                        this.setState({ residentialcollege: e.target.value })
                      }
                    >
                      <option />
                      <option>Butler</option>
                      <option>Wilson</option>
                      <option>Mathey</option>
                      <option>Rockefeller</option>
                      <option>Forbes</option>
                      <option>Whitman</option>
                      <option>GraduateSchool</option>
                    </Input>
                  </Col>
                </FormGroup>
                <button type="submit">SignUp</button>
                <a href="/" class="button">
                  LogIn
                </a>
              </Form>
            )
          }}
        </Mutation>
      </div>
    )
  }
}

export default SignupPage
