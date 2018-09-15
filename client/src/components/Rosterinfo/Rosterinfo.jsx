import * as React from "react"
import "./rosterinfo.css"

class Rosterinfo extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          <th>{this.props.name}</th>
          <th className="item">
            <a className="email" href={"/" + this.props.email}>
              {this.props.email}
            </a>
          </th>

          <th className="rescollege">{this.props.residentialcollege}</th>
        </tr>
      </thead>
    )
  }
}

export default Rosterinfo
