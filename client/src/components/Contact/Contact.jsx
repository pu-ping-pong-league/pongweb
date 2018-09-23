import * as React from "react"
import Navbar from "../navbar/navbar.jsx"
import logo from "../Logo.png"
import "font-awesome/css/font-awesome.min.css"
import Footer from "../footer/footer.jsx"
class Contact extends React.Component {
  render() {
    return (
      <div>
        <Navbar
          handleRecipeOnChange={this.handleRecipeOnChange}
          history={this.props.history}
        />
        <div id="contact">
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <h3>President and League Administrator</h3>
              <p>Sonny Huang '20, shengh@</p>
            </div>
            <div className="col-sm-6 col-md-6">
              <h3>Founder and Head of Team Building</h3>
              <p>Yannis Karakozis '19, ick@</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <h3>Financial Coordinator</h3>
              <p>Kayla Dobies '20</p>
            </div>
            <div className="col-sm-6 col-md-6">
              <h3>Director of Public Relations</h3>
              <p>Autumn Weyant '20</p>
            </div>
          </div>
          <div>
            {/* <h2>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/princetonpingpong/"
              >
                <i className="fa fa-facebook-square fa-2x" aria-hidden="true" />
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/pu-ping-pong-league"
              >
                <i className="fa fa-github-alt fa-2x" aria-hidden="true" />
              </a>
            </h2> */}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Contact
