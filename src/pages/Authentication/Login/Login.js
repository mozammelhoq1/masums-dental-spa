import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
  };
  const navigateRegister = (event) => {
    navigate("/register");
  };
  return (
    <Container className="w-75 mx-auto">
      <h1 className="text-primary text-center mt-5">Please Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            ref={emailRef}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button
          className="btn btn-sm w-100 mb-2"
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
      <p>
        New To Dental Spa?{" "}
        <Link
          to="/register"
          className="text-danger pe-auto"
          onClick={navigateRegister}
        >
          Please Register
        </Link>
      </p>
    </Container>
  );
};

export default Login;
