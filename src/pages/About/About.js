import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import about_img from "../../images/about/about.jpg";
import Typical from "react-typical";
import AnimatedText from "react-animated-text-content";

const About = () => {
  return (
    <Container className="shadow  mt-5 rounded-3 bg-light">
      <Row className="g-5 mx-auto mt-3 pb-5 align-items-center justify-content-center">
        <Col xs={12} sm={12} md={6}>
          <img className="w-100 rounded-circle" src={about_img} alt="" />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Typical
            steps={["Hello 👋", 2000, "I am MD. Mozammel Hoq 🤓", 2000]}
            loop={Infinity}
            wrapper="h6"
          />
          <AnimatedText
            type="charts" // animate words or chars
            animation={{
              x: "200px",
              y: "-20px",
              scale: 1.1,
              ease: "ease-in-out",
            }}
            animationType="wave"
            interval={0.06}
            duration={0.5}
            tag="p"
            className="animated-paragraph fw-bold font-monospace"
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="20%"
          >
            I'm a Front End Developer based in Bangladesh. I describe myself as
            a passionate developer who loves coding, open source, and the web
            platform. I like to create projects. That helps me to learn and grow
            as a developer. Also I enjoy making technical things at my college
            lab. In my free time you can find me tourist place ,at field , at
            the road on cycling around Chittagong bangladesh. My future thinking
            is that I will be a full fledged web developer, this is my
            profession, passion and dream. I spend 8 to 12 hours a day trying to
            reach my goals. And I am thinking of building a career in this field
            in the future. Thank You ❤️
          </AnimatedText>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
