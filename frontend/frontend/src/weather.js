import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import sunnyImage from './sunny.svg';

function Weather({ location, dayData }) {
  return (
    <Container>
      <Row>
        <Col className='weather_card' xs={2} order-first>
          <span>{dayData[0]}</span>
          <br />
          <span>{dayData[1]}</span>
          <br />
          <span>{location}</span>
          <br />
          <img className="sunny-image" src={sunnyImage} alt='' />
          <br></br>
          <span className='temp'>{dayData[2]}</span>
        </Col>
        <Col className='weekly_forcast' order-last>
        <Col className="rectangle-column">
          
        </Col>
        <input className="search-bar" type="search" />
        </Col>
        
      </Row>
    </Container>
  );
}

export default Weather;