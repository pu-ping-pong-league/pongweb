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
            <div className="col-sm-12 col-md-12">
              <h3>President and Founder</h3>
              <p>Yannis Karakozis ick@princeton.edu</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 col-md-4">
              <h3>Financial Coordinator</h3>
              <p>Kayla Dobies</p>
            </div>
            <div className="col-sm-4 col-md-4">
              <h3>League Administrator</h3>
              <p>Sonny Huang</p>
            </div>
            <div className="col-sm-4 col-md-4">
              <h3>Director of Public Relations</h3>
              <p>Autumn Weyant</p>
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
