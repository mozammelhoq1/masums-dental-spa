import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
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
      <Card className=" h-100 border-0 shadow rounded-3">
        <Card.Img
          className="w-100 rounded-3 shadow-lg"
          variant="top"
          src={img}
        />
        <Card.Body className="d-flex flex-column">
          <h3>{name}</h3>
          <h5>${price}</h5>
          <p>{description}</p>
          <Button
            onClick={() => navigateToCheckOut(id)}
            variant="primary"
            className="btn btn-sm mt-auto"
          >
            {" "}
            <span className="me-2">Appointment Now</span>
            <FontAwesomeIcon icon={faClipboardCheck} />
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
