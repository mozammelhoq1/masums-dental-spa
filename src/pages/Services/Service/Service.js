import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const Service = ({ service }) => {
  const { name, price, img, description } = service;
  return (
    <Col>
      <Card className=" h-100">
        <Card.Img className="w-100" variant="top" src={img} />
        <Card.Body>
          <h3>{name}</h3>
          <h5>${price}</h5>
          <p>{description}</p>
          <Button variant="secondary" className="btn btn-sm">
            {" "}
            Go to somewhere
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
