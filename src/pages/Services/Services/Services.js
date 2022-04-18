import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";
/* 
const services = [
  {
    id: 1,
    name: "Teeth Whiting",
    price: 17,
    img: "https://i.ibb.co/YXZm9Nb/teeth-whiting.jpg",
    description:
      "Teeth whitening is by far the most popular cosmetic dental procedure. Dental Whitening procedures fit within almost any budget and the results are quick. There is a difference between teeth whitening and teeth bleaching.",
  },
  {
    id: 2,
    name: "Gum Lift",
    price: 29,
    img: "https://i.ibb.co/KVq91X2/gum-lift.jpg",
    description:
      "A gum lift or gum contouring procedure involves gently removing excess gum tissue by contouring and shaping the “gummy” section of your smile. Using a gentle diode laser, the dentist will sculpt the gum level to remove the gummy part and reshape the smile.",
  },
  {
    id: 3,
    name: "Root Canals",
    price: 25,
    img: "https://i.ibb.co/VJgkS9K/root-cannels.jpg",
    description:
      "A root canal is needed when damage occurs to a tooth’s pulp. This can happen due to an injury or due to severe tooth decay. A root canal is often a dreaded procedure but is often the only alternative to having a tooth extracted.",
  },
  {
    id: 4,
    name: "Laser Cavity Detection",
    price: 37,
    img: "https://i.ibb.co/N2Qw28L/laser-cavity-ditection.jpg",
    description:
      "we make great use of the latest technology for your oral health, such as the Diagnodent. Oftentimes cavities at their very earliest stages won’t show up on x-rays and can be almost undetectable using conventional methods.",
  },
  {
    id: 5,
    name: "PRF Treatment",
    price: 29,
    img: "https://i.ibb.co/NWqv91Z/prf-for-faster-healing.jpg",
    description:
      "wisdom teeth, tooth extractions, implants, bone grafts, and sinus lifts. Using PRF speeds up how quickly the surgical site heals by stimulating the body to accelerate it’s normal processes.",
  },
  {
    id: 6,
    name: "Dental Emergencies",
    price: 45,
    img: "https://i.ibb.co/TkW6BfH/dental-emargencis.jpg",
    description:
      "Nobody can plan for an emergency. Unfortunately, emergencies happen. Perhaps you experience an extreme toothache on the weekend. In case of emergency, we have staff members on call so we can provide the help you need.",
  },
];
 */
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <Container className="my-5">
      <h1 className="my-5 fw-bold text-center">My Popular Services</h1>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
