import * as React from "react"
import Navbar from "../navbar/navbar.jsx"
import "./PlayerRoster.css"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import logo from "../Logo.png"
import Rosterinfo from "../Rosterinfo/Rosterinfo.jsx"
import { Table } from "reactstrap"
const GET_USERS = gql`
  query getUsers($where: UserWhereInput!) {
    getUsers(where: $where, orderBy: name_ASC) {
      email
      name
      residentialcollege
    }
  }
`

class Roster extends React.Component {
  render() {
    return (
      <div>
        <Navbar history={this.props.history} />
        <h1>Player Roster</h1>
        <h2>Season 8</h2>
        <Query
          variables={{
            where: {
              season: { season: 1 },
              confirmed: true
            }
          }}
          query={GET_USERS}
        >
          {({ loading, error, data, refetch }) => {
            if (loading) {
              return "Loading..."
            }
            if (error) {
              console.log(error)
              return "OOps, somehing blew up."
            }
            return (
              <Table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Residential College</th>
                  </tr>
                </thead>

                {data.getUsers.map(user => {
                  return (
                    <Rosterinfo
                      key={this.props.id}
                      email={user.email}
                      name={user.name}
                      residentialcollege={user.residentialcollege}
                    />
                  )
                })}
              </Table>
            )
          }}
        </Query>
      </div>
    )
  }
}

export default Roster
