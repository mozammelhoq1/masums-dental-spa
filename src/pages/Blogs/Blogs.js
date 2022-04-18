import React from "react";
import { Col, Container } from "react-bootstrap";

const Blogs = () => {
  return (
    <Container className="shadow rounded mt-5">
      <Col className="text-center p-3">
        <h2>Difference between authorization and authentication.</h2>
        <p>
          Difference between Authorization and Authentication: Authorization is
          a system implemented in an app that controls the informative access
          and limiting actions performed by users. All users may not have same
          authorization. On the otherhand, Authentication is a procedure also
          implemented in an app to check user's identity true or false. If the
          user's identity is true then he/she will allowed if not true then
          he/she will not allowed to access the information or perform any
          action in that app.
        </p>
      </Col>
      <Col className="text-center p-3">
        <h2>
          {" "}
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h2>
        <p>
          Firebase is a development platform created by Google for building
          mobile and web applications, that provides a plenty of features from
          hosting to database to analytics to authentication and much more. I am
          using firebase because it's amusing features helped my apps to grow to
          the next level. I have used react-firebase-hooks to implement
          authentication which makes my code more easier and cleaner. Even I
          have also some other option to implement authentication like auth0,
          okta, Keycloak, MongoDB can be alternative of using firebase to create
          authentication procedure in any app.
        </p>
      </Col>
      <Col className="text-center p-3">
        <h2>
          What other services does firebase provide other than authentication?
        </h2>
        <p>
          Firebase is a Backend-as-a-Service (Baas). It provides developers with
          a variety of tools and services to help them develop quality apps,
          grow their user base, and earn profit. It is built on Google’s
          infrastructure. Firebase is categorized as a NoSQL database program,
          which stores data in JSON-like documents. Without authentication
          firebase also provide extra services like -- i. Realtime database, ii.
          Hosting, iii. Test lab iv. Notifications etc.
        </p>
      </Col>
    </Container>
  );
};

export default Blogs;
