import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const CheckOut = () => {
  const { serviceId } = useParams();
  // Declare State:
  const [services, setServices] = useState([]);
  // Fetch Data:
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [serviceId]);

  // Show Admitted Course:
  const clickedService = services?.find((service) => service.id === +serviceId);
  return (
    <Container className="mt-5">
      <Row xs={1} sm={1} md={2} className="g-5">
        <Col>
          <img className="w-100" src={clickedService?.img} alt="" />
          <h3>{clickedService?.name}</h3>
          <h5>${clickedService?.price}</h5>
          <p>{clickedService?.description}</p>
        </Col>
        <Col>
          <p>
            I'm a Front End Developer based in Bangladesh. I describe myself as
            a passionate developer who loves coding, open source, and the web
            platform. I like to create projects. That helps me to learn and grow
            as a developer. Also I enjoy making technical things at my college
            lab. In my free time you can find me tourist place ,at field , at
            the road on cycling around Chittagong bangladesh. My future thinking
            is that I will be a full fledged web developer, this is my
            profession, passion and dream. I spend 8 to 12 hours a day trying to
            reach my goals. And I am thinking of building a career in this field
            in the future.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckOut;
