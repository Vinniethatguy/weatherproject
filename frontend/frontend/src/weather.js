import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import sunnyImage from './sunny.svg';

function Weather() {
  return (
    <Container>
      <Row>
        <Col className='weather_card' xs={2} order-first>
          Sunday
          <br></br>
          May 07, 2023
          <br></br>
          Columbia, MO
          <br></br>
          <img className="sunny-image" src={sunnyImage} alt='' />

        </Col>
        <Col className='weekly_forcast' order-last>
          <Col className='weekly_tab'>
            <img className='weekly_image' src={sunnyImage} alt='' />
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Weather;
