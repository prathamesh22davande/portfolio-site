import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Footer(props) {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top p-3 justify-content-between">
          <Col className="p-0" md={3} sm={12}>
            Prathamesh Davande
          </Col>
          <Col className="p-0 d-flex justify-content-end">
            This was made by Prathamesh Davande
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
