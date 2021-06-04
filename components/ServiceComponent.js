import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function ServiceComponent() {
  return (
    <div className="service-container-bg">
      <Container className="service-container">
      <h1 className="Title">HIRE NOW</h1>
        <Row>
          <Col xs={12} md={4}>
            
            <img src="assets/Customer.png" className="service-img-1" />
            <br/><br></br>
            <h2>Customer Service</h2>
            <p className="center">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <img src="assets/Graphic.png" className="service-img-2" />
            <br/><br></br>
            <h2>Graphic Designers</h2>
            <p className="center">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <img
              src="assets/Market.png"
              className="service-img-3"
            />
            <br/><br></br>
            <h2>Marketing Experts</h2>
            <p className="center">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used.
            </p>
          </Col>
        </Row>
        <hr />
      </Container>
    </div>
  );
}

export default ServiceComponent;
