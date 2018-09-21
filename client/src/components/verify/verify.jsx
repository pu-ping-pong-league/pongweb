import * as React from "react"
import * as jwt from "jsonwebtoken"
import Navbar from "../navbar/navbar.jsx"
import { Query, Mutation } from "react-apollo"
import gql from "graphql-tag"
import { Form } from "reactstrap"
import logo from "../Logo.png"

const GET_USER = gql`
  query getUserbyID($where: UserWhereUniqueInput!) {
    getUserbyID(where: $where) {
      name
      email
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
      confirmed
      stats {
        wins
        totalsetwon
        losts
        totalsetlost
      }
    }
  }
`

class VerifyPage extends React.Component {
  state = {
    email: "",
    name: "",
    password: "",
    residentialcollege: null
  }

  render() {
    const EMAIL_SECRET = "asdf1093KMnzxcvnkljvasdu09123nlasdasdf"
    const userId = jwt.verify(this.props.match.params.token, EMAIL_SECRET)
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
                <div>Hi {data.getUserbyID.name} please verify your account</div>
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
                                    confirmed: true
                                  },
                                  where: {
                                    email: useremail
                                  }
                                }
                              })

                              this.props.history.push("/")
                              location.reload()
                            } catch (error) {}
                          }}
                        >
                          <button type="submit">Verify</button>
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

export default VerifyPage
