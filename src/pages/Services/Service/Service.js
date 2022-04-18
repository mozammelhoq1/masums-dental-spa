import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, price, img, description } = service;
  const navigate = useNavigate();
  const navigateToCheckOut = (id) => {
    navigate(`/checkout/${id}`);
  };
  return (
    <Col>
      <Card className=" h-100">
        <Card.Img className="w-100" variant="top" src={img} />
        <Card.Body>
          <h3>{name}</h3>
          <h5>${price}</h5>
          <p>{description}</p>
          <Button
            onClick={() => navigateToCheckOut(id)}
            variant="secondary"
            className="btn btn-sm"
          >
            {" "}
            Appointment Now
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
