import React from "react"
import Slider from "react-animated-slider"
import "react-animated-slider/build/horizontal.css"

import "./style.css"

const content = [
  { title: "First item", image: "https://i.ibb.co/YWs961W/IMG-0043.jpg" },
  { title: "Second item", image: "https://i.ibb.co/RP34ChK/IMG-0197.jpg" },
  { title: "Third item", image: "https://i.ibb.co/X23LY2w/IMG-0006.jpg" },
  { title: "Fourfh item", image: "https://i.ibb.co/8K5zxnr/IMG-0011.jpg" },
]

export default function Timer() {
  return (
    <div>
      <Slider autoplay={2000}>
        {content.map((item, index) => (
          <div
            className="imageSlider"
            key={index}
            style={{
              backgroundImage: `linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.1),
                rgba(0, 0, 0, 0.4)
              ),url('${item.image}') `,
              backgroundRepeat: `no-repeat`,
              backgroundSize: `100%`,
              backgroundColor: `rgba(10,23,55,0.5)`,
            }}
          ></div>
        ))}
      </Slider>
      <div className="timerContent">
        <span className="arriveTitle">Eu chego em: 17/03/2021</span>
      </div>
    </div>
  )
}
