import React, { Component } from "react"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button
} from "reactstrap"
import "./carousel.css"
import logo from "./src/Logo.png"
import screen1 from "./src/Princeton.jpg"
import screen2 from "./src/butler.jpg"
import screen3 from "./src/wilson.jpg"
import screen4 from "./src/forbes.jpg"
import screen5 from "./src/whitman.jpg"
import screen6 from "./src/rocky.jpg"
import screen7 from "./src/DillonExp.jpg"

import "./carousel.css"
const items = [
  {
    src: logo
  },
  {
    src: screen1
  },
  {
    src: screen2
  },
  {
    src: screen3
  },
  {
    src: screen4
  },
  {
    src: screen5
  },
  {
    src: screen6
  },
  {
    src: screen7
  }
]

class FoodSlide extends Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: 0 }
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.goToIndex = this.goToIndex.bind(this)
    this.onExiting = this.onExiting.bind(this)
    this.onExited = this.onExited.bind(this)
  }

  onExiting() {
    this.animating = true
  }

  onExited() {
    this.animating = false
  }

  next() {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous() {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  goToIndex(newIndex) {
    if (this.animating) return
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img className="screen_img" src={item.src} alt={item.altText} />
          {/* <Button className="homebutton" bsStyle="primary">
            About
          </Button> */}
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>
      )
    })

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    )
  }
}

export default FoodSlide
