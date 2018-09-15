import * as React from "react"
import * as jwt from "jsonwebtoken"
import Navbar from "../navbar/navbar.jsx"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import logo from "../Logo.png"
import "./signupthankyou.css"

class Signupthankyou extends React.Component {
  render() {
    return (
      <div className="thankyou">
        <Navbar
          handleRecipeOnChange={this.handleRecipeOnChange}
          history={this.props.history}
        />
        <h1>
          {" "}
          Thank you so much for signing up for Princeton Ping Pong League!
          Please check your email to confirm your account{" "}
        </h1>
      </div>
    )
  }
}

export default Signupthankyou
