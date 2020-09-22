import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import AppPreviewSlider from "../../Components/Slider/AppPreviewSlider";
import Skills from "../../Components/Skills";
import { GIOVENTINO } from "../../../../core/routes/routes";
import * as ROUTES from "../../../../core/routes/routes";
const borderColor = "#ff6f61";

const GIOVENTINO_IMAGES = [
  "https://i.imgur.com/hni8BNJ.jpg",
  "https://i.imgur.com/DkdZDnl.jpg",
];

const MOVIES_IMAGES = [
  "https://i.imgur.com/5gVzFDC.png",
  "https://i.imgur.com/YOs7eM8.png",
];

const SHOP_IMAGES = [
  "https://i.imgur.com/Npl79Vz.jpg",
  "https://i.imgur.com/Xu26va3.jpg",
];

const PortfolioShowcase = () => {
  return (
    <Wrapper>
      <Row>
        <Skills />
      </Row>

      <Row noGutters>
        <PortfolioCards>
          <Col xs={12}>
            <PortfolioSlider>
              <AppPreviewSlider
                images={GIOVENTINO_IMAGES}
                route={ROUTES.GIOVENTINO}
              />
            </PortfolioSlider>
          </Col>
          <Col xs={12}>
            <AppPreviewSlider
              images={MOVIES_IMAGES}
              route={ROUTES.MOVIESOVERLOAD}
            />
          </Col>
          <Col xs={12}>
            <AppPreviewSlider images={SHOP_IMAGES} route={ROUTES.SHOP} />
          </Col>
        </PortfolioCards>
      </Row>

      <Row>3</Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: skyblue;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  border-bottom: 2px solid ${borderColor};
  margin: 0;
  padding: 0;
`;

const PortfolioCards = styled.div`
  padding: 30px 0;
`;

const PortfolioSlider = styled.div`
  margin: 30px 0;
  width: 60vw;
  height: 45vw;
`;

export default PortfolioShowcase;
