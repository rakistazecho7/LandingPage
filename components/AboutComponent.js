import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function AboutComponent() {
  return (
    <div className="about-container-bg">
    
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <img src="assets/Free.png" className="free" />
          </Col>
          <Col xs={12} md={6} className="about-details">
            <div className="about">
              <h2 className="about">Find Freelancer Online</h2>
              <b>Lorem ipsum, or lipsum as it is sometimes known,</b>
              <br />
              <br />
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book.
              </p>
              <button className="btn btn-custom">Explore More</button>
            </div>
          </Col>
        </Row>
        <br></br><br></br>
      </Container>
    </div>
    
  );
}

export default AboutComponent;
