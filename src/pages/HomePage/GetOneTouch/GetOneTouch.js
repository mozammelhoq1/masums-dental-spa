import React from "react";
import AnimatedText from "react-animated-text-content";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import getOneTouch from "../../../images/email.png";
const GetOneTouch = () => {
  const handleCheckOut = (event) => {
    event.preventDefault();
    toast("Thanks for yor response");
  };
  return (
    <Container fluid className="mt-5">
      <AnimatedText
        type="charts" // animate words or chars
        animation={{
          x: "200px",
          y: "-20px",
          scale: 1.1,
          ease: "ease-in-out",
        }}
        animationType="diagonal"
        interval={0.3}
        duration={1.5}
        tag="h1"
        className="animated-paragraph my-5 fw-bold text-center "
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="20%"
      >
        Get One Touch
      </AnimatedText>
      <Row className="g-5 mx-auto pb-5 align-items-center justify-content-center">
        <Col xs={12} sm={12} md={6}>
          <img className="w-100 rounded-3" src={getOneTouch} alt="" />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Form onSubmit={handleCheckOut}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
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
                type="email"
                placeholder="Your email"
                name="email"
                required
              />
            </Form.Group>

            <FloatingLabel
              controlId="floatingTextarea"
              label="Comments"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
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
    </Container>
  );
};

export default GetOneTouch;
