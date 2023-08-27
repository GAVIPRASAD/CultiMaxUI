import Carousel from 'react-bootstrap/Carousel';
import bg1 from "../../utils/Images/Back/bg1.jpg"
import bg2 from "../../utils/Images/Back/bg2.jpg"
import bg3 from "../../utils/Images/Back/bg3.jpg"
import crop from "../../utils/Images/ml/crop.jpg"
import disease from "../../utils/Images/ml/disease.jpg"
import fertilizer from "../../utils/Images/ml/fertilizer.jpg"
import potdry from "../../utils/Images/ml/potdry.jpg"



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
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 car-img"
          src={disease}
          alt="Fourth Slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 car-img"
          src={crop}
          alt="Fourth Slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 car-img"
          src={fertilizer}
          alt="Fourth Slide"
        />
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 car-img"
          src={bg2}
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 car-img"
          src={bg3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block car-img"
          src={potdry}
          style={{width:"100%", }}
          alt="Third slide"
        />
      </Carousel.Item>

    </Carousel></>
  )
}

export default Slides;