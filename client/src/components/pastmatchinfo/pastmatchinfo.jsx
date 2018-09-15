import * as React from "react"
import "./pastmatchinfo.css"

class Pastmatchinfo extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          <th className="item">
            <a className="email" href={"/" + this.props.player1.email}>
              {this.props.player1.name}
            </a>
          </th>
          <th className="item">
            <a className="email" href={"/" + this.props.player2.email}>
              {this.props.player2.name}
            </a>
          </th>

          <th className="item">{this.props.player1set}</th>
          <th className="item">{this.props.player2set}</th>
          <th className="item">{this.props.round}</th>
          <th className="item">{this.props.season}</th>
        </tr>
      </thead>
    )
  }
}

export default Pastmatchinfo
