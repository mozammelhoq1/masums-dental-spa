import { async } from "@firebase/util";
import React, { useEffect, useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  let errorElement;

  if (error) {
    errorElement = (
      <p className="text-danger my-3"> Error : {error?.message}</p>
    );
  }
  if (loading || sending) {
    return <Loading />;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  const navigateRegister = (event) => {
    navigate("/register");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("sent email");
    } else {
      toast("please enter your email address");
    }
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

        {errorElement}
        <Button
          className="btn btn-sm w-100 my-2"
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
      <div className="mt-3">
        <p>
          New To Dental Spa?{" "}
          <Link
            to="/register"
            className="text-primary pe-auto"
            onClick={navigateRegister}
          >
            Please Register
          </Link>
        </p>
        <p>
          Forget Password?{" "}
          <button
            to="/register"
            className="btn btn-link text-primary pe-auto"
            onClick={resetPassword}
          >
            Reset Password
          </button>
        </p>
      </div>
      <SocialLogin />
      <ToastContainer />
    </Container>
  );
};

export default Login;
