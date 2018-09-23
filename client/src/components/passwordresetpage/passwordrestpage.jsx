import * as React from "react"
import * as jwt from "jsonwebtoken"
import Navbar from "../navbar/navbar.jsx"
import { Query, Mutation } from "react-apollo"
import gql from "graphql-tag"
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

const GET_USER = gql`
  query getUserbyID($where: UserWhereUniqueInput!) {
    getUserbyID(where: $where) {
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
      confirmed
      matches {
        player1 {
          name
        }
        player2 {
          name
        }
        player1set
        player2set
      }
    }
  }
`
const UPDATE_PASSWORD = gql`
  mutation resetpassword($password: String!, $email: String!) {
    resetpassword(password: $password, email: $email) {
      id
      residentialcollege
      location
      bio
      name
      email
      confirmed
    }
  }
`

class Passwordrestpage extends React.Component {
  state = {
    email: "",
    name: "",
    password: "",
    residentialcollege: null
  }

  render() {
    const PASSWORD_SECRET = "adnaodhoawjhdaoxjaowd12313"
    const userId = jwt.verify(this.props.match.params.token, PASSWORD_SECRET)
    console.log(userId)
    return (
      <div className="profile-page">
        <Navbar
          handleRecipeOnChange={this.handleRecipeOnChange}
          history={this.props.history}
        />
        <Query
          variables={{
            where: { id: userId.userId }
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
              return "Sorry wrong token"
            }
            const useremail = data.getUserbyID.email
            return (
              <div className="thankyou">
                <div>
                  Hi {data.getUserbyID.name} please enter your new password
                </div>
                <Mutation mutation={UPDATE_PASSWORD}>
                  {resetpassword => {
                    return (
                      <div>
                        <Form
                          horizontal
                          onSubmit={async e => {
                            console.log("player1email")
                            e.preventDefault()
                            try {
                              const { data } = await resetpassword({
                                variables: {
                                  password: this.state.password,
                                  email: useremail
                                }
                              })

                              this.props.history.push("/")
                              location.reload()
                            } catch (error) {}
                          }}
                        >
                          <FormGroup row>
                            <Label
                              sm={3}
                              className="label"
                              for="examplePassword"
                            >
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
                          <button type="submit">Submit</button>
                        </Form>
                      </div>
                    )
                  }}
                </Mutation>
              </div>
            )
          }}
        </Query>
      </div>
    )
  }
}

export default Passwordrestpage
