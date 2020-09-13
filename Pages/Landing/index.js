import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../Components/Sidebar";
import PortfolioShowcase from "../../Components/PortfolioShowcase";
import Footer from "../../Components/Footer";

// Should be a container for all pages

const Landing = () => {
  return (
    <Container fluid style={{ padding: 0, margin:0, maxWidth:'100vw' }}>
      <Row noGutters>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col xs={10}>
          <Row noGutters>
            <Col xs={12}>
              <PortfolioShowcase />
            </Col>
          </Row>
          <Row noGutters>
            <Col xs={12}>
              <Footer />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
