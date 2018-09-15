import * as React from "react"
import "./leaderboardinfo.css"

class Leaderboardinfo extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          <th>{this.props.position}</th>
          <th>{this.props.name}</th>
          <th className="item">
            <a className="email" href={"/" + this.props.email}>
              {this.props.email}
            </a>
          </th>
          <th>{this.props.stats[this.props.integer].rating.toFixed(0)}</th>
          <th className="item">
            {this.props.stats[this.props.integer].wins -
              this.props.stats[this.props.integer].losts}
          </th>

          <th className="item">{this.props.stats[this.props.integer].wins}</th>
          <th className="item">{this.props.stats[this.props.integer].losts}</th>
          <th className="item">
            {this.props.stats[this.props.integer].totalsetwon -
              this.props.stats[this.props.integer].totalsetlost}
          </th>
          <th className="item">
            {this.props.stats[this.props.integer].totalsetwon}
          </th>
          <th className="item">
            {this.props.stats[this.props.integer].totalsetlost}
          </th>
        </tr>
      </thead>
    )
  }
}

export default Leaderboardinfo
