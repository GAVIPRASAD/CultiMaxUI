import Carousel from 'react-bootstrap/Carousel';
import bg1 from "../../utils/Images/Back/bg1.jpg"
import bg2 from "../../utils/Images/Back/bg2.jpg"
import bg3 from "../../utils/Images/Back/bg3.jpg"

import React from 'react'
// Carousel
const Slides = () => {
  return (
    <>
    <Carousel fade pause>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 car-img"
          src={bg1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 car-img"
          src={bg2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 car-img"
          src={bg3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></>
  )
}

export default Slides;