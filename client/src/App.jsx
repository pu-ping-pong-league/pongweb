import * as React from "react"
import { hot } from "react-hot-loader"
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom"
import HomePage from "./components/home-page/home-page.jsx"
import LoginPage from "./components/loginpage/loginpage.jsx"
import ProfilePage from "./components/profilepage/profilepage.jsx"
import "./App.css"
import SignupPage from "./components/signuppage/signuppage.jsx"
import MyProfile from "./components/my-profile/my-profile.jsx"
import Roster from "./components/PlayerRoster/PlayerRoster.jsx"
import Home from "./components/about/about.jsx"
import Hof from "./components/halloffame/halloffame.jsx"
import AdminPage from "./components/admin/admin.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Leaderboard from "./components/leaderboard/leaderboard"
import screen from "./Butlercollege.png"
import screen2 from "./Whitmancollege.png"
import screen3 from "./Matheycollege.png"
import screen4 from "./Rockycollege.png"
import screen5 from "./Graduateschool.png"
import screen6 from "./Forbescollege.png"
import screen7 from "./Wilsoncollege.png"
import AdminLoginPage from "./components/adminlogin/adminlogin.jsx"
import VerifyPage from "./components/verify/verify.jsx"
import Signupthankyou from "./components/signupthankyou/signupthankyou.jsx"
import Passwordreset from "./components/passwordreset/passwordreset.jsx"
import FORGOTPASSWORD from "./components/forgotpassword/forgotpassword.jsx"
import Passwordrestpage from "./components/passwordresetpage/passwordrestpage.jsx"

const item = [screen, screen2, screen3, screen4, screen5, screen6, screen7]
const token = localStorage.getItem("admintoken")
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      token ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
)

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const Adminlogin = props => {
  return <AdminLoginPage fakeAuth={fakeAuth} {...props} />
}
class App extends React.Component {
  state = {
    redirectToReferrer: false,
    isAuthenticated: false
  }
  constructor(props) {
    super(props)

    this.authenticate = this.authenticate.bind(this)
    this.signout = this.signout.bind(this)
  }

  authenticate() {
    this.setState({ isAuthenticated: true })
  }
  signout() {
    this.setState({ isAuthenticated: false })
  }

  toggleLeft() {
    var element = document.getElementById("offcanvas-left")
    element.classList.toggle("hide")
  }
  toggleRight() {
    var element = document.getElementById("offcanvas-right")
    element.classList.toggle("hide")
  }

  componentDidMount() {
    if (
      localStorage.getItem("name") == null ||
      localStorage.getItem("name") == ""
    ) {
      document.getElementById("text2").classList.add("hide1")
    }
    if (
      localStorage.getItem("email") == null ||
      localStorage.getItem("email") == ""
    ) {
      document.getElementById("text3").classList.add("hide1")
    }
    if (
      localStorage.getItem("rating") == null ||
      localStorage.getItem("rating") == ""
    ) {
      document.getElementById("text4").classList.add("hide1")
    }
    if (
      localStorage.getItem("name") !== null &&
      localStorage.getItem("name") !== ""
    ) {
      document.getElementById("text2").classList.remove("hide1")
    }
    if (
      localStorage.getItem("email") !== null &&
      localStorage.getItem("email") !== ""
    ) {
      document.getElementById("text3").classList.remove("hide1")
    }
    if (
      localStorage.getItem("rating") !== null &&
      localStorage.getItem("rating") !== ""
    ) {
      document.getElementById("text4").classList.remove("hide1")
    }
  }

  render() {
    if (localStorage.getItem("residentialcollege") !== null) {
      const college = localStorage.getItem("residentialcollege")
      if (college == "Butler") {
        var number = 0
      }
      if (college == "Whitman") {
        var number = 1
      }
      if (college == "Mathey") {
        var number = 2
      }
      if (college == "Rockefeller") {
        var number = 3
      }
      if (college == "GraduateSchool") {
        var number = 4
      }
      if (college == "Forbes") {
        var number = 5
      }
      if (college == "Wilson") {
        var number = 6
      }
    }
    return (
      <div className="App">
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
          integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
          crossorigin="anonymous"
        />
        <div id="offcanvas-left" className="hide">
          <div className="profile">
            <div className="image">
              <img className="image2" src={item[number]} />
            </div>
            <div className="text" id="text2">
              <i class="fa fa-user fa-lg fa-fw" id="icon1" />
              hi {localStorage.getItem("name")}
            </div>
            <div className="text" id="text3">
              <i class="fa fa-envelope fa-lg fa-fw" id="icon2" />
              {localStorage.getItem("email")}
            </div>
            <div className="text" id="text4">
              <i class="fas fa-chart-line" id="icon3" />
              {localStorage.getItem("rating")}
            </div>
          </div>
        </div>
        <div className="togglebar" onMouseOver={this.toggleLeft} />

        <div className="center" id="center">
          <Switch>
            <Route exact={true} path="/" component={HomePage} />
            <Route exact={true} path="/login" component={LoginPage} />
            <Route exact={true} path="/about" component={Home} />
            <Route exact={true} path="/playerroster" component={Roster} />
            <Route exact={true} path="/myprofile" component={MyProfile} />
            <Route exact={true} path="/halloffame" component={Hof} />
            <Route exact={true} path="/contactus" component={Contact} />
            <Route exact={true} path="/signup" component={SignupPage} />
            <Route exact={true} path="/adminlogin" render={Adminlogin} />
            <PrivateRoute exact={true} path="/admin" component={AdminPage} />
            <Route exact={true} path="/leaderboard" component={Leaderboard} />
            <Route
              exact={true}
              path="/passwordreset"
              component={Passwordreset}
            />
            <Route
              exact={true}
              path="/forgotpassword"
              component={FORGOTPASSWORD}
            />

            <Route
              exact={true}
              path="/signupthankyou"
              component={Signupthankyou}
            />
            <Route exact={true} path="/:email" component={ProfilePage} />
            <Route exact={true} path="/verify/:token" component={VerifyPage} />
            <Route
              exact={true}
              path="/password/:token"
              component={Passwordrestpage}
            />
          </Switch>
        </div>
      </div>
    )
  }
}

export default hot(module)(App)
