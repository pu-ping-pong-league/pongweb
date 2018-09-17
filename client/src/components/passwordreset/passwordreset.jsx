import * as React from "react"
import * as jwt from "jsonwebtoken"
import Navbar from "../navbar/navbar.jsx"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import logo from "../Logo.png"
import "./passwordreset.css"

class Passwordreset extends React.Component {
  render() {
    return (
      <div className="thankyou">
        <Navbar
          handleRecipeOnChange={this.handleRecipeOnChange}
          history={this.props.history}
        />
        <h1>
          {" "}
          A comfirmation email has been sent out! Please check your email to
          change your password{" "}
        </h1>
      </div>
    )
  }
}

export default Passwordreset
