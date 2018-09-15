import * as React from "react"
import "./footer.css"

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="rightcol">
          <a
            className="contactus"
            style={{ color: "white" }}
            href={"/contactus"}
          >
            Contact Us
          </a>
          <a
            className="userpolicy"
            style={{ color: "white" }}
            href={"/contactus"}
          >
            User Policy
          </a>
          <a
            className="userpolicy"
            style={{ color: "white" }}
            href={"/contactus"}
          >
            Rules and Format
          </a>
        </div>

        <div className="leftcol">
          <a
            style={{ fontSize: "80px" }}
            class="fab fa-facebook-square"
            href="https://www.facebook.com/princetonpingpong/?fb_dtsg_ag=AdzRNmLi0Yk6uY1h5-ZLGlHXu3bPnBNMH_Cgsarhk3YpVg%3AAdx30qm4BR5uaW3zakch5OIvDxPBILlG8Q9oOcKsqMILcA"
          />
        </div>
      </div>
    )
  }
}

export default Footer
