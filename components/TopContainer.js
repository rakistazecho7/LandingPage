import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function TopContainer() {
  return (
    <>

      <div className="background"></div>
      <div className="texture">
        <Container className="container-top">
          <Row className="section-top">
            <Col xs={12} md={6} className="section-top-left">
              <ul>
                <li><img className="btn img-fluid" src="/assets/Services.png" /></li>
                <br/>
                <li><img className="btn img-fluid" src="/assets/Howitworks.png" /></li>
                <br/>
                <li><img className="btn img-fluid" src="/assets/Contactus.png" /></li>
                <br/>
                <li><img className="btn img-fluid" src="/assets/Refund.png" /></li>
              </ul>
            </Col>
            <Col xs={12} md={6} className="section-top-right shadow">
              <div className="book-img-container">
                <img
                  className="book-img img-fluid"
                  src="/assets/book.png"
                />
              </div>
              <h3>HIRE</h3>
              <h2>Writer for any job only for $15.00/Hour</h2>
              <h1>FAST PAPER</h1>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs "introduction".
              </p>
              <button className="btn btn-custom">I want to Hire</button>
              <button className="btn btn-custom1">I want to Work</button>
            </Col>
          </Row>
        </Container>
        <Container className="nav">
      <input id="menu-hamburger" type="checkbox"/>
  
  <label for="menu-hamburger">
    <div class="menu">
      <span class="hamburger"></span>
    </div>
  </label>
  
  <ul>
    <li>
      <a href="#" className="top">Home</a>
      <a href="#">Services</a>
      <a href="#">How it Works?</a>
      <a href="#">Contact</a>
      <a href="#">Refund</a>
    </li>
  </ul>
  </Container>
      </div>
    </>
  );
}

export default TopContainer;
