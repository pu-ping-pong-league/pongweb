import * as React from "react"
import "./matchinfo.css"

class Matchinfo extends React.Component {
  render() {
    if (this.props.player2 == null) {
    }
    return (
      <thead>
        <tr>
          <th className="item">
            <a className="email" href={"/" + this.props.player1.email}>
              {this.props.player1.name}
            </a>
          </th>
          <th className="item">
            {(() => {
              if (this.props.player2 == null)
                return <a className="email">Bye</a>
              else {
                return (
                  <a className="email" href={"/" + this.props.player2.email}>
                    {this.props.player2.name}
                  </a>
                )
              }
            })()}
          </th>

          <th className="item">{this.props.Player1Set}</th>
          <th className="item">{this.props.Player2Set}</th>
        </tr>
      </thead>
    )
  }
}

export default Matchinfo
