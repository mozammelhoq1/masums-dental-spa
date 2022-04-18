import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner/banner-1.jpg";
import banner2 from "../../../images/banner/banner-2.jpg";
import banner3 from "../../../images/banner/banner-3.jpg";
const Banner = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="First slide" />
        <Carousel.Caption>
          <h3>Cosmetics Dentistry Service</h3>
          <p>
            Professional oral care that focuses on improving the appearance of
            your teeth
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Second slide" />

        <Carousel.Caption>
          <h3>General Dentistry Service</h3>
          <p>
            your overall oral health care needs, including gum care, root
            canals, fillings, crowns, veneers, bridges
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Surgical Dentistry Service</h3>
          <p>
            surgical aspects of diseases of the organs of the oral cavity, face
            and neck.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
