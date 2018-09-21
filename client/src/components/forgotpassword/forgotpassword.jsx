import * as React from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
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

const FORGOTPASSWORD = gql`
  mutation forgotpassword($email: String!) {
    forgotpassword(email: $email) {
      id
      name
      email
      residentialcollege
      stats {
        rating
      }
    }
  }
`
class ForgotPassword extends React.Component {
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

        <Mutation mutation={FORGOTPASSWORD}>
          {forgotpassword => {
            return (
              <Form
                className="signup-form"
                onSubmit={async e => {
                  e.preventDefault()

                  try {
                    const { data } = await forgotpassword({
                      variables: {
                        email: this.state.email
                      }
                    })
                    this.props.history.push(`/passwordreset`)
                  } catch (error) {
                    alert(error.message)
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")
                  }
                }}
              >
                <FormGroup row>
                  <h1>
                    Please enter your email so we can send you a link to reset
                    your password
                  </h1>
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

                <button type="submit">Sumbit</button>
                <a href="/" class="button">
                  Back
                </a>
              </Form>
            )
          }}
        </Mutation>
      </div>
    )
  }
}

export default ForgotPassword
