import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../../images/logo.png";
import googlePay from "../../../images/google-play.png";
import paymentMethod from "../../../images/pay-with.png";

const Footer = () => {
  return (
    <Row className="mx-auto bg-dark g-5 mt-5">
      <Col xs={12} md={4} className="text-start text-light fw-normal">
        <img height={50} className="mb-4" src={logo} alt="" />
        <span className="text-danger fs-5 fw-bold fw-bold">
          Masum's Dental Spa
        </span>

        <p>
          {" "}
          <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
          <span className="ms-2">
            Level-3, 24, Agrabad, DoubleMooring, Chittagong
          </span>
        </p>
        <p>
          {" "}
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          <span className="ms-2">Official: masum's-denta-spa.com</span>
        </p>
        <p>
          {" "}
          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
          <span className="ms-2">Helpline: 01822777360 , 01759427128</span>
        </p>
        <small>(Available : Sat - Thu, 10:00 AM to 7:00 PM)</small>
        <img className="img-fluid mt-3" src={googlePay} alt="" />
      </Col>
      <Col xs={12} md={4} className="text-start">
        <a href="#" className=" text-decoration-none">
          {" "}
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <span className="ms-2">Patient Resources</span>
        </a>
        <br />
        <a href="#" className=" text-decoration-none">
          {" "}
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <span className="ms-2">About Me</span>
        </a>
        <br />
        <a href="#" className=" text-decoration-none">
          {" "}
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <span className="ms-2">Terms & Conditions</span>
        </a>
        <br />
        <a href="#" className=" text-decoration-none">
          {" "}
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <span className="ms-2">Success</span>
        </a>
        <br />
        <a href="#" className=" text-decoration-none">
          {" "}
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <span className="ms-2">Blog</span>
        </a>
        <br />
        <a href="#" className=" text-decoration-none">
          {" "}
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <span className="ms-2">Connect Me</span>
        </a>
        <br />
        <a href="#" className=" text-decoration-none">
          {" "}
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <span className="ms-2">Reviews</span>
        </a>
        <br />
        <a href="#" className=" text-decoration-none">
          {" "}
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <span className="ms-2">Masum,s Dental Spa</span>
        </a>
        <br />
        <a href="#" className=" text-decoration-none">
          {" "}
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <span className="ms-2">Pay Online</span>
        </a>
        <br />
        <a href="#" className=" text-decoration-none">
          {" "}
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <span className="ms-2">FAQs</span>
        </a>
        <br />
        <a href="#" className=" text-decoration-none">
          {" "}
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <span className="ms-2">Terms & Conditions</span>
        </a>
        <br />
        <a href="#" className=" text-decoration-none">
          {" "}
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          <span className="ms-2">Privacy Policy</span>
        </a>
        <br />
      </Col>
      <Col xs={12} md={4} className="text-start text-light">
        <img className="w-100" src={paymentMethod} alt="" />
      </Col>
      <p className="fw-bold text-light text-center pt-3">
        Copyright | © 2022 | Masum,s Dental Spa
      </p>
    </Row>
  );
};

export default Footer;
