import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast, ToastContainer } from "react-toastify";

const CheckOut = () => {
  const [value, setValue] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const { serviceId } = useParams();
  const [smShow, setSmShow] = useState(false);
  // Declare State:
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [serviceId]);

  const clickedService = services?.find((service) => service.id === +serviceId);

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };

  const handlePhoneBlur = (event) => {
    setPhone(event.target.value);
  };

  const handleCheckOut = (event) => {
    event.preventDefault();
    const checkOut = { name, email, address, phone };
    setSmShow(true);
  };
  const goHome = () => {
    navigate("/home");
  };

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
          <h1 className="text-primary text-center mt-5">CheckOut Please</h1>
          <Form onSubmit={handleCheckOut}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                onBlur={handleNameBlur}
                type="text"
                placeholder="Your Name"
                name="name"
                required
              />
              <Form.Text className="text-muted">
                We'll never share your name with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your Email address</Form.Label>
              <Form.Control
                onBlur={handleEmailBlur}
                type="email"
                placeholder="Your email"
                name="email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Your Phone Number</Form.Label>

              <PhoneInput
                required
                onBlur={handlePhoneBlur}
                placeholder="Your phone number"
                name="phone"
                value={value}
                onChange={setValue}
                international
                countryCallingCodeEditable={false}
                defaultCountry="BD"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your Address</Form.Label>
              <Form.Control
                onBlur={handleAddressBlur}
                type="text"
                name="address"
                placeholder="Address"
                required
              />
              <Form.Text className="text-muted">
                We'll never share your address with anyone else.
              </Form.Text>
            </Form.Group>
            <Button
              className="btn btn-sm w-100 mb-2"
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Thank You Dear , <i>{name}</i>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button variant="primary" onClick={goHome}>
            OK
          </Button>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default CheckOut;
