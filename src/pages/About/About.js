import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import about_img from "../../images/about/about.jpg";

const About = () => {
  return (
    <Container>
      <Row className="g-5 mx-auto mt-3 align-items-center">
        <Col xs={12} sm={12} md={6}>
          <img className="w-100" src={about_img} alt="" />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <h5>
            My name is Mozammel Hoq ( Masum ). I'm a Front End Developer based
            in Bangladesh. I describe myself as a passionate developer who loves
            coding, open source, and the web platform. I like to create
            projects. That helps me to learn and grow as a developer. Also I
            enjoy making technical things at my college lab. In my free time you
            can find me tourist place ,at field , at the road on cycling around
            Chittagong bangladesh. My future thinking is that I will be a full
            fledged web developer, this is my profession, passion and dream. I
            spend 8 to 12 hours a day trying to reach my goals. And I am
            thinking of building a career in this field in the future.
          </h5>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
