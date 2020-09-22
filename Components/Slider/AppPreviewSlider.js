import React, { useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Col, Row, Container, Image } from "react-bootstrap";
import * as ROUTES from "../../../../core/routes/routes";
import { useHistory } from "react-router-dom";

const DEFAULT_IMAGES = [
  "https://i.imgur.com/5gVzFDC.png",
  "https://i.imgur.com/YOs7eM8.png",
];

const WIDTH = '60vw'
const HEIGHT = '45vw'
const MAX_WIDTH = '60vw'
const MAX_HEIGHT = '60vh'

const AppPreviewSlider = ({
  images = DEFAULT_IMAGES,
  route = ROUTES.MOVIESOVERLOAD,
}) => {
  const history = useHistory();
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <>
      <StyledContainer
        fluid
        className="p-0"
        style={{ width: WIDTH, height: HEIGHT, maxWidth:MAX_WIDTH, maxHeight:MAX_HEIGHT}}
      >
        <Row noGutters>
          <Col onClick={() => history.push(route)}>
            <Slider {...settings}>
              {images.map((image) => (
                <Col className="p-0">
                  <AppPreview src={image} alt="chef portrait" />
                </Col>
              ))}
            </Slider>
          </Col>
        </Row>
      </StyledContainer>
    </>
  );
};

const AppPreview = styled(Image)`
  width: ${WIDTH};
  height: ${HEIGHT};
  max-height:${MAX_HEIGHT};
  max-width:${MAX_WIDTH};
`;

const StyledContainer = styled(Container)`
margin:10vh 0;
  &:hover {
    outline: 2px solid green !important;
  }
`;

export default AppPreviewSlider;
