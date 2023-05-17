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
          <img className="sunny-image" src={sunnyImage} alt='' style={{ position: 'absolute', top: 10, left: 10, background: 'transparent' }} />

        </Col>
        <Col className='weekly_forcast' order-last>
          <Col className='weeklu_tab'></Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Weather;
