import * as React from "react"
import Slider from "react-slick"
import "./halloffame.css"
import Navbar from "../navbar/navbar.jsx"

class Hof extends React.Component {
  render() {
    var settings = {
      autoplay: true,
      centerMode: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <div>
        <Navbar history={this.props.history} />
        <h1>Hall Of Fame</h1>
        <Slider {...settings}>
          <div>
            <h3>Spring 2018 (S6) - Princeton University</h3>
            <p>1. Kevin Thomsen '18</p>
            <p>2. Arjun Subramaniam '21</p>
            <p>3. Xiaoyu Xu '18</p>
            <p>4. Zach Weingarten '18</p>
          </div>
          <div>
            <h3>Fall 2017 (S5) - Princeton University</h3>
            <p>1. Juneseo Lee '21</p>
            <p>2. Xiaoyu Xu '18</p>
            <p>3. Kevin Thomsen '18</p>
            <p>4. Theo Tamayo '19</p>
          </div>
          <div>
            <h3>Spring 2017 (S4) - Princeton University</h3>
            <p>1. Vivek Dinodia '17</p>
            <p>2. Xiaoyu Xu '18</p>
            <p>3. Zach Weingarten '18</p>
            <p>4. Theo Tamayo '19</p>
          </div>
          <div>
            <h3>Fall 2016 (S3) - Butl./Wils./Whitm.</h3>
            <p>1. Xiaoyu Xu '18</p>
            <p>2. Kevin Thomsen '18</p>
            <p>3. Noah Mihan '19 </p>
            <p>4. Adit Bhansali '19</p>
          </div>
          <div>
            <h3>Spring 2016 (S2) - Butler/Wilson</h3>
            <p>1. Xiaoyu Xu '18</p>
            <p>2. Victor Du '17</p>
            <p>3. Kevin Thomsen '18</p>
            <p>4. Theo Tamayo '19</p>
          </div>
          <div>
            <h3>Fall 2015 (S1) - Wilson</h3>
            <p>1. Nicole Kalhorn '19</p>
            <p>2. Gordon Chu '19</p>
            <p>3. Xiaoyu Xu '18</p>
            <p>4. Ben Edelman '18</p>
          </div>
        </Slider>
      </div>
    )
  }
}

export default Hof
