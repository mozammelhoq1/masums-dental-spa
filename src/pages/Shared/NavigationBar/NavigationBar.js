import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";

const NavigationBar = () => {
  return (
    <Navbar
      bg="light"
      variant="light"
      expand="lg"
      sticky="top"
      className="shadow-sm"
    >
      <Container>
        <Navbar.Brand href="#">
          <img height={50} src={logo} alt="" />
          <span className="text-danger fw-bolder">Masum's Dental Spa</span>
          <br />
          <small>The Dental Experience</small>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto text-center my-2 my-lg-0" navbarScroll>
            <Link
              to="/home"
              className="text-decoration-none fw-bold mx-3 my-2  text-secondary"
            >
              HOME
            </Link>
            <Link
              to="/blogs"
              className="text-decoration-none fw-bold mx-3 my-2  text-secondary"
            >
              BLOGS
            </Link>
            <Link
              to="/about"
              className="text-decoration-none fw-bold mx-3 my-2  text-secondary"
            >
              ABOUT ME
            </Link>
            <Link
              to="/login"
              className="text-decoration-none fw-bold mx-3 my-2  text-dark"
            >
              <span className="me-2">LOG IN</span>
              <FontAwesomeIcon icon={faCircleArrowLeft}></FontAwesomeIcon>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
